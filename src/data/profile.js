// -----------------------------------------------------------------------------
// PROFILE DATA — edit this file to personalize the site.
// Every string below renders somewhere on the site; no code changes required.
// -----------------------------------------------------------------------------

export const profile = {
  // Display name (shown in nav, hero, footer).
  name: 'Rhahavy',

  // One-line role used next to your name and in the footer.
  // Leads with the analyst identity — the day job shows up in the About narrative.
  role: 'Data Analyst · Dashboard Developer',

  // Hero headline (split into two lines for emphasis — edit both).
  headlineLead: 'Turning messy data into',
  headlineAccent: 'clear, confident decisions.',

  // Hero sub-intro — short, punchy, recruiter-friendly.
  // Tone: natural, confident, analytical but human.
  intro:
    "I build dashboards and turn messy data into insights people can actually use. My work blends a background in education and project coordination with a focus on analytics, visualization, and data storytelling — with a bias for clarity over cleverness.",

  // Location shown in hero + contact page.
  location: 'Markham, Ontario',

  // Your links — replace email + linkedin with your real URLs.
  links: {
    email: 'mailto:rhahavy.b@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rhahavy-bala/',
    github: 'https://github.com/rhahavy',
    resume: '/Resume_Rhahavy_Bala.pdf',
  },

  // Short contact blurb for the Contact page.
  contactBlurb:
    "I'm open to data analyst and business analyst opportunities across the GTA and remote. Email or LinkedIn is the fastest way to reach me — I reply within a day or two.",
}

// -----------------------------------------------------------------------------
// SKILLS — grouped for the About page. Add or remove freely.
// -----------------------------------------------------------------------------
export const skillGroups = [
  {
    label: 'Analytics & Visualization',
    items: ['Tableau', 'Power BI', 'Excel (Advanced)', 'Pivot Tables', 'Looker Studio'],
  },
  {
    label: 'Data & Querying',
    items: ['SQL', 'Data Cleaning', 'Data Organization', 'Data Storytelling'],
  },
  {
    label: 'Web & Tooling',
    items: ['JavaScript', 'HTML / CSS', 'Git / GitHub', 'Notion'],
  },
  {
    label: 'Workplace',
    items: [
      'Project Coordination',
      'Stakeholder Communication',
      'Documentation',
      'Attention to Detail',
    ],
  },
]

// -----------------------------------------------------------------------------
// "WHAT I FOCUS ON" — three-up value props on the home page.
// -----------------------------------------------------------------------------
export const focusAreas = [
  {
    title: 'Dashboard Design',
    body:
      'Clean, usable dashboards that put the right number in front of the right person — built for decisions, not decoration.',
  },
  {
    title: 'Data Storytelling',
    body:
      'Translating raw datasets into a clear narrative with context, comparisons, and a takeaway stakeholders can act on.',
  },
  {
    title: 'Insight Generation',
    body:
      'Going beyond charts to surface the patterns, trade-offs, and recommendations that actually move projects forward.',
  },
]
