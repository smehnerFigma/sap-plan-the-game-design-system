// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=f2dfcf9547e9093bd25308655b4f3604f183c2b3 (Figma icon "download", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:57010)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/download.svg
export default {
  example: figma.code`<Icon src={downloadIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import downloadIcon from "@/assets/icons/download.svg"'],
  id: 'icon-download',
  metadata: { nestable: true, props: { src: 'downloadIcon', srcImport: 'import downloadIcon from "@/assets/icons/download.svg"', size: '16' } },
}
