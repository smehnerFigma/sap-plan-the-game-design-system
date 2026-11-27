// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=f4d889dde94203c7d563db1cde8ec8ae695395bd (Figma icon "show", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:3441)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/show.svg
export default {
  example: figma.code`<Icon src={showIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import showIcon from "@/assets/icons/show.svg"'],
  id: 'icon-show-2',
  metadata: { nestable: true, props: { src: 'showIcon', srcImport: 'import showIcon from "@/assets/icons/show.svg"', size: '16' } },
}
