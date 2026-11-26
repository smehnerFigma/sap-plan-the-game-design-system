import { useEffect } from 'react'
import statusPositive from '../../assets/icons/status-positive.svg'
import styles from './Toast.module.css'

export interface ToastProps {
  message: string | null
  onDismiss: () => void
  /** Auto-dismiss delay — not specified in Figma (inferred 4s). */
  duration?: number
}

/** Message toast — bottom-centered, Shadow/L, success icon. Rendered in a polite live region. */
export function Toast({ message, onDismiss, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const t = window.setTimeout(onDismiss, duration)
    return () => window.clearTimeout(t)
  }, [message, duration, onDismiss])
  return (
    <div className={styles.region} role="status" aria-live="polite">
      {message && (
        <div className={styles.toast}>
          <img src={statusPositive} width={18} height={18} alt="" />
          <span className={styles.text}>{message}</span>
        </div>
      )}
    </div>
  )
}
