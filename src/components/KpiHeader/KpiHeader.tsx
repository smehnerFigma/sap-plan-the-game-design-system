import trendUpNegative from '../../assets/icons/trend-up-negative.svg'
import trendDownNegative from '../../assets/icons/trend-down-negative.svg'
import styles from './KpiHeader.module.css'

export interface HeaderKpi {
  title: string
  subline: string
  value: string
  trend: 'up' | 'down'
  delta: string
  /** Figma defines positive / neutral / negative; only negative appears in the screens. */
  tone?: 'negative'
}

/** Figma "KPIs Header" — row of headline KPIs (gap 60). */
export function KpiHeader({ kpis }: { kpis: HeaderKpi[] }) {
  return (
    <dl className={styles.row}>
      {kpis.map(k => (
        <div key={k.title} className={styles.kpi}>
          <dt className={styles.titles}>
            <span className="t-heading-medium-xxxxs">{k.title}</span>
            <span className={`t-body-xxs ${styles.subline}`}>{k.subline}</span>
          </dt>
          <dd className={styles.base}>
            <span className={`t-heading-l ${styles.value}`}>{k.value}</span>
            <span className={styles.indicator}>
              <img src={k.trend === 'up' ? trendUpNegative : trendDownNegative} width={11} height={7} alt="" />
              <span className={`t-body-s ${styles.delta}`}>
                <span className="visually-hidden">trend {k.trend}, </span>{k.delta}
              </span>
            </span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
