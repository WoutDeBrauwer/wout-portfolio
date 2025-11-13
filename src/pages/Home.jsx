import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getRandomPortfolioItems } from '../data/portfolioItems'
import PortfolioCard from '../components/PortfolioCard'
import SkillBar from '../components/SkillBar'
import AboutTabs from '../components/AboutTabs'

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation()

  // show a few random items on the home page
  const featured = getRandomPortfolioItems(4)

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section (image background like the reference) */}
      <header
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundColor: '#374151', height: 'calc(100vh - 5rem)' }}
        aria-label="Hero"
      >
        {/* gradient overlay (dark on left -> transparent on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
          <div className="w-full md:w-1/2 lg:w-2/5 text-left text-white z-10 flex flex-col">
            <p className="text-sm uppercase tracking-widest text-white/60 mb-4">MY NAME IS</p>
            <h1 className="text-5xl sm:text-6xl md:text-[5.2rem] lg:text-[6.2rem] font-extrabold leading-tight mb-6">
              WOUT
            </h1>
            <div className="text-2xl sm:text-3xl md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-widest uppercase text-white/90 mb-9 inline-block whitespace-nowrap">
              DE BRAUWER
            </div>
            <div className="w-fit bg-primary text-[#111111] px-6 py-3 rounded-sm font-semibold mb-8 text-base tracking-wide">
              JUNIOR WEBDEVELOPER
            </div>

            <p className="text-lg text-white/80 mt-6 mb-8 max-w-lg">
              Ik bouw moderne, toegankelijke en performante webapplicaties met React en moderne tooling.
            </p>

              <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-[#111111] px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition"
              >
                Contact
              </a>
              <a
                href="/portfolio"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#111111] transition"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* down arrow indicator (centered) - click scrolls to about section */}
  <a href="#about" className="absolute left-1/2 -translate-x-1/2 bottom-12 z-50" aria-label="Scroll to about">
          <div className="flex flex-col items-center -space-y-4">
            <svg className="w-8 h-8 text-white arrow-bounce mb-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
            <svg className="w-8 h-8 text-white arrow-bounce opacity-90 -mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
          </div>
        </a>
      </header>

  {/* About Section */}
  <div id="about" className="bg-light text-dark py-32">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
        HELLO
        <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
      </h2>
      <AboutTabs />
    </div>
  </div>

  {/* Skills Section */}
  <div className="bg-dark text-light py-32">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
        SKILLS
        <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white/90">Development</h3>
          <SkillBar name="HTML & CSS" level={5} />
          <SkillBar name="JavaScript" level={4} />
          <SkillBar name="React" level={4} />
          <SkillBar name="API Integration" level={3} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white/90">Design</h3>
          <SkillBar name="Adobe XD" level={4} />
          <SkillBar name="Photoshop" level={3} />
          <SkillBar name="Illustrator" level={3} />
          <SkillBar name="Premiere Pro" level={2} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white/90">Tools</h3>
          <SkillBar name="Git" level={4} />
          <SkillBar name="VS Code" level={5} />
          <SkillBar name="WordPress" level={4} />
          <SkillBar name="Woocommerce" level={3} />
        </div>
      </div>
    </div>
  </div>

  {/* Portfolio Section */}
      <div className="bg-dark text-light py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="portfolio-title text-4xl font-bold mb-8 flex items-center gap-4">
              MY WORK
              <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
            </h2>
            {/* filter controls removed on home - showing featured projects */}
          </div>
          
          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(item => (
              <Link key={item.id} to={`/portfolio/${item.id}`}>
                <PortfolioCard {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
