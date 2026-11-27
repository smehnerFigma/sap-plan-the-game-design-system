// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=63f613978b6a1f8e05687a9e8c74ce5364755144 (Figma "Showcase Shellbar"; seen in U14fUtpHqbIHUuJnMfWAzu as 5034:18841)
// source=src/components/Shellbar/Shellbar.tsx
// component=Shellbar
import figma from 'figma'
const instance = figma.selectedInstance

// "Transparent BG" and "Side Navigation" have no code equivalent.
const showcaseName = instance.getString('Showcase Name')
const toolName = instance.getString('Tool Name')

export default {
  example: figma.code`<Shellbar showcaseName="${showcaseName}" toolName="${toolName}" />`,
  imports: ['import { Shellbar } from "@/components"'],
  id: 'shellbar',
  metadata: { nestable: false },
}
