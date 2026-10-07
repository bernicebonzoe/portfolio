import { Link } from 'react-router-dom'

export default function BerniCarePharma() {
  return (
    <main className="detail-page detail-bernicare">
      <section className="section">
        <div className="detail-container">
          <span className="section-label">PROJECT</span>

          <h2>BerniCare Pharma</h2>

          <div className="detail-card">
            <h3>What it does</h3>
            <p>
              A student project focused on creating a simple
              digital solution for a pharmaceutical environment.
            </p>
          </div>

          <div className="detail-card">
            <h3>What I used</h3>
            <p>Flutter, Dart, and a mobile app interface.</p>
          </div>

          <div className="detail-card">
            <h3>What was hard</h3>
            <p>The major challenges I faced as a student when building the pharmacy app included managing medicine and user databases, handling prescriptions, managing inventory, integrating payments, designing a user-friendly interface, and testing and debugging the application.</p>
          </div>

          <div className="detail-actions">
            <Link className="action-btn action-btn-primary" to="/#projects">
              ← Back to projects
            </Link>
            <Link className="action-btn action-btn-outline" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}