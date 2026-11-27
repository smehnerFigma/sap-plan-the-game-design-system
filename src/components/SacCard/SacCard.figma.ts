// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=7a968c9ec20e0d781dc75e252e197fbed8086d73 (Figma "Card (SAC)"; seen in U14fUtpHqbIHUuJnMfWAzu as 5034:18921)
// source=src/components/SacCard/SacCard.tsx
// component=SacCard
import figma from 'figma'
const instance = figma.selectedInstance

// "Header Icon" (layers "customer"/"Icon") and "Header Stroke" have no code equivalent — SacCard
// always renders the header stroke and has no header icon prop.
const title = instance.getString('Title')
const hasSubline = instance.getBoolean('Subline')
const subtitle = hasSubline ? instance.getString('Subline Text') : undefined

const button3 = instance.getBoolean('Button 3') ? instance.findInstance('Button 3') : null
let button3Code
if (button3 && button3.type === 'INSTANCE') {
  button3Code = button3.executeTemplate().example
}
const button2 = instance.getBoolean('Button 2') ? instance.findInstance('Button 2') : null
let button2Code
if (button2 && button2.type === 'INSTANCE') {
  button2Code = button2.executeTemplate().example
}
const button1 = instance.getBoolean('Button 1') ? instance.findInstance('Button 1') : null
let button1Code
if (button1 && button1.type === 'INSTANCE') {
  button1Code = button1.executeTemplate().example
}
const overflow = instance.findInstance('overflow')
let overflowCode
if (overflow && overflow.type === 'INSTANCE') {
  overflowCode = overflow.executeTemplate().example
}
const hasActions = button3Code || button2Code || button1Code || overflowCode

const content = instance.getSlot('Card Slot')

export default {
  example: figma.code`<SacCard title="${title}"${subtitle ? figma.code` subtitle="${subtitle}"` : ''}${hasActions ? figma.code` actions={<>${button3Code ? button3Code : ''}${button2Code ? button2Code : ''}${button1Code ? button1Code : ''}${overflowCode ? overflowCode : ''}</>}` : ''}>
  ${content ? content : ''}
</SacCard>`,
  imports: ['import { SacCard } from "@/components"'],
  id: 'sac-card',
  metadata: { nestable: true },
}
