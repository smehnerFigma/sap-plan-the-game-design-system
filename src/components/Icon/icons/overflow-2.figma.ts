// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=b40f283298396e0c820bddbc34ee93aff95338c6 (Figma icon "overflow", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4179)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/overflow.svg
export default {
  example: figma.code`<Icon src={overflowIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import overflowIcon from "@/assets/icons/overflow.svg"'],
  id: 'icon-overflow-2',
  metadata: { nestable: true, props: { src: 'overflowIcon', srcImport: 'import overflowIcon from "@/assets/icons/overflow.svg"', size: '20' } },
}
