// Consistent section heading: eyebrow + large display title + optional intro.
// Used on every page to keep typography rhythm uniform.
export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base sm:text-lg text-ink-500 leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  )
}
