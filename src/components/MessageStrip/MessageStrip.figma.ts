// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=73dbd803924fce1c71f3ba5849d6afdfdeded011 (Figma "Message Strip"; seen in U14fUtpHqbIHUuJnMfWAzu as 5151:60830)
// source=src/components/MessageStrip/MessageStrip.tsx
// component=MessageStrip
import figma from 'figma'
const instance = figma.selectedInstance

// "Type" has no code equivalent beyond the default warning tone (Positive/Negative/Information aren't implemented).
// "✏️ Title", "Orientation", "Icon", "Link", "Close Button", "Refresh Button", "Trailing Actions" and
// "Text" (visibility) have no code equivalent — the code strip renders a fixed icon plus the message text.
const text = instance.getString('✏️ Text')

export default {
  example: figma.code`<MessageStrip>${text}</MessageStrip>`,
  imports: ['import { MessageStrip } from "@/components"'],
  id: 'message-strip',
  metadata: { nestable: true },
}
