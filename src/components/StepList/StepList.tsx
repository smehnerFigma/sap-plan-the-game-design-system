import acceptText from '../../assets/icons/accept-text.svg'
import { Icon } from '../Icon/Icon'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'
import { cx } from '../../utils/cx'
import styles from './StepList.module.css'

export type StepState = 'done' | 'active' | 'pending'

export interface StepListProps {
  label: string
  steps: Array<{ label: string; state: StepState }>
}

const stateText: Record<StepState, string> = { done: 'Completed', active: 'In progress', pending: 'Pending' }

/** Consolidation sequence (Figma "Data List Item" ×4 inside the Modal). */
export function StepList({ label, steps }: StepListProps) {
  return (
    <ol className={styles.list} aria-label={label} aria-live="polite">
      {steps.map(s => (
        <li key={s.label} className={cx(styles.item, styles[s.state])} aria-current={s.state === 'active' ? 'step' : undefined}>
          <span className={styles.icon}>
            {s.state === 'done' && <Icon src={acceptText} size={18} />}
            {s.state === 'active' && <LoadingIndicator label={null} />}
          </span>
          <span className="t-body-s">{s.label}</span>
          <span className="visually-hidden">, {stateText[s.state]}</span>
        </li>
      ))}
    </ol>
  )
}
