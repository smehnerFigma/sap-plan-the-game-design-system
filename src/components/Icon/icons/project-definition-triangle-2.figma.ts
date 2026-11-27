// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=5333e7af9d07ed622d945b24bfac0a08f6a62a7d (Figma icon "project-definition-triangle-2", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3113:12826)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/project-definition-triangle-2-negative.svg
export default {
  example: figma.code`<Icon src={projectDefinitionTriangle2NegativeIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import projectDefinitionTriangle2NegativeIcon from "@/assets/icons/project-definition-triangle-2-negative.svg"'],
  id: 'icon-project-definition-triangle-2',
  metadata: { nestable: true, props: { src: 'projectDefinitionTriangle2NegativeIcon', srcImport: 'import projectDefinitionTriangle2NegativeIcon from "@/assets/icons/project-definition-triangle-2-negative.svg"', size: '16' } },
}
