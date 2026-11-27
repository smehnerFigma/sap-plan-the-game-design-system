// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=46781b7057cd0a6e012ce2e8ec550be942bca8fc (Figma icon "conversations", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:889)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/conversations.svg
export default {
  example: figma.code`<Icon src={conversationsIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import conversationsIcon from "@/assets/icons/conversations.svg"'],
  id: 'icon-conversations-2',
  metadata: { nestable: true, props: { src: 'conversationsIcon', srcImport: 'import conversationsIcon from "@/assets/icons/conversations.svg"', size: '20' } },
}
