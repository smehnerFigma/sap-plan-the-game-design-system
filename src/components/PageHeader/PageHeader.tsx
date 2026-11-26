import styles from './PageHeader.module.css'

export interface PageHeaderProps {
  title: string
  /** Optional Title-style subtitle ("Updated just now"). */
  subtitle?: string
}

/** Figma "Page Header" — Heading2 title (h1), pt 40 / pb 16. */
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className={subtitle ? styles.withSubtitle : styles.header}>
      <h1 className={`t-heading2 ${styles.title}`}>{title}</h1>
      {subtitle && <p className={`t-title ${styles.subtitle}`}>{subtitle}</p>}
    </header>
  )
}
