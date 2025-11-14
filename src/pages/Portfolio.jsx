import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'
import { portfolioItems } from '../data/portfolioItems'

export default function Portfolio() {
  return (
    <div className="bg-dark py-16">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
          MY WORK
          <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
        </h1>

        {/* Toegevoegde tekst */}
        <p className="text-gray-300 mb-16 max-w-4xl sm:max-w-none lg:max-w-5xl">
          De projecten die je hier ziet vormen een <strong>selectie</strong> uit het werk 
          dat ik door de jaren heen heb gedaan. Het zijn de projecten waar ik het meest 
          trots op ben, omdat ze vaak de meeste functionaliteiten bevatten of het best 
          tonen wat ik kan. Naast deze selectie heb ik ook aan veel andere projecten 
          gewerkt — zoals aanpassingen aan bestaande pagina’s en bijdragen aan websites 
          die ik niet volledig zelf heb gebouwd, evenals projecten die (nog) niet publiek 
          online staan.
        </p>

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
