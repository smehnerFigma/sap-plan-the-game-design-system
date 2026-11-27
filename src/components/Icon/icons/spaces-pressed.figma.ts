// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=8d12139990f0ef713eeaf196d99f2a9ca352fc39 (Figma icon "spaces-pressed", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:8002)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/spaces-pressed.svg
export default {
  example: figma.code`<Icon src={spacesPressedIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import spacesPressedIcon from "@/assets/icons/spaces-pressed.svg"'],
  id: 'icon-spaces-pressed',
  metadata: { nestable: true, props: { src: 'spacesPressedIcon', srcImport: 'import spacesPressedIcon from "@/assets/icons/spaces-pressed.svg"', size: '20' } },
}
