// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=3a13f1fff694401e016a22280c71654324ee4c6b (Figma "Horizontal Tab bar"; seen in U14fUtpHqbIHUuJnMfWAzu as 5034:19016)
// source=src/components/Tabs/Tabs.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

// "Direction" has no code equivalent. The ".Horizontal Tab" children are read as data: their "Tab Text"
// builds `tabs`, and the one in "Interaction State" Active becomes `selected`. Tab "Alert", "Badge", "Count"
// and "Type" have no code equivalent. `label` and `onSelect` are required in code — placeholder literals.
const tabNodes = instance.findLayers((node) => node.type === 'INSTANCE' && node.name === '.Horizontal Tab')
const tabs: string[] = []
let selected = ''
for (const node of tabNodes) {
  if (node.type === 'INSTANCE') {
    const text = node.getString('Tab Text')
    tabs.push(text)
    if (node.getPropertyValue('Interaction State') === 'Active') {
      selected = text
    }
  }
}

export default {
  example: figma.code`<Tabs label="…" tabs={${JSON.stringify(tabs)}} selected="${selected || tabs[0] || ''}" onSelect={() => {}} />`,
  imports: ['import { Tabs } from "@/components"'],
  id: 'tabs',
  metadata: { nestable: true },
}
