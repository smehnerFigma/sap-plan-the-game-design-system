import { useId, type ReactNode, type HTMLAttributes } from 'react'
import { cx } from '../../utils/cx'
import styles from './Card.module.css'

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Card heading (Title-Strong). When set, the card is labelled by it. */
  title?: ReactNode
  /** Secondary line under the title (Body, tertiary). */
  subtitle?: ReactNode
  /** Leading visual in the header — an <Avatar> or an <Icon>. */
  leading?: ReactNode
  /** Right-side header accessories (buttons, toggles). */
  actions?: ReactNode
  /** Footer content, right-aligned button row in Figma ("_Card Footer"). */
  footer?: ReactNode
  /** Heading level used for the title. */
  headingLevel?: 2 | 3 | 4
  /** Inner padding: "l" = 24px (Figma default), "s" = 16px. */
  padding?: 'l' | 's'
  /** Gap between header, body and footer. */
  gap?: 's' | 'xs' | 'l'
  /** Visual state (Figma "_Card State"): default, selected (brand border), interactive (hover elevation). */
  state?: 'default' | 'selected' | 'interactive'
  children?: ReactNode
}

/** Figma "Card" — surface with optional "_Card Header", body slot and "_Card Footer". */
export function Card({
  title, subtitle, leading, actions, footer, headingLevel = 3,
  padding = 'l', gap = 's', state = 'default', className, children, ...rest
}: CardProps) {
  const titleId = useId()
  const Heading = `h${headingLevel}` as const
  const hasHeader = title != null || leading != null || actions != null
  return (
    <section
      aria-labelledby={title != null ? titleId : undefined}
      className={cx(styles.card, styles[`pad-${padding}`], styles[`gap-${gap}`], state !== 'default' && styles[state], className)}
      {...rest}
    >
      {hasHeader && (
        <header className={styles.header}>
          {leading}
          {(title != null || subtitle != null) && (
            <div className={styles.titles}>
              {title != null && <Heading id={titleId} className={cx('t-title-strong', styles.title)}>{title}</Heading>}
              {subtitle != null && <p className={cx('t-body', styles.subtitle)}>{subtitle}</p>}
            </div>
          )}
          {actions && <div className={styles.actions}>{actions}</div>}
        </header>
      )}
      {children}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  )
}
