// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=8f208e6dfd70ce6c4808a9f31bcef473c791005f (Figma "Action Container"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:32477)
// source=src/components/Chat/Chat.tsx
// component=ResponseActions
import figma from 'figma'
const instance = figma.selectedInstance

// "Left Accessory", "Read Out", "Add to Space", "Memory" and "Overflow" have no code equivalent — the code
// renders a fixed set of actions (copy, vote, regenerate, reasoning).
const hasSources = instance.getBoolean('Sources')
const badge = hasSources ? instance.findInstance('Counter Badge') : null
let count
if (badge && badge.type === 'INSTANCE') {
  const label = badge.findText('Label')
  if (label.type === 'TEXT') {
    count = label.textContent
  }
}

export default {
  example: figma.code`<ResponseActions${hasSources ? figma.code` sources={${count ?? '0'}}` : ''} />`,
  imports: ['import { ResponseActions } from "@/components"'],
  id: 'response-actions',
  metadata: { nestable: true },
}
