import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { contact } from "../data/profile";
import { Pill } from "./ui";

const navLinks = [
  { path: "/", label: "Home", end: true },
  { path: "/portfolio", label: "Projecten" },
  { path: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="text-sm leading-tight text-white hover:text-white/70 transition-colors">
      Wout
      <br />
      De Brauwer
    </Link>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Menu sluiten bij navigatie
  useEffect(() => setMenuOpen(false), [pathname]);

  // Niet scrollen achter het open menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Sluiten met Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? "text-white" : "text-white/55 hover:text-white"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-dark/80 backdrop-blur-md border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 grid grid-cols-[1fr_auto_1fr] items-center h-20">
        <Logo />

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="col-start-3 flex justify-end">
          <Pill variant="outline" href={contact.linkedin} className="hidden md:inline-flex !px-5 !py-2">
            LinkedIn ↗
          </Pill>
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 -mr-2 text-white"
            aria-label="Menu openen"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-dark flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center px-5 h-20 border-b border-line">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2 text-white"
                aria-label="Menu sluiten"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col px-5 mt-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.end}
                    className={({ isActive }) =>
                      `block font-mono text-4xl py-4 border-b border-line ${isActive ? "text-white" : "text-white/50"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto px-5 pb-10">
              <Pill href={contact.linkedin} className="w-full">LinkedIn ↗</Pill>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
