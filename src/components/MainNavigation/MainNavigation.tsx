import jouleLogomark from '../../assets/icons/joule-logomark.svg'
import conversations from '../../assets/icons/conversations.svg'
import spacesPressed from '../../assets/icons/spaces-pressed.svg'
import discover from '../../assets/icons/discover.svg'
import jobs from '../../assets/icons/jobs.svg'
import develop from '../../assets/icons/develop.svg'
import bell from '../../assets/icons/bell.svg'
import bell20 from '../../assets/icons/bell-20.svg'
import navigationCollapsed from '../../assets/icons/navigation-collapsed.svg'
import expand from '../../assets/icons/expand.svg'
import avatarUser from '../../assets/icons/avatar-user.png'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './MainNavigation.module.css'

export type NavKey = 'conversations' | 'discover' | 'spaces' | 'jobs' | 'develop'

export interface MainNavigationProps {
  /** "product-truth" = Conversations/Spaces/Develop · "vision" adds Discover + Jobs (Figma component description). */
  set?: 'product-truth' | 'vision'
  current?: NavKey
  unreadNotifications?: boolean
  onNavigate?: (key: NavKey) => void
}

const items: Record<NavKey, { label: string; icon: string }> = {
  conversations: { label: 'Conversations', icon: conversations },
  discover: { label: 'Discover', icon: discover },
  spaces: { label: 'Spaces', icon: spacesPressed },
  jobs: { label: 'Jobs', icon: jobs },
  develop: { label: 'Develop', icon: develop },
}

/** Figma "Main Navigation" (collapsed 80px rail). Labels are visually hidden (opacity 0 in Figma). */
export function MainNavigation({ set = 'product-truth', current = 'spaces', unreadNotifications = true, onNavigate }: MainNavigationProps) {
  const keys: NavKey[] = set === 'vision'
    ? ['conversations', 'discover', 'spaces', 'jobs', 'develop']
    : ['conversations', 'spaces', 'develop']
  const vision = set === 'vision'
  return (
    <nav className={styles.rail} aria-label="Main navigation">
      <Icon src={jouleLogomark} size={vision ? 32 : 38} height={vision ? 30 : 36} label="Joule" className={styles.logo} />
      <ul className={styles.items}>
        {keys.map(k => {
          const isCurrent = k === current
          return (
            <li key={k}>
              <button
                type="button"
                className={cx(styles.item, isCurrent && styles.selected)}
                aria-current={isCurrent ? 'page' : undefined}
                title={items[k].label}
                onClick={() => onNavigate?.(k)}
              >
                {k === 'spaces'
                  ? <span className={styles.spacesBox}><Icon src={items[k].icon} size={25} height={18.96} className={styles.spacesIcon} /></span>
                  : <Icon src={items[k].icon} size={20} />}
                <span className="visually-hidden">{items[k].label}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <ul className={styles.items}>
        <li>
          <button type="button" className={styles.item} title="Notifications">
            <span className={styles.badgeWrap}>
              <Icon src={vision ? bell20 : bell} size={vision ? 20 : 16} />
              {unreadNotifications && <span className={styles.badge} />}
            </span>
            <span className="visually-hidden">Notifications{unreadNotifications ? ' (1 unread)' : ''}</span>
          </button>
        </li>
        <li>
          <button type="button" className={styles.item} title="User profile">
            <span className={styles.avatar}><img src={avatarUser} alt="" width={32} height={32} /></span>
            <span className="visually-hidden">User profile</span>
          </button>
        </li>
        <li>
          <button type="button" className={styles.item} aria-label="Expand navigation" title="Expand navigation">
            <Icon src={vision ? expand : navigationCollapsed} size={vision ? 20 : 16} />
          </button>
        </li>
      </ul>
    </nav>
  )
}
