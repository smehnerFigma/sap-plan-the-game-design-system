// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=5fd9d72b6b897fe2fc87e469670f8a06aa063e09 (Figma "Avatar"; seen in U14fUtpHqbIHUuJnMfWAzu as 5020:10761)
// source=src/components/Avatar/Avatar.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

// "Optional Border", "Type", "Interaction State" and "Color" (accent palette; code tone is semantic) have no code equivalent.
// "Content" Image/Person Placeholder would need `imageSrc` (a URL Figma can't supply) — only Icon content is rendered.
const content = instance.getEnum('Content', {
  Icon: 'icon',
  Image: 'image',
  'Person Placeholder': 'person',
})
const size = instance.getEnum('Size', {
  XS: 's',
  S: 's',
  M: 's',
  L: 'l',
  XL: 'l',
})
const icon = content === 'icon' ? instance.getInstanceSwap('Icon') : null
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Avatar size="${size}"${iconCode ? figma.code` icon={${iconCode}}` : ''} />`,
  imports: ['import { Avatar } from "@/components"'],
  id: 'avatar',
  metadata: { nestable: true },
}
