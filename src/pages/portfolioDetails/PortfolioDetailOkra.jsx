import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const screenshots = [
  '/images/Images/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reis-detailpagina.png',
  '/images/Images/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen-home.png',
  '/images/Images/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen.png',
];

export default function PortfolioDetailOkra() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:px-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">
            ← Terug naar portfolio
          </Link>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img
              src="/images/Images/Okra/Portfolio-wout-Okra-reizen-overzichtsfoto.jpg"
              alt="OKRA Reizen overzicht"
              className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">OKRA Reizen</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Php</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">ACF Fields</span>
              
            </div>
            <p className="text-lg mb-12 text-white">
              Voor OKRA Reizen ontwikkelde ik een gebruiksvriendelijke en overzichtelijke website in WordPress,
              speciaal gericht op actieve senioren. De site bevat een uitgebreide reiszoeker, digitale brochure
              en informatieve pagina’s. Dankzij Advanced Custom Fields (ACF) kunnen beheerders eenvoudig alle reisgegevens
              invullen — zoals vertrekdata, prijs per persoon, begeleiders, en het niveau van de reis.
            </p>
            <a
              href="https://okra-reizen.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2"
            >
              Bezoek website
            </a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> met een volledig <strong>custom thema</strong>.
              De reizen worden beheerd via een <strong>Custom Post Type</strong> dat gekoppeld is aan
              categorieën voor filtering. Met behulp van <strong>ACF fields</strong> kan de klant eenvoudig
              reisdetails ingeven, zoals reisdata, prijs, begeleider en moeilijkheidsgraad.
            </p>
            <p className="text-base text-white mb-4">
              De filterfunctionaliteit is volledig op maat ontwikkeld in <strong>PHP</strong>,
              zodat bezoekers vakanties kunnen filteren op bestemming, type en periode. Dit zorgt voor
              een intuïtieve en snelle gebruikerservaring.
            </p>
            <p className="text-base text-white mb-4">
              Daarnaast is een <strong>digitale brochure</strong> geïntegreerd, die online te bekijken en te downloaden is.
              SEO, caching en beveiliging zijn geoptimaliseerd voor snelheid en stabiliteit.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              OKRA Reizen biedt een platform waarop bezoekers eenvoudig reizen kunnen ontdekken en filteren.
              Dankzij de structuur met custom post types en ACF is het beheer van reizen overzichtelijk en schaalbaar.
              De opbouw zorgt ervoor dat de klant zelf nieuwe reizen kan toevoegen of aanpassen zonder technische kennis.
            </p>
            <p className="text-base text-white mb-4">
              Elk reisdetail, zoals begeleider, periode, foto’s en niveau, wordt dynamisch weergegeven
              op basis van de ingevulde velden. De moeilijkheidsgraad wordt bijvoorbeeld automatisch weergegeven
              in de vorm van bolletjes.
            </p>
            <p className="text-base text-white mb-4">
              De site is volledig <strong>responsive</strong> en geoptimaliseerd voor conversie en gebruiksgemak.
              Dankzij de warme uitstraling en duidelijke structuur spreekt de website de doelgroep van actieve senioren perfect aan.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {screenshots.map((src, i) => (
                <PhotoView key={i} src={src}>
                  <div className="overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                    <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition duration-300" />
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
}
