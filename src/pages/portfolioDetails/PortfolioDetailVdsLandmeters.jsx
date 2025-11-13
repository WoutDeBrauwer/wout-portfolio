import React from "react";

export default function PortfolioDetailVdsLandmeters() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto p-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <a href="/portfolio" className="text-primary underline">← Terug naar portfolio</a>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img src="/images/Images/VdsLandmeters/vdslandmeters-overview.jpg" alt="VDS Landmeters overzicht" className="w-full h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">VDS Landmeters</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Design</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Drones</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">3D-laserscanners</span>
            </div>
            <p className="text-lg mb-12 text-white">
              VDS Landmeters biedt landmeetkundige oplossingen met innovatieve technologieën. De website is gebouwd op WordPress en heeft een minimalistisch, professioneel design. Content is geoptimaliseerd voor vindbaarheid en conversie. Innovatieve technologieën zoals drones en 3D-laserscanners worden uitgelicht.
            </p>
            <a href="https://vdslandmeters.be/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">Bezoek website</a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> met een minimalistisch custom thema. <strong>Drones</strong> en <strong>3D-laserscanners</strong> worden uitgelicht als innovatieve technologieën, met custom code voor het presenteren van technische specificaties en projectresultaten.
            </p>
            <p className="text-base text-white mb-4">
              Er zijn plugins geïntegreerd voor SEO, caching, en beveiliging. Custom post types en taxonomieën maken het beheer van projecten en diensten eenvoudig en schaalbaar. Backend maatwerk in PHP zorgt voor koppelingen met externe systemen en geautomatiseerde rapportages.
            </p>
            <p className="text-base text-white mb-4">
              <strong>WordPress</strong> als CMS biedt flexibiliteit en schaalbaarheid voor toekomstige uitbreidingen en contentbeheer. De site is geoptimaliseerd voor vindbaarheid en conversie met custom scripts en plugins.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              VDS Landmeters presenteert projecten en diensten in een heldere, overzichtelijke layout. De website is volledig responsive en gericht op professionele uitstraling. Content is eenvoudig te beheren en uit te breiden via het WordPress-dashboard.
            </p>
            <p className="text-base text-white mb-4">
              De integratie van innovatieve technologieën zorgt voor een moderne uitstraling en een unieke gebruikerservaring. Custom code maakt het mogelijk om projectresultaten en technische data te koppelen aan projecten. De site is geoptimaliseerd voor snelheid en gebruiksgemak, zowel op desktop als mobiel.
            </p>
            <p className="text-base text-white mb-4">
              SEO-optimalisatie en beveiliging zijn gerealiseerd met plugins en custom scripts. De site is voorbereid op toekomstige uitbreidingen, zoals koppelingen met externe systemen en geavanceerde rapportages.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/Images/VdsLandmeters/vdslandmeters-homepage.jpg" alt="Homepage screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/VdsLandmeters/vdslandmeters-projecten.jpg" alt="Projecten screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/VdsLandmeters/vdslandmeters-drones.jpg" alt="Drones screenshot" className="rounded-lg shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
