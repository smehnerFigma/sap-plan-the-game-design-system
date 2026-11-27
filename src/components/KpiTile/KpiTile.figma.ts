// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=b3b4f6e2b0a6b0b439bc6c2a84aef4c1d9eaed7a (Figma "Card KPI & Status"; seen in U14fUtpHqbIHUuJnMfWAzu as 5022:12257)
// source=src/components/KpiTile/KpiTile.tsx
// component=KpiTile
import figma from 'figma'
const instance = figma.selectedInstance

// The "Previous Quarter" text of the "Card Tag" has no code equivalent (forecast only takes tone + text).
const value = instance.getString('Value')
const prefix = instance.getBoolean('Prefix') ? instance.getString('-> Prefix') : undefined
const unit = instance.getBoolean('Suffix') ? instance.getString('-> Suffix') : undefined
const trend = instance.getBoolean('Trend')
  ? instance.getEnum('Type', {
      Default: 'up-positive',
      Negative: 'up-negative',
    })
  : undefined
const tone = instance.getEnum('Type', {
  Default: 'positive',
  Negative: 'negative',
})

const labelText = instance.getBoolean('Subtitle') ? instance.findText('Gross Margin (USD)') : null
const label = labelText && labelText.type === 'TEXT' ? labelText.textContent : ''

const forecastText = instance.getBoolean('Variance') ? instance.findText('9.9%', { traverseInstances: true }) : null
const forecast = forecastText && forecastText.type === 'TEXT' ? forecastText.textContent : undefined

const status = instance.getBoolean('Status') ? instance.findInstance('Tag') : null
let statusCode
if (status && status.type === 'INSTANCE') {
  statusCode = status.executeTemplate().example
}

export default {
  example: figma.code`<KpiTile${trend ? figma.code` trend="${trend}"` : ''}${prefix ? figma.code` prefix="${prefix}"` : ''} value="${value}"${unit ? figma.code` unit="${unit}"` : ''} label="${label}"${forecast ? figma.code` forecast={{ tone: '${tone}', text: '${forecast}' }}` : ''}${statusCode ? figma.code` status={${statusCode}}` : ''} />`,
  imports: ['import { KpiTile } from "@/components"'],
  id: 'kpi-tile',
  metadata: { nestable: true },
}
