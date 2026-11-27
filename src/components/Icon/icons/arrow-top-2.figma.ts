// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e3bc47fd584ac6cfff8c2870abb90c02711ed85d (Figma icon "arrow-top", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5113:12393)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/arrow-top.svg
export default {
  example: figma.code`<Icon src={arrowTopIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import arrowTopIcon from "@/assets/icons/arrow-top.svg"'],
  id: 'icon-arrow-top-2',
  metadata: { nestable: true, props: { src: 'arrowTopIcon', srcImport: 'import arrowTopIcon from "@/assets/icons/arrow-top.svg"', size: '16' } },
}
