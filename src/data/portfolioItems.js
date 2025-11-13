export const portfolioItems = [
  {
    id: 1,
    title: 'Koba Metropool',
    description: '',
    image: '/portfolio/ecommerce.jpg',
    tags: ['Wordpress', 'PHP', 'API Integration'],
    url: 'https://kobametropool.be/',
  },
  {
    id: 2,
    title: 'OKRA-reizen',
    description: '',
    image: '/portfolio/restaurant.jpg',
    tags: ['ACF', 'PHP', 'Wordpress'],
    url: 'https://okra-reizen.be/',
  },
  {
    id: 3,
    title: 'Arte-Verde',
    description: '',
    image: '/portfolio/arte-verde.jpg',
    tags: ['Wordpress', 'PHP', 'GSAP'],
    url: 'https://arte-verde.be/',
  },
  {
    id: 4,
    title: 'Le chic hairboetiek',
    description: '',
    image: '/portfolio/lechic.jpg',
    tags: ['Wordpress', 'Woocommece', 'Ultimate member'],
    url: 'https://www.lechichairboetiek.be/',
  },
  {
    id: 5,
    title: 'Hidromek',
    description: '',
    image: '/portfolio/hidromek.jpg',
    tags: ['Wordpress', 'PHP', 'WPML'],
    url: 'https://hidromek.be/',
  },
  {
    id: 7,
    title: 'Biaform Provital',
    description: '',
    image: '/portfolio/biaform.jpg',
    tags: ['Wordpress', 'PHP', 'WPML'],
    url: 'https://biaform-provital.com/',
  },
  {
    id: 8,
    title: 'VDS Landmeters',
    description: '',
    image: '/portfolio/vdslandmeters.jpg',
    tags: ['Wordpress', 'Design'],
    url: 'https://vdslandmeters.be/',
  },
    {
    id: 9,
    title: 'Variable paginas',
    description: '',
    image: '',
    tags: ['Wordpress', 'Design', 'PHP', 'spreadsheet'],
    url: '',
  },
]

export const getRandomPortfolioItems = (count = 2) => {
  const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
