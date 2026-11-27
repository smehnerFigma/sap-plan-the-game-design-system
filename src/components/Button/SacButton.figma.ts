// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=8aa03c8825e1ee659d5b5395762f7fe4c1d5d553 (Figma "Button (SAC)"; seen in U14fUtpHqbIHUuJnMfWAzu as 5034:18894)
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

// "Left Badge", "Right Badge", "Right Icon" and "Icon Only" have no code equivalent (use IconButton for icon-only).
// "Interaction State" Hover/Active are runtime states; only Disabled maps to a prop.
// "Type" Positive/Negative/Warning have no semantic variant in code — they fall back to "secondary".
const variant = instance.getEnum('Type', {
  Tertiary: 'transparent',
  Primary: 'emphasized',
  Secondary: 'secondary',
  Positive: 'secondary',
  Negative: 'secondary',
  Warning: 'secondary',
})
const size = instance.getEnum('Size', {
  S: 'compact',
  L: 'regular',
  M: 'regular',
})
const disabled = instance.getEnum('Interaction State', {
  Default: false,
  Hover: false,
  Disabled: true,
  Active: false,
})
const toggled = instance.getEnum('Toggled', {
  False: false,
  True: true,
})
const label = instance.getString('Text')
const hasLeftIcon = instance.getBoolean('Left Icon')
const icon = hasLeftIcon ? instance.getInstanceSwap('Icon') : null
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Button family="sac" variant="${variant}"${size === 'compact' ? ' size="compact"' : ''}${iconCode ? figma.code` icon={${iconCode}}` : ''}${toggled ? ' pressed' : ''}${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@/components"'],
  id: 'sac-button',
  metadata: { nestable: true },
}
