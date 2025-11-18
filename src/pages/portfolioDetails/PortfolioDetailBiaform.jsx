import React from "react";
import { Link } from "react-router-dom";
import Gallery from '../../components/Gallery';

const screenshots = [
  '/images/Images/Biaform/Portfolio-Wout-Biafrom-home.webp',
  '/images/Images/Biaform/Portfolio-Wout-Biafrom-product-detail.webp',
  '/images/Images/Biaform/Portfolio-Wout-Biafrom-producten-overzicht.jpg',
];

export default function PortfolioDetailBiaform() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:px-10 text-white">
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">
            ← Terug naar portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img
              src="/images/Images/Biaform/Portfolio-wout-Biaform-overzichtfoto.jpg"
              alt="Biaform overzicht"
              className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Biaform Provital</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
                WordPress
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
                Custom Design
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
                Productcatalogus
              </span>
            </div>
            <p className="text-lg mb-12 text-white">
              Biaform Provital is een merk van eiwitrijke broden en wraps. De
              website draait op WordPress en bevat een productcatalogus,
              recepten en content over voeding. Gericht op sporters en
              gezondheidsbewuste consumenten.
            </p>
            <a
              href="https://biaform-provital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">
              Bezoek website
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> met Betheme en
              custom post types voor producten en recepten. Voor het filteren
              van producten en recepten is <strong>Search & Filter Pro</strong>{" "}
              gebruikt. Hiermee kunnen bezoekers snel producten of recepten
              vinden op basis van categorieën en andere eigenschappen.
            </p>
            <p className="text-base text-white mb-4">
              De productcatalogus werkt dynamisch met aangepaste taxonomieën. De
              filters zijn volledig geïntegreerd in het ontwerp en sluiten aan
              op de structuur van de site.
            </p>
            <p className="text-base text-white mb-4">
              <strong>WordPress</strong> biedt ruimte voor groei. SEO, caching
              en beveiliging zijn geoptimaliseerd met plugins en maatwerk.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              De website presenteert producten en recepten in een heldere
              lay-out. Alles is responsive en eenvoudig te beheren via WordPress
              en de WP Bakery pagebuilder.
            </p>
            <p className="text-base text-white mb-4">
              Door de integratie van recepten en producten kunnen bezoekers snel
              inspiratie vinden. De filters via Search & Filter Pro maken dit
              proces prettig en direct.
            </p>
            <p className="text-base text-white mb-4">
              De site is ingericht op uitbreidingen zoals koppelingen met
              externe systemen en marketingtools.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <Gallery images={screenshots} />
        </div>
      </div>
    </div>
  );
}
