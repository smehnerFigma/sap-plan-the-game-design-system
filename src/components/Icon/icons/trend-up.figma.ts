// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e407b62b82fc61a24b542ee4e0d04cd5ca9bc833 (Figma icon "trend-up", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:7400)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/trend-up.svg
export default {
  example: figma.code`<Icon src={trendUpIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import trendUpIcon from "@/assets/icons/trend-up.svg"'],
  id: 'icon-trend-up',
  metadata: { nestable: true, props: { src: 'trendUpIcon', srcImport: 'import trendUpIcon from "@/assets/icons/trend-up.svg"', size: '16' } },
}
