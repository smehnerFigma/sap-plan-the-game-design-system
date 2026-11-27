// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=f6c85e8122dfb2af81c7ccd95bfb30cae572a53c (Figma icon "left-pane-collapsed", 20×20; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:29747)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/left-pane-collapsed.svg
export default {
  example: figma.code`<Icon src={leftPaneCollapsedIcon} size={20} />`,
  imports: ['import { Icon } from "@/components"', 'import leftPaneCollapsedIcon from "@/assets/icons/left-pane-collapsed.svg"'],
  id: 'icon-left-pane-collapsed',
  metadata: { nestable: true, props: { src: 'leftPaneCollapsedIcon', srcImport: 'import leftPaneCollapsedIcon from "@/assets/icons/left-pane-collapsed.svg"', size: '20' } },
}
