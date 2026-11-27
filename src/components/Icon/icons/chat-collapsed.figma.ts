// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=15ce687d9c3de8db1a4c5e07fbcc499d7e58014f (Figma icon "chat-collapsed", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:31212)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/chat-collapsed.svg
export default {
  example: figma.code`<Icon src={chatCollapsedIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import chatCollapsedIcon from "@/assets/icons/chat-collapsed.svg"'],
  id: 'icon-chat-collapsed',
  metadata: { nestable: true, props: { src: 'chatCollapsedIcon', srcImport: 'import chatCollapsedIcon from "@/assets/icons/chat-collapsed.svg"', size: '20' } },
}
