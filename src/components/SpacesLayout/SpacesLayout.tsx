import type { ReactNode } from 'react'
import { MainNavigation, type MainNavigationProps } from '../MainNavigation/MainNavigation'
import { PaneBar, RightPaneBar, type PaneBarProps } from '../PaneBar/PaneBar'
import { cx } from '../../utils/cx'
import styles from './SpacesLayout.module.css'

export interface SpacesLayoutProps {
  nav?: MainNavigationProps
  paneBar: PaneBarProps
  /** Main column content (Page Header + sections). */
  children: ReactNode
  /** Floating prompt pinned to the bottom of the content pane. */
  prompt?: ReactNode
  /** Right pane (Joule conversation). When set, the chat toggle is pressed and the column narrows to 1172. */
  rightPane?: { title: ReactNode; messages: ReactNode; input: ReactNode }
}

/** Figma "Spaces" template: Main Navigation | Content Pane (Pane Bar + Content) | Right Pane. */
export function SpacesLayout({ nav, paneBar, children, prompt, rightPane }: SpacesLayoutProps) {
  const open = !!rightPane
  return (
    <div className={styles.spaces}>
      <MainNavigation {...nav} />
      <div className={styles.panes}>
        <div className={styles.contentPane}>
          <PaneBar {...paneBar} chatOpen={open} />
          <main className={cx(styles.content, open && styles.narrow)}>
            <div className={styles.column}>{children}</div>
          </main>
          {prompt && <div className={styles.prompt}>{prompt}</div>}
        </div>
        {rightPane && (
          <aside className={styles.rightPane} aria-label="Joule">
            <RightPaneBar title={rightPane.title} />
            <div className={styles.messages}>{rightPane.messages}</div>
            <div className={styles.rightInput}>{rightPane.input}</div>
          </aside>
        )}
      </div>
    </div>
  )
}
