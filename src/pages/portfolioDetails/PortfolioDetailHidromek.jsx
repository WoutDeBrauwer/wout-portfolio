import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';

const screenshots = [
'/images/Images/Hidromek/Portfolio-Wout-hidromek-Home.webp',
'/images/Images/Hidromek/Portfolio-Wout-hidromek-machine-detail.webp',
'/images/Images/Hidromek/Portfolio-Wout-hidromek-machines-pagina.webp'
];

export default function PortfolioDetailHidromek() {
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
            src="/images/Images/Hidromek/Portfolio-Wout-hidromek-overzichtfoto.jpg"
            alt="Hidromek overzicht"
            className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-6">Hidromek</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              WordPress
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              PHP
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              WPML
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              SEO optimalisatie
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              Productcatalogus
            </span>
          </div>

          <p className="text-lg mb-12 text-white">
            Hidromek België is de officiële verdeler van Hidromek machines en
            onderdelen. De website is gebouwd in WordPress met maatwerk in PHP.
            WPML is geïntegreerd zodat de site later in meerdere talen
            beschikbaar wordt. De taalversies staan klaar om binnenkort live te
            gaan. De site heeft een duidelijke productcatalogus en is
            geoptimaliseerd voor zoekmachines om de zichtbaarheid en conversie
            te versterken.
          </p>

          <a
            href="https://hidromek.be/"
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
            De website draait op WordPress met custom PHP logica. WPML is
            voorbereid zodat je later kunt schakelen tussen Nederlands, Frans en
            Engels. De productcatalogus is dynamisch opgebouwd met custom post
            types en taxonomieën voor een helder overzicht van alle machines.
          </p>

          <p className="text-base text-white mb-4">
            SEO optimalisatie is uitgevoerd met tools zoals Yoast SEO zodat
            pagina’s en producten goed gevonden worden. De site heeft een
            filtermodule waarmee je snel het juiste product vindt op basis van
            categorie of specificatie.
          </p>

          <p className="text-base text-white mb-4">
            Contactformulieren en offerteaanvragen zijn gemaakt met de plugin Contact7.
            Deze plugin maakt het eenvoudig om te koppelen aan een flamingo voor het bijhouden van inkomende berichten.
            Ook kan je invullen wat de beheerder in z'n inbox krijgt van informatie via het formulier. Bij offerteaanvragen gaven
            we de link van de pagina mee zo is duidelijk welke machine de klant interesse in heeft.
          </p>

          <p className="text-base text-white mb-4">
            De website is volledig responsive en geoptimaliseerd voor snelheid
            en gebruiksgemak op desktop en mobiel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Over de website</h2>

          <p className="text-base text-white mb-4">
            Het platform is opgezet als centrale plek voor klanten in België. Je
            vindt er productinfo, technische fiches, nieuws en serviceaanvragen.
          </p>

          <p className="text-base text-white mb-4">
            De productcatalogus vormt de kern. Elk product heeft een eigen
            detailpagina met foto’s, specificaties en downloads. Dealers en
            servicepartners kunnen via een afgesloten omgeving extra info
            raadplegen.
          </p>

          <p className="text-base text-white mb-4">
            De site is gebouwd zodat nieuwe producten, talen en functies
            eenvoudig kunnen worden toegevoegd zonder dat de structuur wijzigt.
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