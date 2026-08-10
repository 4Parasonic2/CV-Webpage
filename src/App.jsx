import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Resume from './pages/Resume.jsx'

/**
 * App defines the overall page layout and the routes.
 *
 * HashRouter is used (URLs look like /#/projects) because GitHub Pages
 * is a static file host: it can only serve files that exist on disk.
 * With a normal router, refreshing /projects would ask GitHub for a
 * file called "projects" that doesn't exist and show a 404. The hash
 * part of a URL is never sent to the server, so HashRouter avoids the
 * problem entirely with zero configuration.
 */
export default function App() {
  return (
    <HashRouter>
      {/* Decorative fixed star background, sits behind everything */}
      <div className="starfield" aria-hidden="true" />

      {/* Resets scroll position when navigating between pages */}
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  )
}
