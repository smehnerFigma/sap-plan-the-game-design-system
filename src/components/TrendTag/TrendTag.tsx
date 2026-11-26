import arrowTopPositive from '../../assets/icons/arrow-top-positive.svg'
import arrowTopNegative from '../../assets/icons/arrow-top-negative.svg'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './TrendTag.module.css'

export interface TrendTagProps {
  tone: 'positive' | 'negative'
  children: string
  className?: string
}

/**
 * Figma "Card Tag" — 18px pill with up-arrow + Caption-Strong text, used for
 * "Agent Forecast: $28M". Negative still points up (cost increase).
 */
export function TrendTag({ tone, children, className }: TrendTagProps) {
  return (
    <span className={cx('t-caption-strong', styles.tag, styles[tone], className)}>
      <Icon src={tone === 'positive' ? arrowTopPositive : arrowTopNegative} size={12} />
      <span>{children}</span>
    </span>
  )
}
