import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Derive the category list dynamically from the projects data.
  const categories = useMemo(() => {
    return ['All', ...new Set(projects.map((p) => p.category))]
  }, [])

  // Apply category + search filters.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tools.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <>
      {/* Header */}
      <section className="bg-hero-glow">
        <div className="container-site pt-14 pb-12 sm:pt-20 sm:pb-16">
          <SectionHeading
            eyebrow="Projects"
            title="A hub for the dashboards I've built."
            intro="Each project is a small case study: the question it set out to answer, the data it used, and the decisions it helped unlock. Use the filters below to narrow in."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 sm:top-20 z-30 bg-ivory-50/90 backdrop-blur-md border-y border-ink-900/5">
        <div className="container-site py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tools..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-ink-900/10
                         text-sm text-ink-900 placeholder:text-ink-400
                         focus:outline-none focus:border-lavender-300 focus:ring-2 focus:ring-lavender-100
                         transition"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === activeCategory
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                    active
                      ? 'bg-ink-900 text-ivory-50 border-ink-900'
                      : 'bg-white text-ink-700 border-ink-900/10 hover:border-lavender-300 hover:text-lavender-600'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 sm:py-20">
        <div className="container-site">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-medium text-ink-900">No projects found.</p>
              <p className="mt-2 text-ink-500 text-sm">
                Try clearing filters or using a different search term.
              </p>
              <button
                onClick={() => {
                  setQuery('')
                  setActiveCategory('All')
                }}
                className="btn-secondary mt-6"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
