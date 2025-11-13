import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'

const portfolioItems = [
  { id: 1, title: 'Website 1', description: 'Beschrijving website 1' },
  { id: 2, title: 'Website 2', description: 'Beschrijving website 2' },
]

export default function Portfolio() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Mijn Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map(item => (
          <Link key={item.id} to={`/portfolio/${item.id}`}>
            <PortfolioCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  )
}
