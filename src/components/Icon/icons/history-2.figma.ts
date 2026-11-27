// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=02fb2cf833be737a93b92e670159c09f6562bd4b (Figma icon "history", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 5091:56962)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/history.svg
export default {
  example: figma.code`<Icon src={historyIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import historyIcon from "@/assets/icons/history.svg"'],
  id: 'icon-history-2',
  metadata: { nestable: true, props: { src: 'historyIcon', srcImport: 'import historyIcon from "@/assets/icons/history.svg"', size: '16' } },
}
