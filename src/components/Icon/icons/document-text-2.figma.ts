// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=c9f9842dc2f5407b2a6d402d732fd97d272b591b (Figma icon "document-text", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3165:15241)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/document-text.svg
export default {
  example: figma.code`<Icon src={documentTextIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import documentTextIcon from "@/assets/icons/document-text.svg"'],
  id: 'icon-document-text-2',
  metadata: { nestable: true, props: { src: 'documentTextIcon', srcImport: 'import documentTextIcon from "@/assets/icons/document-text.svg"', size: '16' } },
}
