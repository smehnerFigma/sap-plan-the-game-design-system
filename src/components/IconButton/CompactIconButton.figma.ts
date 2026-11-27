// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=c1ee1ca76974c720ecd4b1888e1e23ac8a36ec63 (Figma "Icon Button (SAC/Joule, Form Factor)"; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:31431)
// source=src/components/IconButton/IconButton.tsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance

// "Badge" and "Type" (Primary|Secondary|Tertiary) have no code equivalent.
// "Interaction State" Hover/Down are runtime states; only Disabled maps to a prop.
// `label` (required accessible name) has no Figma source — placeholder literal.
const variant = instance.getEnum('Form Factor', {
  Compact: 'tertiary',
  Cozy: 'compact',
})
const iconSize = instance.getEnum('Form Factor', {
  Compact: 14,
  Cozy: 16,
})
const disabled = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Down: false,
  Disabled: true,
})
const toggled = instance.getEnum('Toggled', {
  False: false,
  True: true,
})
const icon = instance.getInstanceSwap('Icon')
// `icon` takes an SVG src: the nested icon template exposes its asset variable + import via metadata.props.
let iconSrc
let iconImport
if (icon && icon.type === 'INSTANCE') {
  const iconProps = icon.executeTemplate().metadata?.props
  iconSrc = iconProps?.src
  iconImport = iconProps?.srcImport
}

export default {
  example: figma.code`<IconButton variant="${variant}"${iconSrc ? ` icon={${iconSrc}}` : ''} iconSize={${iconSize}} label="…"${toggled ? ' pressed' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { IconButton } from "@/components"', ...(iconImport ? [iconImport] : [])],
  id: 'compact-icon-button',
  metadata: { nestable: true },
}
