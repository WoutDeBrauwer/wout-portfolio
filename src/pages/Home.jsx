import { projects } from '../data/projects'
import { experience, socials, contact, skillGroups } from '../data/profile'
import AboutMe from '../components/AboutMe'
import Typewriter from '../components/Typewriter'
import ProjectCarousel from '../components/ProjectCarousel'
import Workflow from '../components/Workflow'
import { ArrowButton, Aurora, Circle, Container, Pill, Reveal, SectionLabel, TableRow, usePageMeta } from '../components/ui'

const titleClass =
  'font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,7vw,6.5rem)]'

function ProjectsButton({ className = '' }) {
  return (
    <div className={`items-center gap-2 lg:w-[320px] ${className}`}>
      <Pill to="/portfolio" className="flex-1">Projecten</Pill>
      <ArrowButton to="/portfolio" label="Naar projecten" tabIndex={-1} />
    </div>
  )
}

// Waar ik nu werk, met een "live"-bolletje
function NowBadge() {
  const [current] = experience
  return (
    <a
      href={current.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-white/80 hover:border-mint/60 hover:text-white transition-colors"
    >
      <span className="pulse-dot relative w-2 h-2 rounded-full bg-mint" aria-hidden="true" />
      Nu <span className="hidden sm:inline">{current.role.toLowerCase()} </span>bij <span className="font-semibold text-white">{current.company}</span>
    </a>
  )
}

// Band met skills die traag doorschuift (dubbele lijst voor een naadloze lus)
function SkillMarquee() {
  const items = skillGroups.flatMap((g) => g.items)
  const colors = ['text-iris', 'text-rose', 'text-coral', 'text-mint']
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={item} className="flex items-center font-mono text-sm sm:text-base whitespace-nowrap text-white/75">
          <span className={`mx-5 sm:mx-7 ${colors[i % colors.length]}`} aria-hidden="true">✦</span>
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="marquee relative mt-16 border-y border-line py-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <p className="sr-only">Skills: {items.join(', ')}</p>
      <div className="marquee-track flex w-max" aria-hidden="true">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="relative isolate overflow-hidden pt-16 md:pt-24 pb-20">
      <Aurora />
      <Circle className="w-[440px] h-[440px] -right-24 -top-44 hidden sm:block" />

      <Container>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10">
          <SectionLabel>Wout De Brauwer</SectionLabel>
          <NowBadge />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h1 className={titleClass}>
            Junior
            <span className="sr-only"> webdeveloper</span>
          </h1>
          <ProjectsButton className="hidden lg:flex" />
        </div>

        {/* Zin en titel pas vanaf xl naast elkaar: "Webdeveloper" is breed */}
        <div className="flex flex-col-reverse xl:flex-row xl:items-end xl:justify-between gap-8 mt-4 lg:mt-2">
          <p className="max-w-sm text-white/70">
            Ik vertaal <em>Figma-ontwerpen</em> naar{' '}
            <em>snelle, gebruiksvriendelijke WordPress-websites</em> die klanten
            zelf eenvoudig kunnen beheren.
          </p>
          <p className={`${titleClass} lg:text-right`} aria-hidden="true">
            <Typewriter text="Webdeveloper" speed={100} delay={300} cursor textClassName="text-gradient" />
          </p>
        </div>

        <ProjectsButton className="flex lg:hidden mt-8" />

        <ul className="flex flex-wrap gap-3 mt-10 lg:mt-14">
          {socials.map((s) => (
            <li key={s.label}>
              <Pill variant="outline" href={s.href} className="!px-5 !py-1.5 text-xs">
                {s.label}
              </Pill>
            </li>
          ))}
        </ul>
      </Container>

      <div className="mt-16 px-5 sm:px-10 lg:px-0">
        <ProjectCarousel projects={projects} />
      </div>

      <SkillMarquee />
    </header>
  )
}

function Experience() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <h2 className={`${titleClass} text-right mb-10`}>
            Ervaring<span className="text-coral">.</span>
          </h2>
        </Reveal>
      </Container>

      <div className="max-w-[1400px] mx-auto border-t border-line">
        {experience.map((job, i) => (
          <TableRow
            key={job.company}
            href={job.url}
            className="grid-cols-1 sm:grid-cols-[140px_1fr_1.4fr] items-baseline"
            cells={
              <>
                <span className="flex items-center gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className={`relative w-2 h-2 rounded-full group-hover:bg-dark ${i === 0 ? 'pulse-dot bg-mint' : 'bg-coral'}`}
                  />
                  {job.period}
                </span>
                <span>
                  {job.company}
                  <span className="text-xs opacity-60"> · {job.place}</span>
                </span>
                <span className="font-mono text-sm">
                  {job.role} <span className="opacity-50">|</span> {job.stack}
                </span>
              </>
            }
          />
        ))}
      </div>

      <Container className="mt-6 text-right">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm italic text-white/70 hover:text-iris transition-colors"
        >
          Volledig traject op LinkedIn ↗
        </a>
      </Container>
    </section>
  )
}

export default function Home() {
  usePageMeta()

  return (
    <>
      <Hero />
      <AboutMe />
      <Workflow />
      <Experience />
    </>
  )
}
