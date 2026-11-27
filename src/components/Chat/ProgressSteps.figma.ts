// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=fbbeb18a3516c0b2e0c025337bf1a4c7e42bd9ab (Figma "Explainability Progress Steps"; seen in U14fUtpHqbIHUuJnMfWAzu as 5146:32166)
// source=src/components/Chat/Chat.tsx
// component=ProgressSteps
import figma from 'figma'
const instance = figma.selectedInstance

// "Expanded" has no code equivalent — the code list always shows every step.
const count = instance.getEnum('Step', {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
}) ?? 1

const items = instance.findLayers(n => n.type === 'INSTANCE' && n.name === 'Explainability Progress Step Item')
const step = (i: number) => {
  const item = i < count ? items[i] : undefined
  if (!item || item.type !== 'INSTANCE') return ''
  const state = item.getEnum('State', {
    Completed: 'completed',
    'In Progress': 'loading',
  })
  const text = item.findLayers(n => n.type === 'TEXT')[0]
  const label = text && text.type === 'TEXT' ? text.textContent : ''
  return figma.code`
    { label: ${JSON.stringify(label)}, state: '${state}' },`
}
const s1 = step(0)
const s2 = step(1)
const s3 = step(2)
const s4 = step(3)
const s5 = step(4)
const s6 = step(5)

export default {
  example: figma.code`<ProgressSteps
  steps={[${s1}${s2}${s3}${s4}${s5}${s6}
  ]}
/>`,
  imports: ['import { ProgressSteps } from "@/components"'],
  id: 'progress-steps',
  metadata: { nestable: true },
}
