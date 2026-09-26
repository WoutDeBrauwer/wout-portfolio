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

// Bij navigatie naar een andere pagina bovenaan starten
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
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
        </div>
      </Router>
    </MotionConfig>
  )
}
