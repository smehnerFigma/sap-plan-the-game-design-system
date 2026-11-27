// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=a4614422079b833244d0eeedfcd4c51c0f13e928 (Figma "Data List Item"; seen in U14fUtpHqbIHUuJnMfWAzu as 5077:27249)
// source=src/components/ListItem/ListItem.tsx
// component=ListItem
import figma from 'figma'
const instance = figma.selectedInstance

// "Show Selector", "Selector Type", "Supporting Text", "Show Supporting Text", "Group Header", "Group Header Text",
// "Additionals", "Under the group", "Semantic text", "Type", "Large" and "RTL" have no code equivalent
// (the code ListItem is the Standard text-only nav item). "Interaction State" Selected/Hover Selected → selected.
const text = instance.getString('List Item Text')
const selected = instance.getEnum('Interaction State', {
  Default: false,
  Hover: false,
  Active: false,
  Selected: true,
  'Hover Selected': true,
  Disabled: false,
})

export default {
  example: figma.code`<ListItem${selected ? ' selected' : ''}>${text}</ListItem>`,
  imports: ['import { ListItem } from "@/components"'],
  id: 'list-item',
  metadata: { nestable: true },
}
