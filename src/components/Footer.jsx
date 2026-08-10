import './Footer.css'

/** Simple footer shown on every page. Replace the links with your own. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Attila Kiri. Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/4Parasonic2" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
