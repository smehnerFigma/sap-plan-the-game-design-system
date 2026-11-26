/** "-0.9%", "3.0%", "0%" — format used in the Figma variance column. */
export function formatVariance(v: number) {
  if (v === 0) return '0%'
  return `${v > 0 ? '' : '-'}${Math.abs(v).toFixed(1)}%`
}
