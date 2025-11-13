export const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Een moderne webwinkel gebouwd met React en Tailwind CSS',
    image: '/portfolio/ecommerce.jpg', // You'll need to add these images to your public folder
    tags: ['React', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 2,
    title: 'Restaurant Website',
    description: 'Responsive website voor een lokaal restaurant',
    image: '/portfolio/restaurant.jpg',
    tags: ['React', 'GSAP', 'Sass'],
  },
  {
    id: 3,
    title: 'Fitness App',
    description: 'Mobile-first applicatie voor het bijhouden van workouts',
    image: '/portfolio/fitness.jpg',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  // Add more portfolio items as needed
]

export const getRandomPortfolioItems = (count = 2) => {
  const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}