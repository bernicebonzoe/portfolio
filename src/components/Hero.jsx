export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* NAVIGATION */}
      <nav className="navbar">

        <div className="logo">
          BB
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* BACKGROUND GLOWS */}
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="hero-glow glow-three"></div>


      {/* HERO CONTENT */}
      <div className="hero-content">

        <span className="badge">
          <span className="code-icon">&lt;/&gt;</span>
          COMPUTER ENGINEERING STUDENT
        </span>

        <h1>
          Hello, I'm
          <span>Bernice Bonzoe.</span>
        </h1>

        <h2>
          I love coding, creating and learning.
        </h2>

        <p>
          I'm a Computer Engineering student passionate about
          technology, software development, and building
          meaningful solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn primary-btn">
            View My Work <span>→</span>
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Connect <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}