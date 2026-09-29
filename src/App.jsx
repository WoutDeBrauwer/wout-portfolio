import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CallButton from './components/CallButton'
import { ScrollProgress } from './components/ui'
import { CursorGlow, CustomCursor, Grain, PageCurtain } from './components/effects'

// Bij navigatie bovenaan starten, of naar het blok uit de hash (bv. /#about) scrollen
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Even wachten tot de pagina gerenderd is
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 50)
    return () => clearTimeout(id)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <ScrollProgress />
        <PageCurtain />
        <CursorGlow />
        <CustomCursor />
        <Grain />
        <div className="min-h-screen flex flex-col">
          <Nav />
          {/* top padding zodat de vaste nav de content niet overlapt */}
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CallButton />
        </div>
      </Router>
    </MotionConfig>
  )
}
