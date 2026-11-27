// url=https://www.figma.com/design/U14fUtpHqbIHUuJnMfWAzu/Plan-the-Game?node-id=429898-19422
// NOTE: "Object List Item" is a LOCAL component set in U14fUtpHqbIHUuJnMfWAzu.
// It must be published to a team library before `figma connect publish`.
// componentKey=b13fb75fef0837dd402a97eb5754552f75eb7b98 (Figma "Object List Item"; seen in U14fUtpHqbIHUuJnMfWAzu as 429898:19422)
// source=src/components/ActionItem/ActionItem.tsx
// component=ActionItem
import figma from 'figma'
const instance = figma.selectedInstance

// "Avatar"/"Icon" are derived from `status` in code; "Link", "Attributes" and "Icon Button" have no
// code equivalent. `status` is derived from the nested Tag's "Status Text".
const title = instance.getString('Title')
const description = instance.getString('Description')
const dense = instance.getEnum('Density', {
  Default: false,
  Compact: true,
})
const statusText = instance.findText('Status Text', { traverseInstances: true })
const status = statusText.type === 'TEXT' && statusText.textContent === 'Completed' ? 'completed' : 'open'

const action = instance.findInstance('Button')
let actionCode
if (action && action.type === 'INSTANCE') {
  actionCode = action.executeTemplate().example
}

export default {
  example: figma.code`<ActionItem${dense ? ' dense' : ''} title="${title}" description="${description}" status="${status}"${actionCode ? figma.code` action={${actionCode}}` : ''} />`,
  imports: ['import { ActionItem } from "@/components"'],
  id: 'action-item',
  metadata: { nestable: true },
}
