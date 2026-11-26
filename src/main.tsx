import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { startSlug } from './screens/registry'

// The prototype always opens on the start screen (the component showcase stays addressable at #/showcase).
if (!window.location.hash.startsWith('#/showcase')) {
  window.history.replaceState(null, '', `#/screens/${startSlug}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
