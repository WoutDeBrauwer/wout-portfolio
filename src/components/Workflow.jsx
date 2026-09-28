import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { services } from "../data/profile";
import { Container, Reveal, SectionLabel, onSpotlight } from "./ui";

// Kleur per dienst (de eerste staat in het merkverloop)
const serviceColors = [
  { text: "text-iris", glow: "rgba(124, 140, 255, 0.2)" },
  { text: "text-azure", glow: "rgba(56, 189, 248, 0.18)" },
  { text: "text-teal", glow: "rgba(45, 212, 191, 0.16)" },
  { text: "text-violet", glow: "rgba(176, 124, 255, 0.18)" },
];

// "Wat ik doe": nieuwe sites bouwen en klanten daarna verder helpen
export default function Workflow() {
  const listRef = useRef(null);
  // Lijn boven de kaarten die meegroeit terwijl je door de sectie scrolt
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
              Ik bouw nieuwe WordPress-sites vanuit een Figma-design. Ook na
              de lancering help ik klanten verder met support, onderhoud en
              aanpassingen.
            </p>
          </Reveal>
        </div>

        <div ref={listRef}>
          <div aria-hidden="true" className="hidden lg:block h-px bg-line mb-6 overflow-hidden">
            <motion.div style={{ scaleX: progress }} className="h-full bg-brand origin-left" />
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => {
              const main = i === 0;
              const color = serviceColors[i % serviceColors.length];
              return (
                <li key={service.title}>
                  <Reveal delay={i * 0.08} className="h-full">
                    <div
                      onMouseMove={main ? undefined : onSpotlight}
                      style={main ? undefined : { "--glow": color.glow }}
                      className={`h-full rounded-3xl px-6 py-6 transition-transform duration-300 hover:-translate-y-1 ${
                        main
                          ? "bg-brand text-dark shadow-[0_20px_60px_-25px_rgba(56,189,248,0.7)]"
                          : "spotlight border border-line hover:border-white/30"
                      }`}
                    >
                      <p className={`font-mono text-3xl font-medium mb-8 ${main ? "text-dark/70" : color.text}`}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-mono text-lg font-medium mb-3">{service.title}</h3>
                      <p className={`text-sm ${main ? "text-dark/80" : "text-white/70"}`}>
                        {service.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
