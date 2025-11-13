import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  // Scroll detectie voor nav achtergrond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initieel scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animatie op elke route change
  useEffect(() => {
    gsap.fromTo(
      '.nav-container',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
    );

    gsap.fromTo(
      '.nav-logo-text',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out', clearProps: 'all' }
    );
  }, [location.pathname]);

  // Active link styling: tekstkleur en klein streepje
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary after:w-[11px]' : 'text-white after:w-0';
  };

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHome && !isScrolled
          ? 'bg-black backdrop-blur-md'
          : isScrolled
          ? 'bg-black/70 backdrop-blur-md'
          : 'bg-[#111111]'
      }`}
    >
      <div className="nav-container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center overflow-hidden">
            <Link
              to="/"
              className="nav-logo-text text-2xl font-bold text-white relative"
            >
              PORTFOLIO.
            </Link>
          </div>

          {/* Desktop links (hidden on small) */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { path: '/', label: 'HOME' },
              { path: '/portfolio', label: 'MY WORK' },
              { path: '/contact', label: 'CONTACT' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item relative text-sm font-medium transition-colors ${isActive(
                  link.path
                )} after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-2 inline-flex items-center justify-center rounded-md text-white hover:bg-white/5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
        {/* Mobile menu overlay */}
        {isOpen && (
          <div
            ref={overlayRef}
            className="md:hidden fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-8 px-6"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => {
                // animate close then set state
                if (overlayRef.current) {
                  gsap.to(overlayRef.current, { y: -20, opacity: 0, duration: 0.22, ease: 'power2.in', onComplete: () => setIsOpen(false) });
                } else {
                  setIsOpen(false);
                }
              }}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 rounded-md text-white hover:bg-white/5"
            >
              ✕
            </button>

            <div className="w-full max-w-md flex flex-col items-center gap-6">
              <div className="text-white text-3xl font-bold tracking-wider">PORTFOLIO.</div>

              <nav className="flex flex-col items-center gap-6 mt-4">
                <Link to="/" onClick={() => { if (overlayRef.current) gsap.to(overlayRef.current, { y: -20, opacity: 0, duration: 0.22, ease: 'power2.in', onComplete: () => setIsOpen(false) }); else setIsOpen(false); }} className="text-3xl font-semibold text-white hover:text-primary transition">HOME</Link>
                <Link to="/portfolio" onClick={() => { if (overlayRef.current) gsap.to(overlayRef.current, { y: -20, opacity: 0, duration: 0.22, ease: 'power2.in', onComplete: () => setIsOpen(false) }); else setIsOpen(false); }} className="text-3xl font-semibold text-white hover:text-primary transition">MY WORK</Link>
                <Link to="/contact" onClick={() => { if (overlayRef.current) gsap.to(overlayRef.current, { y: -20, opacity: 0, duration: 0.22, ease: 'power2.in', onComplete: () => setIsOpen(false) }); else setIsOpen(false); }} className="text-3xl font-semibold text-white hover:text-primary transition">CONTACT</Link>
              </nav>

              <div className="w-full h-px bg-white/10 mt-6"></div>

              <p className="text-center text-white/70">Snelle links en contact — tik om te sluiten</p>
            </div>
          </div>
        )}
      </nav>
      );
    }
