// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=df3e57569eb664430b683047d78281292709f81c (Figma "Data List"; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:57477)
// source=src/components/ListItem/ListItem.tsx
// component=List
import figma from 'figma'
const instance = figma.selectedInstance

// "With Search", "Scrollbar", "Type" and "Supporting Text" have no code equivalent.
// "Item 4"…"Item 10" toggle visibility of the 4th…10th "Data List Item" child.
const items = instance.findConnectedInstances((node) => node.codeConnectId() === 'list-item')
const show = (index: number) => index < 3 || instance.getBoolean(`Item ${index + 1}`)
const render = (index: number) => {
  const item = items[index]
  if (show(index) && item && item.type === 'INSTANCE') {
    return item.executeTemplate().example
  }
  return undefined
}
const item1 = render(0)
const item2 = render(1)
const item3 = render(2)
const item4 = render(3)
const item5 = render(4)
const item6 = render(5)
const item7 = render(6)
const item8 = render(7)
const item9 = render(8)
const item10 = render(9)

export default {
  example: figma.code`<List>
  ${item1}${item2}${item3}${item4}${item5}${item6}${item7}${item8}${item9}${item10}
</List>`,
  imports: ['import { List } from "@/components"'],
  id: 'list',
  metadata: { nestable: true },
}
