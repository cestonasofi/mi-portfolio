import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: 'bi bi-shield-check',
    tag: 'Sistema',
    title: 'Sistema Gestión Bomberos',
    description: 'Plataforma para la gestión operativa de un cuerpo de bomberos. Registro de incidentes, equipos y personal.',
    link: 'https://github.com/cestonasofi/Sistema-Gestion-Bomberos-'
  },
  {
    icon: 'bi bi-droplet',
    tag: 'Arte',
    title: 'Tattoo Arte',
    description: 'Proyecto de catálogo digital para diseño de tatuajes. Galería de estilos y gestión de turnos.',
    link: 'https://github.com/cestonasofi/Tattoo_Arte'
  },
  {
    icon: 'bi bi-trophy',
    tag: 'Gimnasio',
    title: 'Iron Gym',
    description: 'Aplicación para la administración de un gimnasio. Control de rutinas, miembros y pagos.',
    link: 'https://github.com/cestonasofi/Iron-Gym'
  }
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 150)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">Algunos de mis trabajos en desarrollo</p>
        <div className="project-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card fade-in">
              <div className="project-card-body">
                <div className="project-icon"><i className={project.icon}></i></div>
                <span className="tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                  <i className="bi bi-github"></i> Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}