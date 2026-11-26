import type { ReactNode } from 'react'
import trendUpPositive from '../../assets/icons/trend-up-positive.svg'
import trendUpNegative from '../../assets/icons/project-definition-triangle-2-negative.svg'
import { Icon } from '../Icon/Icon'
import { TrendTag } from '../TrendTag/TrendTag'
import { cx } from '../../utils/cx'
import styles from './KpiTile.module.css'

export interface KpiValueProps {
  /** Text before the number, e.g. "+$" or "+". */
  prefix?: string
  value: string
  /** Scale/unit after the number, e.g. "M" or "%". */
  unit?: string
  /** Trend marker before the value. Positive = green ▲ (Figma asset). */
  trend?: 'up-positive' | 'up-negative' | ReactNode
  size?: 'display' | 'medium'
  className?: string
}

/** Figma "Variance Value Stacked": [trend] prefix number unit, baseline-aligned. */
export function KpiValue({ prefix, value, unit, trend, size = 'display', className }: KpiValueProps) {
  let marker: ReactNode = null
  if (trend === 'up-positive') marker = <Icon src={trendUpPositive} size={14} />
  else if (trend === 'up-negative') marker = <Icon src={trendUpNegative} size={14} />
  else if (trend) marker = trend
  const spoken = `${prefix ?? ''}${value}${unit ? ` ${unit === 'M' ? 'million' : unit}` : ''}`
  return (
    <span className={cx(styles.value, styles[size], className)}>
      <span className="visually-hidden">{spoken}</span>
      <span className={styles.parts} aria-hidden="true">
        {marker && <span className={styles.marker}>{marker}</span>}
        {prefix && <span className={styles.num}>{prefix}</span>}
        <span className={styles.num}>{value}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </span>
    </span>
  )
}

export interface KpiTileProps extends KpiValueProps {
  label: string
  /** Agent forecast pill under the label. */
  forecast?: { tone: 'positive' | 'negative'; text: string }
  /** Status tag on the right, e.g. <Tag tone="negative">Critical</Tag>. */
  status?: ReactNode
  className?: string
}

/** Figma "Card KPI & Status" inside a header-less Card. */
export function KpiTile({ label, forecast, status, className, ...value }: KpiTileProps) {
  return (
    <div className={cx(styles.tile, className)}>
      <div className={styles.kpi}>
        <div className={styles.valueBlock}>
          <KpiValue {...value} />
          <span className={cx('t-medium-text', styles.label)}>{label}</span>
        </div>
        {forecast && <div><TrendTag tone={forecast.tone}>{forecast.text}</TrendTag></div>}
      </div>
      {status}
    </div>
  )
}
