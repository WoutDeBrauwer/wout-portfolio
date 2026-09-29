// Persoonlijke gegevens, skills en ervaring op één plek.

export const contact = {
  email: 'woutdebrauwer@outlook.com',
  phone: '+32 498 15 48 45',
  phoneHref: 'tel:+32498154845',
  linkedin: 'https://www.linkedin.com/in/wout-de-brauwer-881b73247',
}

// Pdf in public/cv (export van cv/cv.html)
export const cvUrl = '/cv/CV-Wout-De-Brauwer.pdf'

export const socials = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'E-mail', href: `mailto:${contact.email}` },
  { label: 'Bellen', href: contact.phoneHref },
]

// Niveau 1–5, zoals op de oude site. Woorden die erbij getoond worden:
export const skillLevels = ['Basis', 'Learning', 'Goed', 'Zeer goed', 'Expert']

// `featured` krijgt de kaart met verlooprand
export const skillGroups = [
  {
    title: 'WordPress',
    featured: true,
    items: [
      { name: 'Gutenberg-blocks', level: 4 },
      { name: 'theme.json', level: 4 },
      { name: 'Elementor', level: 4 },
      { name: 'Betheme', level: 4 },
    ],
  },
  {
    title: 'Code',
    items: [
      { name: 'HTML & CSS', level: 5 },
      { name: 'SCSS', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'PHP', level: 2 },
      { name: 'API-integraties', level: 2 },
    ],
  },
  {
    title: "Programma's",
    items: [
      { name: 'Visual Studio Code', level: 4 },
      { name: 'Figma', level: 4 },
      { name: 'Adobe XD', level: 3 },
      { name: 'Photoshop', level: 2 },
    ],
  },
  {
    title: 'Workflow & beheer',
    items: [
      { name: 'Claude Code', level: 3 },
      { name: 'Figma MCP', level: 3 },
      { name: 'Git', level: 2 },
      { name: 'DNS & Cloudflare', level: 3 },
    ],
  },
]

// Eigenschappen onder de tools, zonder niveau (uit mijn cv)
export const traits = ['AI-driven', 'Teamspeler', 'Leergierig', 'Nieuwsgierig', 'Gedreven', 'Resultaatgericht']

// "Waar ik nu in groei" onder de tools: wat ik op dit moment bijleer
export const growing = [
  { name: 'PHP', text: 'Meer logica in mijn blocks en eigen plugins.' },
  { name: 'API-koppelingen', text: 'Data van externe diensten in WordPress tonen.' },
  { name: 'Git', text: 'Werken met branches en reviews in een team.' },
  { name: 'React', text: 'Ook buiten WordPress bouwen, zoals deze portfolio.' },
]

// "Wat ik doe" op de home. De eerste dienst krijgt de kaart in het merkverloop.
export const services = [
  {
    title: 'Nieuwe websites',
    text: 'Ik zet een Figma-design om in een volledige WordPress-site met custom Gutenberg-blocks. De klant vult de inhoud daarna zelf. Claude Code en Figma MCP helpen me om dat sneller te doen.',
  },
  {
    title: 'Support voor klanten',
    text: 'Klanten met een bestaande site kunnen bij mij terecht met vragen. Ik pas pagina’s aan, zet nieuwe pagina’s op of leg uit hoe iets werkt. Voor grotere vragen maak ik eerst een inschatting.',
  },
  {
    title: 'Onderhoud',
    text: 'Ik update WordPress, het thema en de plugins, en kijk daarna na of alles nog werkt. Ook DNS-records en domeinen regel ik.',
  },
  {
    title: 'Bugfixing & aanpassingen',
    text: 'Werkt iets niet zoals het hoort, dan zoek ik de oorzaak en los ik het op. Kleine aanpassingen, zoals een extra blok of een andere lay-out, pak ik snel op.',
  },
]

// "Werken met AI" op de home: hoe AI in mijn werk zit, naast WordPress
export const aiWork = [
  {
    title: 'Claude Code',
    text: 'Dit gebruik ik elke dag bij het bouwen. Ik zet er een design mee om in een plan en in code, en zoek er lastige bugs mee uit.',
  },
  {
    title: 'Figma MCP',
    text: 'Via MCP leest Claude Code een Figma-design rechtstreeks uit. Zo werk ik met de echte maten, kleuren en teksten uit het ontwerp.',
  },
  {
    title: 'Nieuwe tools uitproberen',
    text: 'Ik hou bij wat er nieuw is in AI en test het uit in eigen projecten, zoals deze portfolio.',
  },
  {
    title: 'Zelf nakijken',
    text: 'De keuzes maak ik zelf. Ik review en test alle code voor ze live gaat.',
  },
]

// "Mijn verhaal" op de home. Bewust kort en feitelijk gehouden.
// `icon` = naam van een lucide-icoon (zie Story.jsx)
export const story = [
  {
    years: '2013 – 2019',
    kicker: 'Middelbaar',
    title: 'Mechanische vormgeving',
    text: 'In het middelbaar volgde ik TSO, de richting mechanische vormgevingstechnieken. Veel technisch tekenen en werken op de millimeter.',
    icon: 'wrench',
  },
  {
    years: '2019 – 2022',
    kicker: 'Odisee & Artevelde',
    title: 'Ontwerp en digitale media',
    text: 'Ik begon aan Odisee met de bachelor ontwerp- en productietechnologie. Na een jaar ben ik overgestapt naar grafische en digitale media aan Artevelde.',
    icon: 'pen',
  },
  {
    years: '2022 – 2024',
    kicker: 'Howest',
    title: 'Webdevelopment',
    text: 'In Kortrijk deed ik het graduaat webdevelopment en design & 3D AR. Daar begon ik met het bouwen van websites.',
    icon: 'code',
  },
  {
    years: '2024 – 2025',
    kicker: 'Atelier64',
    title: 'Mijn eerste ervaring',
    text: 'Junior webdeveloper bij Atelier64 in Zottegem. Ik bouwde er sites voor klanten zoals KOBA, OKRA en Arte-Verde, vooral met Betheme, Elementor en ACF.',
    icon: 'rocket',
  },
  {
    years: '2026 – nu',
    kicker: 'Conversal',
    title: 'WordPress-expert',
    text: 'Sinds januari 2026 werk ik bij Conversal in Affligem. Ik bouw er WordPress-sites met native Gutenberg-blocks.',
    icon: 'sparkles',
  },
]

export const experience = [
  {
    period: 'jan 2026 – nu',
    company: 'Conversal',
    place: 'Affligem',
    url: 'https://www.conversal.be/',
    role: 'WordPress-expert',
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
