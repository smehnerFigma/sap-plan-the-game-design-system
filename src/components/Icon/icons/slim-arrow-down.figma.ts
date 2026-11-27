// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=4ec6fb40a0cf5ae23876ebcc5bd783f633b1b9c0 (Figma icon "slim-arrow-down", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3273:6903)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/slim-arrow-down.svg
export default {
  example: figma.code`<Icon src={slimArrowDownIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import slimArrowDownIcon from "@/assets/icons/slim-arrow-down.svg"'],
  id: 'icon-slim-arrow-down',
  metadata: { nestable: true, props: { src: 'slimArrowDownIcon', srcImport: 'import slimArrowDownIcon from "@/assets/icons/slim-arrow-down.svg"', size: '16' } },
}
