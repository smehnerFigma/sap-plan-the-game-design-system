// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=a7a219846ffe1afdcf5dd3a3fde0062ebac1abca (Figma "Modal"; seen in U14fUtpHqbIHUuJnMfWAzu as 5041:10244)
// source=src/components/Dialog/Dialog.tsx
// component=Dialog
import figma from 'figma'
const instance = figma.selectedInstance

// "Type" (Simple|Complex modal) and "Scrollbar" have no code equivalent. "Secondary Button" and
// "Tertiary button" are reflected by which "Button" instances are present in the footer.
const title = instance.getString('Header Title')
const content = instance.getSlot('Body Content')

const hasFooter = instance.getBoolean('Footer')
const buttons = hasFooter
  ? instance.findLayers((node) => node.type === 'INSTANCE' && node.name === 'Button')
  : []
const button1 = buttons[0]
let button1Code
if (button1 && button1.type === 'INSTANCE') {
  button1Code = button1.executeTemplate().example
}
const button2 = buttons[1]
let button2Code
if (button2 && button2.type === 'INSTANCE') {
  button2Code = button2.executeTemplate().example
}
const button3 = buttons[2]
let button3Code
if (button3 && button3.type === 'INSTANCE') {
  button3Code = button3.executeTemplate().example
}
const hasFooterCode = button1Code || button2Code || button3Code

export default {
  example: figma.code`<Dialog open={open} onClose={onClose} title="${title}"${hasFooterCode ? figma.code` footer={<>${button1Code ? button1Code : ''}${button2Code ? button2Code : ''}${button3Code ? button3Code : ''}</>}` : ''}>
  ${content ? content : ''}
</Dialog>`,
  imports: ['import { Dialog } from "@/components"'],
  id: 'dialog',
  metadata: { nestable: false },
}
