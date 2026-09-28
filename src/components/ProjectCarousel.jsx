import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import { agencies } from '../data/projects'
import { ArrowButton, Pill, RoleTag, plainText } from './ui'

function ProjectSlide({ project, active }) {
  // Links alleen focusbaar op de actieve slide
  const tab = active ? undefined : -1

  return (
    <article className={`grid md:grid-cols-2 overflow-hidden rounded-3xl h-full transition-shadow duration-500 ${active ? 'border-gradient shadow-[0_30px_80px_-40px_rgba(255,111,177,0.55)]' : 'border border-line bg-panel'}`}>
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        draggable="false"
        className="w-full h-52 md:h-full object-cover"
      />
      <div className="flex flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <p className={`font-mono text-xs ${agencies[project.agency]?.color ?? 'text-white/50'}`}>{agencies[project.agency]?.name}</p>
          {project.devOnly && <RoleTag />}
        </div>
        <h3 className="font-mono text-xl font-medium leading-snug mb-3">{project.title}</h3>
        <p className="text-sm text-white/70 line-clamp-3 mb-6">{plainText(project.intro)}</p>
        <div className="mt-auto flex items-center gap-2">
          <Pill to={`/portfolio/${project.slug}`} tabIndex={tab} className="!px-5 !py-2">Bekijk project</Pill>
          <ArrowButton to={`/portfolio/${project.slug}`} label={`Bekijk ${project.title}`} tabIndex={-1} className="!w-9 !h-9" />
        </div>
      </div>
    </article>
  )
}

// Swiper-carousel: actieve kaart in het midden, buren gedimd ernaast.
// Swipen/slepen werkt met touch en muis, pijltjestoetsen via Keyboard.
export default function ProjectCarousel({ projects }) {
  const [swiper, setSwiper] = useState(null)
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      <Swiper
        modules={[A11y, Keyboard]}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        slidesPerView="auto"
        centeredSlides
        loop
        spaceBetween={16}
        grabCursor
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ containerMessage: 'Uitgelichte projecten', slideLabelMessage: 'Project {{index}} van {{slidesLength}}' }}
        breakpoints={{ 1024: { spaceBetween: 20 } }}
        className="!overflow-visible"
      >
        {projects.map((project, i) => (
          <SwiperSlide
            key={project.slug}
            className="!w-[88%] sm:!w-[560px] lg:!w-[640px] !h-auto opacity-25 transition-opacity duration-300 [&.swiper-slide-active]:opacity-100"
          >
            <ProjectSlide project={project} active={i === active} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pijlen: op desktop vlak naast de actieve kaart, op mobiel eronder */}
      <div className="mt-6 flex items-center justify-center gap-4 lg:mt-0 lg:absolute lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[calc(640px+2*3.5rem)] lg:justify-between lg:pointer-events-none">
        <ArrowButton direction="left" label="Vorig project" onClick={() => swiper?.slidePrev()} className="lg:pointer-events-auto bg-dark" />
        <p className="carousel-count font-mono text-xs text-white/50 lg:hidden">
          {active + 1} / {projects.length}
        </p>
        <ArrowButton label="Volgend project" onClick={() => swiper?.slideNext()} className="lg:pointer-events-auto bg-dark" />
      </div>
    </div>
  )
}
