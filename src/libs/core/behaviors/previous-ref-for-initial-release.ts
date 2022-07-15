import { wdShell } from '../shell'
import type { Config } from '@pvm/types'

function getPreviousRefForFirstRelease(repoDir: string, config: Config, targetRef: string): string {
  const { no_release_ref } = config.update
  if (no_release_ref && wdShell(repoDir, `git rev-list --count ${no_release_ref}..${targetRef}`) !== '0') {
    return no_release_ref
  }
  return wdShell(repoDir, `git rev-parse ${targetRef}^`)
}

export default getPreviousRefForFirstRelease
