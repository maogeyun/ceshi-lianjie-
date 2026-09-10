import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page not-found">
      <header className="page-header is-centered">
        <p className="kicker">404</p>
        <h1>没有找到这个页面</h1>
        <p className="lede">作品集目前只有首页、Works、三篇案例、About、Resume 和 Contact。</p>
        <div className="cta-row">
          <Link className="button" to="/">
            回到首页
          </Link>
          <Link className="button button-ghost" to="/works">
            查看作品
          </Link>
        </div>
      </header>
    </div>
  )
}
