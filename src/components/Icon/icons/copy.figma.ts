// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=5e1f1ea1d98637e1fb8a029cf9f072d085dd4066 (Figma icon "copy", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4837)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/copy-tertiary.svg
export default {
  example: figma.code`<Icon src={copyTertiaryIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import copyTertiaryIcon from "@/assets/icons/copy-tertiary.svg"'],
  id: 'icon-copy',
  metadata: { nestable: true, props: { src: 'copyTertiaryIcon', srcImport: 'import copyTertiaryIcon from "@/assets/icons/copy-tertiary.svg"', size: '16' } },
}
