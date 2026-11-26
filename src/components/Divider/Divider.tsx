import styles from './Divider.module.css'

/** Figma "Line Divider" — 1px Border/border-primary rule. */
export function Divider({ vertical = false }: { vertical?: boolean }) {
  return <hr className={vertical ? styles.vertical : styles.divider} aria-orientation={vertical ? 'vertical' : undefined} />
}
