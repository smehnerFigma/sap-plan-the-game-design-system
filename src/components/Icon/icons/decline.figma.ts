// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=80086d2e8969c07e7c885e6ee9244005bfc3864d (Figma icon "decline", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:1440)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/decline.svg
export default {
  example: figma.code`<Icon src={declineIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import declineIcon from "@/assets/icons/decline.svg"'],
  id: 'icon-decline',
  metadata: { nestable: true, props: { src: 'declineIcon', srcImport: 'import declineIcon from "@/assets/icons/decline.svg"', size: '16' } },
}
