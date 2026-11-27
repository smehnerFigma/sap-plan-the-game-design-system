// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2cdc3e340cac453f388fd60d574fa88ada2ff89a (Figma icon "header", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:1438)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/header-brand.svg
export default {
  example: figma.code`<Icon src={headerBrandIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import headerBrandIcon from "@/assets/icons/header-brand.svg"'],
  id: 'icon-header',
  metadata: { nestable: true, props: { src: 'headerBrandIcon', srcImport: 'import headerBrandIcon from "@/assets/icons/header-brand.svg"', size: '16' } },
}
