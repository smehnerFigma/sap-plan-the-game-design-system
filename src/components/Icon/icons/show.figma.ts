// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d604b7c505b39c11917286d4bf38f243749a525c (Figma icon "show", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56909)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/show.svg
export default {
  example: figma.code`<Icon src={showIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import showIcon from "@/assets/icons/show.svg"'],
  id: 'icon-show',
  metadata: { nestable: true, props: { src: 'showIcon', srcImport: 'import showIcon from "@/assets/icons/show.svg"', size: '16' } },
}
