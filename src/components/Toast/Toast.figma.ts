// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=f7fb8473a59eaebe6854fd1a107bd79595d08908 (Figma "Toast"; seen in U14fUtpHqbIHUuJnMfWAzu as 5077:34446)
// source=src/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

// "Direction" and "State" have no code equivalent (the code toast always shows the success icon).
// `onDismiss` is required in code but has no Figma source — placeholder literal.
const title = instance.findText('Title')

export default {
  example: figma.code`<Toast message="${title.type === 'TEXT' ? title.textContent : ''}" onDismiss={() => {}} />`,
  imports: ['import { Toast } from "@/components"'],
  id: 'toast',
  metadata: { nestable: true },
}
