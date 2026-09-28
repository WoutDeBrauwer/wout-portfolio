import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { skillGroups, skillLevels } from "../data/profile";
import { Container, Reveal, SectionLabel, onSpotlight } from "./ui";

// Accentkleur per kaart
const accents = [
  { dot: "bg-iris", fill: "bg-brand", glow: "rgba(154, 134, 255, 0.18)" },
  { dot: "bg-mint", fill: "bg-mint", glow: "rgba(72, 227, 182, 0.14)" },
  { dot: "bg-iris", fill: "bg-iris", glow: "rgba(154, 134, 255, 0.18)" },
  { dot: "bg-rose", fill: "bg-rose", glow: "rgba(255, 111, 177, 0.16)" },
  { dot: "bg-coral", fill: "bg-coral", glow: "rgba(255, 132, 102, 0.16)" },
  { dot: "bg-mint", fill: "bg-mint", glow: "rgba(72, 227, 182, 0.14)" },
];

// 5 segmentjes die tot het niveau inkleuren. `show` komt van de kaart:
// een geschaalde (breedte 0) span zelf observeren werkt niet betrouwbaar.
function Meter({ level, fill, delay, show }) {
  const reduce = useReducedMotion();
  return (
    <span className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="relative w-4 sm:w-5 h-1.5 rounded-full bg-white/10 overflow-hidden">
          {i < level && (
            <motion.span
              className={`absolute inset-0 rounded-full ${fill}`}
              style={{ originX: 0 }}
              initial={{ scaleX: reduce ? 1 : 0 }}
              animate={{ scaleX: show || reduce ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: delay + i * 0.08 }}
            />
          )}
        </span>
      ))}
    </span>
  );
}

function SkillGroup({ title, items, featured, accent, focus }) {
  const ref = useRef(null);
  const show = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      onMouseMove={onSpotlight}
      style={{ "--glow": accent.glow }}
      className={`spotlight h-full rounded-3xl p-6 transition-colors ${
        featured ? "border-gradient shadow-[0_20px_60px_-30px_rgba(255,111,177,0.6)]" : "border border-line hover:border-white/30"
      }`}
    >
      <h3 className="flex items-center gap-2.5 mb-5">
        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => {
          const dimmed = focus && item.level !== focus;
          return (
            <li
              key={item.name}
              className={`grid grid-cols-[1fr_auto] items-center gap-x-4 transition-opacity duration-300 ${dimmed ? "opacity-25" : ""}`}
            >
              <span className="font-mono text-sm text-white/85 truncate">{item.name}</span>
              <span className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] italic text-white/45 w-16 text-right">
                  {skillLevels[item.level - 1]}
                </span>
                <Meter level={item.level} fill={accent.fill} delay={0.2 + i * 0.05} show={show} />
                <span className="sr-only">
                  {skillLevels[item.level - 1]} ({item.level} van 5)
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// "Tools & ervaring": programma's en talen met mijn niveau, zoals op de oude site
export default function Skills() {
  const [focus, setFocus] = useState(null);
  const [hover, setHover] = useState(null);
  const active = hover ?? focus;

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          <SectionLabel className="md:col-span-5">Tools & ervaring</SectionLabel>
          <Reveal className="md:col-span-7">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] mb-6">
              Waar ik mee <span className="text-gradient">werk</span>
            </h2>
            <p className="text-white/70 max-w-xl mb-8">
              De talen en programma's die ik gebruik, en hoe goed ik ze ken.
              Klik op een niveau om te filteren.
            </p>

            {/* Legende die ook filtert */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter op niveau">
              {skillLevels.map((label, i) => {
                const level = i + 1;
                const on = focus === level;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFocus(on ? null : level)}
                    onMouseEnter={() => setHover(level)}
                    onMouseLeave={() => setHover(null)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      on ? "border-transparent bg-brand text-dark" : "border-line text-white/70 hover:border-iris hover:text-white"
                    }`}
                  >
                    <span className="flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, j) => (
                        <span key={j} className={`w-1 h-1 rounded-full ${j < level ? (on ? "bg-dark" : "bg-rose") : on ? "bg-dark/25" : "bg-white/20"}`} />
                      ))}
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08} className="h-full">
              <SkillGroup {...group} accent={accents[i % accents.length]} focus={active} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
