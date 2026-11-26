import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Field.module.css'

export interface FieldProps {
  label: string
  /** Text, a string[] (rendered as bullet list) or any node (e.g. a <Tag>). */
  value: ReactNode | string[]
}

/** Figma "Card Text Block" — read-only label/value pair. Use inside <FieldGrid>. */
export function Field({ label, value }: FieldProps) {
  return (
    <div className={styles.field}>
      <dt className={cx('t-medium-text', styles.label)}>{label}</dt>
      <dd className={cx('t-body', styles.value)}>
        {Array.isArray(value)
          ? <ul className={styles.bullets}>{value.map(v => <li key={v}>{v}</li>)}</ul>
          : value}
      </dd>
    </div>
  )
}

export interface FieldGridProps {
  columns?: 2 | 4
  /** Column gap — Figma uses 24 (and 16 in one KPI Setup row). */
  gap?: 's' | 'l'
  children: ReactNode
}

export function FieldGrid({ columns = 2, gap = 'l', children }: FieldGridProps) {
  return <dl className={cx(styles.grid, styles[`cols-${columns}`], styles[`gap-${gap}`])}>{children}</dl>
}

/** Body-Strong section label inside a card ("General Information"). */
export function SectionHeading({ children, level = 4 }: { children: ReactNode; level?: 3 | 4 | 5 }) {
  const H = `h${level}` as const
  return <H className={cx('t-body-strong', styles.heading)}>{children}</H>
}
