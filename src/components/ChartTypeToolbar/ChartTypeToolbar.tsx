import lineIcon from '../../assets/icons/business-objects-experience-button.svg'
import barIcon from '../../assets/icons/bar-chart-button.svg'
import stackedIcon from '../../assets/icons/vertical-waterfall-chart-button.svg'
import settingsIcon from '../../assets/icons/action-settings-button.svg'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './ChartTypeToolbar.module.css'

export type ChartType = 'line' | 'bar' | 'stacked'

const options: Array<{ type: ChartType; label: string; icon: string }> = [
  { type: 'line', label: 'Line chart', icon: lineIcon },
  { type: 'bar', label: 'Bar chart', icon: barIcon },
  { type: 'stacked', label: 'Stacked bar chart', icon: stackedIcon },
]

export interface ChartTypeToolbarProps {
  value: ChartType
  onChange: (type: ChartType) => void
  onSettings?: () => void
}

/**
 * Figma "Card_Right Accessories" chart toolbar — single-select toggle icon buttons
 * (sapButton_Selected_* when pressed), separator, settings button.
 */
export function ChartTypeToolbar({ value, onChange, onSettings }: ChartTypeToolbarProps) {
  return (
    <div role="toolbar" aria-label="Chart options" className={styles.toolbar}>
      {options.map(o => (
        <button key={o.type} type="button" aria-pressed={o.type === value} aria-label={o.label} title={o.label}
          className={cx(styles.btn, o.type === value && styles.selected)} onClick={() => onChange(o.type)}>
          <Icon src={o.icon} size={16} />
        </button>
      ))}
      <span role="separator" aria-orientation="vertical" className={styles.sep} />
      <button type="button" aria-label="Chart settings" title="Chart settings" className={styles.btn} onClick={onSettings}>
        <Icon src={settingsIcon} size={16} />
      </button>
    </div>
  )
}
