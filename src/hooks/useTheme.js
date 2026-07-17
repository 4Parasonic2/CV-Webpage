import { useEffect, useState } from 'react'

/**
 * useTheme — reads/writes the current theme ('light' or 'dark').
 *
 * The theme is stored on <html data-theme="..."> so every CSS
 * variable in variables.css swaps in one place, and persisted to
 * localStorage so the user's choice sticks between visits.
 * index.html sets the initial value BEFORE React mounts to avoid
 * a flash of the wrong theme.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'light'
      : 'light',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage may be unavailable (e.g. private mode) — safe to ignore */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}