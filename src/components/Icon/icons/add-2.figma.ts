// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=9cbcab39ae2ac23509bac62b8727d00a58562703 (Figma icon "add", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5041:10101)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/add.svg
export default {
  example: figma.code`<Icon src={addIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import addIcon from "@/assets/icons/add.svg"'],
  id: 'icon-add-2',
  metadata: { nestable: true, props: { src: 'addIcon', srcImport: 'import addIcon from "@/assets/icons/add.svg"', size: '16' } },
}
