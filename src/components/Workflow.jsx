import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { workflow } from "../data/profile";
import { Container, Reveal, SectionLabel, onSpotlight } from "./ui";

// Kleur per stap: van violet (design) naar koraal (resultaat)
const stepColors = [
  { text: "text-iris", glow: "rgba(154, 134, 255, 0.2)" },
  { text: "text-rose", glow: "rgba(255, 111, 177, 0.18)" },
  { text: "text-coral", glow: "rgba(255, 132, 102, 0.18)" },
];

// "Zo werk ik": van Figma-design tot block dat een redacteur zelf vult
export default function Workflow() {
  const listRef = useRef(null);
  // Lijn boven de stappen die meegroeit terwijl je door de sectie scrolt
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-16">
          <SectionLabel className="md:col-span-5">Zo werk ik</SectionLabel>
          <Reveal className="md:col-span-7">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] mb-6">
              Van Figma naar <span className="text-gradient">block</span>
            </h2>
            <p className="text-white/70 max-w-xl">
              Ik bouw op basis van het design van een designer. Met{" "}
              <em>Claude Code en Figma MCP</em> gaat dat sneller, maar elke
              stap krijgt mijn eigen review.
            </p>
          </Reveal>
        </div>

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
                          ? "bg-brand text-dark shadow-[0_20px_60px_-25px_rgba(255,111,177,0.7)]"
                          : "spotlight border border-line hover:border-white/30"
                      }`}
                    >
                      <p className={`font-mono text-3xl font-medium mb-8 ${last ? "text-dark/70" : color.text}`}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-mono text-lg font-medium mb-3">{step.title}</h3>
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
      </Container>
    </section>
  );
}
