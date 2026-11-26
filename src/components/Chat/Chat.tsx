import { useState, type ReactNode } from 'react'
import copy from '../../assets/icons/copy-tertiary.svg'
import thumbUp from '../../assets/icons/thumb-up-tertiary.svg'
import thumbDown from '../../assets/icons/thumb-down-tertiary.svg'
import refresh from '../../assets/icons/refresh-tertiary.svg'
import lightbulb from '../../assets/icons/lightbulb-tertiary.svg'
import acceptTertiary from '../../assets/icons/accept-tertiary.svg'
import busyDot from '../../assets/icons/busy-indicator-dot.svg'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './Chat.module.css'

/** Message list container (Figma "Messages"): column, gap 24. Live region for new messages. */
export function MessageList({ children, label = 'Conversation' }: { children: ReactNode; label?: string }) {
  return <div role="log" aria-label={label} aria-live="polite" className={styles.list}>{children}</div>
}

/** Centered timestamp ("Yesterday 8:44 AM"). */
export function Timestamp({ day, time }: { day: string; time: string }) {
  return <p className={cx('t-caption', styles.timestamp)}><span>{day}</span><span>{time}</span></p>
}

/** Figma "Chat Bubble" — user message, right aligned, radius 16 16 2 16. */
export function UserMessage({ children }: { children: ReactNode }) {
  return (
    <div className={styles.userRow}>
      <p className={cx('t-body-strong', styles.userBubble)}><span className="visually-hidden">You: </span>{children}</p>
    </div>
  )
}

/** Joule reply content — no bubble, Body text, can contain lists. */
export function JouleMessage({ children }: { children: ReactNode }) {
  return <div className={cx('t-body', styles.reply)}><span className="visually-hidden">Joule: </span>{children}</div>
}

/** Numbered reply section list ("1. Configuration overview"). */
export function ReplyList({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <ol className={styles.replyList}>
      {items.map(i => (
        <li key={i.title}>
          <span className="t-title-strong">{i.title}</span>
          <p className={cx('t-body', styles.replySub)}>{i.body}</p>
        </li>
      ))}
    </ol>
  )
}

/** Figma "Action Container" under a Joule reply. */
export function ResponseActions({ sources }: { sources?: number }) {
  const [vote, setVote] = useState<'up' | 'down' | null>(null)
  const btn = (icon: string, label: string, extra?: object) => (
    <button type="button" className={styles.actionBtn} aria-label={label} title={label} {...extra}>
      <Icon src={icon} size={16} />
    </button>
  )
  return (
    <div className={styles.actions} role="group" aria-label="Response actions">
      {btn(copy, 'Copy')}
      {btn(thumbUp, 'Good response', { 'aria-pressed': vote === 'up', onClick: () => setVote(v => v === 'up' ? null : 'up') })}
      {btn(thumbDown, 'Bad response', { 'aria-pressed': vote === 'down', onClick: () => setVote(v => v === 'down' ? null : 'down') })}
      {btn(refresh, 'Regenerate')}
      {btn(lightbulb, 'Show reasoning')}
      {sources != null && (
        <button type="button" className={styles.sources} aria-label={`Sources, ${sources}`}>
          <span className={styles.sourcesText}>Sources</span>
          <span className={cx('t-body-2', styles.badge)}>{sources}</span>
        </button>
      )}
    </div>
  )
}

export interface ProgressStep { label: string; state: 'completed' | 'loading' }

/** Figma "Explainability Progress Steps" + "Animated Busy Indicator". */
export function ProgressSteps({ steps }: { steps: ProgressStep[] }) {
  return (
    <ul className={styles.steps} aria-label="Joule progress" aria-live="polite">
      {steps.map(s => (
        <li key={s.label} className={cx('t-body', styles.step, s.state === 'loading' && styles.stepLoading)} aria-busy={s.state === 'loading' || undefined}>
          <span className={styles.stepIndicator}>
            {s.state === 'completed'
              ? <Icon src={acceptTertiary} size={16} />
              : (
                <span className={styles.busy} aria-hidden="true">
                  {[0, 1, 2].map(i => <img key={i} src={busyDot} width={2.286} height={2.286} alt="" style={{ animationDelay: `${i * 0.2}s` }} />)}
                </span>
              )}
          </span>
          <span>{s.label}</span>
          <span className="visually-hidden">{s.state === 'completed' ? ', completed' : ', in progress'}</span>
        </li>
      ))}
    </ul>
  )
}
