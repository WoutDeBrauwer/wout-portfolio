import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getRandomPortfolioItems } from '../data/portfolioItems'
import PortfolioCard from '../components/PortfolioCard'
import SkillBar from '../components/SkillBar'
import AboutMe from '../components/AboutMe'
import Typewriter from '../components/Typewriter'

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation()

  // show a few random items on the home page
  const featured = getRandomPortfolioItems(3)

  return (
    <div className="min-h-screen bg-dark text-light">
      <header
        className="relative flex items-center overflow-hidden"
        style={{height: "calc(100vh - 5rem)"}}
        aria-label="Hero">
        {/* VIDEO rechts (hidden on small screens for performance) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/images/Images/Portfolio-wout-video-header.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Sterke zwarte overlay links -> transparant rechts */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

        {/* Content links met max-width en uitlijning */}
        <div className="relative z-20 h-full flex items-center w-full">
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
            <div className="w-full md:w-1/2 lg:w-2/5 text-left text-white flex flex-col">
              <p className="text-sm uppercase tracking-widest text-white/60 mb-4">
                MY NAME IS
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-[5.2rem] lg:text-[6.2rem] font-extrabold leading-tight mb-6">
                <Typewriter text="WOUT" speed={120} />
              </h1>

              <div className="text-4xl sm:text-5xl md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-widest uppercase text-white/90 mb-9 inline-block whitespace-nowrap">
                <Typewriter text="DE BRAUWER" speed={120} />
              </div>

              <div className="w-fit bg-primary text-[#111111] px-6 py-3 rounded-sm font-semibold mb-2 text-base tracking-wide">
                JUNIOR WEBDEVELOPER
              </div>

              <p className="text-lg text-white/80 mt-6 mb-4 max-w-lg">
                Ik ben 24 jaar oud en een gepassioneerde junior webdeveloper.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-[#111111] px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition">
                  Contact
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#111111] transition">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Down arrow indicator */}
        <a
          href="#about"
          className="absolute left-1/2 -translate-x-1/2 bottom-12 z-30"
          aria-label="Scroll to about">
          <div className="flex flex-col items-center -space-y-4">
            <svg
              className="w-8 h-8 text-white arrow-bounce mb-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
            <svg
              className="w-8 h-8 text-white arrow-bounce opacity-90 -mt-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
          </div>
        </a>
      </header>

      {/* About Section */}
      <div className="bg-dark text-black py-10 ">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8">
          <AboutMe />
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-dark text-light py-16">
          <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            SKILLS
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">
                Coding and Themes
              </h3>
              <SkillBar name="HTML & CSS" level={5} />
              <SkillBar name="Betheme/ Elementor" level={5} />
              <SkillBar name="JavaScript" level={3} />
              <SkillBar name="GSAP" level={3} />
              <SkillBar name="API Integration" level={3} />
              <SkillBar name="React" level={2} />
              <SkillBar name="PHP" level={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">
                Plugins Wordpress
              </h3>
              <SkillBar name="ACF" level={5} />
              <SkillBar name="WooCommerce" level={5} />
              <SkillBar name="Slider revolution" level={5} />
              <SkillBar name="Contact 7" level={5} />
              <SkillBar name="WPML" level={4} />
              <SkillBar name="Search en filter" level={4} />
              <SkillBar name="Iubenda" level={3} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">Tools</h3>
              <SkillBar name="Adobe XD" level={5} />
              <SkillBar name="WordPress" level={4} />
              <SkillBar name="Photoshop" level={3} />
              <SkillBar name="Illustrator" level={3} />
              <SkillBar name="Git" level={3} />
              <SkillBar name="Premiere Pro" level={2} />
              <SkillBar name="Blender" level={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-dark text-light py-12">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="portfolio-title text-4xl font-bold flex items-center gap-4">
            MY WORK
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
          </h2>

          <Link
            to="/portfolio"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#111111] transition">
            Bekijk alle portfolio items
          </Link>
        </div>
            <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featured.slice(0, 3).map((item) => (
                <Link key={item.id} to={`/portfolio/${item.id}`}>
                  <PortfolioCard {...item} />
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
