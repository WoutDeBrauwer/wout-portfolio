import { ArrowUpRight } from "lucide-react";
import { agencies } from "../data/projects";
import { RoleTag, SlashList } from "./ui";

export default function PortfolioCard({ title, cover, tags, agency, devOnly }) {
  const agencyName = agencies[agency]?.name;

  return (
    <article className="group h-full flex flex-col rounded-3xl border border-line bg-panel overflow-hidden transition-colors hover:border-white/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cover}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/Images/Template-portfolio-item.jpg";
          }}
          className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.03] transition duration-700 ease-out"
        />
      </div>

      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          {(agencyName || devOnly) && (
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {agencyName && <p className="font-mono text-xs text-white/50">{agencyName}</p>}
              {devOnly && <RoleTag />}
            </div>
          )}
          <h2 className="font-mono text-lg font-medium leading-snug mb-3">{title}</h2>
          <SlashList items={tags} className="text-white/60" />
        </div>
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-white/70 group-hover:bg-white group-hover:text-dark transition-colors"
        >
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </span>
      </div>
    </article>
  );
}
