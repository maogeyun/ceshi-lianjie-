import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Works() {
  return (
    <div className="page works">
      <header className="page-header is-centered">
        <p className="kicker">Selected works</p>
        <h1>Works</h1>
        <p className="lede">三个深度案例。顺序：中电海康 XR → 水葫芦智能清理一体机 → 颞下颌矫正设备。</p>
      </header>
      <div className="project-stack">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
