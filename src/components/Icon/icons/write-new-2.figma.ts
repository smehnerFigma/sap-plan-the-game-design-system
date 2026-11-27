// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=c09c4ad572cc66c94388108e458a286220e761a9 (Figma icon "write-new", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56986)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/write-new.svg
export default {
  example: figma.code`<Icon src={writeNewIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import writeNewIcon from "@/assets/icons/write-new.svg"'],
  id: 'icon-write-new-2',
  metadata: { nestable: true, props: { src: 'writeNewIcon', srcImport: 'import writeNewIcon from "@/assets/icons/write-new.svg"', size: '16' } },
}
