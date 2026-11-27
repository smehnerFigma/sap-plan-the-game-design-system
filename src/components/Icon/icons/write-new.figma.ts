// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=071ea978c2f79e5ed33d05639deaf2802dfd5524 (Figma icon "write-new", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56988)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/write-new.svg
export default {
  example: figma.code`<Icon src={writeNewIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import writeNewIcon from "@/assets/icons/write-new.svg"'],
  id: 'icon-write-new',
  metadata: { nestable: true, props: { src: 'writeNewIcon', srcImport: 'import writeNewIcon from "@/assets/icons/write-new.svg"', size: '16' } },
}
