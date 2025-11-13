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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll wanneer menu open is + sluit op Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && isOpen && setIsOpen(false);
    const mainEl = document.querySelector('main');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      window.addEventListener('keydown', onKey);
      if (mainEl) mainEl.setAttribute('aria-hidden', 'true');
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflowX = '';
      window.removeEventListener('keydown', onKey);
      if (mainEl) mainEl?.removeAttribute('aria-hidden');
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflowX = '';
      window.removeEventListener('keydown', onKey);
      if (mainEl) mainEl?.removeAttribute('aria-hidden');
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !overlayRef.current) return;
    const overlay = overlayRef.current;
    const focusableSelector =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      overlay.querySelectorAll(focusableSelector)
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    setTimeout(() => first.focus(), 0);
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Open animatie menu
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      const overlay = overlayRef.current;
      const items = overlay.querySelectorAll('.menu-item');
      gsap.fromTo(
        overlay,
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.28, ease: 'power2.out' }
      );
      gsap.fromTo(
        items,
        { y: 8, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.36,
          stagger: 0.06,
          ease: 'power3.out',
        }
      );
    }
  }, [isOpen]);

  // Init animatie bij route change
  useEffect(() => {
    gsap.fromTo(
      '.nav-container',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
    );
    gsap.fromTo(
      '.nav-logo-text',
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
        clearProps: 'all',
      }
    );
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? 'text-primary after:w-[11px]'
      : 'text-white after:w-0';

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[99999] transition-all duration-300 bg-black backdrop-blur-md overflow-x-hidden`}
    >
      <div className="nav-container max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center overflow-hidden">
            <Link to="/" className="nav-logo-text text-2xl font-bold text-white">
              PORTFOLIO.
            </Link>
          </div>

          {/* Desktop links */}
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

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-2 inline-flex items-center justify-center rounded-md text-white hover:bg-white/5"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="md:hidden fixed inset-0 bg-black backdrop-blur-sm z-[100000] flex flex-col pointer-events-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-6 pb-2">
            <div className="text-white text-lg font-bold tracking-wider ml-2">
              PORTFOLIO.
            </div>
            <button
              onClick={() => {
                if (overlayRef.current) {
                  gsap.to(overlayRef.current, {
                    y: -20,
                    opacity: 0,
                    duration: 0.22,
                    ease: 'power2.in',
                    onComplete: () => setIsOpen(false),
                  });
                } else {
                  setIsOpen(false);
                }
              }}
              aria-label="Close menu"
              className="p-2 rounded-md text-white hover:bg-white/5 mr-2"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div
            className="overflow-auto px-4 pb-8 flex flex-col items-center justify-start"
            style={{
              WebkitOverflowScrolling: 'touch',
              maxHeight: 'calc(100vh - 64px)',
              minHeight: 'calc(100vh - 64px)',
            }}
          >
            <div className="w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-4 mx-4">
                <nav className="flex flex-col items-center gap-4">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="menu-item w-full text-center text-2xl sm:text-3xl font-semibold text-white hover:text-primary transition bg-white/10 hover:bg-white/20 rounded-xl py-4 px-6 shadow-lg backdrop-blur-sm"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="menu-item w-full text-center text-2xl sm:text-3xl font-semibold text-white hover:text-primary transition bg-white/10 hover:bg-white/20 rounded-xl py-4 px-6 shadow-lg backdrop-blur-sm"
                  >
                    MY WORK
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="menu-item w-full text-center text-2xl sm:text-3xl font-semibold text-white hover:text-primary transition bg-white/10 hover:bg-white/20 rounded-xl py-4 px-6 shadow-lg backdrop-blur-sm"
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 my-6 max-w-md mx-auto"></div>
            <p className="text-center text-white/70 max-w-md mx-auto">
              Snelle links en contact — tik om te sluiten
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
