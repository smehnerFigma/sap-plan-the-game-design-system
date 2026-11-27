// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=c1ab4ff708dde8bc9b08d4d8019ca46ba4eff62d (Figma icon "conversations", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:27101)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/conversations.svg
export default {
  example: figma.code`<Icon src={conversationsIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import conversationsIcon from "@/assets/icons/conversations.svg"'],
  id: 'icon-conversations-3',
  metadata: { nestable: true, props: { src: 'conversationsIcon', srcImport: 'import conversationsIcon from "@/assets/icons/conversations.svg"', size: '20' } },
}
