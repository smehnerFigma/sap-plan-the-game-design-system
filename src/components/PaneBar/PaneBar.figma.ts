// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6d5e92571ea47dac6023767358d5efb73a98dd13 (Figma "Pane Bar"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:30305)
// source=src/components/PaneBar/PaneBar.tsx
// component=PaneBar
import figma from 'figma'
const instance = figma.selectedInstance

// "Actions" / "-> Actions", "Back Button" and "Scroll" have no code equivalent — the code bar renders a
// fixed action set. The breadcrumb is slot content in Figma but a string[] in code, so it is left empty.
const section = instance.getEnum('Section', {
  Spaces: 'pane',
  Conversation: 'pane',
  Jobs: 'pane',
  'Discover Jobs': 'pane',
  'Developer 01': 'pane',
  'Developer 02': 'pane',
  'Right Pane': 'right',
})
const text = instance.findText('Text')
const textContent = text.type === 'TEXT' ? text.textContent : ''
const related = instance.getBoolean('Related')

export default {
  example: section === 'right'
    ? figma.code`<RightPaneBar title="${textContent}" />`
    : figma.code`<PaneBar breadcrumb={[]}${related ? figma.code` artifact="${textContent}"` : ''} />`,
  imports: [section === 'right' ? 'import { RightPaneBar } from "@/components"' : 'import { PaneBar } from "@/components"'],
  id: 'pane-bar',
  metadata: { nestable: true },
}
