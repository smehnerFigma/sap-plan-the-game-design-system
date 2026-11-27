// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e083c2793b5a3534e16d78371d3d231edc22b8ab (Figma "Message Content"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:32497)
// source=src/components/Chat/Chat.tsx
// component=JouleMessage, UserMessage, Timestamp
import figma from 'figma'
const instance = figma.selectedInstance

// Type selects the code component. Timestamp takes separate day/time strings; Figma has a single
// "✏️ Message" text, so it is passed as "day".
const type = instance.getEnum('Type', {
  Joule: 'joule',
  User: 'user',
  Timestamp: 'timestamp',
})
const message = instance.getString('✏️ Message')
const content = instance.getSlot('Content')
const responses = instance.getBoolean('Responses') ? instance.findInstance('Action Container') : null
let responsesCode
if (responses && responses.type === 'INSTANCE') {
  responsesCode = responses.executeTemplate().example
}

let example
let component
if (type === 'joule') {
  component = 'JouleMessage'
  example = figma.code`<JouleMessage>
  ${content}${responsesCode ? figma.code`
  ${responsesCode}` : ''}
</JouleMessage>`
} else if (type === 'user') {
  component = 'UserMessage'
  example = figma.code`<UserMessage>${message}</UserMessage>`
} else {
  component = 'Timestamp'
  example = figma.code`<Timestamp day="${message}" time="" />`
}

export default {
  example,
  imports: [`import { ${component} } from "@/components"`],
  id: 'message-content',
  metadata: { nestable: true },
}
