import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'
import { projects } from '../data/projects'
import { Aurora, Circle, Container, Reveal, SectionLabel, usePageMeta } from '../components/ui'

export default function Portfolio() {
  usePageMeta('Projecten', 'WordPress-projecten van Wout De Brauwer, gebouwd bij Conversal en Atelier64: van custom Gutenberg-blocks tot API-koppelingen.')

  return (
    <div className="relative isolate overflow-hidden pt-16 md:pt-24 pb-24">
      <Aurora className="opacity-60 h-[700px]" />
      <Circle className="w-[440px] h-[440px] -right-24 -top-44 hidden sm:block" />

      <Container>
        <SectionLabel className="mb-10">Projecten</SectionLabel>

        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <h1 className="md:col-span-6 font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.9rem,8vw,6.5rem)]">
            Projecten<span className="text-coral">.</span>
          </h1>
          <p className="md:col-span-6 text-white/70 max-w-xl">
            Een <em>selectie</em> van mijn werk: nu bij <em>Conversal</em>{' '}
            met Gutenberg, daarvoor bij <em>Atelier64</em>. Bij al deze
            projecten deed ik de <em>development</em>; het design kwam van de
            designers van het bureau. Daarnaast werkte ik aan heel wat
            andere sites: aanpassingen, bijdragen aan grotere projecten en
            sites die (nog) niet publiek online staan.
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
