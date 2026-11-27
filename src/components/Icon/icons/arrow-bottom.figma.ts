// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=9bffebab7d790cc861825e13998cfa8c7ef206f4 (Figma icon "arrow-bottom", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5113:12402)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/arrow-bottom.svg
export default {
  example: figma.code`<Icon src={arrowBottomIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import arrowBottomIcon from "@/assets/icons/arrow-bottom.svg"'],
  id: 'icon-arrow-bottom',
  metadata: { nestable: true, props: { src: 'arrowBottomIcon', srcImport: 'import arrowBottomIcon from "@/assets/icons/arrow-bottom.svg"', size: '16' } },
}
