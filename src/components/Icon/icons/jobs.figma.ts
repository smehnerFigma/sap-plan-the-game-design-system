// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=2d75c46f7d27f366731e6fa9369fee3d5dfd6e4b (Figma icon "jobs", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:27139)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/jobs.svg
export default {
  example: figma.code`<Icon src={jobsIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import jobsIcon from "@/assets/icons/jobs.svg"'],
  id: 'icon-jobs',
  metadata: { nestable: true, props: { src: 'jobsIcon', srcImport: 'import jobsIcon from "@/assets/icons/jobs.svg"', size: '20' } },
}
