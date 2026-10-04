import { Link } from 'react-router-dom'

export default function KudiLink() {
  return (
    <main className="detail-page">
      <section className="section">
        <div className="detail-container">
          <span className="section-label">PROJECT</span>

          <h2>KudiLink</h2>

          <div className="detail-card">
            <h3>What it does</h3>
            <p>
              A microfinance kiosk interface designed to help
              users manage savings, loans, and repayments.
            </p>
          </div>

          <div className="detail-card">
            <h3>What I used</h3>
            <p>Flutter, Dart, and UI design.</p>
          </div>

          <div className="detail-card">
            <h3>What was hard</h3>
            <p>
              Some challenges I may face include limited technical
              knowledge, difficulty managing databases, implementing
              accurate loan and repayment calculations, connecting
              the application to a backend, and debugging errors.
            </p>
          </div>

          <div className="detail-actions">
            <Link className="action-btn action-btn-primary" to="/">
              ← Back to home
            </Link>
            <Link className="action-btn action-btn-outline" to="/#projects">
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}