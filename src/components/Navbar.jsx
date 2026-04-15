import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

// Sticky top navigation with a subtle on-scroll shadow + mobile drawer.
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Elevate the navbar once the user scrolls past the top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-50/85 backdrop-blur-md border-b border-ink-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 sm:h-20">
        {/* Wordmark / logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg sm:text-xl font-semibold tracking-tight text-ink-900"
        >
          <span
            aria-hidden
            className="h-8 w-8 rounded-full bg-gradient-to-br from-lavender-200 to-sunbeam-200"
          />
          <span>{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px bg-lavender-400 transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a href={profile.links.resume} className="btn-primary ml-3 !py-2 !px-5">
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-ivory-50 border-t border-ink-900/5 animate-fade-in">
          <div className="container-site py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-2 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-ink-900 bg-lavender-50'
                      : 'text-ink-500 hover:text-ink-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={profile.links.resume} className="btn-primary mt-2 justify-center">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
