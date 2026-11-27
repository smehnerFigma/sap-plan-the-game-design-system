// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6420e2fdf001bed4588af259fd43b58a8540ee07 (Figma icon "vertical-waterfall-chart", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:17487)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/vertical-waterfall-chart-button.svg
export default {
  example: figma.code`<Icon src={verticalWaterfallChartButtonIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import verticalWaterfallChartButtonIcon from "@/assets/icons/vertical-waterfall-chart-button.svg"'],
  id: 'icon-vertical-waterfall-chart',
  metadata: { nestable: true, props: { src: 'verticalWaterfallChartButtonIcon', srcImport: 'import verticalWaterfallChartButtonIcon from "@/assets/icons/vertical-waterfall-chart-button.svg"', size: '16' } },
}
