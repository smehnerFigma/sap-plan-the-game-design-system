// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6da9bfb78bb57cc96d015531ac16e201423d8558 (Figma icon "delete", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4192)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/delete.svg
export default {
  example: figma.code`<Icon src={deleteIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import deleteIcon from "@/assets/icons/delete.svg"'],
  id: 'icon-delete-2',
  metadata: { nestable: true, props: { src: 'deleteIcon', srcImport: 'import deleteIcon from "@/assets/icons/delete.svg"', size: '16' } },
}
