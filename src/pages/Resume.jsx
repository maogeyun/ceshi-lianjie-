import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { site } from '../data/site.js'

export default function Resume() {
  const fileHref = `${import.meta.env.BASE_URL}${site.resumeFile}`

  return (
    <div className="page resume">
      <header className="page-header is-centered">
        <p className="kicker">Resume</p>
        <h1>简历</h1>
        <p className="lede">点击下方按钮下载简历文件，欢迎邮件或微信继续沟通。</p>
      </header>
      <section className="contact-panel">
        <p>{profile.contact.status}</p>
        <p>{profile.contact.statusDetail}</p>
        <div className="cta-row">
          <a className="button" href={fileHref} download={site.resumeDownloadName}>
            下载简历
          </a>
          <a className="button button-ghost" href={`mailto:${site.email}`}>
            发送邮件
          </a>
          <Link className="button button-ghost" to="/about">
            完整介绍
          </Link>
        </div>
      </section>
    </div>
  )
}
