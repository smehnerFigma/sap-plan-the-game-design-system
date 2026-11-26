import { useId, useRef, type KeyboardEvent } from 'react'
import { cx } from '../../utils/cx'
import styles from './Tabs.module.css'

export interface TabsProps {
  label: string
  tabs: string[]
  selected: string
  onSelect: (tab: string) => void
  /** Prefix for tab/panel ids so a panel can reference `${idBase}-tab-${index}`. */
  idBase?: string
}

/** Figma "Horizontal Tab bar" — WAI-ARIA tablist with roving tabindex + arrow keys. */
export function Tabs({ label, tabs, selected, onSelect, idBase }: TabsProps) {
  const auto = useId()
  const base = idBase ?? auto
  const refs = useRef<Array<HTMLButtonElement | null>>([])
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    let next = delta ? (i + delta + tabs.length) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1
    if (next < 0) return
    e.preventDefault()
    onSelect(tabs[next])
    refs.current[next]?.focus()
  }
  return (
    <div role="tablist" aria-label={label} className={styles.bar}>
      {tabs.map((t, i) => {
        const isSel = t === selected
        return (
          <button
            key={t}
            ref={el => { refs.current[i] = el }}
            id={`${base}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={isSel}
            aria-controls={`${base}-panel`}
            tabIndex={isSel ? 0 : -1}
            className={cx('t-nav-bold-xl', styles.tab, isSel && styles.selected)}
            onClick={() => onSelect(t)}
            onKeyDown={e => onKeyDown(e, i)}
          >
            <span className={styles.text}>{t}</span>
          </button>
        )
      })}
    </div>
  )
}
