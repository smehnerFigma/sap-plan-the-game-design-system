import { JouleInput, PageHeader, Section, SpacesLayout } from '../../components'
import type { NavKey } from '../../components/MainNavigation/MainNavigation'
import { breadcrumbSkillGap } from '../data/spaces'
import { ImpactChartCard, SkillGapCard, StaffingChartCard, StrategyPanel, WorkforceCard } from './parts'
import styles from './parts.module.css'

export interface SkillGapProps {
  /** Strategy panel open (Figma 3356:7494) vs closed (3265:11043). */
  solutionsOpen: boolean
  onViewSolutions: () => void
  onApply?: (strategy: string) => void
  /** Breadcrumb segment → route href. */
  breadcrumbHrefs?: Array<string | undefined>
  onNavigate?: (key: NavKey) => void
}

/** Figma screens 4–5 (3265:11043, 3356:7494): Skill Gap Analysis, optionally with the strategy panel open. */
export function SkillGap({ solutionsOpen, onViewSolutions, onApply, breadcrumbHrefs, onNavigate }: SkillGapProps) {
  return (
    <SpacesLayout
      nav={{ onNavigate }}
      paneBar={{ breadcrumb: breadcrumbSkillGap, breadcrumbHrefs, artifact: 'Workforce Expense Analysis' }}
      prompt={<JouleInput variant="wide" placeholder="Can I help with anything else?" chip="Space" />}
    >
      <PageHeader title="Skill Gap Analysis" subtitle="Updated just now" />
      <Section title={solutionsOpen ? 'Workforce Expense Analysis' : 'Operating Expenses Overview'} gap={26}>
        <div className={styles.halves}>
          <SkillGapCard solutionsOpen={solutionsOpen} onViewSolutions={onViewSolutions} />
          <WorkforceCard />
        </div>
        {solutionsOpen && <StrategyPanel onApply={onApply} />}
        <StaffingChartCard currency={solutionsOpen ? 'MXN' : 'USD'} />
        <ImpactChartCard />
      </Section>
    </SpacesLayout>
  )
}
