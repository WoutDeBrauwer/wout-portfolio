import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { agencies } from '../data/projects'
import { ArrowButton, Pill, plainText } from './ui'

function ProjectSlide({ project, active }) {
  return (
    <article
      className={`grid md:grid-cols-2 overflow-hidden rounded-3xl border border-line bg-panel h-full ${
        active ? '' : 'opacity-25'
      }`}
    >
      <img
        src={project.cover}
        alt={active ? project.title : ''}
        loading="lazy"
        className="w-full h-52 md:h-full object-cover"
      />
      <div className="flex flex-col p-6 md:p-7">
        <p className="font-mono text-xs text-white/50 mb-2">
          {agencies[project.agency]?.name}
        </p>
        <h3 className="font-mono text-xl font-medium leading-snug mb-3">{project.title}</h3>
        <p className="text-sm text-white/70 line-clamp-3 mb-6">{plainText(project.intro)}</p>
        {active && (
          <div className="mt-auto flex items-center gap-2">
            <Pill to={`/portfolio/${project.slug}`} className="!px-5 !py-2">Bekijk project</Pill>
            <ArrowButton to={`/portfolio/${project.slug}`} label={`Bekijk ${project.title}`} className="!w-9 !h-9" tabIndex={-1} />
          </div>
        )}
      </div>
    </article>
  )
}

// Carousel met één project in het midden en de buren gedimd ernaast.
export default function ProjectCarousel({ projects }) {
  const [index, setIndex] = useState(0)
  const count = projects.length
  const at = (offset) => projects[(index + offset + count) % count]
  const go = (step) => setIndex((i) => (i + step + count) % count)

  return (
    <div className="relative" aria-roledescription="carousel" aria-label="Uitgelichte projecten">
      <div className="flex items-stretch justify-center gap-5">
        <div className="hidden lg:block w-[520px] shrink-0 -ml-[260px]" aria-hidden="true">
          <ProjectSlide project={at(-1)} />
        </div>

        <div className="w-full max-w-[640px] shrink-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={at(0).slug}
              className="h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectSlide project={at(0)} active />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:block w-[520px] shrink-0 -mr-[260px]" aria-hidden="true">
          <ProjectSlide project={at(1)} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 lg:mt-0 lg:absolute lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:justify-between lg:pointer-events-none">
        <ArrowButton direction="left" label="Vorig project" onClick={() => go(-1)} className="lg:pointer-events-auto bg-dark" />
        <p className="font-mono text-xs text-white/50 lg:hidden" aria-live="polite">
          {index + 1} / {count}
        </p>
        <ArrowButton label="Volgend project" onClick={() => go(1)} className="lg:pointer-events-auto bg-dark" />
      </div>
    </div>
  )
}
