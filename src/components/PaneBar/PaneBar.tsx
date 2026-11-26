import { Fragment, type ReactNode } from 'react'
import menu from '../../assets/icons/menu.svg'
import legend from '../../assets/icons/legend.svg'
import legend16 from '../../assets/icons/legend-16.svg'
import overflow from '../../assets/icons/overflow.svg'
import overflow16 from '../../assets/icons/overflow-16.svg'
import conversationsAccent from '../../assets/icons/conversations-accent.svg'
import conversationsToggle from '../../assets/icons/conversations-toggle.svg'
import leftPaneCollapsed from '../../assets/icons/left-pane-collapsed.svg'
import refresh from '../../assets/icons/refresh.svg'
import share from '../../assets/icons/share.svg'
import chatCollapsed from '../../assets/icons/chat-collapsed.svg'
import add from '../../assets/icons/add.svg'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import { cx } from '../../utils/cx'
import styles from './PaneBar.module.css'

const ICON = 18.29

export interface PaneBarProps {
  /** Breadcrumb segments; joined with " / ". The last one is the current page. */
  breadcrumb: string[]
  /** Optional href per breadcrumb segment (the current page is never linked). */
  breadcrumbHrefs?: Array<string | undefined>
  /** Linked artifact shown on the right ("Operating Expenses Overview"). */
  artifact?: string
  /** Chat pane open → toggle pressed. */
  chatOpen?: boolean
  onToggleChat?: () => void
  /** "default" = 40px buttons (variants A/B) · "compact" = 32px buttons + refresh/share (variant C). */
  density?: 'default' | 'compact'
}

/** Figma "Pane Bar" for the content pane. */
export function PaneBar({ breadcrumb, breadcrumbHrefs, artifact, chatOpen = false, onToggleChat, density = 'default' }: PaneBarProps) {
  const compact = density === 'compact'
  return (
    <div className={cx(styles.bar, compact && styles.compact)}>
      <div className={styles.header}>
        {compact
          ? <IconButton variant="compact" icon={leftPaneCollapsed} iconSize={16} label="Toggle left pane" />
          : <IconButton variant="shell" icon={menu} iconSize={ICON} label="Toggle side panel" pressed={false} />}
        <nav aria-label="Breadcrumb">
          <ol className={cx('t-title-strong', styles.crumbs)}>
            {breadcrumb.map((c, i) => (
              <Fragment key={c}>
                <li aria-current={i === breadcrumb.length - 1 ? 'page' : undefined}>
                  {breadcrumbHrefs?.[i] && i < breadcrumb.length - 1
                    ? <a href={breadcrumbHrefs[i]} className={styles.crumbLink}>{c}</a>
                    : c}
                </li>
                {i < breadcrumb.length - 1 && <li aria-hidden="true" className={styles.sep}>/</li>}
              </Fragment>
            ))}
          </ol>
        </nav>
      </div>
      <div className={styles.actions}>
        {artifact && (
          <button type="button" className={cx(compact ? 't-body-strong' : 't-title-strong', styles.artifact)}>
            <Icon src={compact ? legend16 : legend} size={compact ? 16 : ICON} />
            {artifact}
          </button>
        )}
        {compact ? (
          <>
            <IconButton variant="compact" icon={refresh} iconSize={16} label="Refresh" />
            <IconButton variant="compact" icon={share} iconSize={16} label="Share" />
            <IconButton variant="compact" icon={overflow16} iconSize={16} label="More actions" aria-haspopup="menu" />
            <IconButton variant="compact" icon={chatCollapsed} iconSize={16} label="Toggle chat pane"
              pressed={chatOpen} onClick={onToggleChat} className={styles.chatCompact} />
          </>
        ) : (
          <>
            <IconButton variant="shell" icon={overflow} iconSize={ICON} label="More actions" aria-haspopup="menu" />
            <IconButton variant="shell" icon={chatOpen ? conversationsAccent : conversationsToggle} iconSize={ICON}
              label="Toggle chat pane" pressed={chatOpen} onClick={onToggleChat} />
          </>
        )}
      </div>
    </div>
  )
}

/** Right Pane bar ("Title" + new chat). */
export function RightPaneBar({ title, onNew }: { title: ReactNode; onNew?: () => void }) {
  return (
    <div className={cx(styles.bar, styles.right)}>
      <h2 className={cx('t-title-strong', styles.rightTitle)}>{title}</h2>
      <IconButton variant="shell" icon={add} iconSize={ICON} label="New chat" onClick={onNew} />
    </div>
  )
}
