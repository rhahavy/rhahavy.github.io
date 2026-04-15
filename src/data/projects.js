// -----------------------------------------------------------------------------
// PROJECTS DATA — edit this file to update or add new projects.
// The Projects page will automatically regenerate categories from this list.
//
// `icon`   — name of a lucide-react icon rendered large on the card.
// `accent` — 'lavender' | 'sunbeam' | 'mixed' — colors the icon tile gradient.
// -----------------------------------------------------------------------------

export const projects = [
  {
    id: 'gta-housing',
    title: 'GTA Housing Dashboard',
    category: 'Real Estate',
    shortDescription:
      'Toronto housing dashboard exploring 26 years of pricing, supply, and affordability — unpacking how monthly payments shifted after the 2022 rate hikes and whether to buy, rent, or wait.',
    longDescription:
      'Built to answer three questions: where is inventory growing, where has affordability slipped furthest, and how do neighbouring municipalities compare over time?',
    tools: ['Tableau', 'SQL', 'Excel', 'Data Cleaning'],
    liveUrl: 'https://rhahavy.github.io/gta-housing-dashboard',
    repoUrl: 'https://github.com/rhahavy/gta-housing-dashboard',
    featured: true,
    accent: 'lavender',
    icon: 'Home',
  },
  {
    id: 'eqao-ontario',
    title: 'Ontario EQAO Dashboard',
    category: 'Education',
    shortDescription:
      'An interactive dashboard analyzing Ontario EQAO trends and post-pandemic student performance across grades and regions — benchmarking board-level outcomes and flagging the biggest multi-year shifts.',
    longDescription:
      'Benchmarks board performance against the provincial average, highlights multi-year trends, and flags boards with the largest shifts.',
    tools: ['Power BI', 'Excel', 'Data Analysis'],
    liveUrl: 'https://rhahavy.github.io/ontario-eqao-dashboard',
    repoUrl: 'https://github.com/rhahavy/ontario-eqao-dashboard',
    featured: true,
    accent: 'sunbeam',
    icon: 'GraduationCap',
  },
  {
    id: 'telecom-churn',
    title: 'Telecom Customer Churn Dashboard',
    category: 'Customer Analytics',
    shortDescription:
      'Customer churn analysis identifying the key drivers of retention and revenue loss for a telecom subscriber base — with interactive segmentation by risk, behaviour, and payment method.',
    longDescription:
      'Segments customers by tenure, contract type, and service mix to surface which cohorts are most at risk and where retention efforts land hardest.',
    tools: ['Power BI', 'SQL', 'Data Analysis'],
    liveUrl: 'https://rhahavy.github.io/telco-customer-churn-analysis',
    repoUrl: 'https://github.com/rhahavy/telco-customer-churn-analysis',
    featured: true,
    accent: 'mixed',
    icon: 'Users',
  },
]
