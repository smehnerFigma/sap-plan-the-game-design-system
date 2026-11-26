import type { CSSProperties } from 'react'
import { cx } from '../../utils/cx'
import styles from './Icon.module.css'

export interface IconProps {
  /** Imported SVG/PNG URL exported from Figma (src/assets/icons). */
  src: string
  /** Intrinsic Figma size of the asset in px (kept as rendered width/height). */
  size: number
  /** Optional height when the asset isn't square. */
  height?: number
  /** Accessible label. Omit for decorative icons (rendered with alt="" and aria-hidden). */
  label?: string
  /**
   * Recolor the asset with a token color (uses the SVG as a CSS mask, shape untouched).
   * Needed where Figma binds a color variable that differs from the color baked into the export.
   */
  tint?: string
  className?: string
  style?: CSSProperties
}

export function Icon({ src, size, height, label, tint, className, style }: IconProps) {
  const h = height ?? size
  if (tint) {
    return (
      <span
        role={label ? 'img' : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={cx(styles.icon, styles.tinted, className)}
        style={{ width: size, height: h, backgroundColor: tint, maskImage: `url("${src}")`, WebkitMaskImage: `url("${src}")`, ...style }}
      />
    )
  }
  return (
    <img
      src={src}
      width={size}
      height={h}
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      className={cx(styles.icon, className)}
      style={style}
      draggable={false}
    />
  )
}
