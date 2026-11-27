// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=ec29b0acc023373343199ca501f7b4d5a89dd900 (Figma icon "bell", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:10)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/bell.svg
export default {
  example: figma.code`<Icon src={bellIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import bellIcon from "@/assets/icons/bell.svg"'],
  id: 'icon-bell',
  metadata: { nestable: true, props: { src: 'bellIcon', srcImport: 'import bellIcon from "@/assets/icons/bell.svg"', size: '16' } },
}
