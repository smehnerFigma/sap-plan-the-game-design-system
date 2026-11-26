import loadingIndicator from '../../assets/icons/loading-indicator.svg'
import { cx } from '../../utils/cx'
import styles from './LoadingIndicator.module.css'

export interface LoadingIndicatorProps {
  /** Accessible status text. Pass `null` when the surrounding text already conveys progress (renders aria-hidden). */
  label?: string | null
  /** "brand" = SAC busy (3 blue dots, Figma asset) · "joule" = purple typing dots. */
  tone?: 'brand' | 'joule'
  className?: string
}

/**
 * Figma "Loading Indicator" (LoadingIndicator/Busy #0057d2). The asset is static in Figma;
 * the pulse animation is inferred and disabled under prefers-reduced-motion.
 */
export function LoadingIndicator({ label = 'In progress', tone = 'brand', className }: LoadingIndicatorProps) {
  return (
    <span
      role={label === null ? undefined : 'status'}
      aria-label={label ?? undefined}
      aria-hidden={label === null ? true : undefined}
      className={cx(styles.root, styles[tone], className)}
    >
      {tone === 'brand'
        ? <img src={loadingIndicator} width={26} height={8} alt="" className={styles.pulse} />
        : <><span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} /></>}
    </span>
  )
}
