import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { site } from '../data/site.js'

export default function About() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <div className="page about">
      <header className="page-header is-centered">
        <p className="kicker">About</p>
        <h1>{profile.name}</h1>
        <p className="lede">
          {profile.college} · {profile.status} · {profile.location}
        </p>
      </header>

      <section id="profile" className="about-block">
        <h2>Personal Profile</h2>
        <ul className="axis-list">
          {site.axes.map((axis) => (
            <li key={axis}>{axis}</li>
          ))}
        </ul>
        <dl className="about-facts">
          {profile.facts.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="lede">{profile.positioning}</p>
        <p>{profile.intro}</p>
        <p>{profile.introContinued}</p>
        <p className="seeking">{site.seekingZh}</p>
        <ul className="tag-row">
          {profile.careerDirections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="education" className="about-block">
        <h2>Education</h2>
        <div className="edu-grid">
          {profile.education.map((item) => (
            <article key={item.id} className="edu-card">
              <p className="kicker">{item.level}</p>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              {item.college ? <p>{item.college}</p> : null}
              <p>专业：{item.major}</p>
              <p>时间：{item.period}</p>
              {item.note ? <p>{item.note}</p> : null}
              {item.highlights?.length ? (
                <ul className="edu-highlights">
                  {item.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="about-block">
        <h2>Experience</h2>
        <h3>Campus & Work</h3>
        <ul className="timeline">
          {profile.experiences.map((item) => (
            <li key={`${item.org}-${item.role}`}>
              <p className="kicker">
                {item.period} · {item.role}
              </p>
              <h3>{item.org}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
        <h3>Award Experience</h3>
        <ul className="timeline">
          {profile.awards.map((item) => (
            <li key={item.name}>
              <p className="kicker">
                {item.period} · {item.result}
              </p>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
        {profile.publicationsPending ? null : (
          <>
            <h3 id="publications">Publications</h3>
            <ul className="timeline">
              {(profile.publications ?? []).map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <h3>Career Direction</h3>
        <div className="capability-grid">
          {profile.careerDirectionNotes.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="about-block">
        <h2>Skills</h2>
        <h3>Design Capabilities</h3>
        <div className="capability-grid">
          {profile.designCapabilities.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <h3>Research Capabilities</h3>
        <div className="capability-grid">
          {profile.researchCapabilities.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p className={item.pending ? 'pending' : undefined}>{item.text}</p>
            </article>
          ))}
        </div>
        <h3>Software</h3>
        <ul className="skill-groups">
          {profile.softwareSkills.map((group) => (
            <li key={group.group}>
              <strong>{group.group}</strong>
              <span>{group.tools.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="about-block">
        <h2>Contact</h2>
        <p>{profile.contact.status}</p>
        <p>{profile.contact.statusDetail}</p>
        <ul className="contact-list">
          <li>
            电话 <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
          </li>
          <li>
            邮箱 <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          </li>
          <li>微信 {profile.contact.wechat}</li>
          <li>
            Resume{' '}
            <a
              href={`${import.meta.env.BASE_URL}${site.resumeFile}`}
              download={site.resumeDownloadName}
            >
              {profile.contact.resume}
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
