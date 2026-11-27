// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2c24c77886a783a4f95986436419ba2b331611a8 (Figma icon "bar-chart", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:17485)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/bar-chart.svg
export default {
  example: figma.code`<Icon src={barChartIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import barChartIcon from "@/assets/icons/bar-chart.svg"'],
  id: 'icon-bar-chart',
  metadata: { nestable: true, props: { src: 'barChartIcon', srcImport: 'import barChartIcon from "@/assets/icons/bar-chart.svg"', size: '16' } },
}
