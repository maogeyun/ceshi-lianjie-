import { Link, useParams } from 'react-router-dom'
import ProjectMedia from '../components/ProjectMedia.jsx'
import { getAdjacentProjects, getProject } from '../data/projects.js'

function isPending(text) {
  return !text || text === '内容待补充'
}

function Pending({ text }) {
  return <p className={isPending(text) ? 'pending' : undefined}>{text || '内容待补充'}</p>
}

function BoardGallery({ slug, title, items }) {
  if (!items?.length) return null

  return (
    <div className="case-gallery">
      {items.map((item) => (
        <figure key={item.file}>
          <ProjectMedia
            slug={slug}
            title={`${title} ${item.caption || ''}`.trim()}
            file={item.file}
            className="is-board"
          />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  )
}

export default function ProjectCase() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <div className="page">
        <header className="page-header is-centered">
          <h1>未找到该项目</h1>
          <p>当前作品集只包含三个已确认项目。</p>
          <Link className="text-link" to="/works">
            返回 Works
          </Link>
        </header>
      </div>
    )
  }

  const { prev, next } = getAdjacentProjects(project.slug)
  const media = project.media ?? {}
  const meta = [
    ['角色', project.role],
    ['周期', project.period],
    ['团队', project.team],
    ['工具', project.tools],
    ['类型', project.types.join(' · ')],
  ]

  return (
    <article className="page case">
      <header className="case-hero">
        <p className="kicker">
          {project.index} · {project.types.join(' · ')}
        </p>
        <h1>{project.name}</h1>
        <p className="lede">{project.oneLiner}</p>
        <ProjectMedia
          slug={project.slug}
          title={project.shortName}
          file={project.cover ?? 'cover.png'}
          className="is-hero is-board"
        />
        <dl className="summary-grid">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd className={isPending(value) ? 'pending' : undefined}>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="case-block">
        <h2>Challenge</h2>
        <Pending text={project.challenge} />
        <p>{project.overview.background}</p>
        <p>{project.overview.users}</p>
        <p>{project.overview.problem}</p>
      </section>

      <section className="case-block">
        <h2>My Role</h2>
        <Pending text={project.myRole} />
        <p className={isPending(project.contribution) ? 'pending' : undefined}>
          个人贡献：{project.contribution}
        </p>
      </section>

      <section className="case-block">
        <h2>关键产出</h2>
        <p className="meta">以下为设计产出物，不是虚构的量化指标。</p>
        <div className="outcome-grid">
          {project.outcomes.map((item) => (
            <article key={item.label} className="outcome-card">
              <p className="outcome-value">{item.value}</p>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-block">
        <h2>Process</h2>
        <p className="meta">{project.emphasisNote}</p>
        <Pending text={project.process} />
        <BoardGallery slug={project.slug} title={`${project.shortName} 过程`} items={media.process} />
        {!media.process?.length ? (
          <ProjectMedia
            slug={project.slug}
            title={`${project.shortName} 过程视觉`}
            file="process.svg"
            className="is-board"
          />
        ) : null}
        <div className="case-process">
          {project.processSteps.map((step) => (
            <article key={step.title} className="case-process-item">
              <h3>{step.title}</h3>
              <Pending text={step.text} />
            </article>
          ))}
        </div>
      </section>

      <section className="case-block">
        <h2>Research</h2>
        <Pending text={project.research} />
        <BoardGallery slug={project.slug} title={`${project.shortName} 研究`} items={media.research} />
      </section>

      <section className="case-block">
        <h2>Experience</h2>
        <Pending text={project.experience} />
        <BoardGallery slug={project.slug} title={`${project.shortName} 体验`} items={media.experience} />
      </section>

      <section className="case-block">
        <h2>Solution</h2>
        <BoardGallery slug={project.slug} title={`${project.shortName} 方案`} items={media.solution} />
        {!media.solution?.length ? (
          <ProjectMedia
            slug={project.slug}
            title={`${project.shortName} 方案视觉`}
            file="solution.svg"
            className="is-board"
          />
        ) : null}
        <Pending text={project.solution} />
      </section>

      <section className="case-block">
        <h2>Conclusion</h2>
        <Pending text={project.outcome} />
      </section>

      <nav className="case-nav" aria-label="相邻项目">
        <Link to={`/works/${prev.slug}`}>← {prev.shortName}</Link>
        <Link to="/works">Works</Link>
        <Link to={`/works/${next.slug}`}>{next.shortName} →</Link>
      </nav>
    </article>
  )
}
