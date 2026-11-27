// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=a3859f34c0537ca8c588931fe40ad2bf3d9bddea (Figma "Joule - New Campaign"; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:55133)
// source=src/components/JoulePanel/JoulePanel.tsx
// component=JoulePanel
import figma from 'figma'

// "Step" (0–6) is a demo conversation stage with no code equivalent — in code the conversation is the
// "messages" data array (user / joule / quick-reply / typing), which is supplied by the app.

export default {
  example: figma.code`<JoulePanel messages={[]} />`,
  imports: ['import { JoulePanel } from "@/components"'],
  id: 'joule-panel',
  metadata: { nestable: false },
}
