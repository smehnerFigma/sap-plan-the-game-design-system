import type { ElementType, ReactNode, HTMLAttributes } from 'react'
import { cx } from '../../utils/cx'

/** Figma text styles. Class definitions live in tokens/typography.css. */
export type TextVariant =
  | 'heading2' | 'heading4-strong' | 'display-36'
  | 'title' | 'title-strong' | 'body' | 'body-strong'
  | 'caption' | 'caption-strong'
  | 'medium-text' | 'medium-text-wrap' | 'small-text' | 'small-text-bold' | 'large-text-bold'
  | 'heading-l' | 'heading-s' | 'heading-medium-xs' | 'heading-medium-xxs'
  | 'heading-medium-xxxs' | 'heading-bold-xxxs' | 'heading-medium-xxxxs'
  | 'nav-medium-xl' | 'nav-bold-xl' | 'nav-medium-m' | 'body-s' | 'body-xxs'

export type TextTone =
  | 'primary' | 'secondary' | 'tertiary' | 'accent' | 'core' | 'heading' | 'supporting'
  | 'positive' | 'negative' | 'warning' | 'inherit'

const toneVar: Record<TextTone, string | undefined> = {
  primary: 'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  tertiary: 'var(--color-text-tertiary)',
  accent: 'var(--color-text-accent)',
  core: 'var(--color-text-core)',
  heading: 'var(--color-text-heading)',
  supporting: 'var(--color-text-supporting)',
  positive: 'var(--color-positive)',
  negative: 'var(--color-negative-text)',
  warning: 'var(--color-warning)',
  inherit: undefined,
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  tone?: TextTone
  /** Element to render; defaults to <span>. */
  as?: ElementType
  children?: ReactNode
}

export function Text({ variant = 'body', tone = 'inherit', as: Tag = 'span', className, style, ...rest }: TextProps) {
  return <Tag className={cx(`t-${variant}`, className)} style={{ color: toneVar[tone], ...style }} {...rest} />
}
