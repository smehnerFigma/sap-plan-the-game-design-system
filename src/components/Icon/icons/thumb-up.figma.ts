// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=db8d74933bbc1c5f9b8d4813aadc4f0cce8aebc9 (Figma icon "thumb-up", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:5179)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/thumb-up-tertiary.svg
export default {
  example: figma.code`<Icon src={thumbUpTertiaryIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import thumbUpTertiaryIcon from "@/assets/icons/thumb-up-tertiary.svg"'],
  id: 'icon-thumb-up',
  metadata: { nestable: true, props: { src: 'thumbUpTertiaryIcon', srcImport: 'import thumbUpTertiaryIcon from "@/assets/icons/thumb-up-tertiary.svg"', size: '16' } },
}
