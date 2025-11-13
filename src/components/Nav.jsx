import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to update nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate nav on mount but ensure elements end visible and clear inline styles
    gsap.fromTo(
      '.nav-container',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
    )

    // Animate logo text (fade in) and ensure final styles are cleared
    gsap.fromTo(
      '.nav-logo-text',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out', clearProps: 'all' }
    )
  }, [])

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : '';
  };

  const isHome = location.pathname === '/';
  
  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isHome && !isScrolled
        ? 'bg-black backdrop-blur-md'
        : isScrolled
          ? 'bg-black/70 backdrop-blur-md'
          : 'bg-[#111111]'
    }`}>
      <div className="nav-container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center overflow-hidden">
            <Link to="/" className="nav-logo-text text-2xl font-bold text-white relative">
              PORTFOLIO.
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`nav-item text-white ${isActive('/')} hover:text-primary transition-colors text-sm font-medium`}>
              HOME
            </Link>
            <Link to="/portfolio" className={`nav-item text-white ${isActive('/portfolio')} hover:text-primary transition-colors text-sm font-medium`}>
              WORKS
            </Link>
            <Link to="/contact" className={`nav-item text-white ${isActive('/contact')} hover:text-primary transition-colors text-sm font-medium`}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}