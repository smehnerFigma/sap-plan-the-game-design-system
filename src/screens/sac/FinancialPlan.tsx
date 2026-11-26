import { useCallback, useEffect, useState } from 'react'
import { Button, Dialog, KpiHeader, PivotTable, SacCard, SacHeader, Shellbar, StepList, Toast } from '../../components'
import type { StepState } from '../../components/StepList/StepList'
import { consolidatedRows, consolidationSteps, groups, measures, planKpis, planRows } from '../data/sac'
import styles from './sac.module.css'

/**
 * Figma screens 7–10 (5022:14259, 5076:21758, 5077:33318, 5091:43484):
 * 2026 Financial Plan → Full Consolidation dialog → consolidated (Group highlighted) → published.
 * Controlled: the stage comes from the route; transitions are reported via onStageChange.
 */
export type PlanStage = 'plan' | 'consolidating' | 'consolidated' | 'published'

const toastFor: Partial<Record<PlanStage, string>> = {
  consolidated: 'Consolidation completed successfully.',
  published: 'Data published successfully.',
}

export interface FinancialPlanProps {
  stage: PlanStage
  onStageChange: (stage: PlanStage) => void
  onOpenJoule?: () => void
  homeHref?: string
}

export function FinancialPlan({ stage, onStageChange, onOpenJoule, homeHref }: FinancialPlanProps) {
  // The sequence only runs when consolidation was started here (a directly opened dialog frame stays static).
  const [running, setRunning] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [toast, setToast] = useState<string | null>(toastFor[stage] ?? null)

  const go = useCallback((next: PlanStage) => {
    setToast(null)
    onStageChange(next)
    // Announce after the route change has rendered (and the modal has closed), not in the same frame.
    const message = toastFor[next]
    if (message) window.setTimeout(() => setToast(message), 150)
  }, [onStageChange])

  // Advance the consolidation sequence (timing inferred — Figma shows a single frame).
  useEffect(() => {
    if (stage !== 'consolidating' || !running) return
    const t = window.setTimeout(() => {
      if (activeStep < consolidationSteps.length - 1) setActiveStep(s => s + 1)
      else { setRunning(false); go('consolidated') }
    }, 1400)
    return () => window.clearTimeout(t)
  }, [stage, activeStep, running, go])

  const dismiss = useCallback(() => setToast(null), [])
  const consolidated = stage === 'consolidated' || stage === 'published'
  const steps = consolidationSteps.map((label, i) => ({
    label,
    state: (i < activeStep ? 'done' : i === activeStep ? 'active' : 'pending') as StepState,
  }))

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Shellbar homeHref={homeHref} onJoule={onOpenJoule} />
        <SacHeader
          title="2026 Financial Plan"
          actions={
            // One persistent button (label changes) so the closing modal can return focus to it.
            <Button
              variant="emphasized"
              family="sac"
              disabled={stage === 'consolidating'}
              onClick={consolidated
                ? () => go('published')
                : () => { setActiveStep(1); setRunning(true); go('consolidating') }}
            >
              {consolidated ? 'Publish Data' : 'Consolidate'}
            </Button>
          }
        >
          <KpiHeader kpis={planKpis} />
        </SacHeader>
      </header>
      <main className={styles.content}>
        <SacCard title="Strategy for the combined plan" className={styles.fill}>
          <PivotTable
            title="Q4 2026"
            groups={groups}
            measures={measures}
            rows={consolidated ? consolidatedRows : planRows}
            highlightGroup={consolidated ? 'Group' : undefined}
            maxHeight={612}
          />
        </SacCard>
      </main>
      {/* Figma places the modal at y=367 in the 1080 frame (34vh), slightly below centre. */}
      <Dialog open={stage === 'consolidating'} top="34vh" title="Full Consolidation" onClose={() => { setRunning(false); go('plan') }}>
        <p className={`t-nav-medium-xl ${styles.core}`}>Consolidation Sequence is in process.</p>
        <StepList label="Consolidation sequence" steps={steps} />
      </Dialog>
      <Toast message={toast} onDismiss={dismiss} />
    </div>
  )
}
