// Zwevende belknop rechtsonder: verschijnt na een beetje scrollen, zodat bezoekers me snel kunnen bellen.
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { contact } from '../data/profile'

export default function CallButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={contact.phoneHref}
          aria-label={`Bel Wout: ${contact.phone}`}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[10000] flex items-center gap-3 rounded-full bg-brand p-4 text-dark shadow-[0_8px_30px_rgba(56,189,248,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
        >
          {/* Zachte puls rond de knop */}
          <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-azure/40 animate-ping [animation-duration:2.5s]" />
          <Phone className="w-5 h-5 shrink-0" strokeWidth={2.25} />
          {/* Label schuift open bij hover (desktop) */}
          <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap font-mono text-sm font-medium transition-[max-width] duration-300 group-hover:max-w-[12rem] group-focus-visible:max-w-[12rem]">
            {contact.phone}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
