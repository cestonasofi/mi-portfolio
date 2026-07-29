import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((c) => c.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid fade-in">
          <div className="contact-info" style={{ textAlign: 'center' }}>
            <h2>Contacto</h2>
            <p>¿Hablamos? Estoy abierta a nuevas oportunidades, colaboraciones o simplemente para conectar.</p>
          </div>
          <div className="social-links">
            <a href="https://wa.me/qr/UO3SWI2FQMGKA1" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></div>
              <span>WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/sof%C3%ADa-milagros-cestona-b044b9191/" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon linkedin"><i className="bi bi-linkedin"></i></div>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/cestonasofi" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon github"><i className="bi bi-github"></i></div>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}