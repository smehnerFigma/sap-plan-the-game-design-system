// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=cc7b1d6291f9f1828ab3c851b33bcc50da64d8c2 (Figma icon "warning", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4201)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/warning.svg
export default {
  example: figma.code`<Icon src={warningIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import warningIcon from "@/assets/icons/warning.svg"'],
  id: 'icon-warning',
  metadata: { nestable: true, props: { src: 'warningIcon', srcImport: 'import warningIcon from "@/assets/icons/warning.svg"', size: '16' } },
}
