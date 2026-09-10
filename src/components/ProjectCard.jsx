import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card tone-${project.tone}`}>
      <div className="project-card-copy">
        <p className="kicker">
          {project.index} · {project.types.join(' · ')}
        </p>
        <h3>{project.name}</h3>
        <p>{project.oneLiner}</p>
        <Link className="text-link" to={`/works/${project.slug}`}>
          查看案例
        </Link>
      </div>
      <Link to={`/works/${project.slug}`} className="project-card-visual" aria-label={project.shortName}>
        <ProjectMedia slug={project.slug} title={project.shortName} file={project.cover ?? 'cover.png'} />
      </Link>
    </article>
  )
}
