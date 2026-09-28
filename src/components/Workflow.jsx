import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { maintenance, workflow } from "../data/profile";
import { Container, Reveal, SectionLabel, onSpotlight } from "./ui";

// Kleur per stap: van indigo (design) naar oranje (resultaat)
const stepColors = [
  { text: "text-iris", bg: "bg-iris", glow: "rgba(124, 140, 255, 0.2)" },
  { text: "text-azure", bg: "bg-azure", glow: "rgba(56, 189, 248, 0.18)" },
  { text: "text-coral", bg: "bg-coral", glow: "rgba(255, 138, 76, 0.18)" },
  { text: "text-mint", bg: "bg-mint", glow: "rgba(72, 227, 182, 0.16)" },
];

// Klein tussenkopje boven elke rij kaarten
function RowLabel({ children }) {
  return <h3 className="font-mono text-xs text-white/50 mb-4">{children}</h3>;
}

// Werk aan bestaande sites: zelfde kaarten, zonder nummers
function Maintenance() {
  return (
    <div className="mt-12 md:mt-16">
      <RowLabel>Bestaande sites</RowLabel>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {maintenance.map((item, i) => {
          const color = stepColors[i % stepColors.length];
          return (
            <li key={item.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div
                  onMouseMove={onSpotlight}
                  style={{ "--glow": color.glow }}
                  className="spotlight h-full rounded-3xl border border-line px-6 py-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/30"
                >
                  <h4 className="flex items-center gap-2.5 font-mono text-lg font-medium mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${color.bg}`} aria-hidden="true" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/70">{item.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// "Wat ik doe": nieuwe sites bouwen (van Figma-design tot block) en bestaande sites opvolgen
export default function Workflow() {
  const listRef = useRef(null);
  // Lijn boven de stappen die meegroeit terwijl je door de sectie scrolt
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-16">
          <SectionLabel className="md:col-span-5">Wat ik doe</SectionLabel>
          <Reveal className="md:col-span-7">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] mb-6">
              Bouwen en <span className="text-gradient">onderhouden</span>
            </h2>
            <p className="text-white/70 max-w-xl">
              Ik bouw nieuwe sites op basis van het design van een designer.
              Daarnaast volg ik bestaande sites van klanten op, van updates
              tot bugs. Met <em>Claude Code en Figma MCP</em> gaat het werk
              sneller, maar alles krijgt mijn eigen review.
            </p>
          </Reveal>
        </div>

        <RowLabel>Een nieuwe site</RowLabel>
        <div ref={listRef}>
          <div aria-hidden="true" className="hidden lg:block h-px bg-line mb-6 overflow-hidden">
            <motion.div style={{ scaleX: progress }} className="h-full bg-brand origin-left" />
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step, i) => {
              const last = i === workflow.length - 1;
              const color = stepColors[i % stepColors.length];
              return (
                <li key={step.title}>
                  <Reveal delay={i * 0.08} className="h-full">
                    <div
                      onMouseMove={last ? undefined : onSpotlight}
                      style={last ? undefined : { "--glow": color.glow }}
                      className={`h-full rounded-3xl px-6 py-6 transition-transform duration-300 hover:-translate-y-1 ${
                        last
                          ? "bg-brand text-dark shadow-[0_20px_60px_-25px_rgba(56,189,248,0.7)]"
                          : "spotlight border border-line hover:border-white/30"
                      }`}
                    >
                      <p className={`font-mono text-3xl font-medium mb-8 ${last ? "text-dark/70" : color.text}`}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h4 className="font-mono text-lg font-medium mb-3">{step.title}</h4>
                      <p className={`text-sm ${last ? "text-dark/80" : "text-white/70"}`}>
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Maintenance />
      </Container>
    </section>
  );
}
