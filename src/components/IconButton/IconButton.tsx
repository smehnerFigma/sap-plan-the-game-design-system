import type { ButtonHTMLAttributes } from 'react'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './IconButton.module.css'

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: string
  iconSize: number
  /** Required accessible name. */
  label: string
  /**
   * "ghost" = no chrome (SAC toolbars) · "shell" = 40px pane-bar button (radius 8)
   * · "compact" = 32px (p8, radius 4) · "tertiary" = SAC 26×24 · "joule" = 32px Joule input button
   * · "jouleOutline" = 32px white with Joule/foreground stroke (card "Ask Joule") · "header" = 36px on the purple SAC Joule header.
   */
  variant?: 'ghost' | 'shell' | 'compact' | 'tertiary' | 'joule' | 'jouleOutline' | 'header'
  /** Toggle state → aria-pressed. */
  pressed?: boolean
  tint?: string
}

export function IconButton({ icon, iconSize, label, variant = 'ghost', pressed, tint, className, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={pressed}
      className={cx(styles.btn, styles[variant], pressed && styles.pressed, className)}
      {...rest}
    >
      <Icon src={icon} size={iconSize} tint={tint} />
    </button>
  )
}
