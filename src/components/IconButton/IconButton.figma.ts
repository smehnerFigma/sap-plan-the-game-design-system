// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=7dbcbfbef6b4831a2bb5b619aa0851460f2aedc0 (Figma "Icon Button (Horizon)"; seen in U14fUtpHqbIHUuJnMfWAzu as 3082:7712)
// source=src/components/IconButton/IconButton.tsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance

// "Accent Color" has no code equivalent. "Type" only distinguishes the Joule variants (filled vs. outline);
// Brand/Neutral chrome is driven by "Size" (Large = 40px shell, Medium = 32px compact, Small = ghost).
// "Interaction State" Hover/Pressed/Focus are runtime states; only Disabled maps to a prop.
// `label` (required accessible name) has no Figma source — placeholder literal.
const type = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
})
const color = instance.getEnum('Color', {
  Brand: 'brand',
  Joule: 'joule',
  Neutral: 'neutral',
})
const sizeVariant = instance.getEnum('Size', {
  Large: 'shell',
  Medium: 'compact',
  Small: 'ghost',
})
const variant = color === 'joule' ? (type === 'secondary' ? 'jouleOutline' : 'joule') : sizeVariant
const iconSize = instance.getEnum('Size', {
  Large: 20,
  Medium: 16,
  Small: 14,
})
const disabled = instance.getEnum('Interaction State', {
  Regular: false,
  Hover: false,
  Pressed: false,
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
  example: figma.code`<IconButton variant="${variant}"${iconSrc ? ` icon={${iconSrc}}` : ''} iconSize={${iconSize}} label="…"${disabled ? ' disabled' : ''} />`,
  imports: ['import { IconButton } from "@/components"', ...(iconImport ? [iconImport] : [])],
  id: 'icon-button',
  metadata: { nestable: true },
}
