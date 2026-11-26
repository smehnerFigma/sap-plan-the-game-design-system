import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './ListItem.module.css'

export interface ListItemProps {
  children: ReactNode
  selected?: boolean
  onSelect?: () => void
}

/** Figma "Data List Item" (Standard) — selectable nav item with 3px left selection indicator. */
export function ListItem({ children, selected, onSelect }: ListItemProps) {
  return (
    <li className={styles.li}>
      <button
        type="button"
        aria-current={selected ? 'true' : undefined}
        className={cx('t-body-s', styles.item, selected && styles.selected)}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  )
}

export function List({ children, className, label }: { children: ReactNode; className?: string; label?: string }) {
  return <ul className={cx(styles.list, className)} aria-label={label}>{children}</ul>
}
