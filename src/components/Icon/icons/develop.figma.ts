// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2ea2c620c0eedfd0bbc76b0871238f710435073a (Figma icon "develop", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:8016)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/develop.svg
export default {
  example: figma.code`<Icon src={developIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import developIcon from "@/assets/icons/develop.svg"'],
  id: 'icon-develop',
  metadata: { nestable: true, props: { src: 'developIcon', srcImport: 'import developIcon from "@/assets/icons/develop.svg"', size: '20' } },
}
