import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-primary after:w-[12px]"
      : "text-white after:w-0";

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/portfolio", label: "MY WORK" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white select-none">
          PORTFOLIO.
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${isActive(
                link.path
              )} after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/90 backdrop-blur-lg flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 pt-6 pb-3">
              <span className="text-white text-xl font-bold">PORTFOLIO.</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-white rounded-md hover:bg-white/10"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 px-6 mt-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center text-2xl font-semibold text-white hover:text-primary transition py-4 bg-white/10 hover:bg-white/20 rounded-2xl shadow-md"
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>

            {/* Footer info */}
            <div className="mt-auto pb-8 text-center text-white/60 text-sm">
              Snelle links en contact — tik om te sluiten
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
