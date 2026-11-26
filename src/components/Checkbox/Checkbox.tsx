import type { InputHTMLAttributes } from 'react'
import acceptAccent12 from '../../assets/icons/accept-accent-12.svg'
import styles from './Checkbox.module.css'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

/** Figma "Check Box" — 22px box, 1px Border/border-secondary, radius 4, brand check (asset). */
export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  return (
    <label className={`${styles.root} ${className ?? ''}`}>
      <input type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <img src={acceptAccent12} width={12} height={12} alt="" className={styles.check} />
      </span>
      <span className={`t-medium-text ${styles.label}`}>{label}</span>
    </label>
  )
}
