import { useLocation } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { contact, cvUrl, socials } from "../data/profile";
import { Aurora, Circle, Container, Pill, SectionLabel, onSpotlight } from "./ui";

// Drie manieren om me te bereiken, als grote klikbare kaarten
const contactCards = [
  { label: "Mail me", value: contact.email, href: `mailto:${contact.email}`, Icon: Mail, color: "text-iris", glow: "rgba(124, 140, 255, 0.2)" },
  { label: "Bel me", value: contact.phone, href: contact.phoneHref, Icon: Phone, color: "text-azure", glow: "rgba(56, 189, 248, 0.18)" },
  { label: "LinkedIn", value: "Wout De Brauwer", href: contact.linkedin, Icon: Linkedin, color: "text-teal", glow: "rgba(45, 212, 191, 0.16)" },
];

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
                Op zoek naar een <span className="text-gradient">developer?</span>
              </p>
              <p className="text-white/70 max-w-lg">
                Ik sta open voor een nieuwe uitdaging. Mail of bel me gerust, ook
                als je gewoon een vraag hebt.
              </p>
            </div>

            <ul className="md:col-span-12 flex flex-wrap gap-3 mt-2">
              {contactCards.map(({ label, value, href, Icon, glow, color }) => (
                <li key={label} className="flex-auto">
                  <a
                    href={href}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    onMouseMove={onSpotlight}
                    style={{ "--glow": glow }}
                    className="spotlight group flex h-full items-center gap-4 rounded-2xl border border-line bg-dark/40 backdrop-blur px-4 py-3 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className={`grid place-items-center w-10 h-10 shrink-0 rounded-full border border-line ${color}`}>
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <span className="flex min-w-0 flex-col leading-tight">
                      <span className="text-sm text-white/60">{label}</span>
                      <span className="font-mono text-base text-white whitespace-nowrap">{value}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="ml-auto shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="md:col-span-12 flex flex-wrap items-center gap-3">
              <Pill href={cvUrl} download>Download mijn cv</Pill>
              <Pill variant="outline" to="/contact">Naar de contactpagina</Pill>
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
