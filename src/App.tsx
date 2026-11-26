import { useEffect, useMemo } from 'react'
import { useHashRoute } from './app/useHashRoute'
import { screens, startSlug, type Flow } from './screens/registry'
import { Showcase } from './showcase/Showcase'

const href: Flow['href'] = slug => `#/screens/${slug}`
const flow: Flow = { href, go: slug => { window.location.hash = href(slug).slice(1) } }

export default function App() {
  const path = useHashRoute()
  const m = path.match(/^\/screens\/([\w-]+)/)
  const screen = m && screens.find(s => s.slug === m[1])
  const content = useMemo(() => screen?.render(flow), [screen])
  const isShowcase = path.startsWith('/showcase')

  // Anything that isn't a known screen (or the showcase) falls back to the start screen.
  useEffect(() => {
    if (!screen && !isShowcase) window.history.replaceState(null, '', href(startSlug))
  }, [screen, isShowcase])

  if (isShowcase) return <Showcase />
  const shown = screen ?? screens.find(s => s.slug === startSlug)!
  return (
    // Keyed by group: states of the same flow keep component state across route changes.
    <div key={`group:${shown.group}`}>{screen ? content : shown.render(flow)}</div>
  )
}
