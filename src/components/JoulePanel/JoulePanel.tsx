import { useState, type ReactNode, type FormEvent } from 'react'
import menu2White from '../../assets/icons/menu2-white.svg'
import overflowWhite from '../../assets/icons/overflow-white.svg'
import fullScreenWhite from '../../assets/icons/full-screen-white.svg'
import declineWhite from '../../assets/icons/decline-white.svg'
import paperPlaneWhite from '../../assets/icons/paper-plane-white.svg'
import typingIndicator from '../../assets/icons/typing-indicator.svg'
import { IconButton } from '../IconButton/IconButton'
import { cx } from '../../utils/cx'
import styles from './JoulePanel.module.css'

export type PanelMessage =
  | { kind: 'user'; text: string }
  | { kind: 'joule'; text: string }
  | { kind: 'quick-reply'; text: string }
  | { kind: 'typing' }

export interface JoulePanelProps {
  title?: string
  timestamp?: { day: string; time: string }
  messages: PanelMessage[]
  onSend?: (text: string) => void
  onClose?: () => void
  onQuickReply?: (text: string) => void
  /** Autofocus the input (Figma shows the focused state). */
  autoFocus?: boolean
  className?: string
  footer?: ReactNode
}

/** Figma "Joule - New Campaign" side panel used in SAC (Horizon assistant tokens). */
export function JoulePanel({ title = 'New Conversation', timestamp, messages, onSend, onClose, onQuickReply, autoFocus, className }: JoulePanelProps) {
  const [text, setText] = useState('')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onSend?.(text.trim())
    setText('')
  }
  return (
    <aside className={cx(styles.panel, className)} aria-label="Joule">
      <header className={styles.header}>
        <div className={styles.title}>
          <IconButton variant="header" icon={menu2White} iconSize={16} label="Open conversation menu" />
          <h2 className={styles.titleText}>{title}</h2>
        </div>
        <div className={styles.tools}>
          <IconButton variant="header" icon={overflowWhite} iconSize={16} label="More options" />
          <IconButton variant="header" icon={fullScreenWhite} iconSize={16} label="Expand to full screen" />
          <IconButton variant="header" icon={declineWhite} iconSize={16} label="Close Joule" onClick={onClose} />
        </div>
      </header>
      <div className={styles.body} role="log" aria-live="polite" aria-label="Conversation">
        {timestamp && <p className={styles.timestamp}><strong>{timestamp.day}</strong> {timestamp.time}</p>}
        {messages.map((m, i) => {
          if (m.kind === 'user') return <p key={i} className={styles.user}><span className="visually-hidden">You: </span>{m.text}</p>
          if (m.kind === 'joule') return <p key={i} className={styles.joule}><span className="visually-hidden">Joule: </span>{m.text}</p>
          if (m.kind === 'quick-reply') return <button key={i} type="button" className={styles.quick} onClick={() => onQuickReply?.(m.text)}>{m.text}</button>
          return <span key={i} className={styles.typing} role="status" aria-label="Joule is typing"><img src={typingIndicator} width={35} height={8.186} alt="" /></span>
        })}
      </div>
      <form className={styles.inputWrap} onSubmit={submit}>
        <div className={styles.field}>
          <input
            className={styles.input}
            aria-label="Message Joule"
            placeholder="Message Joule..."
            value={text}
            autoFocus={autoFocus}
            onChange={e => setText(e.target.value)}
          />
          <button type="submit" className={styles.send} aria-label="Send message" disabled={!text.trim()}>
            <img src={paperPlaneWhite} width={16} height={16} alt="" />
          </button>
        </div>
      </form>
      <p className={styles.disclaimer}>Joule uses AI, verify results.</p>
    </aside>
  )
}
