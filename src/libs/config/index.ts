import fs from 'fs'

import Ajv from 'ajv'
import * as TOML from '@iarna/toml'
import { cosmiconfigSync } from 'cosmiconfig'
import json5 from 'json5'

import { logger } from '@pvm/logger'

import type { RecursivePartial, Config } from '@pvm/types'

export interface GetConfigOpts {
  ref?: string,
  noUpconf?: boolean,
  raw?: boolean,
  noIncludes?: boolean,
}

// вообще это наивно и не совсем корректно
// правильней будет брать тип их схема конфига и приводить к нему в зависимости от самой опции
function sanitizeValue(strValue: string): string | boolean | number {
  if (/^\d+$/.test(strValue)) {
    return Number(strValue)
  }
  if (strValue === 'false') {
    return false
  }
  if (strValue === 'true') {
    return true
  }
  return strValue
}

function setEnvValue(target: Record<string, any>, path: string[], value: any): Record<string, any> {
  let t = target

  for (let i = 0, len = path.length; i < len; i++) {
    const isLast = i === len - 1
    const p = path[i]

    if (!isLast) {
      t[p] = t[p] || {}
      t = t[p]
    } else {
      t[p] = value
    }
  }
  return target
}

// eslint-disable-next-line pvm/no-process-env
export function readConfigFromEnv(env = process.env): RecursivePartial<Config> {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(env)) {
    if (!key.toUpperCase().startsWith('PVM_CONFIG_')) {
      continue
    }

    const configPath = key
      .replace(/^PVM_CONFIG__?/i, '')
      .toLowerCase()
      .split(/__/g)

    setEnvValue(result, configPath, sanitizeValue(value!))
  }

  return result
}

function tomlLoader(_: string, content: string): TOML.JsonMap {
  return TOML.parse(content)
}

const moduleName = 'pvm'

const json5Loader = (_, contents: string): any => {
  return json5.parse(contents)
}

export function validateAgainstSchema(config: Config): void {
  const ajv = new Ajv()
  const schema = TOML.parse(require('@pvm/types/lib/config-schema.json'))
  const compiledSchema = ajv.compile(schema)

  if (!compiledSchema(config)) {
    logger.fatal(compiledSchema.errors)
    throw new Error('Invalid pvm configuration')
  }
}

function migrateRenderer(parent: Record<string, any>, parentPath: string): void {
  if (typeof parent.renderer === 'string') {
    logger.warn(`Option "${parentPath}.renderer" is map now.`)
    if ((parent.renderer as string).startsWith('builtin.list')) {
      logger.warn(`Rename "${parentPath}.renderer" option to "${parentPath}.renderer.type"`)
      parent.renderer = {
        type: parent.renderer as 'builtin.list' | 'builtin.list-with-packages',
        tag_head_level: 2,
        show_date: true,
      }
    } else {
      throw new Error(
        `You should migrate "${parentPath}.renderer" to new format. There are two types: "commonjs" and "deprecated-plugin". Use "path" option for "commonjs", and "providesPath" for "deprecated-plugin"`
      )
    }
  }
}

export function migrateDeprecated(config: Config): void {
  // @ts-ignore
  if (config.tagging?.unified_tag) {
    logger.warn(`Namespace "tagging.unified_tag" is deprecated. Rename it to "tagging.generic_tag".`)
    // @ts-ignore
    config.tagging.generic_tag = config.tagging.unified_tag

    // @ts-ignore
    if (config.tagging.unified_tag.suffixes) {
      logger.warn('Move "suffixes" option to namespace "tagging" from "tagging.unified_tag".')
      // @ts-ignore
      config.tagging.suffixes = config.tagging.unified_tag.suffixes
      // @ts-ignore
      delete config.tagging.unified_tag.suffixes
    }
    // @ts-ignore
    delete config.tagging.unified_tag
  }

  migrateRenderer(config.changelog, 'changelog')
  migrateRenderer(config.changelog.for_packages, 'changelog.for_packages')

  if ('local_releases' in config) {
    logger.warn('Setting "local_releases" is deprecated in flavor of new seting "release_list"')
  }

  if ('disable_changelog' in config.release) {
    logger.warn('Setting "release.disable_changelog" does nothing. Use "changelog.enabled" instead.')
  }

  if ('path' in config.changelog.for_packages) {
    logger.warn('Setting "changelog.for_packages.path" does nothing. Use "changelog.for_packages.output_dir" instead.')
  }

  if ('recalc_initial' in config.changelog.for_packages) {
    logger.warn('Setting "changelog.for_packages.recalc_initial" does nothing. Remove it.')
  }

  if (config.update && ('include_release_commit' in config.update)) {
    logger.warn('Setting "update.include_release_commit" is obsoleted and deprecated. Get rid of it.')
  }
}

export function loadRawConfig(configDirOrFile: string): RecursivePartial<Config> {
  const cosmic = cosmiconfigSync(moduleName, {
    searchPlaces: [
      `.${moduleName}.json`,
      `.${moduleName}.toml`,
      `.${moduleName}.yaml`,
      `.${moduleName}.yml`,
      `.${moduleName}.json5`,
      `.${moduleName}.js`,
      `${moduleName}.config.js`,
      `.${moduleName}rc`,
    ],
    loaders: {
      '.toml': tomlLoader,
      '.json5': json5Loader,
    },
  })
  const cosmicResult = fs.statSync(configDirOrFile).isFile() ? cosmic.load(configDirOrFile) : cosmic.search(configDirOrFile)
  if (!cosmicResult || cosmicResult.isEmpty) {
    logger.debug('config file not found or empty')
    return {}
  }
  logger.debug(`got config from ${cosmicResult.filepath}`)
  return cosmicResult.config
}
