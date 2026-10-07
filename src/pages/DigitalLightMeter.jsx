import { Link } from 'react-router-dom'

export default function DigitalLightMeter() {
  return (
    <main className="detail-page detail-lightmeter">
      <section className="section">
        <div className="detail-container">
          <span className="section-label">PROJECT</span>

          <h2>Digital Light Meter</h2>

          <div className="detail-card">
            <h3>What it does</h3>
            <p>
              An electronic circuit that measures how bright the
              surroundings are and shows the reading on a
              7-segment display.
            </p>
          </div>

          <div className="detail-card">
            <h3>What I used</h3>
            <p>LDR, 555 timer, ADC, and a 7-segment display.</p>
          </div>

          <div className="detail-card">
            <h3>What was hard</h3>
            <p>
              The challenges I faced includes difficulty connecting
              and calibrating the light sensor, programming errors
              when displaying light intensity, limited access to
              components and equipment, and wiring and power issues.
            </p>
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