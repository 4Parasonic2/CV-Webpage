import './Resume.css'

/**
 * Resume — displays the CV PDF directly, full-page.
 *
 * The PDF file lives at /public/cv.pdf. Every modern browser renders
 * PDFs natively inside an <iframe>, so no extra library is needed.
 * The "Download" button uses the HTML `download` attribute to save
 * the file instead of opening it in a new tab.
 *
 * To swap the resume: drop your new file into `public/` and name it
 * `cv.pdf` (or update the CV_URL constant below).
 */
const CV_URL = 'cv.pdf'

export default function Resume() {
  return (
    <div className="page container resume-page">
      <div className="resume-header">
        <div>
          <h1 className="section-title">CV / Resume</h1>
          <p className="section-subtitle">
            My full CV, embedded below. Use the download button to save a copy.
          </p>
        </div>
        <a href={CV_URL} download className="btn btn-primary resume-download">
          Download CV (PDF)
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src={`${CV_URL}#view=FitH`}
          title="Attila Kiri — CV"
          aria-label="CV document"
        />
      </div>

      <p className="resume-fallback">
        Can&rsquo;t see the PDF?{' '}
        <a href={CV_URL} target="_blank" rel="noreferrer">
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  )
}
