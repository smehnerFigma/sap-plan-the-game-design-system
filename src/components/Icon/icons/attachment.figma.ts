// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=79d792da7e389391ac4bf6b8452223086c5cae2a (Figma icon "attachment", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56978)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/attachment.svg
export default {
  example: figma.code`<Icon src={attachmentIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import attachmentIcon from "@/assets/icons/attachment.svg"'],
  id: 'icon-attachment',
  metadata: { nestable: true, props: { src: 'attachmentIcon', srcImport: 'import attachmentIcon from "@/assets/icons/attachment.svg"', size: '16' } },
}
