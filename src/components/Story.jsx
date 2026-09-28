import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useSpring } from "framer-motion";
import { Code2, PenTool, Rocket, Sparkles, Wrench } from "lucide-react";
import { story } from "../data/profile";
import { Container, SectionLabel } from "./ui";

const icons = { wrench: Wrench, pen: PenTool, code: Code2, rocket: Rocket, sparkles: Sparkles };

// Kleur per hoofdstuk: loopt van violet naar mint ("nu")
const accents = [
  { text: "text-iris", bg: "bg-iris", ring: "border-iris/50" },
  { text: "text-rose", bg: "bg-rose", ring: "border-rose/50" },
  { text: "text-coral", bg: "bg-coral", ring: "border-coral/50" },
  { text: "text-iris", bg: "bg-iris", ring: "border-iris/50" },
  { text: "text-mint", bg: "bg-mint", ring: "border-mint/50" },
];

function Chapter({ chapter, index, onActive }) {
  const ref = useRef(null);
  // Actief zodra het hoofdstuk het midden van het scherm raakt
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const accent = accents[index % accents.length];
  const Icon = icons[chapter.icon] ?? Sparkles;

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-10 md:pl-0 lg:min-h-[52vh] lg:flex lg:items-center"
    >
      {/* Bolletje op de tijdlijn (mobiel) */}
      <span
        aria-hidden="true"
        className={`md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full ${accent.bg} ${index === story.length - 1 ? "pulse-dot" : ""}`}
      />
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className={`lg:hidden inline-grid place-items-center w-9 h-9 rounded-full border ${accent.ring} ${accent.text}`}>
            <Icon size={16} strokeWidth={1.75} />
          </span>
          <p className="font-mono text-xs text-white/60">
            <span className={accent.text}>{String(index + 1).padStart(2, "0")}</span> / {chapter.kicker}
            <span className="lg:hidden"> · {chapter.years}</span>
          </p>
        </div>
        <h3 className="font-mono text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-5">
          {chapter.title}
        </h3>
        <p className="text-white/70 md:text-lg leading-relaxed">{chapter.text}</p>
      </div>
    </motion.li>
  );
}

// Plakt links op desktop: groot jaartal + icoon van het actieve hoofdstuk
function StickyPanel({ active, progress }) {
  const chapter = story[active];
  const accent = accents[active % accents.length];
  const Icon = icons[chapter.icon] ?? Sparkles;

  return (
    <div className="hidden lg:flex sticky top-28 h-[calc(100vh-9rem)] flex-col justify-center">
      <div className="relative w-40 h-40 mb-10">
        <div aria-hidden="true" className="absolute inset-0 rounded-full bg-brand opacity-25 blur-2xl" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`absolute inset-0 grid place-items-center rounded-full border ${accent.ring} bg-dark/60 backdrop-blur ${accent.text}`}
          >
            <Icon size={56} strokeWidth={1.25} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="h-[1.1em] overflow-hidden font-mono font-medium tracking-tight leading-none text-[clamp(3rem,5.5vw,5.5rem)]">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="text-gradient"
          >
            {chapter.years.split(" – ")[0]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="font-mono text-sm text-white/50 mt-3">{chapter.years}</p>

      {/* Voortgang door het verhaal */}
      <div className="mt-10 flex items-center gap-4">
        <div className="relative h-px w-40 bg-line overflow-hidden">
          <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-brand" />
        </div>
        <p className="font-mono text-xs text-white/50">
          {String(active + 1).padStart(2, "0")} / {String(story.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

export default function Story() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start center", "end center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="relative pb-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12 lg:mb-0">
          <SectionLabel className="md:col-span-5">Mijn verhaal</SectionLabel>
          <h2 className="md:col-span-7 font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
            Van mechanisch tekenen naar <span className="text-gradient">custom blocks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <StickyPanel active={active} progress={progress} />
          </div>

          <div className="lg:col-span-7 relative">
            {/* Tijdlijn op mobiel/tablet */}
            <div aria-hidden="true" className="md:hidden absolute left-[5px] top-2 bottom-2 w-px bg-line overflow-hidden">
              <motion.div style={{ scaleY: progress }} className="absolute inset-0 origin-top bg-gradient-to-b from-iris via-rose to-mint" />
            </div>
            <ol ref={listRef} className="space-y-16 md:space-y-20 lg:space-y-0">
              {story.map((chapter, i) => (
                <Chapter key={chapter.title} chapter={chapter} index={i} onActive={setActive} />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
