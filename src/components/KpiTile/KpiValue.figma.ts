// url=https://www.figma.com/design/U14fUtpHqbIHUuJnMfWAzu/Plan-the-Game?node-id=429898-19473
// NOTE: "Strategy KPI Block" is a LOCAL component (page "component library" in U14fUtpHqbIHUuJnMfWAzu).
// It must be published to a team library before `figma connect publish`.
// componentKey=90e33b95caa53f18b42392fd8b158c68a25f8b68 (Figma "Strategy KPI Block"; seen in U14fUtpHqbIHUuJnMfWAzu as 429898:19473)
// source=src/components/KpiTile/KpiTile.tsx
// component=KpiValue
import figma from 'figma'
const instance = figma.selectedInstance

// The component has no properties of its own; the value is read from the nested "Card KPI & Status".
// The "Label" instance / "Label:" caption has no code equivalent (KpiValue renders only the number).
const kpi = instance.findInstance('Card KPI & Status')
let value = ''
let prefix
let unit
let trend
if (kpi && kpi.type === 'INSTANCE') {
  value = kpi.getString('Value')
  prefix = kpi.getBoolean('Prefix') ? kpi.getString('-> Prefix') : undefined
  unit = kpi.getBoolean('Suffix') ? kpi.getString('-> Suffix') : undefined
  trend = kpi.getBoolean('Trend')
    ? kpi.getEnum('Type', {
        Default: 'up-positive',
        Negative: 'up-negative',
      })
    : undefined
}

export default {
  example: figma.code`<KpiValue${trend ? figma.code` trend="${trend}"` : ''}${prefix ? figma.code` prefix="${prefix}"` : ''} value="${value}"${unit ? figma.code` unit="${unit}"` : ''} />`,
  imports: ['import { KpiValue } from "@/components"'],
  id: 'kpi-value',
  metadata: { nestable: true },
}
