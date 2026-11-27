// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d6727620b32189e038a3bebbe10ad02b66859f47 (Figma icon "add", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:865)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/add.svg
export default {
  example: figma.code`<Icon src={addIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import addIcon from "@/assets/icons/add.svg"'],
  id: 'icon-add',
  metadata: { nestable: true, props: { src: 'addIcon', srcImport: 'import addIcon from "@/assets/icons/add.svg"', size: '16' } },
}
