import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout() {
  return (
    <div className="site">
      <ScrollToTop />
      <Nav />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
