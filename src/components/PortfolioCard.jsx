import { agencies } from "../data/projects";

export default function PortfolioCard({ title, cover, tags, agency }) {
  const agencyName = agencies[agency]?.name;

  return (
    <div className="relative bg-black rounded-2xl overflow-hidden transition-all duration-300 group">
      <div className="relative h-56 md:h-80 w-full">
        <img
          src={cover}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/Images/Template-portfolio-item.jpg";
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="absolute bottom-6 left-6 right-6 text-white z-10">
          {agencyName && (
            <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
              {agencyName}
            </p>
          )}
          <h2 className="text-lg font-semibold leading-tight mb-3">{title}</h2>

          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
