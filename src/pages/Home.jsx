import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { profile } from '../data/profile.js'
import { processSteps as designProcess, site, skillPills } from '../data/site.js'
import { projects } from '../data/projects.js'

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-avatar">
          <img src="./avatar.jpg" alt="李双" />
        </div>
        <p className="hero-badge">{site.hero.badge}</p>
        <h1>{site.hero.title}</h1>
        <p className="lede">{site.hero.subtitle}</p>
        <div className="cta-row">
          <Link className="button" to="/works">
            查看作品
          </Link>
          <Link className="button button-ghost" to="/contact">
            联系我
          </Link>
        </div>
      </section>

      <ul className="tools-row" aria-label="常用工具">
        {site.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>

      <section className="section cases-section" id="works">
        <div className="section-head">
          <div>
            <p className="kicker">Selected works</p>
            <h2>案例研究</h2>
          </div>
          <Link className="text-link" to="/works">
            查看全部
          </Link>
        </div>
        <div className="project-stack">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-head is-centered">
          <p className="kicker">Process</p>
          <h2>从探索到可体验方案</h2>
          <p className="lede">发现、定义、设计、验证。用完整过程说明判断与取舍，而不是只展示终稿。</p>
        </div>
        <div className="process-grid">
          {designProcess.map((step) => (
            <article key={step.num} className="process-card">
              <p className="process-num">{step.num}</p>
              <p className="kicker">{step.kicker}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-head is-centered">
          <p className="kicker">Skills</p>
          <h2>能力与工具</h2>
        </div>
        <ul className="skill-pills">
          {skillPills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-head">
          <div>
            <p className="kicker">Experience</p>
            <h2>教育与奖项</h2>
          </div>
          <Link className="text-link" to="/about">
            完整介绍
          </Link>
        </div>
        <div className="experience-list">
          {profile.education.map((item) => (
            <article key={item.id} className="experience-row">
              <div>
                <h3>{item.school}</h3>
                <p>
                  {item.degree} · {item.major}
                  {item.note ? ` · ${item.note}` : ''}
                </p>
              </div>
              <p className="meta">{item.period}</p>
            </article>
          ))}
          {profile.awards.map((item) => (
            <article key={item.name} className="experience-row">
              <div>
                <h3>{item.name}</h3>
                <p>{item.result} · {item.detail}</p>
              </div>
              <p className="meta">{item.period}</p>
            </article>
          ))}
          {profile.publications.map((item) => (
            <article key={item.title} className="experience-row">
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <p className="meta">论文</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
