import heroBg from '../assets/hero-bg.jpg'
import lightmeterBg from '../assets/lightmeter-bg.jpg'
import bernicareBg from '../assets/bernicare-bg.jpg'
import kudilinkBg from '../assets/kudilink-bg.jpg'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <div
  className="hero-with-bg"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <Hero />
</div>

      {/* ABOUT SECTION */}
      <section className="section about" id="about">
        <span className="section-label">GET TO KNOW ME</span>

        <h2>About Me</h2>

        <div className="about-content">
          <p className="about-lead">
            I love turning ideas into things that work, from
            circuits that sense light to apps that solve
            everyday problems.
          </p>

          <h3 className="about-subheading">
            Where Hardware Meets Software
          </h3>

          <p>
            Most people pick a side. I enjoy both. I like
            understanding how a device works at the wiring
            level, then building the software that makes it
            useful to real people. That mix lets me see a
            project from the first component to the final
            screen.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills" id="skills">
        <span className="section-label">WHAT I AM LEARNING</span>

        <h2>My Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">{"</>"}</div>
            <h3>Programming</h3>
            <p>
              Building my foundation in programming
              and problem-solving.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">{"{}"}</div>
            <h3>Web Development</h3>
            <p>
              Creating websites and interactive
              user experiences.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">{"<>"}</div>
            <h3>React</h3>
            <p>
              Learning how to build modern interfaces
              with React.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">{"⚙"}</div>
            <h3>Computer Engineering</h3>
            <p>
              Exploring hardware, software, systems,
              and technology.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section projects" id="projects">
        <span className="section-label">MY WORK</span>

        <h2>Projects</h2>

        <p className="section-intro">
          Here are some of the projects I have worked
          on while learning and developing my skills.
        </p>

        <div className="projects-grid">
          <div
            className="project-card project-card-image"
            style={{ backgroundImage: `url(${lightmeterBg})` }}
          >
            <div className="project-number">01</div>
            <h3>Digital Light Meter</h3>
            <p>
              An electronic circuit that measures light
              levels and shows the reading on a 7-segment
              display.
            </p>

            <div className="project-footer">
              <div className="project-tags">
                <span>LDR</span>
                <span>555 Timer</span>
                <span>ADC</span>
              </div>

              <Link
                className="action-btn action-btn-primary action-btn-small"
                to="/projects/light-meter"
              >
                View my project →
              </Link>
            </div>
          </div>

          <div
            className="project-card project-card-image"
            style={{ backgroundImage: `url(${kudilinkBg})` }}
          >
            <div className="project-number">02</div>
            <h3>KudiLink</h3>
            <p>
              A student project concept for a microfinance
              kiosk interface designed to help users manage
              savings, loans, and repayments.
            </p>

            <div className="project-footer">
              <div className="project-tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>UI Design</span>
              </div>

              <Link
                className="action-btn action-btn-primary action-btn-small"
                to="/projects/kudilink"
              >
                View my project →
              </Link>
            </div>
          </div>

          <div
            className="project-card project-card-image"
            style={{ backgroundImage: `url(${bernicareBg})` }}
          >
            <div className="project-number">03</div>
            <h3>BerniCare Pharma</h3>
            <p>
              A student project focused on creating a
              simple digital solution for a pharmaceutical
              environment.
            </p>

            <div className="project-footer">
              <div className="project-tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Mobile App</span>
              </div>

              <Link
                className="action-btn action-btn-primary action-btn-small"
                to="/projects/bernicare-pharma"
              >
                View my project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact" id="contact">
        <span className="section-label">LET'S CONNECT</span>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning, building
          new things, and connecting with people who
          share a passion for technology.
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bernice-bonzoe-6b709b3a2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card linkedin"
          >
            <span className="social-icon">in</span>
            <div>
              <strong>LinkedIn</strong>
              <small>Bernice Bonzoe</small>
            </div>
          </a>

          <a
            href="https://www.instagram.com/sommez_jose?utm_source=qr&stkn=Ynl4aWo2ZmRoZTl0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card instagram"
          >
            <span className="social-icon">◎</span>
            <div>
              <strong>Instagram</strong>
              <small>@sommez_jose</small>
            </div>
          </a>

         <a
  href="https://x.com/sommez7"
  target="_blank"
  rel="noopener noreferrer"
  className="social-card xaccount"
>
  <span className="social-icon">X</span>
  <div>
    <strong>X</strong>
    <small>@sommez7</small>
  </div>
</a>

          <a
            href="mailto:bonzoebernice@gmail.com"
            className="social-card gmail"
          >
            <span className="social-icon">@</span>
            <div>
              <strong>Gmail</strong>
              <small>bonzoebernice@gmail.com</small>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}