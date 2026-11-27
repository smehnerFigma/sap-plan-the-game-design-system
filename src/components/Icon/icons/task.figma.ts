// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=d3fa289eb22f060a856afefaf362dcfcecefa63b (Figma icon "task", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3256:4736)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/task.svg
export default {
  example: figma.code`<Icon src={taskIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import taskIcon from "@/assets/icons/task.svg"'],
  id: 'icon-task',
  metadata: { nestable: true, props: { src: 'taskIcon', srcImport: 'import taskIcon from "@/assets/icons/task.svg"', size: '16' } },
}
