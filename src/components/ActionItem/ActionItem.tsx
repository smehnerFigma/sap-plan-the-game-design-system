import type { ReactNode } from 'react'
import warning2 from '../../assets/icons/warning2.svg'
import acceptNeutral from '../../assets/icons/accept-neutral.svg'
import { Avatar } from '../Avatar/Avatar'
import { Icon } from '../Icon/Icon'
import { Tag } from '../Tag/Tag'
import styles from './ActionItem.module.css'

export type ActionStatus = 'open' | 'completed'

export interface ActionItemProps {
  title: string
  description: string
  status: ActionStatus
  /** Trailing action, usually an outline <Button>. */
  action?: ReactNode
  /** Gap between title, description and tag: 4 (Figma default) or 0 (nested "Attributs and Status Bar" items). */
  dense?: boolean
}

const statusText: Record<ActionStatus, string> = { open: 'Open', completed: 'Completed' }

/** Figma "Object List Item" in Recommended Actions. Render inside <ActionList>. */
export function ActionItem({ title, description, status, action, dense }: ActionItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <Avatar size="s" tone="neutral" icon={<Icon src={status === 'completed' ? acceptNeutral : warning2} size={16} />} />
        <div className={dense ? `${styles.text} ${styles.dense}` : styles.text}>
          <span className={`t-body-strong ${styles.title}`}>{title}</span>
          <span className={`t-caption ${styles.description}`}>{description}</span>
          <Tag tone={status === 'completed' ? 'positive' : 'neutral'}>{statusText[status]}</Tag>
        </div>
      </div>
      {action && <div className={styles.actions}>{action}</div>}
    </li>
  )
}

export function ActionList({ children, label }: { children: ReactNode; label?: string }) {
  return <ul className={styles.list} aria-label={label}>{children}</ul>
}
