import { skillGroups } from "../data/profile";
import { Circle, Container, Reveal, SectionLabel, SlashList } from "./ui";

function SkillCard({ title, items, featured }) {
  return (
    <div
      className={`rounded-3xl px-6 py-5 h-full ${
        featured ? "bg-white text-dark" : "border border-line"
      }`}
    >
      <h3 className="mb-2">{title}</h3>
      <SlashList items={items} className={featured ? "text-dark/80" : "text-white/70"} />
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
            <p className="text-xl md:text-2xl text-white/90 leading-snug">
              Hallo! Ik ben Wout, een <em>junior webdeveloper</em> die het
              samenspel tussen <em>design en techniek</em> het leukste vindt.
            </p>
            <p>
              Bij Conversal bouw ik WordPress-sites met <em>custom
              Gutenberg-blocks</em>: van Figma-design, via een plan met Claude
              Code en Figma MCP, naar blocks die redacteurs zelf kunnen vullen.
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
                  <SkillCard {...group} />
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/50 max-w-xs">
              Enkele van de <em>technologieën en tools</em> waarmee ik
              dagelijks werk.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 order-first md:order-none">
            <img
              src="/images/Images/Portfolio-profielfoto.webp"
              alt="Wout De Brauwer"
              loading="lazy"
              className="w-full max-w-[420px] md:ml-auto aspect-[4/5] object-cover rounded-3xl grayscale hover:grayscale-0 transition duration-700"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
