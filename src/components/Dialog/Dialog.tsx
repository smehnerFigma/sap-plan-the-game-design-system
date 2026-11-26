import { useEffect, useId, useRef, type ReactNode } from 'react'
import decline from '../../assets/icons/decline.svg'
import { Icon } from '../Icon/Icon'
import styles from './Dialog.module.css'

export interface DialogProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  /** Optional footer actions (hidden in the Figma "Full Consolidation" modal). */
  footer?: ReactNode
  width?: number
  /** Top offset (CSS length). Default: vertically centred. */
  top?: string
}

/**
 * Figma "Modal" — native <dialog> (focus trap, Esc, inert background) with the
 * Black-40 backdrop, 20px radius (raw) and Shadow/XL.
 */
export function Dialog({ open, title, onClose, children, footer, width = 700, top }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (open && !el.open) {
      el.showModal()
      // Start on the message rather than the close button (showModal focuses the first control).
      contentRef.current?.focus()
    }
    if (!open && el.open) el.close()
  }, [open])
  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      style={{ width, marginTop: top }}
      aria-labelledby={titleId}
      onCancel={e => { e.preventDefault(); onClose() }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <header className={styles.header}>
        <h2 id={titleId} className={`t-heading-medium-xs ${styles.title}`}>{title}</h2>
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <Icon src={decline} size={18} tint="var(--color-text-supporting)" />
        </button>
      </header>
      {/* Initial focus goes to the content (not the close button) so screen readers start at the message. */}
      <div ref={contentRef} className={styles.content} tabIndex={-1}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </dialog>
  )
}
