// Pure-CSS decorative "dashboard" illustration used on the hero and project cards.
// No external images needed, so the site stays lightweight and fast to load.
// Pass an `accent` prop ('lavender' | 'sunbeam' | 'mixed') to vary the palette.
export default function DashboardMock({ accent = 'mixed', compact = false }) {
  // Pick bar colors based on accent.
  const palettes = {
    lavender: ['bg-lavender-200', 'bg-lavender-300', 'bg-lavender-400', 'bg-lavender-200', 'bg-lavender-300'],
    sunbeam: ['bg-sunbeam-100', 'bg-sunbeam-200', 'bg-sunbeam-300', 'bg-sunbeam-200', 'bg-sunbeam-100'],
    mixed: ['bg-lavender-200', 'bg-sunbeam-200', 'bg-lavender-300', 'bg-sunbeam-100', 'bg-lavender-200'],
  }
  const bars = palettes[accent] || palettes.mixed
  const heights = ['h-10', 'h-16', 'h-24', 'h-14', 'h-20']

  return (
    <div
      className={`relative rounded-2xl bg-white border border-ink-900/5 shadow-card p-5 ${
        compact ? 'aspect-[16/10]' : 'aspect-[16/10]'
      }`}
    >
      {/* Top row: pretend chart title + three summary chips */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-lavender-300" />
          <span className="h-2 w-24 rounded-full bg-ink-900/10" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-8 rounded-full bg-ink-900/10" />
          <span className="h-2 w-8 rounded-full bg-ink-900/10" />
          <span className="h-2 w-8 rounded-full bg-ink-900/10" />
        </div>
      </div>

      {/* KPI row */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {['lavender', 'sunbeam', 'lavender'].map((t, i) => (
          <div
            key={i}
            className={`rounded-xl p-3 ${
              t === 'lavender' ? 'bg-lavender-50' : 'bg-sunbeam-50'
            }`}
          >
            <span className="block h-1.5 w-10 rounded-full bg-ink-900/10" />
            <span className="block mt-2 h-3 w-14 rounded-full bg-ink-900/15" />
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="mt-5 flex items-end gap-3 h-28">
        {bars.map((c, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md ${c} ${heights[i]} transition-all duration-500`}
          />
        ))}
      </div>

      {/* Line chart baseline */}
      <div className="mt-3 h-px w-full bg-ink-900/10" />

      {/* Floating accent dot — adds warmth */}
      <span
        aria-hidden
        className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gradient-to-br from-sunbeam-200 to-lavender-200 shadow-soft"
      />
    </div>
  )
}
