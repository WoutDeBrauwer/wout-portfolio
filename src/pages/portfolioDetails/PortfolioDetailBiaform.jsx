import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioDetailBiaform() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto p-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">← Terug naar portfolio</Link>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img src="/images/Images/Biaform/biaform-overview.jpg" alt="Biaform overzicht" className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Biaform Provital</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Custom Design</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Productcatalogus</span>
            </div>
            <p className="text-lg mb-12 text-white">
              Biaform Provital is een merk van gezonde, eiwitrijke broden en wraps. De website is gebouwd op WordPress en bevat een uitgebreide productcatalogus, recepten en inspirerende content over voeding. Gericht op sporters en gezondheidsbewuste consumenten.
            </p>
            <a href="https://biaform-provital.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">Bezoek website</a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> met een custom thema en custom post types voor producten en recepten. <strong>Custom Design</strong> zorgt voor een frisse, energieke layout die aansluit bij de doelgroep van sporters en gezondheidsbewuste consumenten.
            </p>
            <p className="text-base text-white mb-4">
              De productcatalogus is dynamisch opgebouwd en maakt gebruik van custom post types en taxonomieën voor een overzichtelijke presentatie van producten en recepten. Er zijn plugins geïntegreerd voor voedingswaarden, allergeneninformatie en productvergelijking.
            </p>
            <p className="text-base text-white mb-4">
              <strong>WordPress</strong> als CMS biedt flexibiliteit en schaalbaarheid voor toekomstige uitbreidingen en contentbeheer. SEO, caching en beveiliging zijn geoptimaliseerd met plugins en custom scripts.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              Biaform Provital presenteert producten en recepten in een frisse, energieke layout. De website is gebruiksvriendelijk en volledig responsive. Content is eenvoudig te beheren en uit te breiden via het WordPress-dashboard.
            </p>
            <p className="text-base text-white mb-4">
              De integratie van recepten en productinformatie zorgt voor een inspirerende gebruikerservaring. Custom code maakt het mogelijk om recepten te koppelen aan producten en voedingswaarden te tonen. De site is geoptimaliseerd voor snelheid en gebruiksgemak, zowel op desktop als mobiel.
            </p>
            <p className="text-base text-white mb-4">
              SEO-optimalisatie en beveiliging zijn gerealiseerd met plugins en custom scripts. De site is voorbereid op toekomstige uitbreidingen, zoals koppelingen met externe systemen en marketingtools.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/Images/Biaform/biaform-homepage.jpg" alt="Homepage screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/Biaform/biaform-producten.jpg" alt="Producten screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/Biaform/biaform-recepten.jpg" alt="Recepten screenshot" className="rounded-lg shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
