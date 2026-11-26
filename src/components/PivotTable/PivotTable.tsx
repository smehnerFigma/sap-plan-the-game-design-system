import { useMemo, useState } from 'react'
import slimArrowDown from '../../assets/icons/slim-arrow-down.svg'
import { Icon } from '../Icon/Icon'
import { VarianceBar } from './VarianceBar'
import { cx } from '../../utils/cx'
import styles from './PivotTable.module.css'

export interface PivotRow {
  id: string
  label: string
  /** Parent row id → rendered indented (level 2) and hidden when the parent collapses. */
  parent?: string
  /** One value per group × measure, in column order. */
  values: Array<number | string>
  /** Variance in percent (e.g. -0.9). */
  variance: number
  /** Bar width in px as drawn in Figma (hand-drawn, not proportional). Defaults to 10px per 1%. */
  barWidth?: number
}

export interface PivotTableProps {
  /** Toolbar title, also the table caption ("Q4 2026"). */
  title: string
  groups: string[]
  measures: string[]
  rows: PivotRow[]
  varianceLabel?: string
  /** Group to highlight (post-consolidation "Group" columns). */
  highlightGroup?: string
  /** Max height of the scrollable body. */
  maxHeight?: number
}

/**
 * SAC pivot table: toolbar title, two header rows (groups / measures), hierarchical rows with
 * expand/collapse (aria-expanded), and a variance bar column. Row height = Table/Cell/Size/ContainerHeightM (42).
 */
export function PivotTable({ title, groups, measures, rows, varianceLabel = 'Variance', highlightGroup, maxHeight }: PivotTableProps) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const parents = useMemo(() => new Set(rows.filter(r => r.parent).map(r => r.parent!)), [rows])
  const visible = rows.filter(r => !r.parent || !collapsed.has(r.parent))
  const toggle = (id: string) => setCollapsed(s => {
    const n = new Set(s)
    if (n.has(id)) n.delete(id); else n.add(id)
    return n
  })
  const hl = (gi: number) => groups[gi] === highlightGroup

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar} id="pivot-title"><span className="t-heading-bold-xxxs">{title}</span></div>
      <div className={styles.scroll} style={{ maxHeight }}>
        <table className={styles.table} aria-labelledby="pivot-title">
          <colgroup>
            <col style={{ width: 256 }} />
            {groups.flatMap(g => measures.map(m => <col key={g + m} />))}
            <col style={{ width: 307 }} />
          </colgroup>
          <thead>
            <tr>
              <td className={styles.corner} />
              {groups.map((g, gi) => (
                <th key={g} scope="colgroup" colSpan={measures.length}
                  className={cx('t-nav-medium-xl', styles.th, styles.groupStart, hl(gi) && styles.highlight)}>{g}</th>
              ))}
              <th scope="col" rowSpan={1} className={cx('t-nav-medium-xl', styles.th, styles.groupStart)}>{varianceLabel}</th>
            </tr>
            <tr>
              <td className={styles.corner} />
              {groups.flatMap((g, gi) => measures.map((m, mi) => (
                <th key={g + m} scope="col" className={cx('t-nav-medium-xl', styles.th, styles.num, mi === 0 && styles.groupStart, hl(gi) && styles.highlight)}>
                  <span className="visually-hidden">{g} </span>{m}
                </th>
              )))}
              <td className={cx(styles.th, styles.groupStart)} />
            </tr>
          </thead>
          <tbody>
            {visible.map(r => {
              const isParent = parents.has(r.id)
              const expanded = !collapsed.has(r.id)
              return (
                <tr key={r.id} aria-level={r.parent ? 2 : 1}>
                  <th scope="row" className={cx('t-body-s', styles.td, styles.label, r.parent && styles.child)}>
                    <span className={styles.labelInner}>
                      <span className={styles.labelText}>{r.label}</span>
                      {isParent && (
                        <button type="button" className={styles.expand} aria-expanded={expanded}
                          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${r.label}`} onClick={() => toggle(r.id)}>
                          <Icon src={slimArrowDown} size={14} className={expanded ? undefined : styles.rotated} />
                        </button>
                      )}
                    </span>
                  </th>
                  {r.values.map((v, i) => {
                    const gi = Math.floor(i / measures.length)
                    return (
                      <td key={i} className={cx('t-body-s', styles.td, styles.num, i % measures.length === 0 && styles.groupStart, hl(gi) && styles.highlight)}>{v}</td>
                    )
                  })}
                  <td className={cx(styles.td, styles.groupStart, styles.varianceCell)}><VarianceBar value={r.variance} width={r.barWidth} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
