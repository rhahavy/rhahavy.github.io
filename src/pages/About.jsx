import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, skillGroups } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-hero-glow">
        <div className="container-site pt-14 pb-12 sm:pt-20 sm:pb-16">
          <SectionHeading
            eyebrow="About"
            title="Hi, I'm Rhahavy."
            intro="Dashboard developer and data analyst based in Markham, Ontario."
          />
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Portrait / accent column */}
          <div className="lg:col-span-4">
            <div className="relative">
              {/* Placeholder portrait — replace /public/portrait.jpg to show a real photo */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-lavender-100 via-ivory-100 to-sunbeam-100 shadow-card overflow-hidden relative">
                <img
                  src="/portrait.png"
                  alt={`${profile.name} portrait`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-card px-4 py-3 border border-ink-900/5">
                <p className="text-xs text-ink-400 uppercase tracking-widest">Based in</p>
                <p className="text-sm font-medium text-ink-900">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-8">
            <div className="prose-like space-y-5 text-ink-700 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a{' '}
                <span className="text-ink-900 font-medium">
                  data analyst and dashboard developer
                </span>{' '}
                focused on turning messy datasets into the kind of clean, visual
                stories that help people make better decisions — faster.
              </p>
              <p>
                By day, I'm a{' '}
                <span className="text-ink-900 font-medium">
                  Junior Project Coordinator at LEARNstyle
                </span>
                , an education-focused SaaS company, where I keep academic
                workflows, stakeholders, and moving parts in sync. Before that, I
                spent years teaching and tutoring across grade levels — grading,
                supporting lessons, and communicating with students and parents.
                That experience is why I care so much about clarity: if a report
                can't be understood quickly, it usually won't be used.
              </p>
              <p>
                My work now lives at the intersection of analytics and
                communication. I build dashboards in{' '}
                <span className="text-ink-900 font-medium">Tableau and Power BI</span>
                , wrangle data with <span className="text-ink-900 font-medium">Excel and SQL</span>
                , and design every view around a single question: what does someone
                actually need to know, and what should they do next?
              </p>
              <p>
                I'm analytical but creative, detail-oriented but not rigid, and a
                quiet obsessive about good design, clean spreadsheets, and
                well-structured documentation.
              </p>
            </div>

            {/* Highlight banner — balanced with a CTA on the right */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 rounded-2xl bg-lavender-50 border border-lavender-100">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-white grid place-items-center text-lavender-600 shadow-soft shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender-600">
                    Currently open to
                  </p>
                  <p className="mt-1 text-sm sm:text-base text-ink-900 font-medium leading-snug">
                    Data Analyst · Business Analyst · Project / Data Coordinator roles
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-lavender-200 text-lavender-600 text-sm font-medium hover:bg-lavender-100 transition-all shrink-0 self-start sm:self-auto"
              >
                Let's talk <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 sm:py-24 bg-ivory-100/60 border-y border-ink-900/5">
        <div className="container-site">
          <SectionHeading
            eyebrow="Skills & Tools"
            title="The toolkit I work with."
            intro="A practical mix of analytics tools, query languages, and workplace craft."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, i) => (
              <div key={group.label} className="card-surface p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <Badge
                      key={item}
                      tone={(i + j) % 3 === 0 ? 'sunbeam' : 'lavender'}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-xl mx-auto leading-tight">
            Want to see the work behind the words?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="btn-primary">
              Explore projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
