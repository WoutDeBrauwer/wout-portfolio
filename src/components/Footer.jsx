import { useLocation } from "react-router-dom";
import ContactCards from "./ContactCards";
import { Magnetic } from "./effects";
import { ArrowButton, Aurora, Circle, Container, Pill, SectionLabel } from "./ui";

export default function Footer() {
  const { pathname } = useLocation();
  const onContact = pathname === "/contact";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* Contact-banner met één knop; niet nodig op de contactpagina zelf */}
      {!onContact && (
        <section className="relative isolate overflow-hidden border-t border-line py-24 md:py-32">
          <Aurora className="opacity-70 rotate-180" />
          <Circle className="w-[420px] h-[420px] -left-40 -bottom-56" />
          <Container className="grid md:grid-cols-12 gap-10">
            <SectionLabel className="md:col-span-5">Contact</SectionLabel>
            <div className="md:col-span-7">
              <p className="font-mono text-3xl sm:text-5xl tracking-tight leading-tight mb-6">
                Op zoek naar een <span className="text-gradient">developer?</span>
              </p>
              <p className="text-white/70 mb-10 max-w-lg">
                Ik sta open voor een nieuwe uitdaging. Ook met een gewone vraag
                kun je altijd bij me terecht.
              </p>
              <div className="flex items-center gap-2">
                <Pill to="/contact">Neem contact op</Pill>
                <Magnetic strength={0.4}>
                  <ArrowButton to="/contact" label="Naar contactpagina" tabIndex={-1} />
                </Magnetic>
              </div>
            </div>
          </Container>
        </section>
      )}

      <div className="border-t border-line">
        {/* Contactkaarten; op de contactpagina staan ze al in de pagina zelf */}
        {!onContact && (
          <Container className="pt-8">
            <ContactCards />
          </Container>
        )}

        <Container className="py-8 text-xs text-white/50">
          <p>© {year} Wout De Brauwer</p>
        </Container>

        {/* Grote naam als afsluiter; kleurt in bij hover */}
        <div aria-hidden="true" className="group overflow-hidden select-none">
          <p className="text-outline group-hover:text-gradient group-hover:[-webkit-text-stroke:0] text-center font-mono font-semibold tracking-tighter leading-[0.8] text-[26vw] translate-y-[8%] transition-all duration-700">
            Wout<span className="text-violet [-webkit-text-stroke:0]">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
