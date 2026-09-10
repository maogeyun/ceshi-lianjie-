import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          {site.name}
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label="打开导航"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="主导航">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="button button-ghost nav-cta-mobile" onClick={() => setOpen(false)}>
            联系我
          </NavLink>
        </nav>
        <NavLink to="/contact" className="button button-ghost nav-cta">
          联系我
        </NavLink>
      </div>
    </header>
  )
}
