import baseline from '../../assets/icons/variance-baseline.svg'
import { formatVariance } from './formatVariance'
import styles from './PivotTable.module.css'

/** 10px per 1 %, capped at 81px (Figma: half-width 117 − 35 label − 1 gap). Figma bar widths are hand-drawn approximations. */
const PX_PER_PERCENT = 10
const MAX = 81


/** Diverging variance bar around a 2×26 black baseline (Figma asset). */
export function VarianceBar({ value, width }: { value: number; width?: number }) {
  const w = width ?? Math.min(MAX, Math.abs(value) * PX_PER_PERCENT)
  const text = formatVariance(value)
  return (
    <span className={styles.variance}>
      <span className={styles.half} data-side="neg">
        {value <= 0 && <span className={styles.vlabel} data-zero={value === 0 || undefined}>{text}</span>}
        {value < 0 && <span className={styles.bar} data-tone="neg" style={{ width: w }} aria-hidden="true" />}
      </span>
      <img src={baseline} width={2} height={26} alt="" />
      <span className={styles.half} data-side="pos">
        {value > 0 && <span className={styles.bar} data-tone="pos" style={{ width: w }} aria-hidden="true" />}
        {value > 0 && <span className={styles.vlabel}>{text}</span>}
      </span>
    </span>
  )
}
