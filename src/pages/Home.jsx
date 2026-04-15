import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Github,
  Linkedin,
  LayoutDashboard,
  BookOpenText,
  Sparkles,
  MapPin,
} from 'lucide-react'
import { profile, focusAreas } from '../data/profile'
import { projects } from '../data/projects'
import DashboardMock from '../components/DashboardMock'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import FocusCard from '../components/FocusCard'

// Icons mapped to focus areas — kept in this file so data/profile.js stays pure strings.
const focusIcons = [LayoutDashboard, BookOpenText, Sparkles]

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      {/* =========== HERO =========== */}
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="container-site pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 animate-fade-up">
              <span className="eyebrow">Portfolio · {profile.location.split(',')[0]}</span>

              <h1 className="mt-5 font-display font-semibold text-ink-900 leading-[1.02] text-4xl sm:text-5xl lg:text-6xl tracking-tightish">
                {profile.headlineLead}
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">{profile.headlineAccent}</span>
                  {/* Editorial underline swash — pale brass */}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 sm:h-4 bg-lavender-100 -z-0 rounded-full"
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-500 leading-relaxed">
                {profile.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight size={16} />
                </Link>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-secondary"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-secondary"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs text-ink-400">
                <span className="flex items-center gap-2">
                  <MapPin size={13} /> {profile.location}
                </span>
                <span className="hidden sm:inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
                  Open to new opportunities
                </span>
              </div>
            </div>

            {/* Hero dashboard visual */}
            <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
              <div className="relative">
                <div className="animate-float">
                  <DashboardMock accent="mixed" />
                </div>
                {/* Soft accent card behind */}
                <div
                  aria-hidden
                  className="absolute -z-10 inset-0 translate-x-6 translate-y-8 rounded-2xl bg-gradient-to-br from-lavender-100 to-sunbeam-100 blur-2xl opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== WHAT I FOCUS ON =========== */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="What I focus on"
            title="Three things I bring to every project."
            intro="I care about clarity. Every dashboard I build is designed so the right number finds the right person — without extra friction."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((f, i) => (
              <FocusCard
                key={f.title}
                icon={focusIcons[i]}
                title={f.title}
                body={f.body}
                tone={i === 1 ? 'sunbeam' : 'lavender'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========== FEATURED PROJECTS =========== */}
      <section className="py-20 sm:py-28 bg-ivory-100/60 border-y border-ink-900/5">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Featured Work"
              title="Dashboards built for clarity."
              intro="A curated selection of analytics projects — each one designed around a real question, not just pretty charts."
            />
            <Link to="/projects" className="btn-ghost self-start sm:self-end">
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* =========== CTA =========== */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lavender-100 via-ivory-50 to-sunbeam-100 p-10 sm:p-14 text-center">
            <span className="eyebrow">Let's talk</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold max-w-2xl mx-auto leading-tight">
              Looking for an analyst who can translate data into decisions?
            </h2>
            <p className="mt-4 text-ink-500 max-w-xl mx-auto">
              I'm open to analyst, data coordinator, and project-analyst roles.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowRight size={16} />
              </Link>
              <a href={profile.links.resume} className="btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
