import React from "react";
import { Link } from "react-router-dom";
import Gallery from '../../components/Gallery';
// gallery rendered as static full-height images (no zoom/lightbox)
const screenshots = [
  '/images/Images/LeChic/Portfolio-Wout-lechic-home.webp',
  '/images/Images/LeChic/Portfolio-Wout-lechic-tussen-pagina.jpg',
  '/images/Images/LeChic/Portfolio-Wout-lechic-professionals-pagina.jpg',
  '/images/Images/LeChic/Portfolio-Wout-lechic-webshop.jpg',
];

export default function PortfolioDetailLeChic() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:px-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">← Terug naar portfolio</Link>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img src="/images/Images/LeChic/Portfolio-wout-lechic-overzichtsfoto.jpg" alt="Le Chic overzicht" className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Le Chic Hairboetiek</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WooCommerce</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Custom Design</span>
            </div>
            <p className="text-lg mb-12 text-white">
              Le Chic Hairboetiek is een modern kapsalon met een uitgebreide webshop voor consumenten en professionals. De website is gebouwd op WordPress met WooCommerce en een stijlvol, gebruiksvriendelijk design. Het design is geoptimaliseerd voor conversie en gebruiksgemak, met duidelijke navigatie naar diensten, producten en openingsuren.
            </p>
            <a href="https://www.lechichairboetiek.be/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">Bezoek website</a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> met <strong>WooCommerce</strong> voor de webshop-functionaliteit. WooCommerce is uitgebreid met custom code voor productfilters, klantsegmentatie en promoties. <strong>Custom Design</strong> zorgt voor een professionele uitstraling en een webshop voor consumenten en professionals. Het design is stijlvol en gebruiksvriendelijk, met duidelijke navigatie naar diensten, producten en openingsuren.
            </p>
            <p className="text-base text-white mb-4">
              Er zijn diverse plugins geïntegreerd voor betalingsverwerking, voorraadbeheer, en e-mailmarketing. Custom post types en taxonomieën maken het beheer van producten en diensten eenvoudig en schaalbaar.
            </p>
            <p className="text-base text-white mb-4">
              <strong>WordPress</strong> als CMS biedt flexibiliteit en schaalbaarheid voor toekomstige uitbreidingen en contentbeheer. SEO, caching en beveiliging zijn geoptimaliseerd met plugins en custom scripts.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              Le Chic Hairboetiek biedt een professionele uitstraling en een webshop voor consumenten en professionals. De website is geoptimaliseerd voor conversie en gebruiksgemak. Het platform is volledig responsive en eenvoudig te beheren via het WordPress-dashboard.
            </p>
            <p className="text-base text-white mb-4">
              De integratie van <strong>WooCommerce</strong> zorgt voor een complete webshop-ervaring, inclusief productbeheer, bestellingen, klantcommunicatie en kortingsacties. Custom code maakt het mogelijk om unieke productbundels en loyaliteitsprogramma's aan te bieden.
            </p>
            <p className="text-base text-white mb-4">
              SEO-optimalisatie en beveiliging zijn gerealiseerd met plugins en custom scripts. De site is voorbereid op toekomstige uitbreidingen, zoals koppelingen met externe systemen en marketingtools.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <Gallery images={screenshots} />
        </div>
      </div>
    </div>
  );
}
