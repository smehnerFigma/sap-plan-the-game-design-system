/** Content copied from the Figma screens (typos such as "Asses" / "Assement" kept as in the source). */

export const breadcrumbImpact = ['Spaces', 'Operating Expenses — Variance Resolution']
export const breadcrumbSkillGap = [...breadcrumbImpact, 'Skill Gap Analysis']

export const impactTitle = 'Concert Revenue Opportunity - Impact Analysis'

export const opportunity = {
  title: 'New revenue opportunity to host additional concert series',
  drivers:
    'A major competing stadium operator experiences an unforeseen situation where extreme weather has made it impossible for them to host a key event. Our company was the second company on the bid and the opportunity is identified by the steering agent.',
  kpis: [
    { prefix: '+$', value: '77', unit: 'M', label: 'Operating Profit Impact for Q3 2026, Q4 2026', forecast: 'Agent Forecast: $28M' },
    { prefix: '+', value: '9.7', unit: '%', label: 'Operating Margin Impact for Q3 2026, Q4 2026', forecast: 'Agent Forecast: 25.7%' },
    { prefix: '+$', value: '110', unit: 'M', label: 'Forecast Variance to Plan for Q3 2026, Q4 2026', forecast: 'Agent Forecast: $410M' },
  ],
}

export const executionRisk = {
  title: 'Execution Risk',
  drivers:
    'Accepting the event requires additional capacity. Current plans indicate potential gaps that could affect profitability by $14,000,000.00 profit at risk.',
  kpis: [
    { prefix: '+$', value: '31', unit: 'M', label: 'Workforce Expense Increase for Q3 2026, Q4 2026', forecast: 'Agent Forecast: $238M' },
    { prefix: '+', value: '3', unit: '%', label: 'Exchange Rate Exposure for Q3 2026, Q4 2026', forecast: 'Agent Forecast: $28M' },
    { prefix: '+$', value: '6', unit: 'M', label: 'Procurement Cost Variance for Q3 2026, Q4 2026', forecast: 'Agent Forecast: $28M' },
  ],
}

export const recommendedActions = [
  { title: 'Assess Skill Gap', description: 'The additional events require increased staffing.', action: 'Open Space' },
  { title: 'Asses FX Risk Exposure', description: 'Recent increase in USD volatility presents a material downside risk.', action: 'Open Space' },
  { title: 'Address Accelerated Procurement', description: 'TODO', action: 'Open Space' },
  { title: 'Initiate Forecast Process', description: 'Create private forecast version in SAP Business Data Cloud and share with workforce operations and treasury.', action: 'Initiate Consolidation' },
]

export const opexChart = {
  title: 'Operating Expenses',
  subtitle: 'Variance Detected between Plan and Agentic Forecast',
  drivers: ['Workforce Expense Increase', 'Exchange Rate Exposure', 'Procurement Cost Variant'],
  categories: ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'],
}

export const configuration = {
  general: [
    { label: 'Name', value: 'Concert Revenue Opportunity - Impact Analysis' },
    { label: 'Description', value: 'Revenue impact analysis for concert event portfolio across EMEA profit centers' },
    { label: 'Created by', value: 'system-internal' },
    { label: 'Last Edited', value: 'Sep 22, 2026, 3:52:41PM' },
  ],
  businessDrivers: ['Ticket sales uplift', 'Venue capacity optimisation', 'Sponsorship revenue growth'],
  additionalContext: 'Focus on Q4 2026 touring season, European market expansion',
  kpiSetup: [
    { label: 'Planning Model', value: 'SAP_FI_FPA_IM_S4_Finance_Planning' },
    { label: 'Look Back', value: '12 Months' },
    { label: 'Look Ahead', value: '6 Months' },
    { label: 'Measure', value: 'Row_Opening_LC' },
    { label: 'Account Dimension', value: 'SAP_XPA_ACCOUNT' },
    { label: 'KPI', value: 'FFA1/08' },
    { label: 'Hierarchy', value: 'Finance' },
  ],
}

export const chatQuestion = 'Show me the underlying configuration this warning is based on.'
export const chatAnswer = {
  intro: 'Sure. I added three cards in a new section called “Configuration Information” that display the configuration created in SAP Analytics Cloud.',
  items: [
    { title: 'Configuration overview', body: 'Chronos Pro return rate has spiked to 22% (+12%) from the baseline of 10% derived from historical performance and comparable products.' },
    { title: 'KPIs at Risk of Deletion', body: 'Chronos Pro return rate has spiked to 22% (+12%) from the baseline of 10% derived from historical performance and comparable products.' },
  ],
}
export const progressSteps = [
  { label: 'Analyzing your request...', state: 'completed' as const },
  { label: 'Reading the UI context...', state: 'completed' as const },
  { label: 'Calling the MCP tool...', state: 'completed' as const },
  { label: 'Decomposing it into 2 focused cards...', state: 'loading' as const },
]

export const skillGap = {
  title: 'Skill Gap Identified through additional concert opportunity',
  subtitle: 'More specialists required',
  lead: 'More staff required for additional concerts',
  body: 'GSVG identifies a 22% shortfall in critical event skills. To close the gap, experienced tournament personnel are redeployed from Mexico and Europe, supported by targeted hiring and accelerated training. These actions increase Skills Gap Coverage from 78% to 96%, reduce contractor dependence, and help protect the forecasted £57M profit opportunity.',
  workforceDrivers: 'Increasing contingency workforce needs and FX rate exposure risks are effecting the forecast for operating expenses forecast.',
}

export const quarters = ['Fourth Quarter\n2025', 'First Quarter\n2026', 'Second Quarter\n2026', 'Third Quarter\n2026']

export const strategies = [
  {
    title: 'Maintain Existing Workforce Plan',
    revenue: { prefix: '$', value: '18' }, labor: { prefix: '$', value: '2' }, profit: { prefix: '+$', value: '16' },
    risks: ['Some event opportunities cannot be serviced.', 'Potential customer experience issues.'],
  },
  {
    title: 'Moderate Workforce Expansion',
    revenue: { prefix: '$', value: '25' }, labor: { prefix: '$', value: '5' }, profit: { prefix: '+$', value: '20' },
    risks: ['Moderate hiring effort.', 'Could also imply intercompany', 'Capacity sufficient for most expected demand.'],
  },
  {
    title: 'Aggressive Workforce Expansion',
    revenue: { prefix: '$', value: '30' }, labor: { prefix: '$', value: '8' }, profit: undefined,
    risks: ['Moderate hiring effort.', 'Could also imply intercompany'],
  },
]
