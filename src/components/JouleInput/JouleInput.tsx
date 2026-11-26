import { useId, useState, type FormEvent, type KeyboardEvent } from 'react'
import addJoule from '../../assets/icons/add-joule.svg'
import arobaseJoule from '../../assets/icons/arobase-joule.svg'
import paperPlaneJoule from '../../assets/icons/paper-plane-joule.svg'
import spacesJoule12 from '../../assets/icons/spaces-joule-12.svg'
import declineJoule12 from '../../assets/icons/decline-joule-12.svg'
import headerBrand from '../../assets/icons/header-brand.svg'
import declineBrand from '../../assets/icons/decline-brand.svg'
import addBrand12 from '../../assets/icons/add-brand-12.svg'
import arobaseBrand12 from '../../assets/icons/arobase-brand-12.svg'
import spaces12 from '../../assets/icons/spaces-12.svg'
import paperPlaneWhite12 from '../../assets/icons/paper-plane-white-12.svg'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './JouleInput.module.css'

export interface JouleInputProps {
  /**
   * "wide" — floating prompt (Set A Size=Wide, 752px) · "narrow" — right pane (Set A Size=Narrow)
   * · "compact" — empty-state prompt (Set B State=Idle) with pills and filled send button.
   */
  variant?: 'wide' | 'narrow' | 'compact'
  placeholder?: string
  /** Context header above the field ("Execution Risk ×"). Narrow only. */
  context?: string
  onRemoveContext?: () => void
  /** Inline context chip ("Space") — dismissible tag (wide) or pill (compact). */
  chip?: string
  onRemoveChip?: () => void
  /** Controlled value (optional). */
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSend?: (value: string) => void
  /** "Joule uses AI, verify results." */
  showNotice?: boolean
  className?: string
}

/** Figma "Joule Input" — gradient-ringed AI prompt with attachment, mention, context and send. */
export function JouleInput({
  variant = 'wide', placeholder = 'Message Joule...', context, onRemoveContext, chip, onRemoveChip,
  value, defaultValue = '', onChange, onSend, showNotice = true, className,
}: JouleInputProps) {
  const [inner, setInner] = useState(defaultValue)
  const text = value ?? inner
  const noticeId = useId()
  const set = (v: string) => { if (value === undefined) setInner(v); onChange?.(v) }
  const canSend = text.trim().length > 0
  const submit = (e?: FormEvent) => {
    e?.preventDefault()
    if (!canSend) return
    onSend?.(text.trim())
    set('')
  }
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() }
  }
  const compact = variant === 'compact'

  return (
    <div className={cx(styles.root, styles[variant], className)}>
      <form className={styles.frame} onSubmit={submit}>
        {context && variant === 'narrow' && (
          <div className={styles.context}>
            <span className={cx('t-body-2', styles.contextLabel)}>
              <Icon src={headerBrand} size={16} />
              <span className={styles.ellipsis}>{context}</span>
            </span>
            <button type="button" className={styles.contextRemove} aria-label={`Remove context ${context}`} onClick={onRemoveContext}>
              <Icon src={declineBrand} size={16} />
            </button>
          </div>
        )}
        <div className={styles.input}>
          <textarea
            className={cx(compact ? 't-title' : 't-title', styles.textarea)}
            aria-label="Message Joule"
            aria-describedby={showNotice ? noticeId : undefined}
            placeholder={placeholder}
            rows={1}
            value={text}
            onChange={e => set(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div className={styles.actions}>
            <div className={styles.left}>
              {compact ? (
                <>
                  <button type="button" className={styles.miniBtn} aria-label="Add attachment"><Icon src={addBrand12} size={12} /></button>
                  <button type="button" className={styles.miniBtn} aria-label="Mention"><Icon src={arobaseBrand12} size={12} /></button>
                  {chip && (
                    <span className={cx('t-caption-strong', styles.pill)}>
                      <Icon src={spaces12} size={12} tint="var(--color-accent-5)" />
                      {chip}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <button type="button" className={styles.squareBtn} aria-label="Add attachment"><Icon src={addJoule} size={16} /></button>
                  <button type="button" className={styles.squareBtn} aria-label="Mention"><Icon src={arobaseJoule} size={16} /></button>
                  {chip && (
                    <span className={cx('t-caption', styles.tag)}>
                      <Icon src={spacesJoule12} size={12} />
                      {chip}
                      <button type="button" className={styles.tagRemove} aria-label={`Remove ${chip} context`} onClick={onRemoveChip}>
                        <Icon src={declineJoule12} size={12} />
                      </button>
                    </span>
                  )}
                </>
              )}
            </div>
            {compact ? (
              <button type="submit" className={styles.sendFilled} aria-label="Send message" disabled={!canSend}>
                <Icon src={paperPlaneWhite12} size={12} />
              </button>
            ) : (
              <button type="submit" className={styles.squareBtn} aria-label="Send message" aria-disabled={!canSend}>
                <Icon src={paperPlaneJoule} size={16} />
              </button>
            )}
          </div>
        </div>
      </form>
      {showNotice && <p id={noticeId} className={cx('t-caption', styles.notice)}>Joule uses AI, verify results.</p>}
    </div>
  )
}
