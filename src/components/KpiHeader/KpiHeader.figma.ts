// url=https://www.figma.com/design/LIBRARY_FILE_KEY/SAC-Library?node-id=LIBRARY_NODE_ID
// componentKey=eb6e3e7d000e1410d7c8f365aea5c1091ad20f4e (Figma "KPIs Header"; seen in U14fUtpHqbIHUuJnMfWAzu as 5034:19494)
// source=src/components/KpiHeader/KpiHeader.tsx
// component=KpiHeader
import figma, { type InstanceHandle } from 'figma'
const instance = figma.selectedInstance

// "Text" / "Show Title" have no code equivalent (KpiHeader renders no title). The nested "KPI"
// instances expose no TEXT properties, so their texts are read in layer order:
// title, subline (if "Show Subline"), value, delta (if "Show Indicator").
// "Color" Positive/Neutral have no code equivalent (code only supports tone 'negative');
// "Trend" None has no code equivalent and is left out.
function kpiEntry(kpi: InstanceHandle) {
  const texts = kpi
    .findLayers((node) => node.type === 'TEXT')
    .map((node) => (node.type === 'TEXT' ? node.textContent : ''))
  let i = 0
  const title = texts[i++] ?? ''
  const subline = kpi.getBoolean('Show Subline') ? texts[i++] ?? '' : ''
  const value = texts[i++] ?? ''
  const delta = kpi.getBoolean('Show Indicator') ? texts[i++] ?? '' : ''
  const trend = kpi.getEnum('Trend', {
    Up: 'up',
    Down: 'down',
    None: undefined,
  })
  const tone = kpi.getEnum('Color', {
    Negative: 'negative',
    Positive: undefined,
    Neutral: undefined,
  })
  return figma.code`{ title: '${title}', subline: '${subline}', value: '${value}'${trend ? figma.code`, trend: '${trend}'` : ''}, delta: '${delta}'${tone ? figma.code`, tone: '${tone}'` : ''} }`
}

// "KPI 1"…"KPI 8" toggle the KPI instances. If hidden instances are still returned (all 8 present),
// filter them by their toggle; otherwise the returned instances are already the visible ones.
const found = instance.findLayers((node) => node.type === 'INSTANCE' && node.name === 'KPI')
const kpis = (
  found.length === 8 ? found.filter((_, index) => instance.getBoolean(`KPI ${index + 1}`)) : found
).filter((node): node is InstanceHandle => node.type === 'INSTANCE')

const kpi1 = kpis[0] ? kpiEntry(kpis[0]) : undefined
const kpi2 = kpis[1] ? kpiEntry(kpis[1]) : undefined
const kpi3 = kpis[2] ? kpiEntry(kpis[2]) : undefined
const kpi4 = kpis[3] ? kpiEntry(kpis[3]) : undefined
const kpi5 = kpis[4] ? kpiEntry(kpis[4]) : undefined
const kpi6 = kpis[5] ? kpiEntry(kpis[5]) : undefined
const kpi7 = kpis[6] ? kpiEntry(kpis[6]) : undefined
const kpi8 = kpis[7] ? kpiEntry(kpis[7]) : undefined

export default {
  example: figma.code`<KpiHeader
  kpis={[
    ${kpi1 ? figma.code`${kpi1},` : ''}
    ${kpi2 ? figma.code`${kpi2},` : ''}
    ${kpi3 ? figma.code`${kpi3},` : ''}
    ${kpi4 ? figma.code`${kpi4},` : ''}
    ${kpi5 ? figma.code`${kpi5},` : ''}
    ${kpi6 ? figma.code`${kpi6},` : ''}
    ${kpi7 ? figma.code`${kpi7},` : ''}
    ${kpi8 ? figma.code`${kpi8},` : ''}
  ]}
/>`,
  imports: ['import { KpiHeader } from "@/components"'],
  id: 'kpi-header',
  metadata: { nestable: false },
}
