import type { ReactNode } from 'react'
import type { NavKey } from '../components/MainNavigation/MainNavigation'
import { ImpactAnalysis, ImpactAnalysisFollowUp, type ChatStage } from './spaces/ImpactAnalysis'
import { SkillGap } from './spaces/SkillGap'
import { FinancialPlan, type PlanStage } from './sac/FinancialPlan'
import { DisclosureManagement } from './sac/DisclosureManagement'

export type Slug =
  | 'impact-analysis' | 'impact-analysis-context' | 'impact-analysis-thinking' | 'impact-analysis-answered'
  | 'skill-gap' | 'skill-gap-strategies' | 'impact-analysis-follow-up'
  | 'financial-plan' | 'financial-plan-consolidating' | 'financial-plan-consolidated' | 'financial-plan-published'
  | 'disclosure-management'

/** First screen of the prototype; every app load starts here. */
export const startSlug: Slug = 'impact-analysis'

/** Navigation helpers handed to each screen. */
export interface Flow {
  go: (slug: Slug) => void
  href: (slug: Slug) => string
}

export interface ScreenEntry {
  slug: Slug
  title: string
  family: 'Spaces (Joule)' | 'SAP Analytics Cloud'
  /**
   * Screens in the same group are states of one mounted component, so in-flow transitions
   * (typing, animations, scroll) carry over instead of remounting.
   */
  group: string
  /** Figma node id of the frame. */
  node: string
  /** Width of the Figma frame (the Skill Gap frames are 1941px wide). Default 1920. */
  frameWidth?: number
  render: (flow: Flow) => ReactNode
}

const chatSlug: Record<ChatStage, Slug> = {
  closed: 'impact-analysis', context: 'impact-analysis-context', thinking: 'impact-analysis-thinking', answered: 'impact-analysis-answered',
}
const chatStage = Object.fromEntries(Object.entries(chatSlug).map(([k, v]) => [v, k])) as Record<string, ChatStage>
const planSlug: Record<PlanStage, Slug> = {
  plan: 'financial-plan', consolidating: 'financial-plan-consolidating', consolidated: 'financial-plan-consolidated', published: 'financial-plan-published',
}
const planStage = Object.fromEntries(Object.entries(planSlug).map(([k, v]) => [v, k])) as Record<string, PlanStage>

/** Main navigation: "Spaces" returns to the entry space. */
const navTo = (flow: Flow) => (key: NavKey) => { if (key === 'spaces') flow.go('impact-analysis') }

const impact = (slug: Slug) => (flow: Flow) => (
  <ImpactAnalysis
    stage={chatStage[slug]}
    onStageChange={s => flow.go(chatSlug[s])}
    onOpenSpace={t => t === 'Assess Skill Gap' && flow.go('skill-gap')}
    onNavigate={navTo(flow)}
  />
)
const skillGap = (open: boolean) => (flow: Flow) => (
  <SkillGap
    solutionsOpen={open}
    onViewSolutions={() => flow.go('skill-gap-strategies')}
    onApply={() => flow.go('impact-analysis-follow-up')}
    breadcrumbHrefs={[undefined, flow.href('impact-analysis')]}
    onNavigate={navTo(flow)}
  />
)
const plan = (slug: Slug) => (flow: Flow) => (
  <FinancialPlan
    stage={planStage[slug]}
    onStageChange={s => flow.go(planSlug[s])}
    onOpenJoule={() => flow.go('disclosure-management')}
    homeHref={flow.href('financial-plan')}
  />
)

export const screens: ScreenEntry[] = [
  { slug: 'impact-analysis', title: 'Impact Analysis', family: 'Spaces (Joule)', group: 'impact', node: '3256:3446', render: impact('impact-analysis') },
  { slug: 'impact-analysis-context', title: 'Impact Analysis — Joule with context', family: 'Spaces (Joule)', group: 'impact', node: '5146:22684', render: impact('impact-analysis-context') },
  { slug: 'impact-analysis-thinking', title: 'Impact Analysis — Joule thinking', family: 'Spaces (Joule)', group: 'impact', node: '5150:41723', render: impact('impact-analysis-thinking') },
  { slug: 'impact-analysis-answered', title: 'Impact Analysis — configuration added', family: 'Spaces (Joule)', group: 'impact', node: '5150:45269', render: impact('impact-analysis-answered') },
  { slug: 'skill-gap', title: 'Skill Gap Analysis', family: 'Spaces (Joule)', group: 'skill-gap', node: '3265:11043', frameWidth: 1941, render: skillGap(false) },
  { slug: 'skill-gap-strategies', title: 'Skill Gap Analysis — strategies', family: 'Spaces (Joule)', group: 'skill-gap', node: '3356:7494', frameWidth: 1941, render: skillGap(true) },
  { slug: 'impact-analysis-follow-up', title: 'Impact Analysis — actions completed', family: 'Spaces (Joule)', group: 'follow-up', node: '5026:17511',
    render: flow => (
      <ImpactAnalysisFollowUp
        onNavigate={navTo(flow)}
        onAction={t => {
          if (t === 'Initiate Forecast Process') flow.go('financial-plan')
          else if (t === 'Assess Skill Gap') flow.go('skill-gap-strategies')
        }}
      />
    ) },
  { slug: 'financial-plan', title: '2026 Financial Plan', family: 'SAP Analytics Cloud', group: 'plan', node: '5022:14259', render: plan('financial-plan') },
  { slug: 'financial-plan-consolidating', title: 'Full Consolidation dialog', family: 'SAP Analytics Cloud', group: 'plan', node: '5076:21758', render: plan('financial-plan-consolidating') },
  { slug: 'financial-plan-consolidated', title: 'Consolidation completed', family: 'SAP Analytics Cloud', group: 'plan', node: '5077:33318', render: plan('financial-plan-consolidated') },
  { slug: 'financial-plan-published', title: 'Data published', family: 'SAP Analytics Cloud', group: 'plan', node: '5091:43484', render: plan('financial-plan-published') },
  { slug: 'disclosure-management', title: 'Disclosure Management + Joule', family: 'SAP Analytics Cloud', group: 'disclosure', node: '5080:42295',
    render: flow => <DisclosureManagement homeHref={flow.href('financial-plan-published')} onCloseJoule={() => flow.go('financial-plan-published')} /> },
]
