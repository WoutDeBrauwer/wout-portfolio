export const portfolioItems = [
  {
    id: 1,
    title: 'Koba Metropool',
    description: '',
    image: '/images/Images/Template-portfolio-item.jpg',
    tags: ['Wordpress', 'PHP', 'API Integration'],
    url: 'https://kobametropool.be/',
  },
  {
    id: 2,
    title: 'OKRA-reizen',
    description: '',
    image: '/images/Images/Okra/Portfolio-wout-Okra-reizen-overzichtsfoto.jpg',
    tags: ['ACF', 'PHP', 'Wordpress'],
    url: 'https://okra-reizen.be/',
  },
  {
    id: 3,
    title: 'Arte-Verde',
    description: '',
    image: '/images/Images/ArteVerde/Arte-verde-tuin.jpg',
    tags: ['Wordpress', 'PHP', 'GSAP', 'ACF'],
    url: 'https://arte-verde.be/',
  },
  {
    id: 4,
    title: 'Le chic hairboetiek',
    description: '',
    image: '/images/Images/Template-portfolio-item.jpg',
    tags: ['Wordpress', 'Woocommece', 'Ultimate member'],
    url: 'https://www.lechichairboetiek.be/',
  },
  {
    id: 5,
    title: 'Hidromek',
    description: '',
    image: '/images/Images/Hidromek/Portfolio-Wout-hidromek-overzichtfoto.jpg',
    tags: ['Wordpress', 'PHP', 'ACF'],
    url: 'https://hidromek.be/',
  },
  {
    id: 6,
    title: 'Biaform Provital',
    description: '',
    image: '/images/Images/Koba/Portfolio-wout-Biaform-overzichtfoto.jpg',
    tags: ['Wordpress', 'PHP', 'WPML'],
    url: 'https://biaform-provital.com/',
  },
    {
    id: 8,
    title: 'Variable paginas',
    description: '',
    image: '/images/Images/Template-portfolio-item.jpg',
    tags: ['Wordpress', 'Design', 'PHP', 'spreadsheet'],
    url: '',
  },
]

export const getRandomPortfolioItems = (count = 2) => {
  const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
