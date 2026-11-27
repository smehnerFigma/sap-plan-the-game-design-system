// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6a0c2f0be4be541cc17870a7a633b19e3cb2d1df (Figma icon "overflow", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2731)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/overflow.svg
export default {
  example: figma.code`<Icon src={overflowIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import overflowIcon from "@/assets/icons/overflow.svg"'],
  id: 'icon-overflow',
  metadata: { nestable: true, props: { src: 'overflowIcon', srcImport: 'import overflowIcon from "@/assets/icons/overflow.svg"', size: '16' } },
}
