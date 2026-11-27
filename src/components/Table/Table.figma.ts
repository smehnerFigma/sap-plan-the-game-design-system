// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Horizon-Library?node-id=LIBRARY_NODE_ID
// componentKey=dcd471f8b24578919c13cc6c9f3516261adb231b (Figma "Table"; seen in U14fUtpHqbIHUuJnMfWAzu as 5151:50853)
// source=src/components/Table/Table.tsx
// component=Table
import figma from 'figma'

// The code Table is data-driven (caption/columns/rows arrays) and takes no children, so the "Rows"
// slot cannot be mapped. "Table Toolbar" has no code equivalent. The snippet shows the data-driven API.
export default {
  example: figma.code`<Table caption={caption} columns={columns} rows={rows} />`,
  imports: ['import { Table } from "@/components"'],
  id: 'table',
  metadata: { nestable: true },
}
