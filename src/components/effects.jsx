// Speelse effecten: eigen cursor, magnetische knoppen, paginaovergang,
// korrel, scroll-tekst en een band die reageert op scrollsnelheid.
// Alles valt terug op statisch bij "minder beweging" of touch.
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'

// true op toestellen met een muis (geen touch)
function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setFine(mq.matches)
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return fine
}

// Ring die de muis volgt en groeit boven klikbare elementen
export function CustomCursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!fine || reduce) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHover(!!e.target.closest?.('a, button, [role="button"], .swiper'))
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [fine, reduce, x, y])

  if (!fine || reduce) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hover ? 1.8 : 1, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-[10003] -ml-5 -mt-5 w-10 h-10 rounded-full border border-rose/70 mix-blend-screen"
      />
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: visible && !hover ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[10003] -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-coral"
      />
    </>
  )
}

// Trekt het kind een beetje naar de muis toe
export function Magnetic({ strength = 0.3, className = '', children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset} className={className}>
      {children}
    </motion.div>
  )
}

// Gordijn in het merkverloop dat wegschuift bij het wisselen van pagina
export function PageCurtain() {
  const { pathname } = useLocation()
  const first = useRef(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    first.current = false
  }, [])

  if (first.current || reduce) return null

  return (
    <motion.div
      key={pathname}
      aria-hidden="true"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ originY: 0 }}
      className="pointer-events-none fixed inset-0 z-[10004] bg-brand"
    />
  )
}

// Subtiele filmkorrel over de hele pagina
export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  )
}

// Woorden lichten één voor één op terwijl je langs de tekst scrolt.
// `words`: array van { text, accent } zodat accentwoorden in het verloop staan.
export function ScrollText({ words, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, start + 1 / words.length]}
            accent={word.accent}
            still={reduce}
          >
            {word.text}
          </Word>
        )
      })}
    </p>
  )
}

function Word({ progress, range, accent, still, children }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <>
      <motion.span style={{ opacity: still ? 1 : opacity }} className={accent ? 'text-gradient' : undefined}>
        {children}
      </motion.span>{' '}
    </>
  )
}

// Grote tekstband die sneller loopt (en omdraait) als je scrolt
export function VelocityMarquee({ items, baseVelocity = -2.5 }) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false })
  const direction = useRef(1)
  // Twee identieke helften: bij -50% springen we naadloos terug
  const x = useTransform(baseX, (v) => `${((((v % 50) + 50) % 50) - 50).toFixed(3)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let move = direction.current * baseVelocity * (delta / 1000)
    const f = factor.get()
    if (f < 0) direction.current = -1
    else if (f > 0) direction.current = 1
    move += direction.current * move * Math.abs(f)
    baseX.set(baseX.get() + move)
  })

  const half = (hidden) => (
    <span className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={i % 2 ? 'text-gradient' : 'text-outline'}>{item}</span>
          <span className="mx-6 md:mx-10 text-[0.5em] text-rose" aria-hidden="true">✦</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="overflow-hidden py-6 md:py-10 select-none">
      <p className="sr-only">{items.join(', ')}</p>
      <motion.div
        style={{ x }}
        aria-hidden="true"
        className="flex w-max whitespace-nowrap font-mono font-semibold tracking-tight leading-none text-[clamp(3rem,11vw,10rem)]"
      >
        {half(false)}
        {half(true)}
      </motion.div>
    </div>
  )
}
