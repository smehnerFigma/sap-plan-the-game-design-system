// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d1b0ae52b7eccede2007395df08f6699527b9805 (Figma icon "menu", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2648)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/menu.svg
export default {
  example: figma.code`<Icon src={menuIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import menuIcon from "@/assets/icons/menu.svg"'],
  id: 'icon-menu',
  metadata: { nestable: true, props: { src: 'menuIcon', srcImport: 'import menuIcon from "@/assets/icons/menu.svg"', size: '16' } },
}
