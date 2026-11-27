// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=8b7f0a993478cced7b0589aef55af29fd773d1e5 (Figma icon "full-screen", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:45118)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/full-screen-white.svg
export default {
  example: figma.code`<Icon src={fullScreenWhiteIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import fullScreenWhiteIcon from "@/assets/icons/full-screen-white.svg"'],
  id: 'icon-full-screen',
  metadata: { nestable: true, props: { src: 'fullScreenWhiteIcon', srcImport: 'import fullScreenWhiteIcon from "@/assets/icons/full-screen-white.svg"', size: '16' } },
}
