// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=a0ab82ff778605cba88db1ec5e30f351766cad3f (Figma "Page Header"; seen in U14fUtpHqbIHUuJnMfWAzu as 3041:4177)
// source=src/components/PageHeader/PageHeader.tsx
// component=PageHeader
import figma from 'figma'
const instance = figma.selectedInstance

// `subtitle` has no Figma property.
const title = instance.getString('✏️ Title')

export default {
  example: figma.code`<PageHeader title="${title}" />`,
  imports: ['import { PageHeader } from "@/components"'],
  id: 'page-header',
  metadata: { nestable: true },
}
