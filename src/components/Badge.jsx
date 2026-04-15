// Small rounded pill used for tool/skill tags.
// Accepts an optional `tone` prop: 'lavender' (default) | 'sunbeam' | 'neutral'.
export default function Badge({ children, tone = 'lavender' }) {
  const tones = {
    lavender: 'bg-lavender-50 text-lavender-600 border-lavender-100',
    sunbeam: 'bg-sunbeam-50 text-ink-900 border-sunbeam-100',
    neutral: 'bg-ivory-100 text-ink-700 border-ink-900/10',
  }
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
