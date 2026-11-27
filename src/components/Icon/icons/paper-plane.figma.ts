// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2bf0d06ede0849a8991de3aabe7343fb31c1e57f (Figma icon "paper-plane", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:2303)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/paper-plane-joule.svg
export default {
  example: figma.code`<Icon src={paperPlaneJouleIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import paperPlaneJouleIcon from "@/assets/icons/paper-plane-joule.svg"'],
  id: 'icon-paper-plane',
  metadata: { nestable: true, props: { src: 'paperPlaneJouleIcon', srcImport: 'import paperPlaneJouleIcon from "@/assets/icons/paper-plane-joule.svg"', size: '16' } },
}
