import { useEffect, useState } from 'react'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact']

export default function SectionNav() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.4
      let current = 0

      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= marker) {
          current = i
        }
      })

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) current = SECTIONS.length - 1

      setIndex(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const goTo = (i) => {
    const el = document.getElementById(SECTIONS[i])
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="section-nav">
      <button
        className="section-nav-btn"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        aria-label="Go to previous section"
      >
        ↑ Back
      </button>

      <button
        className="section-nav-btn"
        onClick={() => goTo(index + 1)}
        disabled={index === SECTIONS.length - 1}
        aria-label="Go to next section"
      >
        Next ↓
      </button>
    </div>
  )
}