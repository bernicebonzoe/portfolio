import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import KudiLink from './pages/KudiLink'
import DigitalLightMeter from './pages/DigitalLightMeter'
import BerniCarePharma from './pages/BerniCarePharma'
import SectionNav from './components/SectionNav'
import "./App.css";

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  const { pathname } = useLocation()

  return (
    <div className="portfolio">
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/kudilink" element={<KudiLink />} />
        <Route path="/projects/light-meter" element={<DigitalLightMeter />} />
        <Route path="/projects/bernicare-pharma" element={<BerniCarePharma />} />
      </Routes>

      {pathname === '/' && <SectionNav />}

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">BB.</div>

        <p>Built by Bernice Bonzoe</p>

        <p>© 2026 Bernice Bonzoe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;