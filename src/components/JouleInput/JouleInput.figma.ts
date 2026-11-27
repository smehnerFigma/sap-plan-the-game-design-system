// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=a41836aae3dea916ec113658d94f7c6cc7e74474 (Figma "Joule Input"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:29633, 3089:9117)
// source=src/components/JouleInput/JouleInput.tsx
// component=JouleInput
import figma from 'figma'
const instance = figma.selectedInstance

// "State" (Active|Auto-Complete|Idle) is an interaction state with no code prop (code "variant" is layout).
// "Buttons", "Icon", "Suggestions", "Attachment", "Message Strip", "Delete Text Button", "Pills" / "-> Pills",
// "-> Pills2" and "Type-Ahead (Welcome Screen Only)" have no code equivalent — the code input renders a fixed
// action set, and "chip" is a plain string rather than slot content.
const showNotice = instance.getBoolean('AI Notice')
const contextArea = instance.getBoolean('Context Area')
const context = contextArea ? instance.getString('✏️ Context') : undefined

const inputText = instance.findInstance('Input Text')
let textProp
if (inputText && inputText.type === 'INSTANCE') {
  const value = inputText.getString('✏️ Text')
  const kind = inputText.getEnum('Type', {
    Placeholder: 'placeholder',
    'Typed Text': 'defaultValue',
  })
  textProp = figma.code` ${kind}="${value}"`
}

export default {
  example: figma.code`<JouleInput${context ? figma.code` context="${context}"` : ''}${textProp ?? ''}${showNotice ? '' : ' showNotice={false}'} />`,
  imports: ['import { JouleInput } from "@/components"'],
  id: 'joule-input',
  metadata: { nestable: true },
}
