import type { HeaderKpi } from '../../components/KpiHeader/KpiHeader'
import type { PivotRow } from '../../components/PivotTable/PivotTable'

/** KPI values copied verbatim from Figma (incl. comma decimals). */
export const planKpis: HeaderKpi[] = [
  { title: 'Net Revenue', subline: '2026 Projection', value: '8,043', trend: 'up', delta: '-5%' },
  { title: 'Cost of Goods Sold', subline: '2026 Projection', value: '3,143', trend: 'down', delta: '+13,7%' },
  { title: 'Operating Income', subline: '2026 Projection', value: '2,865', trend: 'down', delta: '-24,96%' },
  { title: 'Operating Profit Margin', subline: '2026 Projection', value: '35.65%', trend: 'down', delta: '-9%' },
  { title: 'Cash Flow', subline: '2026 Projection', value: '3,281%', trend: 'down', delta: '-22,51%' },
]

export const groups = ['US', 'Canada', 'UK', 'Group']
export const measures = ['Plan', 'Agent Forecast']

const v = (overrides: Record<number, number> = {}) => Array.from({ length: 8 }, (_, i) => overrides[i] ?? 123)

/** Screen 08: before consolidation (12 rows). barWidth = Figma's hand-drawn bar widths (px). */
export const planRows: PivotRow[] = [
  { id: 'gp', label: 'Gross Profit', values: v(), variance: 3.0, barWidth: 24 },
  { id: 'nr', label: 'Net Revenue', values: v({ 1: 390, 3: 55, 5: 95, 7: 540 }), variance: 0 },
  { id: 'cogs', label: 'COGs', values: v(), variance: -0.9, barWidth: 7 },
  { id: 'edc', label: 'Event Delivery Costs', parent: 'cogs', values: v(), variance: -6.2, barWidth: 62 },
  { id: 'pc', label: 'Procurement Costs', parent: 'cogs', values: v(), variance: 0 },
  { id: 'voc', label: 'Venue Operating Costs', parent: 'cogs', values: v(), variance: -1.3, barWidth: 11 },
  { id: 'te', label: 'Travel Expenses', values: v(), variance: -1.3, barWidth: 11 },
  { id: 'opex', label: 'Operating Expenses', values: v(), variance: -0.3, barWidth: 4 },
  { id: 'we', label: 'Workforce Expenses', parent: 'opex', values: v(), variance: 0 },
  { id: 'fe', label: 'Facility Expenses', parent: 'opex', values: v(), variance: -2.7, barWidth: 18 },
  { id: 'cs', label: 'Corporate Services', parent: 'opex', values: v(), variance: 0 },
  { id: 'ic', label: 'Intercompany Charges', parent: 'opex', values: v(), variance: 5.4, barWidth: 60 },
]

/** Screens 10/11: after consolidation — Travel Expenses moves under COGs, new Tariffs row, Group AF 530. */
export const consolidatedRows: PivotRow[] = [
  planRows[0],
  { ...planRows[1], values: v({ 1: 390, 3: 55, 5: 95, 7: 530 }) },
  planRows[2], planRows[3], planRows[4], planRows[5],
  { ...planRows[6], parent: 'cogs' },
  { id: 'tar', label: 'Tariffs', parent: 'cogs', values: v(), variance: -1.3, barWidth: 11 },
  ...planRows.slice(7),
]

export const consolidationSteps = ['Currency Conversion', 'BS  + PL Elminations', 'Investment Eliminations', 'Group Minority']

export const disclosureTabs = ['Editing', 'Tagging', 'Consolidating', 'Commenting', 'Versioning']
export const structure = [
  'Financial Results', 'Financial Outlook', '(H.1) Segment Policies and Changes', 'SAP Performance Measures',
  'SX months ended June 2026', ...Array.from({ length: 10 }, () => 'List item'),
]
