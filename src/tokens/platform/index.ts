import { createToken } from '@pvm/di'
import type { BasePlatformInterface, BasePlatformInterfaceWithFileCommitApi } from '@pvm/types-platform'

export const PLATFORM_TOKEN = createToken<BasePlatformInterface<any> | BasePlatformInterfaceWithFileCommitApi<any, any>>('PLATFORM_TOKEN')
