import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'
import { portfolioItems } from '../data/portfolioItems'



export default function Portfolio() {
  return (
    <div className="bg-dark py-16">
      <div className="max-w-[1600px] mx-auto px-4">
      <h1 className="text-4xl font-bold text-white mb-16 flex items-center gap-4">
        MY WORK
        <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map(item => (
            <Link key={item.id} to={`/portfolio/${item.id}`}>
              <PortfolioCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
