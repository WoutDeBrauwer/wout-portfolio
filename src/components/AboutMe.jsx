import { motion, useReducedMotion } from "framer-motion";
import { Circle, Container, Reveal, SectionLabel } from "./ui";
import { ScrollText } from "./effects";

// Introzin die woord per woord oplicht bij het scrollen; accentwoorden in het verloop
const introWords = "Hallo! Ik ben Wout, een WordPress-developer die design en techniek samenbrengt en volop met AI werkt."
  .split(" ")
  .map((text) => ({ text, accent: ["WordPress-developer", "design", "techniek", "AI"].includes(text) }));

// Markeerstift die inkleurt zodra de zin in beeld komt
function Highlight({ children, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.em
      className="not-italic text-white bg-no-repeat [background-image:linear-gradient(100deg,rgba(176,124,255,0.45),rgba(56,189,248,0.4),rgba(45,212,191,0.4))] [background-position:0_88%] rounded-sm px-0.5 -mx-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
      initial={{ backgroundSize: reduce ? "100% 40%" : "0% 40%" }}
      whileInView={{ backgroundSize: "100% 40%" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.em>
  );
}

// Vrijstaande profielfoto op een gloed in de merkkleuren, met verloop-kader en draaiende tekst-sticker
function Portrait() {
  const label = "Wout De Brauwer ✦ webdeveloper ✦ Gutenberg ✦ ";
  return (
    <div className="relative w-full max-w-[380px]">
      <div className="rounded-[1.75rem] p-[2px] bg-brand">
        <div className="rounded-3xl overflow-hidden bg-panel bg-[radial-gradient(circle_at_30%_20%,rgba(176,124,255,0.45),transparent_60%),radial-gradient(circle_at_80%_75%,rgba(45,212,191,0.3),transparent_55%)]">
          <img
            src="/images/Images/Portfolio-profielfoto-vrijstaand.webp"
            alt="Wout De Brauwer"
            width="400"
            height="400"
            loading="lazy"
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-8 -bottom-8 sm:-left-10 sm:-bottom-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-dark border border-line grid place-items-center"
      >
        <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 w-full h-full">
          <defs>
            <path id="portrait-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-white/80 font-mono" fontSize="7.3" letterSpacing="0.5">
            <textPath href="#portrait-circle">{label}</textPath>
          </text>
        </svg>
        <span className="text-2xl">👋</span>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-48 scroll-mt-20">
      <Circle className="w-[520px] h-[520px] -right-40 top-40 hidden md:block" />

      <Container>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <SectionLabel>Over mij</SectionLabel>
            {/* Mobiel: foto meteen onder het label, zodat je eerst een gezicht ziet */}
            <Reveal delay={0.15} className="mt-10 md:mt-12 pl-8 pr-4 sm:pl-10 sm:pr-10 lg:pr-20 mb-12 md:mb-0 max-w-[420px] md:max-w-none">
              <Portrait />
            </Reveal>
          </div>

          <Reveal className="md:col-span-7 space-y-5 text-white/70 max-w-2xl">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] text-white !mb-10">
              Wie is <span className="text-gradient">Wout?</span>
            </h2>
            <ScrollText
              words={introWords}
              className="text-2xl md:text-4xl text-white leading-snug tracking-tight"
            />
            <p className="!mt-10">
              Sinds januari 2026 werk ik als WordPress-expert bij Conversal in
              Affligem. Ik bouw er WordPress-sites met <Highlight>custom
              Gutenberg-blocks</Highlight>: van Figma-design naar blocks die
              redacteurs zelf kunnen vullen. Die blocks bouw ik native, met PHP
              en SCSS. Daarnaast zorg ik
              voor het technische rond een site: <em>DNS-records</em>{" "}
              instellen, domeinen overzetten naar Cloudflare en werken met
              Google Workspace.
            </p>
            <p>
              Daarvoor werkte ik anderhalf jaar bij Atelier64 in Zottegem. Daar
              bouwde ik sites voor klanten zoals KOBA, OKRA en Arte-Verde, met
              Betheme, Elementor en ACF. Ik leerde er samenwerken met designers
              en met klanten die hun site zelf willen beheren.
            </p>
            <p>
              Ik ben mee met de wereld van AI en zet het elke dag bewust in. Niet
              om mezelf te vervangen, maar om <Highlight delay={0.1}>mijn kennis te
              combineren met AI</Highlight>. Zo lever ik sneller op, zonder in te
              boeten op kwaliteit.
            </p>
            <p>
              Voor mij is een site pas af als de klant er zelf mee overweg kan.
              Ik werk graag samen met de designer tot het ontwerp klopt op elk
              scherm. Mijn doel: websites die <Highlight delay={0.2}>snel en
              functioneel</Highlight> zijn, afgestemd op wie ze gebruikt.
            </p>
            <p>
              Met ruim twee jaar ervaring wil ik nog veel bijleren, ook buiten
              WordPress. Deze portfolio bouwde ik zelf in <em>React</em>, met
              Vite, Tailwind en Framer Motion.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
