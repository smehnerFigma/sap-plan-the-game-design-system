// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=4c8d8550f59af38e52bb84afbaedec046f62cdbd (Figma icon "ai", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3135:21744)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/ai-brand.svg
export default {
  example: figma.code`<Icon src={aiBrandIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import aiBrandIcon from "@/assets/icons/ai-brand.svg"'],
  id: 'icon-ai',
  metadata: { nestable: true, props: { src: 'aiBrandIcon', srcImport: 'import aiBrandIcon from "@/assets/icons/ai-brand.svg"', size: '16' } },
}
