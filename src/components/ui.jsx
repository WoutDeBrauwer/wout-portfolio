// Gedeelde bouwstenen voor de monochrome stijl: labels, pill-knoppen en ronde pijlknoppen.
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function Container({ className = '', children }) {
  return (
    <div className={`max-w-[1400px] w-full mx-auto px-5 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  )
}

// Klein monospace label zoals "…/Over mij…"
export function SectionLabel({ children, className = '' }) {
  return (
    <p className={`font-mono text-xs text-white/70 ${className}`}>
      …/{children}…
    </p>
  )
}

// Link, externe link of knop, afhankelijk van de props
function Clickable({ to, href, className, children, ...rest }) {
  if (to) return <Link to={to} className={className} {...rest}>{children}</Link>
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return <button type="button" className={className} {...rest}>{children}</button>
}

const pillStyles = {
  solid: 'bg-white text-dark hover:bg-white/85',
  outline: 'border border-line text-white/80 hover:border-white hover:text-white',
}

export function Pill({ variant = 'solid', className = '', children, ...props }) {
  return (
    <Clickable
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm italic transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${pillStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Clickable>
  )
}

// Ronde knop met pijl. `diagonal` = externe link / "open".
export function ArrowButton({ diagonal = false, direction = 'right', label, className = '', ...props }) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight
  return (
    <Clickable
      aria-label={label}
      className={`inline-flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-white/70 text-white hover:bg-white hover:text-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
      {...props}
    >
      <Icon size={18} strokeWidth={1.75} className={direction === 'left' ? 'rotate-180' : ''} />
    </Clickable>
  )
}

// Dunne decoratieve cirkel (parent moet `relative overflow-hidden` zijn)
export function Circle({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border border-white/10 ${className}`}
    />
  )
}

// Zachte fade-in bij scrollen
export function Reveal({ delay = 0, className = '', children }) {
  // Bij "minder beweging" meteen tonen
  if (useReducedMotion()) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

// Rij in een tabel-lijst (ervaring, contactgegevens). Inverteert bij hover, zoals in de inspiratie.
export function TableRow({ href, to, cells, className = '' }) {
  const content = (
    <div
      className={`grid gap-1 sm:gap-6 py-5 px-5 sm:px-10 lg:px-16 transition-colors group-hover:bg-white group-hover:text-dark ${className}`}
    >
      {cells}
    </div>
  )
  if (!href && !to) return <div className="group border-b border-line">{content}</div>
  return (
    <Clickable href={href} to={to} className="group block border-b border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
      {content}
    </Clickable>
  )
}

// Tags als "WordPress / PHP / ACF"
export function SlashList({ items, className = '' }) {
  return (
    <p className={`font-mono text-xs leading-relaxed ${className}`}>
      {items.join(' / ')}
    </p>
  )
}

// Verwijdert **vet**-markering voor korte previews
export const plainText = (text = '') => text.replace(/\*\*/g, '')
