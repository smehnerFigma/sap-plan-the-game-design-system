// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=1e17b006124a58d1588b64733a4659eed2abcf17 (Figma icon "thumb-down", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:5181)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/thumb-down-tertiary.svg
export default {
  example: figma.code`<Icon src={thumbDownTertiaryIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import thumbDownTertiaryIcon from "@/assets/icons/thumb-down-tertiary.svg"'],
  id: 'icon-thumb-down',
  metadata: { nestable: true, props: { src: 'thumbDownTertiaryIcon', srcImport: 'import thumbDownTertiaryIcon from "@/assets/icons/thumb-down-tertiary.svg"', size: '16' } },
}
