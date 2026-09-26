import { contact } from "../data/profile";
import { Circle, Container, SectionLabel, TableRow } from "../components/ui";

const rows = [
  { label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Telefoon", value: contact.phone, href: contact.phoneHref },
  { label: "LinkedIn", value: "Wout De Brauwer ↗", href: contact.linkedin },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
      <Circle className="w-[440px] h-[440px] -right-24 -top-44 hidden sm:block" />

      <Container>
        <SectionLabel className="mb-10">Contact</SectionLabel>

        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <h1 className="md:col-span-6 font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.9rem,8vw,6.5rem)]">
            Contact
          </h1>
          <div className="md:col-span-6 space-y-4 text-white/70 max-w-xl">
            <p>
              Op zoek naar een <em>enthousiaste junior developer</em> die met
              frisse energie en nieuwsgierigheid je team versterkt? Ik los graag
              technische uitdagingen op en wil me verder ontwikkelen in een
              dynamische omgeving.
            </p>
            <p>Ik hoor graag meer over je bedrijf en hoe ik kan bijdragen.</p>
          </div>
        </div>
      </Container>

      <div className="max-w-[1400px] mx-auto border-t border-line">
        {rows.map((row) => (
          <TableRow
            key={row.label}
            href={row.href}
            className="grid-cols-1 sm:grid-cols-[140px_1fr] items-baseline"
            cells={
              <>
                <span className="text-sm opacity-60">{row.label}</span>
                <span className="font-mono text-lg sm:text-2xl break-all">{row.value}</span>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}
