// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2f8d99649ffb46b38a990d163e13900d3ee79b66 (Figma "Check Box"; seen in U14fUtpHqbIHUuJnMfWAzu as 3263:7268)
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

// "Size" has no code equivalent. "Label" (visibility) is not mapped — `label` is required in code.
// "Check" Tristate has no code equivalent (indeterminate is a DOM property, not a prop) — rendered unchecked.
// "Interaction State" Hover is a runtime state; Read Only/Display Only → readOnly, Disabled → disabled.
const label = instance.getString('✏️ Text')
const checked = instance.getEnum('Check', {
  Unchecked: false,
  Checked: true,
  Tristate: false,
})
const state = instance.getEnum('Interaction State', {
  Regular: '',
  Hover: '',
  'Read Only': ' readOnly',
  'Display Only': ' readOnly',
  Disabled: ' disabled',
})

export default {
  example: figma.code`<Checkbox label="${label}"${checked ? ' defaultChecked' : ''}${state} />`,
  imports: ['import { Checkbox } from "@/components"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
