import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioDetailHidromek() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto px-5 py-10 md:px-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">← Terug naar portfolio</Link>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img src="/portfolio/hidromek.jpg" alt="Hidromek overzicht" className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Hidromek</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">PHP</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WPML</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">SEO optimalisatie</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Productcatalogus</span>
            </div>
            <p className="text-lg mb-12 text-white">
              Hidromek België is de officiële verdeler van Hidromek-machines en onderdelen. De website is ontworpen als een meertalig platform voor klanten, dealers en servicepartners. Het platform is gebouwd op WordPress met maatwerk in PHP en geavanceerde integratie van WPML voor meertaligheid. SEO-optimalisatie en een uitgebreide productcatalogus zorgen voor een sterke online vindbaarheid en conversie.
            </p>
            <a href="https://hidromek.be/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">Bezoek website</a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website draait op een krachtige WordPress-installatie met custom PHP-logica. <strong>WPML</strong> zorgt voor een volledig meertalige ervaring, waardoor bezoekers kunnen schakelen tussen Nederlands, Frans en Engels. De productcatalogus is dynamisch opgebouwd en maakt gebruik van custom post types en taxonomieën voor een overzichtelijke presentatie van machines, onderdelen en accessoires.
            </p>
            <p className="text-base text-white mb-4">
              <strong>SEO optimalisatie</strong> is geïntegreerd via plugins als Yoast SEO, waardoor alle pagina's en producten goed vindbaar zijn in zoekmachines. De site bevat een filtermodule waarmee bezoekers snel het juiste product kunnen vinden op basis van categorie, toepassing of specificatie.
            </p>
            <p className="text-base text-white mb-4">
              <strong>Contactformulieren</strong> en <strong>offerte-aanvragen</strong> zijn op maat gemaakt met PHP en gekoppeld aan e-mail en CRM-systemen. Hierdoor verloopt de communicatie met klanten efficiënt en gestructureerd.
            </p>
            <p className="text-base text-white mb-4">
              De website is volledig responsive en geoptimaliseerd voor snelheid en gebruiksgemak, zowel op desktop als mobiel.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              Het platform is ontworpen als een digitale hub voor Hidromek België. Klanten vinden er uitgebreide productinformatie, technische fiches, nieuws en service-aanvragen. Door de integratie van WPML en custom PHP is het beheer van content en producten eenvoudig en schaalbaar.
            </p>
            <p className="text-base text-white mb-4">
              De productcatalogus is het hart van de site: elk product heeft een eigen detailpagina met foto's, specificaties en downloadbare documenten. Dealers en servicepartners kunnen via een afgeschermd gedeelte inloggen voor extra informatie en ondersteuning.
            </p>
            <p className="text-base text-white mb-4">
              De site is gebouwd met oog op groei: nieuwe producten, talen en functionaliteiten kunnen eenvoudig worden toegevoegd zonder dat de structuur verloren gaat.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/Images/Hidromek/Portfolio-wout-Hidromek-homepage.png" alt="Homepage screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/Hidromek/Portfolio-wout-Hidromek-productcatalogus.png" alt="Productcatalogus screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/Hidromek/Portfolio-wout-Hidromek-contact.png" alt="Contact screenshot" className="rounded-lg shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
