import { aiWork } from "../data/profile";
import { Container, Reveal, SectionLabel, onSpotlight } from "./ui";

// Kleur per kaart
const aiColors = [
  { text: "text-violet", glow: "rgba(176, 124, 255, 0.18)" },
  { text: "text-azure", glow: "rgba(56, 189, 248, 0.18)" },
  { text: "text-teal", glow: "rgba(45, 212, 191, 0.16)" },
  { text: "text-iris", glow: "rgba(124, 140, 255, 0.2)" },
];

// "Werken met AI": toont dat ik naast WordPress volop met AI bezig ben
export default function AiWork() {
  return (
    <section className="pb-32 md:pb-48">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-16">
          <SectionLabel className="md:col-span-5">Werken met AI</SectionLabel>
          <Reveal className="md:col-span-7">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] mb-6">
              Meer dan <span className="text-gradient">WordPress</span>
            </h2>
            <p className="text-white/70 max-w-xl">
              Naast WordPress ben ik elke dag met AI bezig. Ik probeer nieuwe
              tools uit en hou wat werkt. Dit gebruik ik nu:
            </p>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4">
          {aiWork.map((item, i) => {
            const color = aiColors[i % aiColors.length];
            return (
              <li key={item.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div
                    onMouseMove={onSpotlight}
                    style={{ "--glow": color.glow }}
                    className={`spotlight h-full rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1 ${
                      i === 0 ? "border-gradient" : "border border-line hover:border-white/30"
                    }`}
                  >
                    <h3 className="flex items-center gap-3 font-mono text-lg font-medium mb-3">
                      <span className={color.text} aria-hidden="true">✦</span>
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
