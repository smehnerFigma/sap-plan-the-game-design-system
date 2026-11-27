// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=be0098a2d337713ab008da292b44c7293790d6f4 (Figma icon "legend", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2729)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/legend.svg
export default {
  example: figma.code`<Icon src={legendIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import legendIcon from "@/assets/icons/legend.svg"'],
  id: 'icon-legend',
  metadata: { nestable: true, props: { src: 'legendIcon', srcImport: 'import legendIcon from "@/assets/icons/legend.svg"', size: '16' } },
}
