import type { ReactNode } from 'react'
import sapLogo from '../../assets/icons/sap-logo.svg'
import jouleIcon from '../../assets/icons/joule-icon.svg'
import jouleIconAccent from '../../assets/icons/joule-icon-accent.svg'
import styles from './Shellbar.module.css'

export interface ShellbarProps {
  showcaseName?: string
  toolName?: string
  /** Joule panel open → accent (purple) icon. */
  jouleActive?: boolean
  onJoule?: () => void
  /** Makes the SAP logo a home link. */
  homeHref?: string
}

/** Figma "Showcase Shellbar" (SAC). */
export function Shellbar({ showcaseName = 'XXX', toolName = 'SAP Analytics Cloud', jouleActive, onJoule, homeHref }: ShellbarProps) {
  return (
    <div className={styles.bar} role="banner">
      <div className={styles.left}>
        {homeHref
          ? <a href={homeHref} className={styles.home}><img src={sapLogo} width={60} height={30} alt="SAP — home" /></a>
          : <img src={sapLogo} width={60} height={30} alt="SAP" />}
        <p className={styles.titles}>
          <strong className={styles.showcase}>{showcaseName}</strong>
          <span aria-hidden="true">|</span>
          <span>{toolName}</span>
        </p>
      </div>
      <button type="button" className={styles.joule} aria-label="Joule" aria-expanded={jouleActive} onClick={onJoule}>
        <img src={jouleActive ? jouleIconAccent : jouleIcon} width={32} height={32} alt="" />
      </button>
    </div>
  )
}

/** Figma "Header Addon": page title (Heading/Regular/S) + right-aligned actions, optional extra rows. */
export function SacHeader({ title, actions, children }: { title: string; actions?: ReactNode; children?: ReactNode }) {
  return (
    <div className={styles.addon}>
      <div className={styles.titleRow}>
        <h1 className={`t-heading-s ${styles.title}`}>{title}</h1>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {children}
    </div>
  )
}
