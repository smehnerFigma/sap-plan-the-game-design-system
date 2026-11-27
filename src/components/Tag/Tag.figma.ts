// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=42b78ce9ccdc822f7415c5be8fe2242a4f3cf533 (Figma "Tag"; seen in U14fUtpHqbIHUuJnMfWAzu as 5020:11989, 3256:5358, 5146:27865)
// source=src/components/Tag/Tag.tsx
// component=Tag
import figma from 'figma'
const instance = figma.selectedInstance

// "Type" (Semantic|Minimal|Job|Accent), "Accent Color", "Job State" and "Status Indicator" have no code
// equivalent — the code Tag only implements the Semantic type.
const tone = instance.getEnum('Semantic State', {
  Information: 'info',
  Positive: 'positive',
  None: 'neutral',
  Warning: 'warning',
  Negative: 'negative',
})
const label = instance.findText('Status Text')
const hasIcon = instance.getBoolean('Icon')
const icon = hasIcon ? instance.findInstance('Icon') : null
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Tag tone="${tone}"${iconCode ? figma.code` icon={${iconCode}}` : ''}>${label.type === 'TEXT' ? label.textContent : ''}</Tag>`,
  imports: ['import { Tag } from "@/components"'],
  id: 'tag',
  metadata: { nestable: true },
}
