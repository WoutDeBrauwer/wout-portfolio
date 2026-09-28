import { motion, useReducedMotion } from "framer-motion";
import { Circle, Container, Reveal, SectionLabel } from "./ui";
import { ScrollText } from "./effects";

// Introzin die woord per woord oplicht bij het scrollen; accentwoorden in het verloop
const introWords = "Hallo! Ik ben Wout, een junior webdeveloper die het samenspel tussen design en techniek het leukste vindt."
  .split(" ")
  .map((text) => ({ text, accent: ["junior", "webdeveloper", "design", "techniek"].includes(text) }));

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
    <div className="relative w-full max-w-[380px]">
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
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <Circle className="w-[520px] h-[520px] -right-40 top-40 hidden md:block" />

      <Container>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <SectionLabel>Over mij</SectionLabel>
            <Reveal delay={0.15} className="hidden md:block mt-12 pl-10 pr-10 lg:pr-20">
              <Portrait />
            </Reveal>
          </div>

          <Reveal className="md:col-span-7 space-y-5 text-white/70 max-w-2xl">
            <ScrollText
              words={introWords}
              className="text-2xl md:text-4xl text-white leading-snug tracking-tight"
            />
            <p className="!mt-8">
              Bij Conversal bouw ik WordPress-sites met <Highlight>custom
              Gutenberg-blocks</Highlight>: van Figma-design, via een plan met Claude
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
              <Highlight delay={0.2}>snel en functioneel</Highlight> zijn, afgestemd op wie ze gebruikt.
            </p>
          </Reveal>

          <Reveal className="md:hidden mt-10 pl-8 sm:pl-10">
            <Portrait />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
