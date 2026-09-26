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
    items: ['Gutenberg', 'Custom blocks', 'ACF (blocks)', 'theme.json', 'Custom post types', 'WooCommerce', 'WPML', 'Betheme', 'Elementor'],
  },
  {
    title: 'Front-end',
    items: ['HTML', 'CSS / SCSS', 'Tailwind', 'JavaScript', 'GSAP', 'SwiperJS', 'React'],
  },
  {
    title: 'Back-end',
    items: ['PHP', 'API-integraties', 'Shortcodes'],
  },
  {
    title: 'Workflow',
    items: ['Figma', 'Figma MCP', 'Claude Code', 'Git', 'Adobe XD', 'Photoshop'],
  },
  {
    title: 'Plugins',
    items: ['Search & Filter Pro', 'Slider Revolution', 'Contact Form 7', 'WP Go Maps', 'Iubenda'],
  },
]

// Vul `period` aan met jaartallen (bv. '2025 - nu') zodra je ze wil tonen.
export const experience = [
  {
    period: 'Nu',
    company: 'Conversal',
    place: 'Affligem',
    url: 'https://www.conversal.be/',
    role: 'Junior webdeveloper',
    stack: 'Gutenberg & ACF-blocks',
  },
  {
    period: 'Eerder',
    company: 'Atelier64',
    place: 'Zottegem',
    url: 'https://atelier64.eu/',
    role: 'Junior webdeveloper',
    stack: 'Betheme, Elementor & ACF',
  },
]
