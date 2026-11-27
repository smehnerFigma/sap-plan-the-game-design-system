// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e4f1355131f558402ea0326630b24688fc9a6a2b (Figma icon "discover", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:27121)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/discover.svg
export default {
  example: figma.code`<Icon src={discoverIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import discoverIcon from "@/assets/icons/discover.svg"'],
  id: 'icon-discover',
  metadata: { nestable: true, props: { src: 'discoverIcon', srcImport: 'import discoverIcon from "@/assets/icons/discover.svg"', size: '20' } },
}
