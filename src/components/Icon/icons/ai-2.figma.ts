// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=90f321fb2e05adcd1322d1b98872293ae2f06882 (Figma icon "ai", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:3619)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/ai-brand.svg
export default {
  example: figma.code`<Icon src={aiBrandIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import aiBrandIcon from "@/assets/icons/ai-brand.svg"'],
  id: 'icon-ai-2',
  metadata: { nestable: true, props: { src: 'aiBrandIcon', srcImport: 'import aiBrandIcon from "@/assets/icons/ai-brand.svg"', size: '16' } },
}
