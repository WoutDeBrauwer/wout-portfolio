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

// Eigenschappen onder de tools, zonder niveau: concreet i.p.v. cv-woorden
export const traits = [
  'Probeert nieuwe AI-tools als eerste uit',
  'Zoekt een bug uit tot hij weg is',
  'Kijkt zijn eigen werk altijd na',
  'Vraagt liever één keer te veel',
  'Leert graag van feedback',
]

// "Waar ik nu in groei" onder de tools: wat ik op dit moment bijleer
export const growing = [
  { name: 'PHP', text: 'Meer logica in mijn blocks en eigen plugins.' },
  { name: 'API-koppelingen', text: 'Data van externe diensten in WordPress tonen.' },
  { name: 'Git', text: 'Werken met branches en reviews in een team.' },
  { name: 'React', text: 'Ook buiten WordPress bouwen, zoals deze portfolio.' },
]

// "Wat ik doe" op de home. De eerste dienst krijgt de kaart in het merkverloop.
// AI zit in het werk zelf, daarom staat het hier en niet in een aparte sectie.
export const services = [
  {
    title: 'Nieuwe websites',
    text: 'Ik zet een Figma-design om in een volledige WordPress-site met custom Gutenberg-blocks. Claude Code leest het design uit via Figma MCP en stelt een plan op. Dat plan kijk ik eerst zelf na. Daarna bouwen we de blocks, en ik test en werk ze af.',
  },
  {
    title: 'Support voor klanten',
    text: 'Klanten met een bestaande site kunnen bij mij terecht met vragen. Ik pas pagina’s aan, zet nieuwe pagina’s op of leg uit hoe iets werkt. Bij grotere vragen overleg ik met Claude over de beste aanpak en maak ik een inschatting.',
  },
  {
    title: 'Onderhoud',
    text: 'Ik update WordPress, het thema en de plugins, en kijk daarna na of alles nog werkt. Ook DNS-records en domeinen regel ik.',
  },
  {
    title: 'Bugfixing & aanpassingen',
    text: 'Sommige bugs zie je niet in de logs. Dan analyseer ik de code samen met Claude tot ik de oorzaak vind. Welke oplossing erin komt, kies ik zelf. Kleine aanpassingen pak ik snel op.',
  },
]

// "Mijn verhaal" op de home. Bewust kort en feitelijk gehouden.
// `icon` = naam van een lucide-icoon (zie Story.jsx)
export const story = [
  {
    years: '2013 – 2019',
    kicker: 'Middelbaar',
    title: 'Mechanische vormgeving',
    text: 'In het middelbaar volgde ik TSO, de richting mechanische vormgevingstechnieken. Ik leerde er technisch tekenen, met de hand en op de computer, en alles moest op de millimeter kloppen. Daar is mijn interesse in ontwerpen en techniek begonnen.',
    icon: 'wrench',
  },
  {
    years: '2019 – 2022',
    kicker: 'Odisee & Artevelde',
    title: 'Ontwerp en digitale media',
    text: 'Na het middelbaar begon ik aan Odisee met de bachelor ontwerp- en productietechnologie. Na een jaar ben ik overgestapt naar grafische en digitale media aan Artevelde. Daar ging het minder over machines en meer over design en digitale media, met programma’s als Photoshop en Adobe XD.',
    icon: 'pen',
  },
  {
    years: '2022 – 2024',
    kicker: 'Howest',
    title: 'Webdevelopment',
    text: 'In Kortrijk deed ik het graduaat webdevelopment en design & 3D AR. Daar schreef ik mijn eerste echte code, in HTML, CSS, JavaScript en PHP, en bouwde ik mijn eerste websites. Ik wist vrij snel dat ik dit wou blijven doen.',
    icon: 'code',
  },
  {
    years: '2024 – 2025',
    kicker: 'Atelier64',
    title: 'Mijn eerste werkervaring',
    text: 'Na Howest kon ik meteen aan de slag als junior webdeveloper bij Atelier64 in Zottegem. Anderhalf jaar bouwde ik er sites voor klanten zoals KOBA, OKRA en Arte-Verde, vooral met Betheme, Elementor en ACF. Ik leerde er werken met deadlines, samenwerken met designers en luisteren naar wat een klant echt nodig heeft.',
    icon: 'rocket',
  },
  {
    years: '2026 – nu',
    kicker: 'Conversal',
    title: 'WordPress-expert',
    text: 'In januari 2026 stapte ik over naar Conversal in Affligem, een bureau dat net als ik veel met AI werkt. Ik bouw er sites met native Gutenberg-blocks en werk elke dag met Claude Code en Figma MCP. Naast nieuwe sites help ik klanten met support, onderhoud en bugfixing. Nu ben ik klaar voor een volgende stap.',
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
