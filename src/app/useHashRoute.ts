import { useEffect, useState } from 'react'

/** Minimal hash router: returns the path after "#" (e.g. "/screens/impact-analysis"). */
export function useHashRoute(): string {
  const read = () => window.location.hash.replace(/^#/, '') || '/'
  const [path, setPath] = useState(read)
  useEffect(() => {
    const onChange = () => setPath(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return path
}
