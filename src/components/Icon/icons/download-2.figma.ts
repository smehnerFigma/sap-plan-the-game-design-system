// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=bb79aa01b7f84d032f21891b43a88eaa7024d7e8 (Figma icon "download", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:57008)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/download.svg
export default {
  example: figma.code`<Icon src={downloadIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import downloadIcon from "@/assets/icons/download.svg"'],
  id: 'icon-download-2',
  metadata: { nestable: true, props: { src: 'downloadIcon', srcImport: 'import downloadIcon from "@/assets/icons/download.svg"', size: '16' } },
}
