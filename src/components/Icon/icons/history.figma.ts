// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e099edda8c0128e8358d3d041bc161a6fa625a44 (Figma icon "history", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56964)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/history.svg
export default {
  example: figma.code`<Icon src={historyIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import historyIcon from "@/assets/icons/history.svg"'],
  id: 'icon-history',
  metadata: { nestable: true, props: { src: 'historyIcon', srcImport: 'import historyIcon from "@/assets/icons/history.svg"', size: '16' } },
}
