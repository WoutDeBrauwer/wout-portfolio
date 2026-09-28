import { ArrowUpRight } from "lucide-react";
import { agencies } from "../data/projects";
import { RoleTag, SlashList, onSpotlight } from "./ui";

// Kantelt de kaart licht richting de muis (max. ±6°)
function onTilt(e) {
  onSpotlight(e);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = e.currentTarget.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.setProperty("--ry", `${px * 12}deg`);
  e.currentTarget.style.setProperty("--rx", `${py * -12}deg`);
}

function resetTilt(e) {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
}

export default function PortfolioCard({ title, cover, tags, agency, devOnly }) {
  const { name: agencyName, color: agencyColor = "text-white/50" } = agencies[agency] ?? {};

  return (
    <article
      onMouseMove={onTilt}
      onMouseLeave={resetTilt}
      style={{ transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
      className="spotlight group h-full flex flex-col rounded-3xl border border-line bg-panel overflow-hidden transition-[border-color,transform,box-shadow] duration-300 ease-out hover:border-iris/50 hover:shadow-[0_24px_60px_-30px_rgba(154,134,255,0.6)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cover}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/Images/Template-portfolio-item.jpg";
          }}
          className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.04] transition duration-700 ease-out"
        />
        {/* Zachte kleurwaas die verdwijnt bij hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-iris/25 via-transparent to-coral/20 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0"
        />
      </div>

      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          {(agencyName || devOnly) && (
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {agencyName && <p className={`font-mono text-xs ${agencyColor}`}>{agencyName}</p>}
              {devOnly && <RoleTag />}
            </div>
          )}
          <h2 className="font-mono text-lg font-medium leading-snug mb-3">{title}</h2>
          <SlashList items={tags} className="text-white/60" />
        </div>
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-white/70 group-hover:border-transparent group-hover:bg-brand group-hover:text-dark group-hover:rotate-45 transition duration-300"
        >
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </span>
      </div>
    </article>
  );
}
