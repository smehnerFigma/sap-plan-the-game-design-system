// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=eb9b684a7dcccde614ad62fe6090053c725cc408 (Figma icon "arrow-top", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:8190)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/arrow-top.svg
export default {
  example: figma.code`<Icon src={arrowTopIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import arrowTopIcon from "@/assets/icons/arrow-top.svg"'],
  id: 'icon-arrow-top',
  metadata: { nestable: true, props: { src: 'arrowTopIcon', srcImport: 'import arrowTopIcon from "@/assets/icons/arrow-top.svg"', size: '16' } },
}
