import type { PluginFactory } from '@pvm/types'
import { PLATFORM_TOKEN } from '@pvm/tokens-platform'
import { CONFIG_TOKEN, REPO_TOKEN } from '@pvm/tokens-common'
import { provide } from '@pvm/di'
import { GithubPlatform } from './platform'

const factory: PluginFactory = function() {
  return {
    providers: [
      provide({
        provide: PLATFORM_TOKEN,
        useClass: GithubPlatform,
        deps: {
          config: CONFIG_TOKEN,
          repoDir: REPO_TOKEN,
        },
      }),
    ],
  }
}

export default factory
