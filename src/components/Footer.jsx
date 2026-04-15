import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

// Elegant minimal footer — echoes nav branding, adds quick links + socials.
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-ink-900/5 bg-gradient-to-b from-ivory-50 to-ivory-100">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-semibold text-ink-900">
              <span
                aria-hidden
                className="h-8 w-8 rounded-full bg-gradient-to-br from-lavender-200 to-sunbeam-200"
              />
              {profile.name}
            </div>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed max-w-xs">
              {profile.role}. Based in {profile.location}.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-500 hover:text-lavender-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="h-10 w-10 grid place-items-center rounded-full border border-ink-900/10 bg-white text-ink-700 hover:text-lavender-600 hover:border-lavender-200 transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="h-10 w-10 grid place-items-center rounded-full border border-ink-900/10 bg-white text-ink-700 hover:text-lavender-600 hover:border-lavender-200 transition-all hover:-translate-y-0.5"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.links.email}
                aria-label="Email"
                className="h-10 w-10 grid place-items-center rounded-full border border-ink-900/10 bg-white text-ink-700 hover:text-lavender-600 hover:border-lavender-200 transition-all hover:-translate-y-0.5"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-900/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-400">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Designed & built with React + Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}
