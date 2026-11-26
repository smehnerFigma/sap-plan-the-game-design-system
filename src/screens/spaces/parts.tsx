import { useState } from 'react'
import accept from '../../assets/icons/accept.svg'
import barChart from '../../assets/icons/bar-chart.svg'
import warningWarning from '../../assets/icons/warning-warning.svg'
import warningWarning2 from '../../assets/icons/warning-warning-2.svg'
import task from '../../assets/icons/task.svg'
import product from '../../assets/icons/product.svg'
import daJoule from '../../assets/icons/da-joule.svg'
import businessObjects from '../../assets/icons/business-objects-experience.svg'
import warning from '../../assets/icons/warning.svg'
import trendUp from '../../assets/icons/trend-up.svg'
import infoIcon from '../../assets/icons/message-information-info.svg'
import warning2Text18 from '../../assets/icons/warning2-text-18.svg'
import legendOrange from '../../assets/icons/legend-line-point-orange.svg'
import legendBlue from '../../assets/icons/legend-line-point-blue.svg'
import legendMagenta from '../../assets/icons/legend-line-point-magenta.svg'
import symbolOrange from '../../assets/icons/symbol-container-orange.svg'
import symbolBlue from '../../assets/icons/symbol-container-blue.svg'
import symbolDiamond from '../../assets/icons/symbol-container-diamond-purple.svg'
import {
  ActionItem, ActionList, Avatar, Button, Card, ChartTypeToolbar, Checkbox, Divider, Field, FieldGrid,
  Icon, IconButton, KpiTile, KpiValue, LineChart, MessageStrip, SectionHeading, Table, Tag,
} from '../../components'
import type { ChartType } from '../../components/ChartTypeToolbar/ChartTypeToolbar'
import { impactGeometry, opexGeometry, staffingGeometry, staffingGeometryInitial } from '../data/chartGeometry'
import { configuration, executionRisk, opexChart, opportunity, quarters, recommendedActions, skillGap, strategies } from '../data/spaces'
import styles from './parts.module.css'

/** "Included Drivers" row + paragraph used in several cards. */
function Drivers({ text }: { text: string }) {
  return (
    <div className={styles.drivers}>
      <p className={`t-title ${styles.driversLabel}`}><Icon src={barChart} size={16} />Included Drivers</p>
      <p className={`t-body ${styles.secondary}`}>{text}</p>
    </div>
  )
}

/** Leading 20px header icon (Card header variant B). */
const HeaderIcon = ({ src }: { src: string }) => <span className={styles.headerIcon}><Icon src={src} size={20} /></span>

/** onAskJoule → Figma "Card_Right Accessories" Joule icon button (shown on the full-width screen 0). */
export function OpportunityCard({ onAskJoule }: { onAskJoule?: () => void }) {
  return (
    <Card title={opportunity.title} leading={<Avatar tone="positive" icon={<Icon src={accept} size={18} />} />}
      actions={onAskJoule && <IconButton variant="jouleOutline" icon={daJoule} iconSize={16} label="Ask Joule about this opportunity" onClick={onAskJoule} />}>
      <Drivers text={opportunity.drivers} />
      <div className={styles.kpiRow}>
        {opportunity.kpis.map(k => (
          <KpiTile key={k.label} trend="up-positive" prefix={k.prefix} value={k.value} unit={k.unit} label={k.label}
            forecast={{ tone: 'positive', text: k.forecast }} />
        ))}
      </div>
    </Card>
  )
}

/** `inContext` → Joule is analysing this card (Figma 5150:41723): plain "product" icon instead of the warning avatar. */
export function ExecutionRiskCard({ tiles = 3, inContext = false }: { tiles?: 2 | 3; inContext?: boolean }) {
  // Screen 6 (2-tile follow-up) uses a darker warning glyph export (#A93E00) in Figma.
  const leading = inContext
    ? <HeaderIcon src={product} />
    : <Avatar tone="warning" icon={<Icon src={tiles === 2 ? warningWarning2 : warningWarning} size={18} />} />
  return (
    <Card title={executionRisk.title} leading={leading} className={styles.stretch}>
      <Drivers text={executionRisk.drivers} />
      <div className={tiles === 3 ? styles.kpiWrap : styles.kpiRow}>
        {executionRisk.kpis.slice(0, tiles).map(k => (
          <KpiTile key={k.label} prefix={k.prefix} value={k.value} unit={k.unit} label={k.label}
            forecast={{ tone: 'negative', text: k.forecast }} status={<Tag tone="negative">Critical</Tag>} />
        ))}
      </div>
    </Card>
  )
}

export function RecommendedActionsCard({ completed = 0, onAction, stretch = true }: { completed?: number; onAction?: (title: string) => void; stretch?: boolean }) {
  return (
    <Card title="Recommended Actions" leading={<HeaderIcon src={task} />} className={stretch ? styles.stretch : styles.top}>
      <ActionList label="Recommended actions">
        {recommendedActions.map((a, i) => (
          <ActionItem key={a.title} dense={i > 0} title={a.title} description={a.description} status={i < completed ? 'completed' : 'open'}
            action={<Button variant="outline" aria-label={`${a.action}: ${a.title}`} onClick={() => onAction?.(a.title)}>{a.action}</Button>} />
        ))}
      </ActionList>
    </Card>
  )
}

/** In Figma the actions card stretches to the row height except on the full-width (chat closed) screen. */
export function RiskAndActionsRow({ compact = false, completed = 0, onAction, stretchActions = true, riskInContext = false }: { compact?: boolean; completed?: number; onAction?: (t: string) => void; stretchActions?: boolean; riskInContext?: boolean }) {
  return (
    <div className={compact ? `${styles.halves} ${styles.halvesTight}` : styles.riskRow}>
      <ExecutionRiskCard tiles={compact ? 2 : 3} inContext={riskInContext} />
      <RecommendedActionsCard completed={completed} onAction={onAction} stretch={stretchActions} />
    </div>
  )
}

export function OpexChartCard() {
  const [checked, setChecked] = useState(() => opexChart.drivers.map(() => true))
  return (
    <Card title={opexChart.title} subtitle={opexChart.subtitle}>
      <fieldset className={styles.driverRow}>
        <legend className={styles.driverLegend}>Included Driver:</legend>
        {opexChart.drivers.map((d, i) => (
          <Checkbox key={d} label={d} checked={checked[i]} onChange={() => setChecked(c => c.map((x, j) => j === i ? !x : x))} />
        ))}
      </fieldset>
      <div>{/* Figma Chart Card: min-h 211, plot inset 24 (legend flush left) */}
        <LineChart
          appearance="axis"
          title="Operating Expenses by quarter"
          categories={opexChart.categories}
          domain={[350, 550]}
          yTicks={[350, 400, 450, 500, 550]}
          geometry={opexGeometry}
          plotInset={24}
          formatValue={v => `$${v}M`}
          series={[
            { name: 'Actual', color: 'var(--color-chart-2)', values: [455, 452, null, null], labelPositions: ['above', 'below'], legendIcon: { src: legendOrange, width: 36, height: 18 } },
            { name: 'Plan', color: 'var(--color-chart-1)', values: [451, 449, 464, 469], labelPositions: ['below', 'above', 'below', 'below'], legendIcon: { src: legendBlue, width: 36, height: 18 } },
            { name: 'Plan', color: 'var(--color-raspberry-8)', values: [null, null, 494, 498], lineStart: { index: 1, value: 452 }, legendIcon: { src: legendMagenta, width: 36, height: 18 } },
          ]}
        />
      </div>
    </Card>
  )
}

export function ConfigurationCard() {
  return (
    <Card title="Configuration overview" subtitle="General info, business context & KPI setup" leading={<HeaderIcon src={businessObjects} />}>
      <SectionHeading>General Information</SectionHeading>
      <FieldGrid>{configuration.general.map(f => <Field key={f.label} {...f} />)}</FieldGrid>
      <Divider />
      <SectionHeading>Business Context</SectionHeading>
      <FieldGrid>
        <Field label="Business Drivers" value={configuration.businessDrivers} />
        <Field label="Additional Context" value={configuration.additionalContext} />
      </FieldGrid>
      <Divider />
      <SectionHeading>KPI Setup</SectionHeading>
      {/* Figma: the two KPI Setup rows use different column gaps (16 / 24). */}
      <FieldGrid columns={4} gap="s">
        {configuration.kpiSetup.slice(0, 4).map(f => <Field key={f.label} {...f} />)}
      </FieldGrid>
      <FieldGrid columns={4}>
        {configuration.kpiSetup.slice(4).map(f => <Field key={f.label} {...f} />)}
        <Field label="Account Type" value={<Tag tone="info" icon={<Icon src={infoIcon} size={12} />}>INC</Tag>} />
      </FieldGrid>
    </Card>
  )
}

export function KpisAtRiskCard() {
  return (
    <Card title="KPIs at Risk of Deletion" subtitle="KPIs bound to the planning model — permanently deleted if model or account dimension change" leading={<HeaderIcon src={warning} />}>
      <MessageStrip>The following KPIs will be permanently deleted if the planning model or account dimension is changed.</MessageStrip>
      <Table
        caption="KPIs at risk of deletion"
        columns={[{ key: 'kpi', header: 'KPI' }, { key: 'type', header: 'Account Type' }, { key: 'context', header: 'KPI Context' }, { key: 'risk', header: 'Risk' }]}
        rows={[{ kpi: 'FFA1/08', type: 'INC', context: '-', risk: 'Will be deleted' }]}
      />
    </Card>
  )
}

/* ───── Skill Gap ───── */

export function SkillGapCard({ solutionsOpen, onViewSolutions }: { solutionsOpen: boolean; onViewSolutions: () => void }) {
  return (
    <Card title={skillGap.title} subtitle={skillGap.subtitle} leading={<Avatar tone="warning" icon={<Icon src={warningWarning} size={18} />} />}
      className={styles.stretch}
      footer={<Button variant="joule" disabled={solutionsOpen} onClick={onViewSolutions} aria-expanded={solutionsOpen} aria-controls="strategy-panel">View Solutions</Button>}>
      <p className={`t-title ${styles.secondary}`}>{skillGap.lead}</p>
      <p className={`t-body ${styles.core}`}>{skillGap.body}</p>
    </Card>
  )
}

export function WorkforceCard() {
  return (
    <Card title="Workforce Expenses" subtitle="Specialized Workforce" leading={<HeaderIcon src={trendUp} />} className={styles.stretch}>
      <Drivers text={skillGap.workforceDrivers} />
      <div className={styles.kpiRow}>
        <KpiTile value="50" unit="M" label="Planned Q3 2026,Q4 2026" />
        <KpiTile trend="up-negative" value="238" unit="M" label="Impact due to Increased Staffing Demand"
          forecast={{ tone: 'negative', text: '+15%' }} status={<Tag tone="negative">Critical</Tag>} />
      </div>
      <Tag tone="warning">Immediate action needed</Tag>
    </Card>
  )
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const [type, setType] = useState<ChartType>('line')
  return (
    <Card title={title} subtitle={subtitle} actions={<ChartTypeToolbar value={type} onChange={setType} />}>
      {type === 'line' ? children : <p className={`t-body ${styles.placeholder}`}>The {type} view is not designed in Figma — line view shown by default.</p>}
    </Card>
  )
}

const skillLegend = {
  actuals: { src: symbolOrange, width: 16, height: 16 },
  plan: { src: symbolBlue, width: 16, height: 16 },
  forecast: { src: symbolDiamond, width: 16, height: 16 },
}

export function StaffingChartCard({ currency = 'USD' }: { currency?: 'USD' | 'MXN' }) {
  return (
    <ChartCard title="Driver - Staffing Cost" subtitle={`Million in ${currency}`}>
      <LineChart
        title={`Staffing cost, million ${currency}`}
        categories={quarters}
        domain={[15.68, 19.51]}
        geometry={currency === 'MXN' ? staffingGeometry : staffingGeometryInitial}
        formatValue={v => v.toFixed(3)}
        series={[
          { name: 'Actuals', color: 'var(--color-chart-2)', values: [18.021, 17.911, null, null], legendIcon: skillLegend.actuals },
          { name: 'Plan', color: 'var(--color-chart-1)', values: [18.201, 18.112, 18.616, 18.667], legendIcon: skillLegend.plan },
          { name: 'Forecast', color: 'var(--color-chart-5)', marker: 'diamond', values: [null, null, 17.798, 16.408], lineStart: { index: 1, value: 17.911 }, legendIcon: skillLegend.forecast },
        ]}
      />
    </ChartCard>
  )
}

export function ImpactChartCard() {
  return (
    <ChartCard title="Impact - Operating Expenses" subtitle="Million in USD">
      <LineChart
        title="Operating expenses impact, million USD"
        categories={quarters}
        domain={[1.713, 2.127]}
        geometry={impactGeometry}
        showAxisLine={false}
        formatValue={v => v.toFixed(3)}
        series={[
          { name: 'Actuals', color: 'var(--color-chart-2)', values: [1.82, 1.796, null, null], labelPositions: ['above', 'below'], legendIcon: skillLegend.actuals },
          { name: 'Plan', color: 'var(--color-chart-1)', values: [1.805, 1.809, 1.856, 1.876], labelPositions: ['below', 'above', 'below', 'below'], legendIcon: skillLegend.plan },
          { name: 'Forecast', color: 'var(--color-chart-5)', marker: 'diamond', values: [null, null, 1.915, 1.978], lineStart: { index: 1, value: 1.796 }, legendIcon: skillLegend.forecast },
        ]}
      />
    </ChartCard>
  )
}

export function StrategyPanel({ onApply }: { onApply?: (title: string) => void }) {
  const [selected, setSelected] = useState(strategies[0].title)
  const kpi = (label: string, v?: { prefix: string; value: string }) => v && (
    <div className={styles.strategyKpi}>
      <span className={`t-body-strong ${styles.secondary}`}>{label}</span>
      <KpiValue trend="up-positive" prefix={v.prefix} value={v.value} unit="M" />
    </div>
  )
  return (
    <section id="strategy-panel" className={styles.strategyPanel} aria-labelledby="strategy-title">
      <h3 id="strategy-title" className={`t-body-strong ${styles.primary} ${styles.strategyTitle}`}>Select a strategy to reduce the identified skill gap.</h3>
      <div className={styles.strategyGrid} role="group" aria-labelledby="strategy-title">
        {strategies.map(s => {
          const isSel = s.title === selected
          return (
            <Card key={s.title} title={s.title} subtitle="Subtitle" className={styles.stretch}
              footer={<>
                <Button variant="transparent" aria-label={`Preview ${s.title}`}>Preview</Button>
                <Button variant="outline" pressed={isSel} aria-label={`Select ${s.title}`} onClick={() => setSelected(s.title)}>
                  {isSel ? 'Selected' : 'Select'}
                </Button>
              </>}>
              <div className={styles.summary}>
                <span className={`t-body-strong ${styles.secondary}`}>Summary</span>
                <p className={`t-body ${styles.summaryText}`}>XXX</p>
              </div>
              {kpi('Additional Revenue Captured', s.revenue)}
              {kpi('Additional Labor Cost', s.labor)}
              {kpi('Operating Profit Impact', s.profit)}
              <div className={styles.risks}>
                <span className={`t-body-strong ${styles.secondary}`}>Risk Assement</span>
                <ul className={styles.riskList}>
                  {s.risks.map(r => <li key={r}><Icon src={warning2Text18} size={18} /><span>{r}</span></li>)}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>
      <div className={styles.buttonBar}>
        <Button variant="transparent">Compare Impacts</Button>
        <Button variant="emphasized" onClick={() => onApply?.(selected)}>Apply</Button>
      </div>
    </section>
  )
}

