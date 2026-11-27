// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d88a73a5595dca9f92901fa907ef77823dbbf2c1 (Figma icon "message-information", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2759)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/message-information-info.svg
export default {
  example: figma.code`<Icon src={messageInformationInfoIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import messageInformationInfoIcon from "@/assets/icons/message-information-info.svg"'],
  id: 'icon-message-information',
  metadata: { nestable: true, props: { src: 'messageInformationInfoIcon', srcImport: 'import messageInformationInfoIcon from "@/assets/icons/message-information-info.svg"', size: '16' } },
}
