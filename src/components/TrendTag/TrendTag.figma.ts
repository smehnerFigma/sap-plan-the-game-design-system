// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=bb6ccd9f60b6b9abc7e7e3ebd6b07847e3af7a4e (Figma "Card Tag"; seen in U14fUtpHqbIHUuJnMfWAzu as 5022:12241)
// source=src/components/TrendTag/TrendTag.tsx
// component=TrendTag
import figma from 'figma'
const instance = figma.selectedInstance

// "Icon" (INSTANCE_SWAP) has no code equivalent — TrendTag renders its own up-arrow per tone.
// "Semantic State" None/Information/Warning have no code equivalent (tone is positive|negative) — fall back to "positive".
const tone = instance.getEnum('Semantic State', {
  Positive: 'positive',
  Negative: 'negative',
  None: 'positive',
  Information: 'positive',
  Warning: 'positive',
})
const text = instance.getString('Text')

export default {
  example: figma.code`<TrendTag tone="${tone}">${text}</TrendTag>`,
  imports: ['import { TrendTag } from "@/components"'],
  id: 'trend-tag',
  metadata: { nestable: true },
}
