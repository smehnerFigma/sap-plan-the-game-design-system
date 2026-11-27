// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=dec35c62c117b8497e1eeb58bec9d9aedf8fbfa8 (Figma icon "lightbulb", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4891)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/lightbulb-tertiary.svg
export default {
  example: figma.code`<Icon src={lightbulbTertiaryIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import lightbulbTertiaryIcon from "@/assets/icons/lightbulb-tertiary.svg"'],
  id: 'icon-lightbulb',
  metadata: { nestable: true, props: { src: 'lightbulbTertiaryIcon', srcImport: 'import lightbulbTertiaryIcon from "@/assets/icons/lightbulb-tertiary.svg"', size: '16' } },
}
