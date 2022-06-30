import type { Config, RecursivePartial } from '@pvm/types'

import { createToken } from '@pvm/di'

export const CONFIG_EXTENSION_TOKEN = createToken<RecursivePartial<Config>>('CONFIG_EXTENSION_TOKEN', { multi: true })
export const CONFIG = createToken<Config>('CONFIG')
export const CWD_TOKEN = createToken<string>('CWD_TOKEN')
export const REPO_TOKEN = createToken<string>('REPO_TOKEN')
