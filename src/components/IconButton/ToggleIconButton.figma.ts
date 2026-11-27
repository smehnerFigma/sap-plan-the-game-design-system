// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=405812312184b5082f3db2832ef0aa29c4fe524a (Figma "Toggle Icon Button"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:29328)
// source=src/components/IconButton/IconButton.tsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance

// "Type" (Secondary|Tertiary) has no code equivalent — chrome is driven by "Size"
// (Large = 40px shell, Medium = 32px compact, Small = ghost); "Color" Joule maps to the Joule outline variant.
// "Interaction State" Hover/Pressed/Focus are runtime states; Toggle/Toggle Hover → pressed, Disabled → disabled.
// `label` (required accessible name) has no Figma source — placeholder literal.
const color = instance.getEnum('Color', {
  Brand: 'brand',
  Joule: 'joule',
  Neutral: 'neutral',
})
const sizeVariant = instance.getEnum('Size', {
  Medium: 'compact',
  Large: 'shell',
  Small: 'ghost',
})
const variant = color === 'joule' ? 'jouleOutline' : sizeVariant
const iconSize = instance.getEnum('Size', {
  Medium: 16,
  Large: 20,
  Small: 14,
})
const pressed = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
  Toggle: true,
  'Toggle Hover': true,
  Disabled: false,
  Focus: false,
})
const disabled = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
  Toggle: false,
  'Toggle Hover': false,
  Disabled: true,
  Focus: false,
})
const icon = instance.getInstanceSwap('Swap Icon')
// `icon` takes an SVG src: the nested icon template exposes its asset variable + import via metadata.props.
let iconSrc
let iconImport
if (icon && icon.type === 'INSTANCE') {
  const iconProps = icon.executeTemplate().metadata?.props
  iconSrc = iconProps?.src
  iconImport = iconProps?.srcImport
}

export default {
  example: figma.code`<IconButton variant="${variant}"${iconSrc ? ` icon={${iconSrc}}` : ''} iconSize={${iconSize}} label="…" pressed={${pressed ? 'true' : 'false'}}${disabled ? ' disabled' : ''} />`,
  imports: ['import { IconButton } from "@/components"', ...(iconImport ? [iconImport] : [])],
  id: 'toggle-icon-button',
  metadata: { nestable: true },
}
