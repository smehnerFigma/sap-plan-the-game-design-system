// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=1d66e134705d423228338a44aa7fa7803fd229fb (Figma icon "attachment", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56976)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/attachment.svg
export default {
  example: figma.code`<Icon src={attachmentIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import attachmentIcon from "@/assets/icons/attachment.svg"'],
  id: 'icon-attachment-2',
  metadata: { nestable: true, props: { src: 'attachmentIcon', srcImport: 'import attachmentIcon from "@/assets/icons/attachment.svg"', size: '16' } },
}
