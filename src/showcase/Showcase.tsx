import { useState, type ReactNode } from 'react'
import accept from '../assets/icons/accept.svg'
import warningWarning from '../assets/icons/warning-warning.svg'
import aiBrand from '../assets/icons/ai-brand.svg'
import download from '../assets/icons/download.svg'
import edit from '../assets/icons/edit.svg'
import overflow from '../assets/icons/overflow.svg'
import conversationsAccent from '../assets/icons/conversations-accent.svg'
import infoIcon from '../assets/icons/message-information-info.svg'
import symbolOrange from '../assets/icons/symbol-container-orange.svg'
import symbolBlue from '../assets/icons/symbol-container-blue.svg'
import symbolDiamond from '../assets/icons/symbol-container-diamond-purple.svg'
import {
  ActionItem, ActionList, Avatar, Button, Card, ChartTypeToolbar, Checkbox, Dialog, Divider, Field, FieldGrid, Icon,
  IconButton, JouleInput, JouleMessage, JoulePanel, KpiHeader, KpiTile, LineChart, List, ListItem, LoadingIndicator,
  MainNavigation, MessageList, MessageStrip, PageHeader, PaneBar, PivotTable, ProgressSteps, ReplyList, ResponseActions,
  SacCard, SectionHeader, Shellbar, StepList, Table, Tabs, Tag, Timestamp, Toast, Toolbar, ToolbarGroup, ToolbarSeparator,
  TrendTag, UserMessage,
} from '../components'
import type { ChartType } from '../components/ChartTypeToolbar/ChartTypeToolbar'
import { chatAnswer, progressSteps } from '../screens/data/spaces'
import { groups, measures, planKpis, planRows } from '../screens/data/sac'
import { OpexChartCard } from '../screens/spaces/parts'
import { parseTokens, parseTypography } from './tokenParser'
import styles from './Showcase.module.css'

const sections = [
  'Colors', 'Typography', 'Spacing & radius', 'Elevation', 'Buttons', 'Form & selection', 'Tags & status',
  'Cards & KPIs', 'Lists & tables', 'Charts', 'Navigation & shell', 'Overlays & feedback', 'Joule',
] as const

function Demo({ title, figma, children, wide }: { title: string; figma?: string; children: ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? `${styles.demo} ${styles.wide}` : styles.demo}>
      <div className={styles.demoHead}>
        <h3 className="t-body-strong">{title}</h3>
        {figma && <span className={`t-caption ${styles.figmaName}`}>Figma: {figma}</span>}
      </div>
      <div className={styles.demoBody}>{children}</div>
    </div>
  )
}

function State({ label, children }: { label: string; children: ReactNode }) {
  return <div className={styles.state}><span className={`t-caption ${styles.stateLabel}`}>{label}</span><div className={styles.stateBody}>{children}</div></div>
}

function Origin({ origin }: { origin: 'figma' | 'inferred' }) {
  return <span className={origin === 'figma' ? styles.badgeFigma : styles.badgeInferred}>{origin === 'figma' ? 'Figma' : 'Inferred'}</span>
}

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.block} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="t-heading4-strong">{title}</h2>
      <div className={styles.demos}>{children}</div>
    </section>
  )
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, '-')

export function Showcase() {
  const tokens = parseTokens()
  const type = parseTypography()
  const colorGroups = [...new Set(tokens.filter(t => t.group.startsWith('Color')).map(t => t.group))]
  const [tab, setTab] = useState('Editing')
  const [sel, setSel] = useState(1)
  const [chart, setChart] = useState<ChartType>('line')
  const [dialog, setDialog] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [toggle, setToggle] = useState(true)

  return (
    <div className={styles.page}>
      <nav className={styles.toc} aria-label="Showcase sections">
        <a href="#/" className="t-caption">← Prototype</a>
        <p className="t-title-strong">Design system</p>
        <ul>{sections.map(s => <li key={s}><a href={`#/showcase`} onClick={e => { e.preventDefault(); document.getElementById(slug(s))?.scrollIntoView() }}>{s}</a></li>)}</ul>
        <p className={`t-caption ${styles.legendNote}`}><Origin origin="figma" /> defined as a Figma variable/style · <Origin origin="inferred" /> raw value promoted to a token</p>
      </nav>
      <main className={styles.main}>
        <header className={styles.intro}>
          <h1 className="t-heading2">Component showcase</h1>
          <p className="t-title">Every component used in the 12 Figma screens, with the states they support. Token values are parsed live from <code>src/tokens/tokens.css</code>.</p>
        </header>

        <Block id="colors" title="Colors">
          {colorGroups.map(g => (
            <Demo key={g} title={g.replace('Color · ', '')} wide>
              <ul className={styles.swatches}>
                {tokens.filter(t => t.group === g).map(t => (
                  <li key={t.name} className={styles.swatch}>
                    <span className={styles.chip} style={{ background: `var(${t.name})` }} />
                    <span className={styles.swatchText}>
                      <code>{t.name}</code>
                      <span className="t-caption">{t.value}</span>
                      <span className={`t-caption ${styles.muted}`}>{t.source}</span>
                    </span>
                    <Origin origin={t.origin} />
                  </li>
                ))}
              </ul>
            </Demo>
          ))}
        </Block>

        <Block id="typography" title="Typography">
          <Demo title="Text styles" figma="Text styles (72 / 72 Brand)" wide>
            <table className={styles.typeTable}>
              <thead><tr><th scope="col">Sample</th><th scope="col">Figma style</th><th scope="col">Class</th><th scope="col">CSS</th></tr></thead>
              <tbody>
                {type.map(t => (
                  <tr key={t.className}>
                    <td><span className={t.className}>Operating Expenses</span></td>
                    <td className="t-caption">{t.figma}</td>
                    <td><code>.{t.className}</code></td>
                    <td className="t-caption"><code>{t.css}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Demo>
        </Block>

        <Block id="spacing-radius" title="Spacing & radius">
          {['Spacing', 'Radius', 'Border width', 'Sizing'].map(g => (
            <Demo key={g} title={g}>
              <ul className={styles.scale}>
                {tokens.filter(t => t.group === g).map(t => (
                  <li key={t.name}>
                    {g === 'Spacing' && <span className={styles.bar} style={{ width: `var(${t.name})` }} />}
                    {g === 'Radius' && <span className={styles.radius} style={{ borderRadius: `var(${t.name})` }} />}
                    <code>{t.name}</code><span className="t-caption">{t.value}</span><Origin origin={t.origin} />
                  </li>
                ))}
              </ul>
            </Demo>
          ))}
        </Block>

        <Block id="elevation" title="Elevation">
          {tokens.filter(t => t.group === 'Elevation').map(t => (
            <Demo key={t.name} title={t.name} figma={t.source}>
              <div className={styles.shadow} style={{ boxShadow: `var(${t.name})` }} />
            </Demo>
          ))}
        </Block>

        <Block id="buttons" title="Buttons">
          <Demo title="Button — Horizon (Spaces)" figma="Button · 539:1103" wide>
            {(['outline', 'emphasized', 'transparent', 'joule'] as const).map(v => (
              <State key={v} label={v}>
                <Button variant={v}>Open Space</Button>
                <Button variant={v} disabled>Disabled</Button>
              </State>
            ))}
            <State label="toggle (aria-pressed)">
              <Button variant="outline" pressed={!toggle} onClick={() => setToggle(t => !t)}>{!toggle ? 'Selected' : 'Select'}</Button>
              <Button variant="outline" pressed={toggle} onClick={() => setToggle(t => !t)}>{toggle ? 'Selected' : 'Select'}</Button>
            </State>
          </Demo>
          <Demo title="Button — SAC" figma="Button/Regular/{Primary,Secondary,Tertiary}" wide>
            <State label="regular 36px">
              <Button family="sac" variant="emphasized">Consolidate</Button>
              <Button family="sac" variant="emphasized" disabled>Consolidate</Button>
              <Button family="sac" variant="secondary">Secondary</Button>
              <Button family="sac" variant="transparent">Tertiary</Button>
            </State>
            <State label="compact 25px">
              <Button family="sac" size="compact" variant="secondary" icon={<Icon src={aiBrand} size={14} />}>AI Draft</Button>
              <Button family="sac" size="compact" variant="emphasized">Save</Button>
              <Button family="sac" size="compact" variant="secondary" icon={<Icon src={download} size={14} />}>PDF</Button>
              <Button family="sac" size="compact" variant="secondary" disabled>Disabled</Button>
            </State>
          </Demo>
          <Demo title="IconButton" figma="Icon Button / Toggle Icon Button">
            <State label="shell 40 · default / pressed / disabled">
              <IconButton variant="shell" icon={overflow} iconSize={18.29} label="More actions" />
              <IconButton variant="shell" icon={conversationsAccent} iconSize={18.29} label="Chat" pressed />
              <IconButton variant="shell" icon={overflow} iconSize={18.29} label="Disabled" disabled />
            </State>
            <State label="ghost · tertiary">
              <IconButton icon={edit} iconSize={16} label="Edit" />
              <IconButton variant="tertiary" icon={edit} iconSize={16} label="Edit" />
            </State>
          </Demo>
          <Demo title="ChartTypeToolbar" figma="Card_Right Accessories (toggle group)">
            <ChartTypeToolbar value={chart} onChange={setChart} />
          </Demo>
        </Block>

        <Block id="form-selection" title="Form & selection">
          <Demo title="Checkbox" figma="Check Box">
            <State label="checked / unchecked / disabled">
              <Checkbox label="Workforce Expense Increase" defaultChecked />
              <Checkbox label="Exchange Rate Exposure" />
              <Checkbox label="Disabled" disabled defaultChecked />
            </State>
          </Demo>
          <Demo title="Tabs" figma="Horizontal Tab bar · 5080:42308">
            <Tabs label="Example tabs" tabs={['Editing', 'Tagging', 'Consolidating']} selected={tab} onSelect={setTab} />
          </Demo>
          <Demo title="ListItem" figma="Data List Item">
            <List label="Structure" className={styles.listDemo}>
              {['Financial Results', 'Financial Outlook', 'SAP Performance Measures'].map((s, i) => (
                <ListItem key={s} selected={sel === i} onSelect={() => setSel(i)}>{s}</ListItem>
              ))}
            </List>
          </Demo>
        </Block>

        <Block id="tags-status" title="Tags & status">
          <Demo title="Tag" figma="Tag">
            <State label="neutral / positive / negative / info / warning*">
              <Tag>Open</Tag><Tag tone="positive">Completed</Tag><Tag tone="negative">Critical</Tag>
              <Tag tone="info" icon={<Icon src={infoIcon} size={12} />}>INC</Tag><Tag tone="warning">Immediate action needed</Tag>
            </State>
          </Demo>
          <Demo title="TrendTag" figma="Card Tag">
            <State label="positive / negative">
              <TrendTag tone="positive">Agent Forecast: $28M</TrendTag><TrendTag tone="negative">Agent Forecast: $238M</TrendTag>
            </State>
          </Demo>
          <Demo title="Avatar" figma="Avatar · 5020:10761">
            <State label="l positive / l warning / s neutral">
              <Avatar tone="positive" icon={<Icon src={accept} size={18} />} />
              <Avatar tone="warning" icon={<Icon src={warningWarning} size={18} />} />
              <Avatar size="s" icon={<Icon src={accept} size={16} />} />
            </State>
          </Demo>
          <Demo title="MessageStrip" figma="Message Strip (warning)">
            <MessageStrip>The following KPIs will be permanently deleted if the planning model or account dimension is changed.</MessageStrip>
          </Demo>
          <Demo title="LoadingIndicator / StepList" figma="Loading Indicator · Data List Item">
            <StepList label="Example sequence" steps={[{ label: 'Done step', state: 'done' }, { label: 'Active step', state: 'active' }, { label: 'Pending step', state: 'pending' }]} />
            <State label="joule"><LoadingIndicator tone="joule" label="Typing" /></State>
          </Demo>
        </Block>

        <Block id="cards-kpis" title="Cards & KPIs">
          <Demo title="Card" figma="Card / _Card Header / _Card Footer" wide>
            <div className={styles.cardsRow}>
              <Card title="Avatar header" subtitle="Subtitle" leading={<Avatar tone="warning" icon={<Icon src={warningWarning} size={18} />} />}>
                <p className="t-body">Default state</p>
              </Card>
              <Card title="Selected" subtitle="state=selected" state="selected" footer={<Button variant="transparent">Preview</Button>}>
                <p className="t-body">With footer</p>
              </Card>
              <Card title="Interactive" state="interactive"><p className="t-body">Hover for Shadow/S</p></Card>
            </div>
          </Demo>
          <Demo title="KpiTile" figma="Card KPI & Status" wide>
            <div className={styles.cardsRow}>
              <KpiTile trend="up-positive" prefix="+$" value="77" unit="M" label="Positive, with trend" forecast={{ tone: 'positive', text: 'Agent Forecast: $28M' }} />
              <KpiTile prefix="+$" value="31" unit="M" label="Critical" forecast={{ tone: 'negative', text: 'Agent Forecast: $238M' }} status={<Tag tone="negative">Critical</Tag>} />
              <KpiTile trend="up-negative" value="238" unit="M" label="Negative trend marker" />
              <KpiTile value="50" unit="M" label="Plain value" />
            </div>
          </Demo>
          <Demo title="KpiHeader (SAC)" figma="KPIs Header · 5034:19505" wide>
            <KpiHeader kpis={planKpis} />
          </Demo>
          <Demo title="Field / FieldGrid" figma="Card Text Block">
            <FieldGrid>
              <Field label="Name" value="Concert Revenue Opportunity" />
              <Field label="Business Drivers" value={['Ticket sales uplift', 'Venue capacity optimisation']} />
            </FieldGrid>
            <Divider />
          </Demo>
        </Block>

        <Block id="lists-tables" title="Lists & tables">
          <Demo title="ActionItem" figma="Object List Item">
            <ActionList>
              <ActionItem title="Assess Skill Gap" description="Open status" status="open" action={<Button>Open Space</Button>} />
              <ActionItem title="Asses FX Risk Exposure" description="Completed status" status="completed" action={<Button>Open Space</Button>} />
            </ActionList>
          </Demo>
          <Demo title="Table (Spaces)" figma="Table · 5151:50101">
            <Table caption="Example" columns={[{ key: 'kpi', header: 'KPI' }, { key: 'risk', header: 'Risk' }]} rows={[{ kpi: 'FFA1/08', risk: 'Will be deleted' }]} />
          </Demo>
          <Demo title="PivotTable (SAC) — expandable rows, highlighted group" figma="Table / .Table Cells" wide>
            <SacCard title="Strategy for the combined plan">
              <PivotTable title="Q4 2026" groups={groups} measures={measures} rows={planRows.slice(0, 7)} highlightGroup="Group" />
            </SacCard>
          </Demo>
        </Block>

        <Block id="charts" title="Charts">
          <Demo title='LineChart — appearance="axis"' figma="Operating Expenses chart · 5150:45789" wide>
            <OpexChartCard />
          </Demo>
          <Demo title='LineChart — appearance="plain"' figma="Driver - Staffing Cost · 3268:4951" wide>
            <LineChart title="Staffing cost" categories={['Fourth Quarter\n2025', 'First Quarter\n2026', 'Second Quarter\n2026', 'Third Quarter\n2026']}
              domain={[15.68, 19.51]} height={240} formatValue={v => v.toFixed(3)}
              series={[
                { name: 'Actuals', color: 'var(--color-chart-2)', values: [18.021, 17.911, null, null], legendIcon: { src: symbolOrange, width: 16, height: 16 } },
                { name: 'Plan', color: 'var(--color-chart-1)', values: [18.201, 18.112, 18.616, 18.667], legendIcon: { src: symbolBlue, width: 16, height: 16 } },
                { name: 'Forecast', color: 'var(--color-chart-5)', marker: 'diamond', values: [null, null, 17.798, 16.408], lineStart: { index: 1, value: 17.911 }, legendIcon: { src: symbolDiamond, width: 16, height: 16 } },
              ]} />
          </Demo>
        </Block>

        <Block id="navigation-shell" title="Navigation & shell">
          <Demo title="MainNavigation" figma="Main Navigation (Product Truth / Vision)">
            <div className={styles.navDemo}><MainNavigation /><MainNavigation set="vision" unreadNotifications={false} /></div>
          </Demo>
          <Demo title="PaneBar" figma="Pane Bar (A / B / C)" wide>
            <State label="default, chat closed"><div className={styles.barDemo}><PaneBar breadcrumb={['Spaces', 'Operating Expenses — Variance Resolution']} artifact="Operating Expenses Overview" /></div></State>
            <State label="chat open (pressed)"><div className={styles.barDemo}><PaneBar breadcrumb={['Spaces', 'Example']} artifact="Overview" chatOpen /></div></State>
            <State label="compact"><div className={styles.barDemo}><PaneBar breadcrumb={['Spaces', 'Example']} artifact="Overview" density="compact" /></div></State>
          </Demo>
          <Demo title="PageHeader / SectionHeader" figma="Page Header · Section Header">
            <PageHeader title="Skill Gap Analysis" subtitle="Updated just now" />
            <SectionHeader title="Expanded section" />
            <SectionHeader title="Collapsed section" expanded={false} />
          </Demo>
          <Demo title="Shellbar (SAC)" figma="Showcase Shellbar · 5034:18843" wide>
            <Shellbar /><Shellbar jouleActive />
          </Demo>
          <Demo title="Toolbar (SAC)" figma="Showcase Card Header icons" wide>
            <Toolbar label="Example toolbar">
              <ToolbarGroup><Button family="sac" size="compact" variant="secondary">Submit for Review</Button></ToolbarGroup>
              <ToolbarSeparator />
              <IconButton icon={edit} iconSize={16} label="Edit" />
            </Toolbar>
          </Demo>
        </Block>

        <Block id="overlays-feedback" title="Overlays & feedback">
          <Demo title="Dialog" figma="Modal · 5077:31910">
            <Button family="sac" variant="emphasized" onClick={() => setDialog(true)}>Open dialog</Button>
            <Dialog open={dialog} title="Full Consolidation" onClose={() => setDialog(false)}>
              <p className="t-nav-medium-xl">Consolidation Sequence is in process.</p>
              <StepList label="Sequence" steps={[{ label: 'Currency Conversion', state: 'done' }, { label: 'Eliminations', state: 'active' }, { label: 'Group Minority', state: 'pending' }]} />
            </Dialog>
          </Demo>
          <Demo title="Toast" figma="Message Toast · 5077:34483">
            <Button family="sac" variant="secondary" onClick={() => setToast('Consolidation completed successfully.')}>Show toast</Button>
            <Toast message={toast} onDismiss={() => setToast(null)} />
          </Demo>
        </Block>

        <Block id="joule" title="Joule">
          <Demo title="JouleInput — wide with chip" figma="Joule Input · Size=Wide" wide>
            <JouleInput variant="wide" placeholder="Can I help with anything else?" chip="Space" />
          </Demo>
          <Demo title="JouleInput — narrow with context, filled" figma="Joule Input · Size=Narrow, Context Area" >
            <JouleInput variant="narrow" context="Execution Risk" defaultValue="Show me the underlying configuration this warning is based on." />
          </Demo>
          <Demo title="JouleInput — narrow empty / compact idle" figma="Joule Input · State=Idle">
            <JouleInput variant="narrow" />
            <JouleInput variant="compact" chip="Space" showNotice={false} />
          </Demo>
          <Demo title="Conversation" figma="Messages / Message Content / Action Container">
            <MessageList>
              <Timestamp day="Yesterday" time="8:44 AM" />
              <UserMessage>Show me the underlying configuration this warning is based on.</UserMessage>
              <JouleMessage><ProgressSteps steps={progressSteps} /></JouleMessage>
              <JouleMessage><p>{chatAnswer.intro}</p><ReplyList items={chatAnswer.items.slice(0, 1)} /><ResponseActions sources={3} /></JouleMessage>
            </MessageList>
          </Demo>
          <Demo title="JoulePanel (SAC)" figma="Joule - New Campaign · 5114:12435">
            <JoulePanel className={styles.panelDemo} timestamp={{ day: 'Today', time: '8:00 AM' }}
              messages={[{ kind: 'user', text: 'Update the financial outlook chapter.' }, { kind: 'joule', text: 'XXX' }, { kind: 'quick-reply', text: 'X' }, { kind: 'typing' }]} />
          </Demo>
        </Block>
      </main>
    </div>
  )
}
