// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=40534f62cdce550850addd3a7dcfa843d3c68e0c (Figma icon "navigation-down-arrow", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4181)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/navigation-down-arrow.svg
export default {
  example: figma.code`<Icon src={navigationDownArrowIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import navigationDownArrowIcon from "@/assets/icons/navigation-down-arrow.svg"'],
  id: 'icon-navigation-down-arrow',
  metadata: { nestable: true, props: { src: 'navigationDownArrowIcon', srcImport: 'import navigationDownArrowIcon from "@/assets/icons/navigation-down-arrow.svg"', size: '16' } },
}
