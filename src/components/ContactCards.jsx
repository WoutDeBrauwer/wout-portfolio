import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { contact } from "../data/profile";
import { onSpotlight } from "./ui";

// Drie manieren om me te bereiken, als klikbare kaarten die de rij opvullen
const cards = [
  { label: "Mail me", value: contact.email, href: `mailto:${contact.email}`, Icon: Mail, color: "text-iris", glow: "rgba(124, 140, 255, 0.2)" },
  { label: "Bel me", value: contact.phone, href: contact.phoneHref, Icon: Phone, color: "text-azure", glow: "rgba(56, 189, 248, 0.18)" },
  { label: "LinkedIn", value: "Wout De Brauwer", href: contact.linkedin, Icon: Linkedin, color: "text-teal", glow: "rgba(45, 212, 191, 0.16)" },
];

export default function ContactCards({ className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {cards.map(({ label, value, href, Icon, glow, color }) => (
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
  );
}
