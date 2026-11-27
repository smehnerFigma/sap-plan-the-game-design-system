// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=a7f9be7cb39dfe5e125eee25db84607ed7d2d918 (Figma icon "menu2", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:44702)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/menu2-white.svg
export default {
  example: figma.code`<Icon src={menu2WhiteIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import menu2WhiteIcon from "@/assets/icons/menu2-white.svg"'],
  id: 'icon-menu2',
  metadata: { nestable: true, props: { src: 'menu2WhiteIcon', srcImport: 'import menu2WhiteIcon from "@/assets/icons/menu2-white.svg"', size: '16' } },
}
