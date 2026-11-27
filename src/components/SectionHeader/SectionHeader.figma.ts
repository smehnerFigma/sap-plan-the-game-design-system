// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=8ddff5a7d8b03572a4ace4a17dbba3911ccf9d29 (Figma "Section Header"; seen in U14fUtpHqbIHUuJnMfWAzu as 3112:10108)
// source=src/components/SectionHeader/SectionHeader.tsx
// component=SectionHeader
import figma from 'figma'
const instance = figma.selectedInstance

// "State" only maps to open/closed — the "with Section Actions" / "while editing" nuances and the
// "Leading Icon" have no code equivalent (the overflow + toggle icon buttons are built in).
const expanded = instance.getEnum('State', {
  Open: true,
  Closed: false,
  'Closed with Section Actions': false,
  'Closed while editing': false,
})
const title = instance.findText('Title')

export default {
  example: figma.code`<SectionHeader title="${title.type === 'TEXT' ? title.textContent : ''}"${expanded === false ? ' expanded={false}' : ''} />`,
  imports: ['import { SectionHeader } from "@/components"'],
  id: 'section-header',
  metadata: { nestable: true },
}
