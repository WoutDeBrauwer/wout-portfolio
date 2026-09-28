import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import { experience, education, socials, contact, skillGroups } from '../data/profile'
import AboutMe from '../components/AboutMe'
import Story from '../components/Story'
import Skills from '../components/Skills'
import Typewriter from '../components/Typewriter'
import ProjectCarousel from '../components/ProjectCarousel'
import Workflow from '../components/Workflow'
import { Magnetic, VelocityMarquee } from '../components/effects'
import { ArrowButton, Aurora, Circle, Container, Pill, Reveal, SectionLabel, TableRow, usePageMeta } from '../components/ui'

const titleClass =
  'font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,7vw,6.5rem)]'

function ProjectsButton({ className = '' }) {
  return (
    <div className={`items-center gap-2 lg:w-[320px] ${className}`}>
      <Pill to="/portfolio" className="flex-1">Projecten</Pill>
      <Magnetic strength={0.4}>
        <ArrowButton to="/portfolio" label="Naar projecten" tabIndex={-1} />
      </Magnetic>
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
      className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-white/80 hover:border-teal/60 hover:text-white transition-colors"
    >
      <span className="pulse-dot relative w-2 h-2 rounded-full bg-teal" aria-hidden="true" />
      Nu <span className="hidden sm:inline">{current.role} </span>bij <span className="font-semibold text-white">{current.company}</span>
    </a>
  )
}

// Letters schuiven één voor één omhoog in beeld
function SplitReveal({ text, delay = 0 }) {
  const reduce = useReducedMotion()
  if (reduce) return text
  return (
    <span aria-hidden="true" className="inline-flex overflow-hidden pb-[0.08em]">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '110%', rotate: 8 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

// Band met skills die traag doorschuift (dubbele lijst voor een naadloze lus)
function SkillMarquee() {
  const items = skillGroups.flatMap((g) => g.items.map((item) => item.name))
  const colors = ['text-iris', 'text-azure', 'text-violet', 'text-teal']
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
            <span className="sr-only">Junior webdeveloper</span>
            <SplitReveal text="Junior" delay={0.1} />
          </h1>
          <ProjectsButton className="hidden lg:flex" />
        </div>

        {/* Zin en titel pas vanaf xl naast elkaar: "Webdeveloper" is breed */}
        <div className="flex flex-col-reverse xl:flex-row xl:items-end xl:justify-between gap-8 mt-4 lg:mt-2">
          <Reveal delay={0.5} className="max-w-sm">
            <p className="text-white/70">
              Ik vertaal <em>Figma-ontwerpen</em> naar{' '}
              <em>snelle, gebruiksvriendelijke WordPress-websites</em> die klanten
              zelf eenvoudig kunnen beheren.
            </p>
          </Reveal>
          <p className={`${titleClass} lg:text-right`} aria-hidden="true">
            <Typewriter text="Webdeveloper" speed={90} delay={600} cursor textClassName="text-gradient" />
          </p>
        </div>

        <ProjectsButton className="flex lg:hidden mt-8" />

        <ul className="flex flex-wrap gap-3 mt-10 lg:mt-14">
          {socials.map((s) => (
            <li key={s.label}>
              <Magnetic strength={0.25}>
                <Pill variant="outline" href={s.href} className="!px-5 !py-1.5 text-xs">
                  {s.label}
                </Pill>
              </Magnetic>
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

// Tabel met periode | naam · plaats | omschrijving. `dot` kleurt het bolletje per rij.
function Timeline({ title, rows, dot }) {
  return (
    <>
      <Container>
        <Reveal>
          <h2 className={`${titleClass} text-right mb-10`}>
            {title}<span className="text-violet">.</span>
          </h2>
        </Reveal>
      </Container>

      <div className="max-w-[1400px] mx-auto border-t border-line">
        {rows.map((row, i) => (
          <TableRow
            key={row.name}
            href={row.url}
            className="grid-cols-1 sm:grid-cols-[170px_1fr_1.4fr] items-baseline"
            cells={
              <>
                <span className="flex items-center gap-3 text-sm">
                  <span aria-hidden="true" className={`relative w-2 h-2 shrink-0 rounded-full group-hover:bg-dark ${dot(i)}`} />
                  {row.period}
                </span>
                <span>
                  {row.name}
                  {row.place && <span className="text-xs opacity-60"> · {row.place}</span>}
                </span>
                <span className="font-mono text-sm">{row.text}</span>
              </>
            }
          />
        ))}
      </div>
    </>
  )
}

function Experience() {
  return (
    <section className="pb-24 md:pb-32">
      <Timeline
        title="Ervaring"
        rows={experience.map((job) => ({ ...job, name: job.company, text: job.role }))}
        dot={(i) => (i === 0 ? 'pulse-dot bg-teal' : 'bg-violet')}
      />

      <div className="mt-24 md:mt-32">
        <Timeline
          title="Opleiding"
          rows={education.map((edu) => ({ ...edu, name: edu.school, text: edu.course }))}
          dot={() => 'bg-iris'}
        />
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
      <Skills />
      <Story />
      <div className="border-y border-line mb-24 md:mb-32">
        <VelocityMarquee items={['WordPress', 'Gutenberg', 'Figma', 'Claude Code', 'PHP', 'SCSS']} />
      </div>
      <Workflow />
      <Experience />
    </>
  )
}
