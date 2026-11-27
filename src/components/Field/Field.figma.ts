// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=a64b5d70b21a2fab32a65a7d9d92ba70c12125ad (Figma "Card Text Block"; seen in U14fUtpHqbIHUuJnMfWAzu as 3385:9204)
// source=src/components/Field/Field.tsx
// component=Field
import figma from 'figma'
const instance = figma.selectedInstance

// The component has no properties of its own. The nested "Label" instance's "Required" flag and side
// slots have no code equivalent. The value text layer is named after its content, so it is located as
// the first direct text layer that is not the "Label:" caption.
const labelText = instance.findText('Label:', { traverseInstances: true })
const label = labelText.type === 'TEXT' ? labelText.textContent : ''
const valueText = instance.findLayers((node) => node.type === 'TEXT' && node.name !== 'Label:')[0]
const value = valueText && valueText.type === 'TEXT' ? valueText.textContent : ''

export default {
  example: figma.code`<Field label="${label}" value="${value}" />`,
  imports: ['import { Field } from "@/components"'],
  id: 'field',
  metadata: { nestable: true },
}
