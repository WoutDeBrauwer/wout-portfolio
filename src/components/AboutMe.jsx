import { motion, useReducedMotion } from "framer-motion";
import { Circle, Container, Reveal, SectionLabel } from "./ui";
import { ScrollText } from "./effects";

// Introzin die woord per woord oplicht bij het scrollen; accentwoorden in het verloop
const introWords = "Hallo! Ik ben Wout, junior webdeveloper op zoek naar mijn volgende uitdaging. Ik wil blijven groeien, als developer en als persoon."
  .split(" ")
  .map((text) => ({ text, accent: ["uitdaging.", "persoon."].includes(text) }));

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
              Als WordPress-expert bij Conversal bouw ik vooral{" "}
              <Highlight>custom Gutenberg-blocks</Highlight>, native met PHP en
              SCSS. Het leukste vind ik als een redacteur daarna zelf een pagina
              vult en alles gewoon klopt. Daarnaast regel ik ook{" "}
              <em>DNS-records</em>, domeinen en Google Workspace voor klanten.
            </p>
            <p>
              Ik heb ruim twee jaar ervaring en kijk graag verder dan
              WordPress. Deze portfolio bouwde ik zelf in <em>React</em>, met
              Vite, Tailwind en Framer Motion.
            </p>
            <p>
              Ook <em>webdesign</em> interesseert me. Ik kreeg het in mijn
              opleidingen aan Artevelde en Howest. Zelf ontwerpen doe ik
              vandaag nog weinig. Ik wil er wel in groeien, en mijn kennis van
              frontend development neem ik daarbij mee.
            </p>
            <p>
              Buiten het werk game ik graag, ga ik naar de fitness en trek ik
              er met mijn <em>koersfiets</em> op uit.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
