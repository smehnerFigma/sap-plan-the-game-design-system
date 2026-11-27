// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=3d12ef86780736f2df0b6608852472478ef21f31 (Figma icon "accept", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5080:34621)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/accept.svg
export default {
  example: figma.code`<Icon src={acceptIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import acceptIcon from "@/assets/icons/accept.svg"'],
  id: 'icon-accept-2',
  metadata: { nestable: true, props: { src: 'acceptIcon', srcImport: 'import acceptIcon from "@/assets/icons/accept.svg"', size: '16' } },
}
