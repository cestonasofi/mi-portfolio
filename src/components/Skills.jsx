import { useEffect, useRef } from 'react'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SIMPLE = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons'

const tagLogos = {
  HTML: { svg: `${DEVICON}/html5/html5-original.svg`, color: '#E34F26' },
  CSS: { svg: `${DEVICON}/css3/css3-original.svg`, color: '#1572B6' },
  JavaScript: { svg: `${DEVICON}/javascript/javascript-original.svg`, color: '#F7DF1E' },
  TypeScript: { svg: `${DEVICON}/typescript/typescript-original.svg`, color: '#3178C6' },
  Bootstrap: { svg: `${DEVICON}/bootstrap/bootstrap-original.svg`, color: '#7952B3' },
  Python: { svg: `${DEVICON}/python/python-original.svg`, color: '#3776AB' },
  'Node.js': { svg: `${DEVICON}/nodejs/nodejs-plain.svg`, color: '#339933' },
  Django: { svg: `${DEVICON}/django/django-plain.svg`, color: '#fff' },
  PostgreSQL: { svg: `${DEVICON}/postgresql/postgresql-original.svg`, color: '#4169E1' },
  MySQL: { svg: `${DEVICON}/mysql/mysql-original.svg`, color: '#4479A1' },
  SQLite: { svg: `${DEVICON}/sqlite/sqlite-original.svg`, color: '#003B57', invert: true },
  Docker: { svg: `${DEVICON}/docker/docker-original.svg`, color: '#2496ED' },
  'Docker Compose': { svg: `${DEVICON}/docker/docker-plain.svg`, color: '#2496ED' },
  Git: { svg: `${DEVICON}/git/git-original.svg`, color: '#F05032' },
  GitHub: { svg: `${DEVICON}/github/github-original.svg`, color: '#fff', invert: true },
  'Git Bash': { svg: `${DEVICON}/git/git-original.svg`, color: '#4EAA25' },
  Canva: { svg: `${SIMPLE}/canva.svg`, color: '#00C4CC', invert: true },
  Sketchbook: { svg: `${SIMPLE}/autodesk.svg`, color: '#F57C00', invert: true },
  Photoshop: { svg: `${DEVICON}/photoshop/photoshop-plain.svg`, color: '#31A8FF' },
  'VS Code': { svg: `${DEVICON}/vscode/vscode-original.svg`, color: '#007ACC' }
}

const skills = [
  {
    icon: 'bi bi-code-slash',
    title: 'Frontend',
    description: 'Maquetación y desarrollo de interfaces web modernas y responsivas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap']
  },
  {
    icon: 'bi bi-server',
    title: 'Backend & Lógica',
    description: 'Programación del lado del servidor, APIs y lógica de negocio.',
    tags: ['Python', 'Node.js', 'Django']
  },
  {
    icon: 'bi bi-database',
    title: 'Bases de Datos',
    description: 'Gestión y modelado de datos relacionales y consultas SQL.',
    tags: ['PostgreSQL', 'MySQL', 'SQLite']
  },
  {
    icon: 'bi bi-box',
    title: 'DevOps & Herramientas',
    description: 'Contenedores, control de versiones y entornos de desarrollo.',
    tags: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Git Bash']
  },
  {
    icon: 'bi bi-palette',
    title: 'Diseño & Edición',
    description: 'Edición de imágenes, diseño publicitario y prototipado visual.',
    tags: ['Canva', 'Sketchbook', 'Photoshop']
  },
  {
    icon: 'bi bi-terminal',
    title: 'Entornos & IDEs',
    description: 'Configuración de entornos de desarrollo y productividad.',
    tags: ['VS Code', 'Git Bash']
  }
]

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas que uso</p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card fade-in">
              <div className="icon"><i className={skill.icon}></i></div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
{skill.tags.map((tag, j) => {
                    const info = tagLogos[tag] || { svg: '', color: '#94a3b8' }
                    const filterStyle = info.invert ? { filter: 'brightness(0) invert(1)' } : {}
                    return (
                      <span key={j} className="skill-tag" style={{ borderColor: info.color + '40', color: info.color, background: info.color + '15' }}>
                        <img src={info.svg} alt={tag} className="tag-logo" style={filterStyle} />
                        {tag}
                      </span>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}