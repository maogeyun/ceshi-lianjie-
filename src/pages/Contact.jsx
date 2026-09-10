import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <div className="page contact">
      <header className="page-header is-centered">
        <p className="kicker">Get in touch</p>
        <h1>Contact</h1>
        <p className="lede">{site.seekingZh}</p>
        <p>{profile.contact.statusDetail}</p>
      </header>
      <section className="contact-panel">
        <ul className="contact-list">
          <li>
            电话
            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
          </li>
          <li>
            邮箱
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            微信
            <span>{site.wechat}</span>
          </li>
          <li>
            About
            <Link to="/about">查看完整介绍</Link>
          </li>
          <li>
            Resume
            <a
              href={`${import.meta.env.BASE_URL}${site.resumeFile}`}
              download={site.resumeDownloadName}
            >
              {profile.contact.resume}
            </a>
          </li>
        </ul>
        <div className="cta-row">
          <a className="button" href={`mailto:${site.email}`}>
            发送邮件
          </a>
          <Link className="button button-ghost" to="/works">
            查看作品
          </Link>
        </div>
      </section>
    </div>
  )
}
