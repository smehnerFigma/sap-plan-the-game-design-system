import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Avatar.module.css'

export type AvatarTone = 'positive' | 'warning' | 'negative' | 'info' | 'neutral'

export interface AvatarProps {
  /** Icon for square product avatars: 18px for size "l", 16px for size "s". */
  icon?: ReactNode
  /** Person photo URL — renders a circular avatar. */
  imageSrc?: string
  /** Accessible name; omit when decorative. */
  label?: string
  tone?: AvatarTone
  /** "l" = card header (max 48, p12, r6) · "s" = action item (32, p8, r4). */
  size?: 'l' | 's'
  /** Diameter for person avatars. */
  imageSize?: number
  className?: string
}

/**
 * Figma "Avatar". "Always use square avatars for products, and circular avatars for people."
 * https://www.sap.com/design-system/fiori-design-web/ui-elements/avatar-web-component/
 */
export function Avatar({ icon, imageSrc, label, tone = 'neutral', size = 'l', imageSize = 32, className }: AvatarProps) {
  if (imageSrc) {
    return (
      <img src={imageSrc} alt={label ?? ''} width={imageSize} height={imageSize}
        className={cx(styles.avatar, styles.person, className)} />
    )
  }
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cx(styles.avatar, styles.square, styles[size], styles[tone], className)}
    >
      {icon}
    </span>
  )
}
