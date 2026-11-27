// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=b346b05bc52f9d648ead280cfbd17baacea391f2 (Figma icon "edit", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4186)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/edit.svg
export default {
  example: figma.code`<Icon src={editIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import editIcon from "@/assets/icons/edit.svg"'],
  id: 'icon-edit-2',
  metadata: { nestable: true, props: { src: 'editIcon', srcImport: 'import editIcon from "@/assets/icons/edit.svg"', size: '16' } },
}
