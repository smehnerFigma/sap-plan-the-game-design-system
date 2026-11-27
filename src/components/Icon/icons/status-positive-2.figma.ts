// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=759f7ad4cdf74b5c4995647e0876b3f3e989ba17 (Figma icon "status-positive", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3075:16403)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/status-positive.svg
export default {
  example: figma.code`<Icon src={statusPositiveIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import statusPositiveIcon from "@/assets/icons/status-positive.svg"'],
  id: 'icon-status-positive-2',
  metadata: { nestable: true, props: { src: 'statusPositiveIcon', srcImport: 'import statusPositiveIcon from "@/assets/icons/status-positive.svg"', size: '16' } },
}
