// Gedeelde bouwstenen voor de monochrome stijl: labels, pill-knoppen en ronde pijlknoppen.
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
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
      <span className="text-iris">…/</span>{children}<span className="text-violet">…</span>
    </p>
  )
}

// Drijvende kleurvlekken als achtergrond (parent moet `relative overflow-hidden` zijn)
export function Aurora({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      <div className="aurora-blob bg-iris w-[46vw] h-[46vw] max-w-[620px] max-h-[620px] -top-[12%] right-[-8%]" />
      <div className="aurora-blob bg-azure w-[34vw] h-[34vw] max-w-[460px] max-h-[460px] top-[30%] right-[22%] [animation-delay:-6s]" />
      <div className="aurora-blob bg-violet w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] top-[5%] -left-[10%] opacity-20 [animation-delay:-12s]" />
    </div>
  )
}

// Zet de muispositie als CSS-variabelen voor het .spotlight-effect
export function onSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

// Dunne balk bovenaan die toont hoe ver je gescrold bent
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-brand z-[10002]"
    />
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
  solid: 'bg-white text-dark hover:bg-brand hover:shadow-[0_0_32px_-6px_rgba(56,189,248,0.6)]',
  outline: 'border border-line text-white/80 hover:border-iris hover:text-white hover:bg-iris/10',
}

export function Pill({ variant = 'solid', className = '', children, ...props }) {
  return (
    <Clickable
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm italic transition-[color,background-color,border-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${pillStyles[variant]} ${className}`}
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
      className={`inline-flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-white/70 text-white hover:border-transparent hover:bg-brand hover:text-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
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
      className={`pointer-events-none absolute rounded-full border border-iris/25 ${className}`}
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
      className={`grid gap-1 sm:gap-6 py-5 px-5 sm:px-10 lg:px-16 transition-colors group-hover:bg-brand group-hover:text-dark ${className}`}
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

// Kleine pill die mijn rol op een project aangeeft (niet klikbaar)
export function RoleTag({ children = 'Development', className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-3 py-0.5 text-[11px] italic text-teal ${className}`}>
      {children}
    </span>
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

// Titel en meta-description per pagina (SPA: anders deelt elke pagina dezelfde titel)
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Wout De Brauwer` : 'Wout De Brauwer | Junior webdeveloper'
    const meta = document.querySelector('meta[name="description"]')
    if (!meta || !description) return
    const previous = meta.content
    meta.content = description
    return () => { meta.content = previous }
  }, [title, description])
}
