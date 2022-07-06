import stringToColor from 'string-to-color'
import { debug, log } from '@pvm/logger'
import {
  BasePlatformInterface,
  BasePlatformInterfaceWithFileCommitApi,
} from '@pvm/types-platform'

function getNoteBody(frontMatter: [string, string][], text: string): string {
  return `
---
${frontMatter.map(([name, value]) => `${name}: ${value}`).join('\n')}
---

${text}
`
}

export abstract class PlatformInterface<MergeRequest> extends BasePlatformInterface<MergeRequest> {
  async syncText(kind: string, text: string): Promise<unknown> {
    const existingNote = await this.findMrNote(kind)

    const noteBody = getNoteBody([['kind', kind], ['ref', this.getCommitSha()]], text)

    if (existingNote) {
      return this.updateMrNote(existingNote.note.id, noteBody)
    } else {
      return this.createMrNote(noteBody)
    }
  }

  async ensureMrLabels(labels: string[]): Promise<unknown> {
    const labelsByName = Object.create(null)
    for await (const label of this.getProjectLabels()) {
      labelsByName[label.name] = label
    }

    const newLabels: string[] = []

    for (const line of labels) {
      if (line in labelsByName) {
        continue
      }
      const color = stringToColor(line)
      debug(`creating label ${line}, color ${color}`)

      await this.createProjectLabel(line, color)
      newLabels.push(line)
    }

    if (newLabels.length !== 0) {
      log(`Successfully created new labels: ${newLabels.join(', ')}`)
    }

    return this.setMrLabels(labels)
  }
}

export abstract class PlatformInterfaceWithFileCommitApi<TMergeRequest, TCommitContext> extends BasePlatformInterfaceWithFileCommitApi<TMergeRequest, TCommitContext> {}
