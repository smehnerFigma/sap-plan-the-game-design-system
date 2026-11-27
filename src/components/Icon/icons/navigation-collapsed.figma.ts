// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=b23d0a635f5d5a2219b5d020ad5c827a4feb437e (Figma icon "navigation-collapsed", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:9312)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/navigation-collapsed.svg
export default {
  example: figma.code`<Icon src={navigationCollapsedIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import navigationCollapsedIcon from "@/assets/icons/navigation-collapsed.svg"'],
  id: 'icon-navigation-collapsed',
  metadata: { nestable: true, props: { src: 'navigationCollapsedIcon', srcImport: 'import navigationCollapsedIcon from "@/assets/icons/navigation-collapsed.svg"', size: '20' } },
}
