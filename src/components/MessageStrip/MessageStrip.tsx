import type { ReactNode } from 'react'
import warning2Warning from '../../assets/icons/warning2-warning.svg'
import { Icon } from '../Icon/Icon'
import styles from './MessageStrip.module.css'

export interface MessageStripProps {
  /** Only "warning" is defined in the Figma screens. */
  tone?: 'warning'
  children: ReactNode
}

/** Figma "Message Strip" (warning). */
export function MessageStrip({ tone = 'warning', children }: MessageStripProps) {
  return (
    <div role="note" className={`${styles.strip} ${styles[tone]}`}>
      <span className={styles.icon}><Icon src={warning2Warning} size={16} /></span>
      <p className={`t-body-strong ${styles.text}`}>
        <span className="visually-hidden">Warning: </span>
        {children}
      </p>
    </div>
  )
}
