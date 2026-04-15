/** @type {import('tailwindcss').Config} */
// -----------------------------------------------------------------------------
// Design tokens — "Editorial Serious" palette.
// Inspired by premium business publications (FT, HBR, The Economist) and
// the editorial end of modern analyst-report design: deep midnight navy ink,
// warm paper cream, antique brass accent, and a muted sage secondary.
//
// The semantic Tailwind color KEYS (ivory, ink, lavender, sunbeam) stay the
// same so the component code doesn't have to change — only the hex values
// are retuned. Treat them as:
//
//   ivory    → warm paper cream (page base)
//   ink      → deep midnight navy (text, primary dark)
//   lavender → antique brass / muted gold (PRIMARY accent)
//   sunbeam  → muted sage (SECONDARY accent)
// -----------------------------------------------------------------------------
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm paper cream — base surface. Not white — carries warmth like
        // high-quality uncoated print stock.
        ivory: {
          50: '#F7F3EA',
          100: '#EFE8D6',
          200: '#E2D6BA',
        },
        // Antique brass / muted gold — the PRIMARY accent. Serious, editorial,
        // never flashy. Replaces what was lavender in the previous palette.
        lavender: {
          50: '#F8F0DC',
          100: '#EFDDB0',
          200: '#DEC37E',
          300: '#CAA650',
          400: '#B38E34',
          500: '#96742A',
          600: '#7B5E22', // deep brass — used for small accent text + icons
        },
        // Muted sage — SECONDARY accent. Adds calm variation without competing
        // with the brass. Replaces the old warm-yellow sunbeam.
        sunbeam: {
          50: '#EEF2EA',
          100: '#DAE4D1',
          200: '#BAC9AC',
          300: '#95AB85',
          400: '#788E67',
        },
        // Deep midnight navy — the authoritative ink. Headings + buttons
        // take this color so the site carries weight on first glance.
        ink: {
          900: '#0C1A2E',
          800: '#17253D',
          700: '#2F3E58',
          500: '#5E6B83',
          400: '#8891A5',
          300: '#B3BAC9',
        },
      },
      fontFamily: {
        // Display serif — editorial, recognizable, with strong weight range.
        // Playfair Display carries prestige without feeling antique.
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        // Clean sans for body and UI.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      boxShadow: {
        // Deeper, neutral shadows — no color tint. Premium editorial look.
        soft: '0 2px 24px -10px rgba(12, 26, 46, 0.10)',
        card: '0 14px 40px -18px rgba(12, 26, 46, 0.18)',
        cardHover: '0 24px 60px -20px rgba(12, 26, 46, 0.28)',
      },
      backgroundImage: {
        // Subtle paper-warmth glow. Brass wash upper-left, faint ink wash upper-right.
        'hero-glow':
          'radial-gradient(ellipse at top left, rgba(202,166,80,0.18), transparent 60%), radial-gradient(ellipse at top right, rgba(12,26,46,0.05), transparent 55%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
