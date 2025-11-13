import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({ title, image, tags, link }) {
  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      
      {/* Achtergrondafbeelding */}
      <div className="relative h-56 md:h-80 w-full">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = "/images/Images/Template-portfolio-item.jpg";
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Titel linksboven */}
        <div className="absolute bottom-6 left-6 text-white z-10">
          <h2 className="text-lg font-semibold leading-tight mb-3 max-w-[80%]">
            {title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Ronde knop rechtsonder */}
        {link && (
          <a
            href={link}
            className="absolute bottom-6 right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:bg-gray-100 transition z-10"
            aria-label={`Bekijk ${title}`}
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
