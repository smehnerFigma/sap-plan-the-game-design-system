// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=ec91cd8cffe34196832a9c98f6b1b67daafa53df (Figma icon "da", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3043:41132)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/da-joule.svg
export default {
  example: figma.code`<Icon src={daJouleIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import daJouleIcon from "@/assets/icons/da-joule.svg"'],
  id: 'icon-da',
  metadata: { nestable: true, props: { src: 'daJouleIcon', srcImport: 'import daJouleIcon from "@/assets/icons/da-joule.svg"', size: '16' } },
}
