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

// "In het kort" onder de tekst bij Over mij
export const facts = [
  { label: 'Woont in', value: 'Sint-Lievens-Houtem' },
  { label: 'Werkt bij', value: 'Conversal, Affligem' },
  { label: 'Bouwt websites sinds', value: '2022 (Howest)' },
  { label: 'Talen', value: 'Nederlands, Engels' },
]

// Niveau 1–5, zoals op de oude site. Woorden die erbij getoond worden:
export const skillLevels = ['Basis', 'Redelijk', 'Goed', 'Zeer goed', 'Expert']

// `featured` krijgt de kaart met verlooprand
export const skillGroups = [
  {
    title: 'WordPress',
    featured: true,
    items: [
      { name: 'Betheme', level: 5 },
      { name: 'Elementor', level: 5 },
      { name: 'Gutenberg-blocks', level: 4 },
      { name: 'theme.json', level: 4 },
    ],
  },
  {
    title: 'Code',
    items: [
      { name: 'HTML & CSS', level: 5 },
      { name: 'SCSS', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'PHP', level: 3 },
      { name: 'API-integraties', level: 3 },
    ],
  },
  {
    title: "Programma's",
    items: [
      { name: 'Visual Studio Code', level: 4 },
      { name: 'Adobe XD', level: 5 },
      { name: 'Figma', level: 4 },
      { name: 'Photoshop', level: 3 },
    ],
  },
  {
    title: 'Workflow & beheer',
    items: [
      { name: 'Claude Code', level: 4 },
      { name: 'Figma MCP', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'DNS & Cloudflare', level: 3 },
    ],
  },
]

// Eigenschappen onder de tools, zonder niveau (uit mijn cv)
export const traits = ['Teamspeler', 'Leergierig', 'Nieuwsgierig', 'Gedreven', 'Resultaatgericht']

// "Wat ik doe" op de home. De eerste dienst krijgt de kaart in het merkverloop.
export const services = [
  {
    title: 'Nieuwe websites',
    text: 'Van Figma-design tot een complete WordPress-site met custom Gutenberg-blocks die de klant zelf vult. Met Claude Code en Figma MCP maak ik eerst een plan. De code review ik zelf.',
  },
  {
    title: 'Support voor klanten',
    text: 'Klanten met een bestaande site help ik met hun vragen: een pagina aanpassen, een nieuwe pagina opzetten of uitleggen hoe iets werkt. Bij grotere vragen maak ik eerst een inschatting.',
  },
  {
    title: 'Onderhoud',
    text: 'Updates van WordPress, het thema en de plugins, en nakijken of alles daarna nog werkt. Ook DNS-records en domeinen regel ik.',
  },
  {
    title: 'Bugfixing & aanpassingen',
    text: 'Werkt iets niet zoals het hoort, dan zoek ik de oorzaak en los ik het op. Kleine aanpassingen, zoals een extra blok of een andere lay-out, pak ik snel op.',
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
    title: 'Zoeken naar mijn richting',
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
    title: 'Mijn eerste job',
    text: 'Junior webdeveloper bij Atelier64 in Zottegem. Ik bouwde er sites voor klanten zoals KOBA, OKRA en Arte-Verde, vooral met Betheme, Elementor en ACF.',
    icon: 'rocket',
  },
  {
    years: '2026 – nu',
    kicker: 'Conversal',
    title: 'WordPress-expert',
    text: 'Sinds januari 2026 werk ik bij Conversal in Affligem. Ik bouw er native Gutenberg-blocks. Het Figma-design zet ik eerst om in een plan met Claude Code en Figma MCP. De code review ik zelf.',
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
