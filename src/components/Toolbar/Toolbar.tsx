import type { ReactNode } from 'react'
import separatorVertical from '../../assets/icons/separator-vertical.svg'
import { cx } from '../../utils/cx'
import styles from './Toolbar.module.css'

export interface ToolbarProps {
  label: string
  children: ReactNode
  /** Gap between items: 32 (SAC document toolbar) or 10 (button groups). */
  gap?: 'l' | 's'
  align?: 'start' | 'center' | 'end'
  /** Lock the row to 22px (Figma document toolbar) so taller buttons overflow instead of growing the bar. */
  fixedHeight?: boolean
  className?: string
}

/** Horizontal toolbar (role="toolbar"). Combine with <ToolbarGroup> and <ToolbarSeparator>. */
export function Toolbar({ label, children, gap = 'l', align = 'center', fixedHeight, className }: ToolbarProps) {
  return <div role="toolbar" aria-label={label} className={cx(styles.toolbar, styles[gap], styles[align], fixedHeight && styles.fixed, className)}>{children}</div>
}

export function ToolbarGroup({ children }: { children: ReactNode }) {
  return <div className={styles.group}>{children}</div>
}

/** 1×22 vertical separator (Figma vector, Color/Grey/5 #8396a8). */
export function ToolbarSeparator() {
  return <img role="separator" aria-orientation="vertical" src={separatorVertical} width={1} height={22} alt="" className={styles.separator} />
}
