import { ArrowUpRight, Github, Home, GraduationCap, Users, BarChart3 } from 'lucide-react'
import Badge from './Badge'

// Map data-file `icon` strings to real lucide components.
// Add new entries here when you introduce new project icons.
const ICONS = {
  Home,
  GraduationCap,
  Users,
  BarChart3,
}

// Card used on the Home page (featured) and the Projects grid.
// Click target is the whole card, with explicit action buttons for Live / Repo.
export default function ProjectCard({ project }) {
  const { title, category, shortDescription, tools, liveUrl, repoUrl, accent, icon } =
    project

  // Background gradients for the icon tile — soft, matches the site palette.
  const iconBg = {
    lavender: 'bg-gradient-to-br from-lavender-100 via-lavender-50 to-ivory-50',
    sunbeam: 'bg-gradient-to-br from-sunbeam-100 via-sunbeam-50 to-ivory-50',
    mixed: 'bg-gradient-to-br from-lavender-100 via-ivory-50 to-sunbeam-100',
  }[accent || 'mixed']

  // Icon color tuned to the accent.
  const iconColor = {
    lavender: 'text-lavender-500',
    sunbeam: 'text-ink-900',
    mixed: 'text-lavender-600',
  }[accent || 'mixed']

  const Icon = ICONS[icon] || BarChart3

  return (
    <article
      className="card-surface group overflow-hidden flex flex-col
                 hover:shadow-cardHover hover:-translate-y-1 hover:border-lavender-100"
    >
      {/* Icon header — large symbol, generous whitespace, subtle decorative accents */}
      <div
        className={`relative aspect-[16/10] ${iconBg} grid place-items-center overflow-hidden`}
      >
        {/* Decorative corner dots for visual texture */}
        <span
          aria-hidden
          className="absolute top-5 left-5 h-2 w-2 rounded-full bg-white/80"
        />
        <span
          aria-hidden
          className="absolute top-5 left-10 h-2 w-2 rounded-full bg-white/50"
        />

        {/* Main icon — grows slightly on hover */}
        <Icon
          size={84}
          strokeWidth={1.25}
          className={`${iconColor} transition-transform duration-500 group-hover:scale-110`}
        />

        {/* Category tag in the top-right corner */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-700">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-ink-900 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-ink-500 leading-relaxed">{shortDescription}</p>

        {/* Tool tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tools.map((t, i) => (
            <Badge key={t} tone={i % 2 === 0 ? 'lavender' : 'sunbeam'}>
              {t}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-4 flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary !py-2 !px-4 text-xs"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary !py-2 !px-4 text-xs"
          >
            <Github size={14} /> Case Study
          </a>
        </div>
      </div>
    </article>
  )
}
