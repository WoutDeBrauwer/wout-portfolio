import { useParams } from 'react-router-dom'
import { agencies, getProject } from '../data/projects'
import Gallery from '../components/Gallery'
import RichText from '../components/RichText'
import { ArrowButton, Circle, Container, Pill, Reveal, RoleTag, SectionLabel, SlashList, plainText, usePageMeta } from '../components/ui'
import NotFound from './NotFound'

const sectionDots = ['bg-iris', 'bg-azure', 'bg-coral', 'bg-mint']

export default function PortfolioDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageMeta(project?.title, project && plainText(project.intro).slice(0, 155))
  if (!project) return <NotFound />

  const agency = agencies[project.agency]

  return (
    <article className="relative overflow-hidden pt-12 md:pt-16 pb-24">
      <Circle className="w-[440px] h-[440px] -right-24 -top-44 hidden sm:block" />

      <Container>
        <div className="flex items-center gap-3 mb-12">
          <ArrowButton to="/portfolio" direction="left" label="Terug naar projecten" className="!w-9 !h-9" />
          <SectionLabel>Projecten/{project.title}</SectionLabel>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 mb-20 items-start">
          <div className="md:col-span-6 md:order-last">
            {agency && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                <p className="font-mono text-xs text-white/50">
                  In opdracht van{' '}
                  <a href={agency.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 hover:text-white ${agency.color ?? ''}`}>
                    {agency.name}
                  </a>
                </p>
                {project.devOnly && (
                  <>
                    <RoleTag />
                    <p className="font-mono text-xs text-white/50 basis-full">
                      Design door {agency.name}, development door mij.
                    </p>
                  </>
                )}
              </div>
            )}
            <h1 className="font-mono font-medium tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>
            <SlashList items={project.tags} className="text-white/60 mb-8" />
            <p className="text-lg text-white/80 mb-10">
              <RichText text={project.intro} />
            </p>
            {project.url && (
              <div className="flex items-center gap-2">
                <Pill href={project.url}>Bezoek website</Pill>
                <ArrowButton href={project.url} diagonal label={`Open ${project.title}`} tabIndex={-1} />
              </div>
            )}
          </div>

          <img
            src={project.cover}
            alt={`${project.title} overzicht`}
            className="md:col-span-6 w-full aspect-[4/3] object-cover rounded-3xl border border-line shadow-[0_30px_80px_-40px_rgba(124,140,255,0.6)]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {project.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.08} className="rounded-3xl border border-line p-6 md:p-8 hover:border-white/30 transition-colors">
              <h2 className="font-mono text-xl font-medium mb-5 flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${sectionDots[i % sectionDots.length]}`} aria-hidden="true" />
                {section.title}
              </h2>
              <div className="space-y-4 text-white/70 [&_strong]:text-white [&_strong]:font-semibold">
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {project.screenshots.length > 0 && (
          <section>
            <SectionLabel className="mb-6">Screenshots</SectionLabel>
            <Gallery images={project.screenshots} />
          </section>
        )}
      </Container>
    </article>
  )
}
