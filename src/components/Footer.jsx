import { useLocation } from "react-router-dom";
import { contact, socials } from "../data/profile";
import { Magnetic } from "./effects";
import { ArrowButton, Aurora, Circle, Container, Pill, SectionLabel } from "./ui";

export default function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* Contact-CTA; niet nodig op de contactpagina zelf */}
      {pathname !== "/contact" && (
        <section className="relative isolate overflow-hidden border-t border-line py-24 md:py-32">
          <Aurora className="opacity-70 rotate-180" />
          <Circle className="w-[420px] h-[420px] -left-40 -bottom-56" />
          <Container className="grid md:grid-cols-12 gap-10">
            <SectionLabel className="md:col-span-5">Contact</SectionLabel>
            <div className="md:col-span-7">
              <p className="font-mono text-3xl sm:text-5xl tracking-tight leading-tight mb-6">
                Zin om te <span className="text-gradient">praten?</span>
              </p>
              <p className="text-white/70 mb-10 max-w-lg">
                Een vraag over een project, of zin om eens te babbelen over{" "}
                <em>WordPress of AI</em>? Ik hoor graag van je.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Pill href={`mailto:${contact.email}`}>{contact.email}</Pill>
                <Magnetic strength={0.4}>
                  <ArrowButton to="/contact" label="Naar contactpagina" />
                </Magnetic>
              </div>
            </div>
          </Container>
        </section>
      )}

      <div className="border-t border-line">
        <Container className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between py-8 text-xs text-white/50">
          <p>© {year} Wout De Brauwer</p>
          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="hover:text-iris transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
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
