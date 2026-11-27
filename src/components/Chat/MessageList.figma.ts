// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=25a7df323f048a49d2edec1e5053c20d5e57bace (Figma "Messages"; seen in U14fUtpHqbIHUuJnMfWAzu as 3089:11464)
// source=src/components/Chat/Chat.tsx
// component=MessageList
import figma from 'figma'
const instance = figma.selectedInstance

const messages = instance.getSlot('Messages')

export default {
  example: figma.code`<MessageList>
  ${messages}
</MessageList>`,
  imports: ['import { MessageList } from "@/components"'],
  id: 'message-list',
  metadata: { nestable: true },
}
