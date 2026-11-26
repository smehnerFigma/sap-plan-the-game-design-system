import { useId, type ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './SacCard.module.css'

export interface SacCardProps {
  title?: ReactNode
  subtitle?: ReactNode
  /** Right side of the header (e.g. overflow button). */
  actions?: ReactNode
  /** Replace the title header with arbitrary content (toolbar). */
  header?: ReactNode
  children: ReactNode
  /** Content slot padding (Figma: 16 for the table card, 0 for the editor). */
  padded?: boolean
  className?: string
  contentClassName?: string
}

/** Figma "Card" (SAC showcase) — radius 16, Shadow/S, header + 1px #d5dadd stroke + content slot. */
export function SacCard({ title, subtitle, actions, header, children, padded = true, className, contentClassName }: SacCardProps) {
  const id = useId()
  return (
    <section className={cx(styles.card, className)} aria-labelledby={title ? id : undefined}>
      {header ?? (
        <header className={styles.header}>
          <div className={styles.titles}>
            <h2 id={id} className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {actions}
        </header>
      )}
      <div className={cx(styles.content, padded && styles.padded, contentClassName)}>{children}</div>
    </section>
  )
}
