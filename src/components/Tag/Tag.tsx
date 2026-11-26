import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Tag.module.css'

export type TagTone = 'neutral' | 'positive' | 'negative' | 'info' | 'warning'

export interface TagProps {
  tone?: TagTone
  /** Optional leading 12px icon. */
  icon?: ReactNode
  children: ReactNode
  className?: string
}

/** Figma "Tag" — static rectangular status tag (Caption-Strong, radius-s). */
export function Tag({ tone = 'neutral', icon, children, className }: TagProps) {
  return (
    <span className={cx('t-caption-strong', styles.tag, styles[tone], className)}>
      {icon}
      {children}
    </span>
  )
}
