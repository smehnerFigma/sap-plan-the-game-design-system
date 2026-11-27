// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=84d89b79b6ad85b08c2b8406381869322b063b5b (Figma icon "checklist-item", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:57021)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/checklist-item.svg
export default {
  example: figma.code`<Icon src={checklistItemIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import checklistItemIcon from "@/assets/icons/checklist-item.svg"'],
  id: 'icon-checklist-item',
  metadata: { nestable: true, props: { src: 'checklistItemIcon', srcImport: 'import checklistItemIcon from "@/assets/icons/checklist-item.svg"', size: '16' } },
}
