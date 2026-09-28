import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/profile";
import { Circle, Container, Reveal, SectionLabel, SlashList, onSpotlight } from "./ui";

// Accentkleur per skill-kaart (de eerste kaart krijgt het volle verloop)
const cardAccents = [
  { dot: "bg-mint", glow: "rgba(72, 227, 182, 0.16)" },
  { dot: "bg-iris", glow: "rgba(154, 134, 255, 0.18)" },
  { dot: "bg-rose", glow: "rgba(255, 111, 177, 0.16)" },
  { dot: "bg-coral", glow: "rgba(255, 132, 102, 0.16)" },
];

function SkillCard({ title, items, featured, accent }) {
  if (featured) {
    return (
      <div className="rounded-3xl px-6 py-5 h-full bg-brand text-dark shadow-[0_20px_60px_-25px_rgba(255,111,177,0.7)]">
        <h3 className="mb-2 font-semibold">{title}</h3>
        <SlashList items={items} className="text-dark/80" />
      </div>
    );
  }

  return (
    <div
      onMouseMove={onSpotlight}
      style={{ "--glow": accent.glow }}
      className="spotlight rounded-3xl px-6 py-5 h-full border border-line hover:border-white/30 transition-colors"
    >
      <h3 className="mb-2 flex items-center gap-2.5">
        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
        {title}
      </h3>
      <SlashList items={items} className="text-white/70" />
    </div>
  );
}

// Markeerstift die inkleurt zodra de zin in beeld komt
function Highlight({ children, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.em
      className="not-italic text-white bg-no-repeat [background-image:linear-gradient(100deg,rgba(154,134,255,0.45),rgba(255,111,177,0.4),rgba(255,132,102,0.45))] [background-position:0_88%] rounded-sm px-0.5 -mx-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
      initial={{ backgroundSize: reduce ? "100% 40%" : "0% 40%" }}
      whileInView={{ backgroundSize: "100% 40%" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.em>
  );
}

// Profielfoto met verloop-kader en draaiende tekst-sticker
function Portrait() {
  const label = "Wout De Brauwer ✦ webdeveloper ✦ Gutenberg ✦ ";
  return (
    <div className="relative w-full max-w-[420px] md:ml-auto">
      <div className="rounded-[1.75rem] p-[2px] bg-brand">
        <img
          src="/images/Images/Portfolio-profielfoto.webp"
          alt="Wout De Brauwer"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-3xl grayscale hover:grayscale-0 transition duration-700"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-8 -bottom-8 sm:-left-10 sm:-bottom-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-dark border border-line grid place-items-center"
      >
        <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 w-full h-full">
          <defs>
            <path id="portrait-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-white/80 font-mono" fontSize="8.4" letterSpacing="0.6">
            <textPath href="#portrait-circle">{label}</textPath>
          </text>
        </svg>
        <span className="text-2xl">👋</span>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const [featured, ...rest] = skillGroups;

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <Circle className="w-[520px] h-[520px] -right-40 top-40 hidden md:block" />

      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <SectionLabel className="md:col-span-5">Over mij</SectionLabel>
          <Reveal className="md:col-span-7 space-y-5 text-white/70 max-w-2xl">
            <p className="text-2xl md:text-3xl text-white/90 leading-snug">
              Hallo! Ik ben Wout, een <Highlight>junior webdeveloper</Highlight>{" "}
              die het samenspel tussen <Highlight delay={0.3}>design en techniek</Highlight>{" "}
              het leukste vindt.
            </p>
            <p>
              Bij Conversal bouw ik WordPress-sites met <em>custom
              Gutenberg-blocks</em>: van Figma-design, via een plan met Claude
              Code en Figma MCP, naar blocks die redacteurs zelf kunnen vullen.
              Die blocks bouw ik native, met PHP en SCSS. Daarnaast zorg ik
              voor het technische rond een site: <em>DNS-records</em>{" "}
              instellen, domeinen naar Cloudflare transfereren en werken met
              Google Workspace.
              Daarvoor bouwde ik bij Atelier64 sites met Betheme, Elementor en
              ACF.
            </p>
            <p>
              Ik ben nieuwsgierig en ambitieus, en wil groeien op een plek waar
              ik nieuwe technologieën kan ontdekken. Mijn doel: websites die{" "}
              <em>snel en functioneel</em> zijn, afgestemd op wie ze gebruikt.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 sm:w-4/5">
                <SkillCard {...featured} />
              </div>
              {rest.map((group, i) => (
                // Bij een oneven aantal pakt de laatste kaart de volle breedte
                <div
                  key={group.title}
                  className={rest.length % 2 && i === rest.length - 1 ? "sm:col-span-2" : ""}
                >
                  <SkillCard {...group} accent={cardAccents[i % cardAccents.length]} />
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/50 max-w-xs">
              Enkele van de <em>technologieën en tools</em> waarmee ik
              dagelijks werk.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 order-first md:order-none pl-8 sm:pl-10 md:pl-0 mb-6 md:mb-0">
            <Portrait />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
