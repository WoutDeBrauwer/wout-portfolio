import { useParams } from 'react-router-dom'

const portfolioItems = [
  { id: 1, title: 'Website 1', description: 'Gedetailleerde info website 1' },
  { id: 2, title: 'Website 2', description: 'Gedetailleerde info website 2' },
]

export default function PortfolioDetail() {
  const { id } = useParams()
  const item = portfolioItems.find(p => p.id === parseInt(id))

  if (!item) return <p className="p-10">Item niet gevonden</p>

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <p>{item.description}</p>
    </div>
  )
}
