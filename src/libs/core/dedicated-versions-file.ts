import fs from 'fs'
import path from 'path'

import { wdShell } from './shell'
import { loggerFor } from './logger'
import { indexFile } from './git/commands'
import revParse from './git/rev-parse'

import type { Config } from '@pvm/types'
import type { Pkg } from './pkg'

const logger = loggerFor('pvm:pkg-file-versions')

const versioningCache = new Map<string, Record<string, string>>()

function getCacheKey(repoDir: string, config: Config, ref: string): string {
  const source_file = config.versioning.source_file
  const realRef = revParse(ref || 'HEAD', repoDir)
  return `${repoDir}_${source_file}_${realRef}`
}

function loadDedicatedVersionsMap(repoDir: string, config: Config, ref: string | undefined): Record<string, string> | false {
  const cacheKey = getCacheKey(repoDir, config, ref || 'HEAD')
  if (versioningCache.has(cacheKey)) {
    return versioningCache.get(cacheKey)!
  }
  const source_file = config.versioning.source_file

  // notice: используем новый конфиг для возможно старого рефа
  // и это легитимно, т.к. старый конфиг может быть не совместим с кодом нового pvm
  if (ref) {
    try {
      const versionsContent = wdShell(repoDir, `git show ${ref}:${source_file}`)
      if (versionsContent) {
        const result = JSON.parse(versionsContent)
        versioningCache.set(cacheKey, result)
        return result
      }
    } catch (e) {
      logger.debug(`Could not find or parse versions file "${source_file}" in ref "${ref}"`, e.message)
    }

    return false
  }

  const resolvedSourcePath = path.resolve(repoDir, source_file)
  if (fs.existsSync(resolvedSourcePath)) {
    const result = JSON.parse(fs.readFileSync(resolvedSourcePath).toString('utf8'))
    versioningCache.set(cacheKey, result)
    return result
  }
  return false
}

export const versioningFile = {
  clearCache() {
    versioningCache.clear()
  },
  load(config: Config, ref: string | undefined = undefined): Record<string, string> | false {
    return loadDedicatedVersionsMap(config, ref)
  },
  existsForRef(config: Config, ref: string | undefined = undefined): boolean {
    return !!this.load(config, ref)
  },
  lookupPkgVersion(pkg: Pkg, ref: string | undefined = void 0): string | void {
    const versions = loadDedicatedVersionsMap(pkg.pvmConfig, ref)
    if (versions && Object.prototype.hasOwnProperty.call(versions, pkg.name)) {
      return versions[pkg.name]
    }
  },
  save(config: Config, versions: Record<string, string>, index = false) {
    const { versioning } = config
    const resolvedPath = path.resolve(config.cwd, versioning.source_file)

    fs.writeFileSync(resolvedPath, this.stringify(versions))
    const cacheKey = getCacheKey(config, 'HEAD')
    versioningCache.set(cacheKey, versions)
    if (index) {
      const relativePath = path.relative(config.cwd, resolvedPath)
      indexFile(config, relativePath)
    }
  },
  stringify(versions: Record<string, string>): string {
    return `${JSON.stringify(versions, null, 2)}\n`
  },
}
