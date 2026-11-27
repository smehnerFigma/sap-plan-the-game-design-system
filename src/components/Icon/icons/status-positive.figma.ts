// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6a92ea41da2d4e7f5052ff9067a4e83547d2b255 (Figma icon "status-positive", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3075:16405)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/status-positive.svg
export default {
  example: figma.code`<Icon src={statusPositiveIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import statusPositiveIcon from "@/assets/icons/status-positive.svg"'],
  id: 'icon-status-positive',
  metadata: { nestable: true, props: { src: 'statusPositiveIcon', srcImport: 'import statusPositiveIcon from "@/assets/icons/status-positive.svg"', size: '16' } },
}
