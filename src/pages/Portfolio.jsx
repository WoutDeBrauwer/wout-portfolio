import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'
import { projects } from '../data/projects'
import { Circle, Container, Reveal, SectionLabel } from '../components/ui'

export default function Portfolio() {
  return (
    <div className="relative overflow-hidden pt-16 md:pt-24 pb-24">
      <Circle className="w-[440px] h-[440px] -right-24 -top-44 hidden sm:block" />

      <Container>
        <SectionLabel className="mb-10">Projecten</SectionLabel>

        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <h1 className="md:col-span-6 font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.9rem,8vw,6.5rem)]">
            Projecten
          </h1>
          <p className="md:col-span-6 text-white/70 max-w-xl">
            Een <em>selectie</em> van de projecten waar ik het meest trots op
            ben, meestal omdat ze de meeste functionaliteit bevatten. Daarnaast
            werkte ik aan heel wat andere sites: aanpassingen aan bestaande
            pagina’s, bijdragen aan grotere projecten en sites die (nog) niet
            publiek online staan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/portfolio/${project.slug}`}
                className="block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <PortfolioCard {...project} />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
