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
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-black border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white select-none tracking-tight hover:text-primary transition"
        >
          PORTFOLIO<span className="text-primary">.</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm tracking-wide font-medium transition-all duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${isActive(
                link.path
              )} hover:text-primary`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
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
            className="fixed inset-0 z-[10001] bg-black flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 pt-6 pb-3">
              <span className="text-white text-xl font-bold tracking-tight">
                PORTFOLIO<span className="text-primary">.</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-white rounded-md hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <motion.nav
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 25, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center gap-5 px-6 mt-10"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-center text-2xl font-semibold tracking-wide text-white hover:text-primary transition py-4 bg-black rounded-2xl shadow-md border border-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Footer info */}
            <div className="mt-auto pb-10 text-center text-white/60 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Wout De Brauwer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
