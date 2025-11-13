// src/components/Nav.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Close on Escape and trap focus inside drawer
  useEffect(() => {
    if (!open) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea',
      'input[type="text"]',
      'input[type="radio"]',
      'input[type="checkbox"]',
      'select',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const focusable = drawerRef.current
      ? Array.from(drawerRef.current.querySelectorAll(focusableSelectors))
      : [];

    if (focusable.length > 0) {
      firstFocusableRef.current = focusable[0];
      lastFocusableRef.current = focusable[focusable.length - 1];
      firstFocusableRef.current.focus();
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        // simple focus trap
        if (document.activeElement === lastFocusableRef.current && !e.shiftKey) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        } else if (document.activeElement === firstFocusableRef.current && e.shiftKey) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-md z-50 border-b border-gray-200 dark:border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Wout De Brauwer
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Sluit menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {open ? (
              // Close icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out shadow-xl
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="px-6 py-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="text-lg font-semibold text-gray-900 dark:text-white" onClick={() => setOpen(false)}>
              Wout De Brauwer
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Sluit menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-4 text-lg">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-2 py-2 rounded-md transition ${
                        isActive ? 'text-black dark:text-white font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Optional small footer in drawer */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Wout De Brauwer
          </div>
        </div>
      </aside>
    </nav>
  );
}
