// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=572b74d0e27df61e1145a637dd8a6945634a3a16 (Figma icon "refresh", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:5183)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/refresh.svg
export default {
  example: figma.code`<Icon src={refreshIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import refreshIcon from "@/assets/icons/refresh.svg"'],
  id: 'icon-refresh',
  metadata: { nestable: true, props: { src: 'refreshIcon', srcImport: 'import refreshIcon from "@/assets/icons/refresh.svg"', size: '16' } },
}
