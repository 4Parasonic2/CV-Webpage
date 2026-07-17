import { NavLink } from 'react-router-dom'
import './Navbar.css'
import ThemeToggle from './ThemeToggle.jsx'

/**
 * Small inline SVG icons for the nav links.
 * Inline SVGs need no extra files or icon library and inherit the
 * link's text color automatically via stroke="currentColor".
 */
const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h9l4 4v16H6z" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  ),
  roadmap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M12 12h6M12 12H6" />
    </svg>
  ),
}

/** Nav links live in one array so adding a page later is a one-line change. */
const links = [
  { to: '/', label: 'Home', icon: icons.home },
  { to: '/projects', label: 'Projects', icon: icons.projects },
  { to: '/resume', label: 'Resume', icon: icons.resume },
  { to: '/roadmap', label: 'Roadmap', icon: icons.roadmap },
]

/**
 * Sticky top navigation bar, visible on every page.
 * NavLink (from react-router) automatically adds an "active" class to
 * the link matching the current page, which we style with the accent color.
 */
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand: avatar + name, links back to Home */}
        <NavLink to="/" className="navbar-brand">
          <img src="profile.svg" alt="" className="navbar-avatar" />
          <span>ATTILA KIRI</span>
        </NavLink>

        <nav className="navbar-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              // "end" makes "/" active only on the exact home path
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              <span className="navbar-icon">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
