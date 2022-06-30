import path from 'path'
import type { PluginConfig, PluginFactory, Config, RecursivePartial } from '@pvm/types'
import { Container, DI_TOKEN, provide } from '@pvm/di'
import { CONFIG, CONFIG_EXTENSION_TOKEN, CWD_TOKEN, REPO_TOKEN } from '@pvm/tokens-common'
import { loadRawConfig, migrateDeprecated, readConfigFromEnv, validateAgainstSchema } from '@pvm/config'
import { defaultConfig } from './default-config'

export function isPlainObject(x: unknown): x is Record<string, unknown> {
  return !!x && !Array.isArray(x) && typeof x === 'object'
}

export class Pvm {
  container: Container

  constructor(opts: {
    config?: RecursivePartial<Config> | string | null,
    plugins?: PluginConfig[],
    cwd?: string,
    repo?: string,
  } = {}) {
    const { config = {}, cwd = process.cwd(), repo = cwd, plugins = [] } = opts ?? {}

    this.container = new Container()

    this.container.register(provide({
      provide: CWD_TOKEN,
      useValue: cwd,
    }))

    this.container.register(provide({
      provide: REPO_TOKEN,
      useValue: repo,
    }))

    this.container.register(provide({
      useValue: this.container,
      provide: DI_TOKEN,
    }))

    this.initConfigAndPlugins(config, plugins, cwd)
  }

  /**
   * Order matters. Earlier registered have more priority.
   */
  protected initConfigAndPlugins(config: RecursivePartial<Config> | string | null, plugins: PluginConfig[] = [], cwd: string) {
    this.container.register(provide({
      useValue: readConfigFromEnv(),
      provide: CONFIG_EXTENSION_TOKEN,
      multi: true,
    }))

    this.container.register(provide({
      useValue: typeof config === 'string' ? loadRawConfig(config) : config,
      provide: CONFIG_EXTENSION_TOKEN,
      multi: true,
    }))

    const initialConfig = this.mergeConfigExtensions()
    if (initialConfig.plugins_v2) {
      this.registerPlugins(initialConfig.plugins_v2, cwd)
    }
    this.registerPlugins(plugins, cwd)

    this.container.register(provide({
      useValue: defaultConfig,
      provide: CONFIG_EXTENSION_TOKEN,
      multi: true,
    }))

    this.container.register(provide({
      useValue: this.fulfillConfig(),
      provide: CONFIG,
    }))
  }

  protected static mergeConfigs<T extends Record<string, any>>(a: T, b: Record<string, any>): T {
    const result = { ...a }

    Object.keys(b).forEach((key: keyof T & string) => {
      if (result[key] === void 0) {
        if (Array.isArray(b[key])) {
          result[key] = [...b[key]] as any
        } else if (isPlainObject(b[key])) {
          result[key] = { ...b[key] }
        } else {
          result[key] = b[key]
        }
      } else if (isPlainObject(a[key]) && isPlainObject(b[key])) {
        result[key] = Pvm.mergeConfigs(a[key], b[key])
      }
    })

    return result as T
  }

  protected mergeConfigExtensions(): Config {
    const extensions = this.container.get({ token: CONFIG_EXTENSION_TOKEN, multi: true, transient: true })
    return extensions.reduce((acc, extension) => {
      acc = Pvm.mergeConfigs(acc, extension)
      acc.plugins_v2 = (acc.plugins_v2 ?? []).concat(extension.plugins_v2 ?? [])
      return acc
    }, {} as Config) as Config
  }

  protected fulfillConfig(): Config {
    const resultConfig = this.mergeConfigExtensions()
    migrateDeprecated(resultConfig)
    validateAgainstSchema(resultConfig)

    return resultConfig
  }

  protected registerPlugins(plugins: PluginConfig[], resolveRoot: string): void {
    for (const pluginConfig of plugins) {
      const { pluginFactory, resolvedPath } = this.resolvePlugin(pluginConfig, resolveRoot)
      const pluginProviders = pluginFactory(pluginConfig.options || {}).providers
      pluginProviders.forEach(provider => {
        const record = this.container.register(provider)
        if (provider.provide === CONFIG_EXTENSION_TOKEN) {
          const configExt = this.container.getByRecord(record, CONFIG_EXTENSION_TOKEN.toString())
          if (configExt.plugins_v2) {
            this.registerPlugins(configExt.plugins_v2, path.dirname(resolvedPath))
          }
        }
      })
    }
  }

  protected resolvePlugin(pluginConfig: PluginConfig, resolveRoot: string): { pluginFactory: PluginFactory, resolvedPath: string } {
    if (typeof pluginConfig.plugin === 'string') {
      const pluginPath = require.resolve(pluginConfig.plugin, { paths: [resolveRoot] })
      return { pluginFactory: require(pluginPath), resolvedPath: pluginPath }
    }

    return { pluginFactory: pluginConfig.plugin, resolvedPath: resolveRoot }
  }
}
