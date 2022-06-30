import type { Provider } from '@pvm/di'

export type PluginOptions = Record<string, any>

export type PluginFactory = (opts: PluginOptions) => { providers: Provider[] }

export type PluginConfig = {
  plugin: string | PluginFactory,
  options?: PluginOptions,
}
