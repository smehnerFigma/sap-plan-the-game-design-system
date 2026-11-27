// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=b4c22122fe223be10d4c0bac371760b560b93a20 (Figma "Toggle Button (Horizon)"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:24280)
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

// "Trailing Icon" / "Swap Trailing Icon" have no code equivalent (Button only renders a leading icon).
// "Color" has no code equivalent for toggle buttons (no Joule/Neutral outline/transparent variants).
const variant = instance.getEnum('Type', {
  Secondary: 'outline',
  Tertiary: 'transparent',
})
const size = instance.getEnum('Size', {
  Medium: 'regular',
  Large: 'regular',
  Small: 'compact',
})
const pressed = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
  Toggled: true,
  'Toggled Hover': true,
  Disabled: false,
  Focus: false,
})
const disabled = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
  Toggled: false,
  'Toggled Hover': false,
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
  example: figma.code`<Button variant="${variant}"${size === 'compact' ? ' size="compact"' : ''}${iconCode ? figma.code` icon={${iconCode}}` : ''} pressed={${pressed ? 'true' : 'false'}}${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@/components"'],
  id: 'toggle-button',
  metadata: { nestable: true },
}
