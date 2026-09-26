import { Link, useParams } from 'react-router-dom'
import { agencies, getProject } from '../data/projects'
import Gallery from '../components/Gallery'
import RichText from '../components/RichText'
import NotFound from './NotFound'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const agency = agencies[project.agency]

  return (
    <div className="bg-dark min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 text-white">
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">
            ← Terug naar portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <img
            src={project.cover}
            alt={`${project.title} overzicht`}
            className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
          />

          <div>
            {agency && (
              <p className="text-sm uppercase tracking-widest text-white/60 mb-3">
                In opdracht van{' '}
                <a href={agency.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                  {agency.name}
                </a>
              </p>
            )}
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg mb-12">
              <RichText text={project.intro} />
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
              >
                Bezoek website
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {project.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base mb-4">
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          ))}
        </div>

        {project.screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <Gallery images={project.screenshots} />
          </div>
        )}
      </div>
    </div>
  )
}
