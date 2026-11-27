// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=6dcc132c06eb356cd1b10cd13291582d4bb596ac (Figma "Button (Horizon)"; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:9417)
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

// "Trailing Icon" / "Swap Trailing Icon" have no code equivalent (Button only renders a leading icon).
// "Interaction State" Hover/Pressed/Focus are runtime states; only Disabled maps to a prop.
const type = instance.getEnum('Type', {
  Primary: 'emphasized',
  Secondary: 'outline',
  Tertiary: 'transparent',
})
// "Color": the code only has a Joule variant for the filled (Primary) button; Neutral has no equivalent.
const color = instance.getEnum('Color', {
  Brand: 'brand',
  Joule: 'joule',
  Neutral: 'neutral',
})
const variant = color === 'joule' && type === 'emphasized' ? 'joule' : type
const size = instance.getEnum('Size', {
  Small: 'compact',
  Medium: 'regular',
  Large: 'regular',
})
const disabled = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
  Disabled: true,
  Focus: false,
})
const label = instance.getString('✏️ Text')
const hasLeadingIcon = instance.getBoolean('Leading Icon')
const icon = hasLeadingIcon ? instance.getInstanceSwap('Swap Leading Icon') : null
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Button variant="${variant}"${size === 'compact' ? ' size="compact"' : ''}${iconCode ? figma.code` icon={${iconCode}}` : ''}${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@/components"'],
  id: 'button',
  metadata: { nestable: true },
}
