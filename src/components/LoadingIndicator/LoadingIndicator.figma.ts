// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=34520f208721517e1c9dafd8d84132b98e948f92 (Figma "Loading Indicator"; seen in U14fUtpHqbIHUuJnMfWAzu as 5076:23712)
// source=src/components/LoadingIndicator/LoadingIndicator.tsx
// component=LoadingIndicator
import figma from 'figma'

// "Size" (Small|Medium|Large) has no code equivalent — the code indicator has a single fixed size.
export default {
  example: figma.code`<LoadingIndicator />`,
  imports: ['import { LoadingIndicator } from "@/components"'],
  id: 'loading-indicator',
  metadata: { nestable: true },
}
