import { Mail, Linkedin, Github, FileDown, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'

// Each contact method renders as a card — visually consistent, clear hover state.
const methods = [
  {
    icon: Mail,
    label: 'Email',
    valueKey: 'email',
    display: (p) => p.links.email.replace('mailto:', ''),
    tone: 'lavender',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    valueKey: 'linkedin',
    display: () => 'Connect on LinkedIn',
    tone: 'sunbeam',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    valueKey: 'github',
    display: () => 'See my code on GitHub',
    tone: 'lavender',
    external: true,
  },
  {
    icon: FileDown,
    label: 'Resume',
    valueKey: 'resume',
    display: () => 'Download PDF',
    tone: 'sunbeam',
    external: false,
  },
]

export default function Contact() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="container-site pt-14 pb-12 sm:pt-20 sm:pb-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let's start a conversation."
            intro={profile.contactBlurb}
          />
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {methods.map(({ icon: Icon, label, valueKey, display, tone, external }) => (
              <a
                key={label}
                href={profile.links[valueKey]}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer noopener' : undefined}
                className="group card-surface p-7 sm:p-8 flex items-center justify-between
                           hover:-translate-y-1 hover:shadow-cardHover hover:border-lavender-100"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`h-14 w-14 rounded-2xl grid place-items-center ${
                      tone === 'lavender'
                        ? 'bg-lavender-50 text-lavender-600'
                        : 'bg-sunbeam-50 text-ink-900'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-400">
                      {label}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-medium text-ink-900">
                      {display(profile)}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-400 group-hover:text-lavender-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-14 text-center max-w-xl mx-auto">
            <p className="text-sm text-ink-500 leading-relaxed">
              Prefer a quick message? Email is the fastest way to reach me, and I
              reply within a day or two. Based in {profile.location}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
