import { useId } from 'react'
import { cx } from '../../utils/cx'
import styles from './LineChart.module.css'

export type MarkerShape = 'circle' | 'diamond'
type LabelPos = 'above' | 'below'

export interface LineSeries {
  name: string
  /** CSS color, normally a chart token e.g. "var(--color-chart-1)". */
  color: string
  marker?: MarkerShape
  /** One value per category; null = no point. */
  values: Array<number | null>
  /** Data-label placement per point (default "above"). */
  labelPositions?: LabelPos[]
  /** Line begins at this category/value without a marker (forecast continuing from actuals). */
  lineStart?: { index: number; value: number }
  /** Legend symbol exported from Figma (src/assets/icons). */
  legendIcon: { src: string; width: number; height: number }
}

/**
 * Exact plot geometry copied from a Figma frame (px within the frame). Figma charts in this file are
 * illustrative — markers are not placed to scale — so screens that must match 1:1 pass this; values still
 * drive labels and the accessible data table.
 */
export interface ChartGeometry {
  width: number
  height: number
  /** Offset of the frame inside the plot container (Opex: chart frame is centred in a 211px card). */
  offsetY?: number
  /** Category label centres (x). */
  categoryX?: number[]
  /** Per series (same order as `series`): marker centres, null where there is no point. */
  points: Array<Array<[number, number] | null>>
  /** Per series: polyline vertices (defaults to the points, plus `lineStart`). */
  lines?: Array<Array<[number, number]> | undefined>
  /** Gridline y positions matching `yTicks` (axis appearance). */
  tickY?: number[]
  baselineY?: number
  /** Container height (defaults to frame height + offset). */
  containerHeight?: number
}

export interface LineChartProps {
  /** Accessible chart title (used for <title> and the data-table caption). */
  title: string
  categories: string[]
  series: LineSeries[]
  /** Value domain of the plot area [min, max]. */
  domain: [number, number]
  /**
   * "axis" — Opex style: y-axis labels, 1px #d9d9d9 gridlines, broken axis down to a "0" baseline,
   * left legend with 72 Brand 16/24 labels.
   * "plain" — Skill Gap style: no gridlines/y-axis, 3px axis line, two-line categories, centered small legend.
   */
  appearance?: 'axis' | 'plain'
  /** Y-axis ticks for "axis" appearance (inside the domain). */
  yTicks?: number[]
  formatValue?: (v: number) => string
  formatTick?: (v: number) => string
  /** Plot height in px (Figma: 167 for Opex incl. labels, 321 for Skill Gap plots). */
  height?: number
  showAxisLine?: boolean
  /** Figma geometry override — see ChartGeometry. */
  geometry?: ChartGeometry
  /** Horizontal inset of the plot only (Figma "Chart Card" px 24); the legend stays flush. */
  plotInset?: number
  className?: string
}

const W = 1000

/**
 * SVG line chart matching the SAP chart styling in Figma (sapChart_OrderedColor_* series, 12px "72" labels).
 * Lines are SVG; markers/labels are HTML so they don't distort with the responsive width.
 * A visually-hidden data table provides the values to assistive tech.
 */
export function LineChart({
  title, categories, series, domain, appearance = 'plain', yTicks = [], formatValue = String,
  formatTick, height = 321, showAxisLine = true, geometry, plotInset = 0, className,
}: LineChartProps) {
  const id = useId()
  if (geometry) {
    return <GeometryChart {...{ id, title, categories, series, appearance, yTicks, formatValue, formatTick, showAxisLine, geometry, plotInset, className }} />
  }
  const axis = appearance === 'axis'
  const padLeft = axis ? 57 : 0
  const [min, max] = domain
  // "axis": plot spans top 6 → last gridline; the baseline sits one tick step below (broken axis).
  const top = axis ? 6 : 24
  const step = axis && yTicks.length > 1 ? yTicks[1] - yTicks[0] : 0
  const plotBottom = axis ? height - 44 : height - 24
  const baselineY = axis ? plotBottom + ((plotBottom - top) / ((max - min) / step)) : height
  const y = (v: number) => top + (1 - (v - min) / (max - min)) * (plotBottom - top)
  const band = (W - padLeft) / categories.length
  const x = (i: number) => padLeft + band * (i + 0.5)
  const pct = (px: number) => `${(px / W) * 100}%`

  return (
    <figure className={cx(styles.figure, styles[appearance], className)}>
      <div className={styles.plot} style={{ height: axis ? baselineY + 20 : height }}>
        <svg viewBox={`0 0 ${W} ${axis ? baselineY + 20 : height}`} preserveAspectRatio="none" className={styles.svg} role="img" aria-labelledby={`${id}-t`}>
          <title id={`${id}-t`}>{title}</title>
          {axis && yTicks.map(t => (
            <line key={t} x1={padLeft} x2={W} y1={y(t)} y2={y(t)} className={styles.grid} vectorEffect="non-scaling-stroke" />
          ))}
          {axis && <line x1={padLeft} x2={W} y1={baselineY} y2={baselineY} className={styles.baseline} vectorEffect="non-scaling-stroke" />}
          {series.map(s => {
            const pts: Array<[number, number]> = []
            if (s.lineStart) pts.push([x(s.lineStart.index), y(s.lineStart.value)])
            s.values.forEach((v, i) => { if (v != null) pts.push([x(i), y(v)]) })
            return (
              <polyline key={s.name} points={pts.map(p => p.join(',')).join(' ')} fill="none"
                style={{ stroke: s.color }} strokeWidth={2} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            )
          })}
        </svg>
        <div className={styles.overlay} aria-hidden="true">
          {axis && yTicks.map(t => (
            <span key={t} className={cx('t-small-text', styles.tick)} style={{ top: y(t) }}>{(formatTick ?? formatValue)(t)}</span>
          ))}
          {axis && <span className={cx('t-small-text', styles.tick)} style={{ top: baselineY }}>0</span>}
          {series.flatMap(s => s.values.map((v, i) => v == null ? null : (
            <span key={`${s.name}-${i}`} className={styles.point} style={{ left: pct(x(i)), top: y(v) }}>
              <span className={cx(styles.marker, s.marker === 'diamond' && styles.diamond)} style={{ background: s.color }} />
              <span className={cx('t-small-text', styles.label, (s.labelPositions?.[i] ?? 'above') === 'below' ? styles.below : styles.above)}>
                {formatValue(v)}
              </span>
            </span>
          )))}
          {axis && categories.map((c, i) => (
            <span key={c} className={cx('t-small-text', styles.categoryAxis)} style={{ left: pct(x(i)), top: baselineY + 2 }}>{c}</span>
          ))}
        </div>
        {!axis && showAxisLine && <div className={styles.axisLine} />}
      </div>
      {!axis && (
        <div className={styles.categories} aria-hidden="true">
          {categories.map(c => <span key={c} className="t-small-text">{c}</span>)}
        </div>
      )}
      <ul className={styles.legend} aria-label={`${title} legend`}>
        {series.map(s => (
          <li key={s.name} className={styles.legendItem}>
            <img src={s.legendIcon.src} width={s.legendIcon.width} height={s.legendIcon.height} alt="" />
            <span className={axis ? 't-body-s' : 't-small-text'}>{s.name}</span>
          </li>
        ))}
      </ul>
      <table className="visually-hidden">
        <caption>{title}</caption>
        <thead><tr><th scope="col">Series</th>{categories.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>
          {series.map(s => (
            <tr key={s.name}><th scope="row">{s.name}</th>{s.values.map((v, i) => <td key={i}>{v == null ? '–' : formatValue(v)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

function Legend({ title, series, axis }: { title: string; series: LineSeries[]; axis: boolean }) {
  return (
    <ul className={styles.legend} aria-label={`${title} legend`}>
      {series.map((s, i) => (
        <li key={i} className={styles.legendItem}>
          <img src={s.legendIcon.src} width={s.legendIcon.width} height={s.legendIcon.height} alt="" />
          <span className={axis ? 't-body-s' : 't-small-text'}>{s.name}</span>
        </li>
      ))}
    </ul>
  )
}

function DataTable({ title, categories, series, formatValue }: { title: string; categories: string[]; series: LineSeries[]; formatValue: (v: number) => string }) {
  return (
    <table className="visually-hidden">
      <caption>{title}</caption>
      <thead><tr><th scope="col">Series</th>{categories.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead>
      <tbody>
        {series.map((s, si) => (
          <tr key={si}><th scope="row">{s.name}</th>{s.values.map((v, i) => <td key={i}>{v == null ? '–' : formatValue(v)}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

/** Renders Figma frame geometry 1:1 (x scales with width as %, y in px). */
function GeometryChart({ id, title, categories, series, appearance, yTicks = [], formatValue, formatTick, showAxisLine, geometry: g, plotInset, className }: {
  id: string; title: string; categories: string[]; series: LineSeries[]; appearance: 'axis' | 'plain'; yTicks?: number[]
  formatValue: (v: number) => string; formatTick?: (v: number) => string; showAxisLine: boolean; geometry: ChartGeometry; plotInset: number; className?: string
}) {
  const axis = appearance === 'axis'
  const off = g.offsetY ?? 0
  const H = g.containerHeight ?? g.height + off
  const px = (x: number) => `${(x / g.width) * 100}%`
  return (
    <figure className={cx(styles.figure, styles[appearance], className)}>
      <div className={styles.plot} style={{ height: H, marginLeft: plotInset }}>
        <svg viewBox={`0 ${-off} ${g.width} ${H}`} preserveAspectRatio="none" className={styles.svg} role="img" aria-labelledby={`${id}-t`}>
          <title id={`${id}-t`}>{title}</title>
          {axis && g.tickY?.map(y => <line key={y} x1={57} x2={g.width} y1={y} y2={y} className={styles.grid} vectorEffect="non-scaling-stroke" />)}
          {axis && g.baselineY != null && <line x1={57} x2={g.width} y1={g.baselineY} y2={g.baselineY} className={styles.baseline} vectorEffect="non-scaling-stroke" />}
          {series.map((s, si) => {
            const pts = g.lines?.[si] ?? (g.points[si].filter(Boolean) as Array<[number, number]>)
            return <polyline key={si} points={pts.map(p => p.join(',')).join(' ')} fill="none" style={{ stroke: s.color }}
              strokeWidth={2} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          })}
        </svg>
        <div className={styles.overlay} aria-hidden="true">
          {axis && g.tickY?.map((y, i) => (
            <span key={y} className={cx('t-small-text', styles.tick)} style={{ top: y + off }}>{(formatTick ?? formatValue)(yTicks[i])}</span>
          ))}
          {axis && g.baselineY != null && <span className={cx('t-small-text', styles.tick)} style={{ top: g.baselineY + off }}>0</span>}
          {series.flatMap((s, si) => s.values.map((v, i) => {
            const p = g.points[si][i]
            if (v == null || !p) return null
            return (
              <span key={`${si}-${i}`} className={styles.point} style={{ left: px(p[0]), top: p[1] + off }}>
                <span className={cx(styles.marker, s.marker === 'diamond' && styles.diamond)} style={{ background: s.color }} />
                <span className={cx('t-small-text', styles.label, (s.labelPositions?.[i] ?? 'above') === 'below' ? styles.below : styles.above)}>{formatValue(v)}</span>
              </span>
            )
          }))}
          {axis && g.categoryX?.map((x, i) => (
            <span key={i} className={cx('t-small-text', styles.categoryAxis)} style={{ left: px(x), top: (g.baselineY ?? g.height) + off + 1 }}>{categories[i]}</span>
          ))}
        </div>
        {!axis && showAxisLine && <div className={styles.axisLine} />}
      </div>
      {!axis && (
        <div className={styles.categories} aria-hidden="true">
          {categories.map(c => <span key={c} className="t-small-text">{c}</span>)}
        </div>
      )}
      <Legend title={title} series={series} axis={axis} />
      <DataTable title={title} categories={categories} series={series} formatValue={formatValue} />
    </figure>
  )
}
