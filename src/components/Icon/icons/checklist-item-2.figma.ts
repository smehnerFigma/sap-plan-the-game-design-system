// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=aa00ce6ca5cf1162a7c32062d65c7f111afc4024 (Figma icon "checklist-item", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:57019)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/checklist-item.svg
export default {
  example: figma.code`<Icon src={checklistItemIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import checklistItemIcon from "@/assets/icons/checklist-item.svg"'],
  id: 'icon-checklist-item-2',
  metadata: { nestable: true, props: { src: 'checklistItemIcon', srcImport: 'import checklistItemIcon from "@/assets/icons/checklist-item.svg"', size: '16' } },
}
