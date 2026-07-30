import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className="hero-content fade-in" ref={ref}>
        <img src={`${import.meta.env.BASE_URL}foto-sofia.jpg`} alt="Sofía Cestona" className="foto-perfil" />
        <h1>Sofía Cestona</h1>
        <p className="tagline">Software Developer | Tatuadora Profesional | Aspirante a Bombero</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-accent">
            <i className="bi bi-arrow-right"></i> Ver Proyectos
          </a>
          <a href="#contact" className="btn-outline">
            <i className="bi bi-chat-dots"></i> Contacto
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  )
}