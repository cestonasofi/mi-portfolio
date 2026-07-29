import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#inicio" className="logo-link">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="34" height="34" rx="8" stroke="#0d9488" strokeWidth="2" fill="none"/>
            <text x="18" y="23" textAnchor="middle" fill="#0d9488" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="700">SC</text>
          </svg>
        </a>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  )
}