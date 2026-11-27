// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=5603949e7dd3bc63855b9b915fcd663609a0667e (Figma icon "warning2", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:9325)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/warning2.svg
export default {
  example: figma.code`<Icon src={warning2Icon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import warning2Icon from "@/assets/icons/warning2.svg"'],
  id: 'icon-warning2',
  metadata: { nestable: true, props: { src: 'warning2Icon', srcImport: 'import warning2Icon from "@/assets/icons/warning2.svg"', size: '16' } },
}
