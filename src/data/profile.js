// Persoonlijke gegevens, skills en ervaring op één plek.

export const contact = {
  email: 'woutdebrauwer@outlook.com',
  phone: '+32 498 15 48 45',
  phoneHref: 'tel:+32498154845',
  linkedin: 'https://www.linkedin.com/in/wout-de-brauwer-881b73247',
}

export const socials = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'E-mail', href: `mailto:${contact.email}` },
  { label: 'Bellen', href: contact.phoneHref },
]

// `featured` krijgt de witte kaart (zoals "Front-end" in de inspiratie)
export const skillGroups = [
  {
    title: 'WordPress',
    featured: true,
    items: ['Gutenberg', 'Native custom blocks', 'theme.json', 'Custom post types', 'Betheme', 'Elementor'],
  },
  {
    title: 'Front-end',
    items: ['HTML', 'CSS', 'SCSS', 'Tailwind', 'JavaScript', 'GSAP', 'SwiperJS', 'React'],
  },
  {
    title: 'Back-end',
    items: ['PHP', 'block.json & render.php', 'API-integraties', 'Shortcodes'],
  },
  {
    title: 'Workflow',
    items: ['Figma', 'Figma MCP', 'Claude', 'Claude Code', 'Git', 'Adobe XD', 'Photoshop'],
  },
  {
    title: 'Domeinen & beheer',
    items: ['DNS-zones & records', 'Domeintransfers', 'Cloudflare', 'Google Workspace'],
  },
]

// Stappen voor "Zo werk ik" op de home
export const workflow = [
  {
    title: 'Figma-design',
    text: 'Ik start vanuit het ontwerp van de designer: componenten, spacing, varianten en hoe het zich gedraagt op mobiel.',
  },
  {
    title: 'Plan met Claude Code',
    text: 'Via Figma MCP leest Claude Code het design uit. Samen maken we een plan: welke blocks, welke velden en wat er in theme.json komt.',
  },
  {
    title: 'Review & bouwen',
    text: 'Ik review het plan en de code kritisch: past het in het thema, is het toegankelijk en snel? Claude is ook mijn sparringpartner bij bugs die niet in de logs staan.',
  },
  {
    title: 'Blocks voor redacteurs',
    text: 'Het resultaat: custom Gutenberg-blocks die de klant zelf vult, zonder dat de lay-out breekt.',
  },
]

// "Mijn verhaal" op de home. Bewust kort en feitelijk gehouden.
// `icon` = naam van een lucide-icoon (zie Story.jsx)
export const story = [
  {
    years: '2013 – 2019',
    kicker: 'Middelbaar',
    title: 'Mechanische vormgeving',
    text: 'In het middelbaar zat ik in het TSO, richting mechanische vormgevingstechnieken. Veel technisch tekenen en werken op de millimeter.',
    icon: 'wrench',
  },
  {
    years: '2019 – 2022',
    kicker: 'Odisee & Artevelde',
    title: 'Zoeken naar mijn richting',
    text: 'Ik begon aan Odisee met ontwerp- en productietechnologie. Na een jaar ben ik overgestapt naar grafische en digitale media aan Artevelde.',
    icon: 'pen',
  },
  {
    years: '2022 – 2024',
    kicker: 'Howest',
    title: 'Webdevelopment',
    text: 'In Kortrijk deed ik het graduaat webdevelopment en design & 3D AR. Daar ben ik websites beginnen bouwen.',
    icon: 'code',
  },
  {
    years: '2024 – 2025',
    kicker: 'Atelier64',
    title: 'Mijn eerste job',
    text: 'Junior webdeveloper bij Atelier64 in Zottegem. Ik bouwde er sites voor klanten zoals KOBA, OKRA en Arte-Verde, vooral met Betheme, Elementor en ACF.',
    icon: 'rocket',
  },
  {
    years: '2026 – nu',
    kicker: 'Conversal',
    title: 'WordPress expert',
    text: 'Sinds januari 2026 werk ik bij Conversal in Affligem. Ik bouw er native Gutenberg-blocks. Het Figma-design zet ik eerst om in een plan met Claude Code en Figma MCP, de code review ik zelf.',
    icon: 'sparkles',
  },
]

export const experience = [
  {
    period: '2026 – nu',
    company: 'Conversal',
    place: 'Affligem',
    url: 'https://www.conversal.be/',
    role: 'WordPress expert',
  },
  {
    period: 'jun 2024 – dec 2025',
    company: 'Atelier64',
    place: 'Zottegem',
    url: 'https://atelier64.eu/',
    role: 'Junior webdeveloper',
  },
]

export const education = [
  {
    period: '2022 – 2024',
    school: 'Howest',
    place: 'Kortrijk',
    course: 'Graduaat webdevelopment en design & 3D AR',
  },
  {
    period: '2020 – 2022',
    school: 'Artevelde',
    course: 'Bachelor grafische en digitale media',
  },
  {
    period: '2019 – 2020',
    school: 'Odisee',
    course: 'Bachelor ontwerp- en productietechnologie',
  },
  {
    period: '2013 – 2019',
    school: 'Middelbare school',
    course: 'TSO mechanische vormgevingstechnieken',
  },
]
