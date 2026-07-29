import { useEffect, useRef } from 'react'

const experiences = [
  {
    date: '2020 — 2024',
    title: 'Diseño Publicitario',
    company: 'Concesionaria de automotores',
    description: 'Gestión de imagen de marca y comunicación visual. Creación de contenido de alto impacto para ventas.'
  },
  {
    date: '2026',
    title: 'Diplomatura en Desarrollo de Software',
    company: 'CEUTyC',
    description: 'Especialización en lógica de programación, desarrollo web y tecnologías modernas.'
  }
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 200)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <h2 className="section-title">Trayectoria</h2>
        <p className="section-subtitle">Mi camino profesional y académico</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item fade-in">
              <div className="timeline-date">{exp.date}</div>
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}