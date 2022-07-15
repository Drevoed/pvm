import type { Config, Commit } from '@pvm/types'
import { prevReleaseTag } from './last-release-tag'
import { releaseMark } from '../consts'
import { wdShell } from '../shell'
import getCommits from './commits'

interface ReleaseCommitsOpts {
  target?: string,
  format?: string,
}

const pvmNoShowPattern = `\\[pvm noshow\\]`

export function getReleaseRefs(repoDir: string, config: Config, target = 'HEAD'): [string, string] | void {
  const { no_release_ref } = config.update

  let toTarget = target
  let prevRelease = prevReleaseTag(config, target) || no_release_ref

  if (!prevRelease) {
    toTarget = target
    prevRelease = `${target}~2`

    try {
      wdShell(repoDir, `git rev-parse ${prevRelease}`)
    } catch (e) {
      prevRelease = `${target}^`
    }

    try {
      wdShell(repoDir, `git rev-parse ${prevRelease}`)
    } catch (e) {
      prevRelease = ''
    }
  }

  if (toTarget && prevRelease) {
    return [prevRelease, toTarget]
  }
}

export function releaseCommitsAsString(repoDir: string, config: Config, opts: ReleaseCommitsOpts = {}): string | void {
  const { target = 'HEAD', format = '%s' } = opts

  const releaseRefs = getReleaseRefs(repoDir, config, target)

  if (releaseRefs) {
    return wdShell(
      repoDir,
      `git log ${releaseRefs[0]}..${releaseRefs[1]} --no-merges --pretty=format:${format} --grep="${releaseMark}" --grep="${pvmNoShowPattern}" --invert-grep`
    )
  }
}

export async function getReleaseCommits(repoDir: string, config: Config, target = 'HEAD'): Promise<Commit[] | void> {
  const releaseRefs = getReleaseRefs(repoDir, config, target)

  if (releaseRefs) {
    return getCommits(repoDir, releaseRefs[0], releaseRefs[1], {
      _: [`--grep=${releaseMark}`, `--grep=${pvmNoShowPattern}`, '--invert-grep'],
    })
  }
}
