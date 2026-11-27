// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=680088b2f4673301c3ce9d1ba84f2ffe9d28a581 (Figma "Card (Horizon)"; seen in U14fUtpHqbIHUuJnMfWAzu as 5020:12060)
// source=src/components/Card/Card.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

// "Image" has no code equivalent (Card has no image prop). "_Card State" is not read (its variant
// names are not part of the collected data). In "_Card Header", "Right Accessories" and the
// "Avatar" leading type are not mapped — only the "Leading Icon" layer feeds `leading`.
const hasHeader = instance.getBoolean('Header')
const header = hasHeader ? instance.findInstance('_Card Header') : null
let title
let subtitle
let leadingCode
if (header && header.type === 'INSTANCE') {
  const titleText = header.findText('Title')
  title = titleText.type === 'TEXT' ? titleText.textContent : undefined
  const subtitleText = header.getBoolean('Subtitle') ? header.findText('Subtitle') : null
  subtitle = subtitleText && subtitleText.type === 'TEXT' ? subtitleText.textContent : undefined
  const leading = header.getBoolean('Icon') ? header.findInstance('Leading Icon') : null
  if (leading && leading.type === 'INSTANCE') {
    leadingCode = leading.executeTemplate().example
  }
}

const hasActionMenu = instance.getBoolean('Action Menu')
const actionMenu = hasActionMenu ? instance.findInstance('_Card Action Menu') : null
let actionsCode
if (actionMenu && actionMenu.type === 'INSTANCE') {
  actionsCode = actionMenu.executeTemplate().example
}

const hasFooter = instance.getBoolean('Footer')
const footer = hasFooter ? instance.findInstance('_Card Footer') : null
let footerCode
if (footer && footer.type === 'INSTANCE') {
  footerCode = footer.executeTemplate().example
}

const hasBody = instance.getBoolean('Body')
const twoColumns = instance.getBoolean('2 Columns')
const body1 = hasBody ? instance.getSlot('Body Slot 1') : undefined
const body2 = hasBody && twoColumns ? instance.getSlot('Body Slot 2') : undefined
const hasSlot = instance.getBoolean('Slot')
const slot = hasSlot ? instance.getSlot('-> Slot') : undefined

export default {
  example: figma.code`<Card${title ? figma.code` title="${title}"` : ''}${subtitle ? figma.code` subtitle="${subtitle}"` : ''}${leadingCode ? figma.code` leading={${leadingCode}}` : ''}${actionsCode ? figma.code` actions={${actionsCode}}` : ''}${footerCode ? figma.code` footer={${footerCode}}` : ''}>
  ${body1 ? body1 : ''}
  ${body2 ? body2 : ''}
  ${slot ? slot : ''}
</Card>`,
  imports: ['import { Card } from "@/components"'],
  id: 'card',
  metadata: { nestable: true },
}
