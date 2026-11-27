// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=57051123dc73cfc065644470190191d03ac12b97 (Figma icon "delete", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5113:12407)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/delete.svg
export default {
  example: figma.code`<Icon src={deleteIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import deleteIcon from "@/assets/icons/delete.svg"'],
  id: 'icon-delete',
  metadata: { nestable: true, props: { src: 'deleteIcon', srcImport: 'import deleteIcon from "@/assets/icons/delete.svg"', size: '16' } },
}
