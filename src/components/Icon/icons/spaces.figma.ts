// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=0881d748d24d5bfcda66a17957d94111a844225a (Figma icon "spaces", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:27132)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/spaces-12.svg
export default {
  example: figma.code`<Icon src={spaces12Icon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import spaces12Icon from "@/assets/icons/spaces-12.svg"'],
  id: 'icon-spaces',
  metadata: { nestable: true, props: { src: 'spaces12Icon', srcImport: 'import spaces12Icon from "@/assets/icons/spaces-12.svg"', size: '20' } },
}
