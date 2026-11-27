// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=7a32fc4395ec573dadc9180e66bceecef379e54f (Figma icon "business-objects-experience", 16×16; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:17221)
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'

// Icons are exported SVG assets rendered through <Icon>; asset: src/assets/icons/business-objects-experience.svg
export default {
  example: figma.code`<Icon src={businessObjectsExperienceIcon} size={16} />`,
  imports: ['import { Icon } from "@/components"', 'import businessObjectsExperienceIcon from "@/assets/icons/business-objects-experience.svg"'],
  id: 'icon-business-objects-experience',
  metadata: { nestable: true, props: { src: 'businessObjectsExperienceIcon', srcImport: 'import businessObjectsExperienceIcon from "@/assets/icons/business-objects-experience.svg"', size: '16' } },
}
