// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e54b1ed575817ff589eb3cd7434296db2e3c74b9 (Figma icon "expand", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:27789)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/expand.svg
export default {
  example: figma.code`<Icon src={expandIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import expandIcon from "@/assets/icons/expand.svg"'],
  id: 'icon-expand',
  metadata: { nestable: true, props: { src: 'expandIcon', srcImport: 'import expandIcon from "@/assets/icons/expand.svg"', size: '20' } },
}
