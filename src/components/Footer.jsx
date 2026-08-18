import './Footer.css'

/** Simple footer shown on every page. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>Built with React</p>
        <div className="footer-links">
          <a href="https://github.com/4Parasonic2" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/attilakiri/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-email">kiriattila22@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}
