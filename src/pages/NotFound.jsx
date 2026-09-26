import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-dark min-h-[60vh] flex items-center">
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-20 text-white">
        <h1 className="text-4xl font-bold mb-4">Pagina niet gevonden</h1>
        <p className="text-gray-300 mb-8">Deze pagina bestaat niet (meer).</p>
        <Link to="/" className="inline-block bg-white text-[#111111] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
