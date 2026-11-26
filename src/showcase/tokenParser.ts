import tokensCss from '../tokens/tokens.css?raw'
import typographyCss from '../tokens/typography.css?raw'

export interface TokenInfo {
  name: string
  value: string
  /** Figma variable/style name(s), or "Inferred: …" note. */
  source: string
  origin: 'figma' | 'inferred'
  group: string
}

/** Parses tokens.css so the showcase always documents exactly what ships. */
export function parseTokens(): TokenInfo[] {
  const headers = [...tokensCss.matchAll(/\/\* ─+ (.+?) ─+ \*\//g)].map(m => ({ at: m.index!, name: m[1] }))
  const inferredMarkers = [...tokensCss.matchAll(/\/\* Inferred \(raw/g)].map(m => m.index!)
  const out: TokenInfo[] = []
  for (const m of tokensCss.matchAll(/(--[\w-]+)\s*:([^;]+);[ \t]*(?:\/\*\s*(.*?)\s*\*\/)?/g)) {
    const at = m.index!
    const header = headers.filter(h => h.at < at).at(-1)
    let value = m[2]
    let comment = m[3] ?? ''
    // Comment placed before a multi-line value (e.g. shadows).
    const inner = value.match(/\/\*\s*(.*?)\s*\*\//)
    if (inner) { comment = comment || inner[1]; value = value.replace(inner[0], '') }
    value = value.replace(/\s+/g, ' ').trim()
    const inferred = /^Inferred/i.test(comment) || inferredMarkers.some(i => i < at && (!header || i > header.at))
    out.push({
      name: m[1], value, origin: inferred ? 'inferred' : 'figma', group: header?.name ?? '',
      source: comment || (inferred ? 'Raw value repeated across screens' : ''),
    })
  }
  return out
}

export interface TypeStyle { className: string; css: string; figma: string }

export function parseTypography(): TypeStyle[] {
  return [...typographyCss.matchAll(/^\.(t-[\w-]+)\s*\{\s*(.*?)\s*\}\s*\/\*\s*(.*?)\s*\*\//gm)]
    .map(m => ({ className: m[1], css: m[2], figma: m[3] }))
}
