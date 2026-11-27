// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=96e1ea36786fc624b828ba9c49ef57b8dc759c8e (Figma icon "overflow", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3089:8379)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/overflow.svg
export default {
  example: figma.code`<Icon src={overflowIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import overflowIcon from "@/assets/icons/overflow.svg"'],
  id: 'icon-overflow-3',
  metadata: { nestable: true, props: { src: 'overflowIcon', srcImport: 'import overflowIcon from "@/assets/icons/overflow.svg"', size: '16' } },
}
