import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Contact from './pages/Contact.jsx'
import FloatingContact from './components/FloatingContact'
import Nav from './components/Nav'
import Footer from './components/Footer'

function AppInner() {
  const location = useLocation();

  // Quick debug helper: open the site with ?debug=overflow to outline elements
  // that are wider than the viewport and log them to the console. This runs
  // only when the query param is present so it won't affect normal users.
  React.useEffect(() => {
    if (!location.search.includes('debug=overflow')) return;

    const check = () => {
      const winW = window.innerWidth;
      const offenders = [];
      document.querySelectorAll('*').forEach((el) => {
        try {
          const rect = el.getBoundingClientRect();
          if (rect.right - 1 > winW || rect.left < 0) {
            offenders.push({ el, rect });
          }
        } catch (e) {}
      });
      if (offenders.length === 0) {
        console.log('[overflow-debug] no offenders found');
        return;
      }
      console.group('[overflow-debug] elements wider than viewport');
      offenders.forEach(({ el, rect }, i) => {
        console.log(i, el, rect);
        el.style.outline = '3px solid rgba(255,0,0,0.8)';
      });
      console.groupEnd();
    };

    // Run on load and on resize
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* add top padding so fixed nav doesn't overlap content */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
