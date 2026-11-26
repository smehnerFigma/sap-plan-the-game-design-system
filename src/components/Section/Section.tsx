import { useId, useState, type ReactNode } from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Section.module.css'

export interface SectionProps {
  title: string
  children: ReactNode
  defaultExpanded?: boolean
  /** Gap between header and content blocks (Figma: 24; the Skill Gap screens use 26). */
  gap?: number
}

/** Collapsible page section: Section Header + content (py 20, gap 24). */
export function Section({ title, children, defaultExpanded = true, gap }: SectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const id = useId()
  return (
    <section className={styles.section} aria-label={title} style={gap != null ? { gap } : undefined}>
      <SectionHeader title={title} expanded={expanded} onToggle={() => setExpanded(e => !e)} controls={id} />
      <div id={id} className={styles.body} hidden={!expanded} style={gap != null ? { gap } : undefined}>{children}</div>
    </section>
  )
}
