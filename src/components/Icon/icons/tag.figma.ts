// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=e70083da1c37ef78e11f7a1aa7d563ce5275888e (Figma icon "tag", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56971)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/tag.svg
export default {
  example: figma.code`<Icon src={tagIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import tagIcon from "@/assets/icons/tag.svg"'],
  id: 'icon-tag',
  metadata: { nestable: true, props: { src: 'tagIcon', srcImport: 'import tagIcon from "@/assets/icons/tag.svg"', size: '16' } },
}
