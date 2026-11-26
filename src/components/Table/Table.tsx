import styles from './Table.module.css'

export interface TableColumn<Row> {
  key: keyof Row & string
  header: string
}

export interface TableProps<Row extends Record<string, string>> {
  caption: string
  columns: TableColumn<Row>[]
  rows: Row[]
}

/** Figma "Table" (Spaces) — bordered, rounded, equal-width columns, 40px trailing spacer column. */
export function Table<Row extends Record<string, string>>({ caption, columns, rows }: TableProps<Row>) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <td className={styles.lead} aria-hidden="true" />
            {columns.map(c => <th key={c.key} scope="col" className={`t-body-strong ${styles.th}`}>{c.header}</th>)}
            <td className={styles.trail} aria-hidden="true" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className={styles.lead} aria-hidden="true" />
              {columns.map(c => <td key={c.key} className={`t-medium-text ${styles.td}`}>{r[c.key]}</td>)}
              <td className={styles.trail} aria-hidden="true" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
