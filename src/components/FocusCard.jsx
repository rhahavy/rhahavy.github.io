// Small value-prop card used in the "What I Focus On" home-page section.
// Accepts an Icon component (from lucide-react) for the leading glyph.
export default function FocusCard({ icon: Icon, title, body, tone = 'lavender' }) {
  const tones = {
    lavender: {
      bg: 'bg-lavender-50',
      text: 'text-lavender-600',
      ring: 'group-hover:ring-lavender-200',
    },
    sunbeam: {
      bg: 'bg-sunbeam-50',
      text: 'text-ink-900',
      ring: 'group-hover:ring-sunbeam-200',
    },
  }
  const t = tones[tone]

  return (
    <div className="group card-surface p-7 sm:p-8 hover:-translate-y-1 hover:shadow-card">
      <div
        className={`h-12 w-12 rounded-2xl grid place-items-center ring-1 ring-transparent transition ${t.bg} ${t.text} ${t.ring}`}
      >
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{body}</p>
    </div>
  )
}
