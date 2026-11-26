import overflow16 from '../../assets/icons/overflow-16.svg'
import navigationDownArrow from '../../assets/icons/navigation-down-arrow.svg'
import { IconButton } from '../IconButton/IconButton'
import styles from './SectionHeader.module.css'

export interface SectionHeaderProps {
  title: string
  expanded?: boolean
  onToggle?: () => void
  /** id of the region the toggle controls. */
  controls?: string
}

/** Figma "Section Header" — Title-Strong h2 + overflow + collapse toggle. */
export function SectionHeader({ title, expanded = true, onToggle, controls }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={`t-title-strong ${styles.title}`}>{title}</h2>
      <div className={styles.icons}>
        <IconButton variant="compact" icon={overflow16} iconSize={16} label={`More options for ${title}`} aria-haspopup="menu" />
        <IconButton
          variant="compact"
          icon={navigationDownArrow}
          iconSize={16}
          label={`${expanded ? 'Collapse' : 'Expand'} ${title}`}
          aria-expanded={expanded}
          aria-controls={controls}
          onClick={onToggle}
          className={expanded ? undefined : styles.collapsed}
        />
      </div>
    </div>
  )
}
