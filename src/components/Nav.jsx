// src/components/Nav.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
          Wout De Brauwer
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-black transition ${
                location.pathname === link.to ? 'text-black font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-start px-6 py-16 space-y-8 text-lg font-medium text-gray-800">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block w-full hover:text-black transition ${
                location.pathname === link.to ? 'text-black font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </nav>
  );
}
