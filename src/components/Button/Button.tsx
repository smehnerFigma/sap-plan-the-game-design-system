import type { ButtonHTMLAttributes, ReactNode } from 'react'
import acceptAccent from '../../assets/icons/accept-accent.svg'
import { Icon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './Button.module.css'

export type ButtonVariant =
  /** Filled brand button (Apply, Consolidate, Save). */
  | 'emphasized'
  /** Spaces outline — white, brand border + text (Open Space, unselected toggle "Select"). */
  | 'outline'
  /** SAC secondary — white, #475e75 border, #0040b0 text (AI Draft, PDF). */
  | 'secondary'
  /** No chrome, brand text (Preview, Compare Impacts). */
  | 'transparent'
  /** Joule purple filled (View Solutions). */
  | 'joule'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  /** "regular" ≈ 34–36px · "compact" ≈ 25–26px (sapElement_Compact_Height). */
  size?: 'regular' | 'compact'
  /** Typography/metrics family: Horizon (Spaces, "72") or SAC ("72 Brand"). */
  family?: 'horizon' | 'sac'
  /** Leading icon element (14px in SAC compact buttons). */
  icon?: ReactNode
  /** Toggle button state → aria-pressed + selected styling and a leading check. */
  pressed?: boolean
  children: ReactNode
}

export function Button({
  variant = 'outline', size = 'regular', family = 'horizon', icon, pressed,
  className, children, type = 'button', ...rest
}: ButtonProps) {
  const isToggle = pressed !== undefined
  return (
    <button
      type={type}
      aria-pressed={isToggle ? pressed : undefined}
      className={cx(styles.btn, styles[variant], styles[size], styles[family], pressed && styles.pressed, className)}
      {...rest}
    >
      {pressed ? <Icon src={acceptAccent} size={16} /> : icon}
      <span>{children}</span>
    </button>
  )
}
