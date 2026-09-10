import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2>一起把复杂问题做成清晰体验</h2>
        <p>正在申请产品体验设计实习，欢迎邮件或微信联系。</p>
        <div className="cta-row">
          <a className="button" href={`mailto:${site.email}`}>
            发送邮件
          </a>
          <Link className="button button-ghost" to="/contact">
            联系方式
          </Link>
        </div>
      </div>
      <div className="footer-inner">
        <p className="footer-name">{site.name}</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>微信 {site.wechat}</span>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
