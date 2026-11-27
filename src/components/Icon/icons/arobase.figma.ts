// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=974f9c25194e3586e350db439c27f8c45f1c2264 (Figma icon "arobase", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2299)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/arobase-brand-12.svg
export default {
  example: figma.code`<Icon src={arobaseBrand12Icon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import arobaseBrand12Icon from "@/assets/icons/arobase-brand-12.svg"'],
  id: 'icon-arobase',
  metadata: { nestable: true, props: { src: 'arobaseBrand12Icon', srcImport: 'import arobaseBrand12Icon from "@/assets/icons/arobase-brand-12.svg"', size: '16' } },
}
