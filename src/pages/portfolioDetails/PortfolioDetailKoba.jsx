import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function PortfolioDetailKoba() {
  const screenshots = [
    "/images/Images/Koba/Portfolio-wout-Koba-screenshot-map-page.png",
    "/images/Images/Koba/Portfolio-wout-Koba-screenshot-vacature.png",
    "/images/Images/Koba/Portfolio-wout-Koba-screenshot-studiekiezer-selectedItem.png"
  ];

  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:px-10 text-white">
        {/* Teruglink */}
        <div className="mb-12">
          <a href="/portfolio" className="text-primary underline">
            ← Terug naar portfolio
          </a>
        </div>

        {/* Header sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img
              src="/images/Images/Koba/Portfolio-wout-Biaform-overzichtfoto.jpg"
              alt="KOBA Metropool overzicht"
              className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-6">KOBA Metropool</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">PHP</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">API integration</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Search and Filter Pro</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WP Go Maps</span>
            </div>

            <p className="text-lg mb-12 text-white">
              KOBA Metropool is het onderwijsnetwerk van zestien scholen in de Antwerpse regio. 
              De organisatie bundelt krachten van kleuter-, lagere, secundaire en post-secundaire instellingen 
              om inspirerend en kwaliteitsvol onderwijs aan te bieden. De website vormt de digitale spil van dit netwerk 
              en werd gebouwd met WordPress en maatwerk in PHP. De structuur, vormgeving en functionaliteit zijn volledig afgestemd 
              op de missie van KOBA: transparante communicatie, gebruiksvriendelijkheid en verbondenheid tussen scholen, ouders en leerlingen.
            </p>

            <a
              href="https://kobametropool.be/"
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
              De website draait op een op maat ingerichte WordPress-installatie met geavanceerde PHP-logica. 
              Verschillende krachtige tools en API’s zijn geïntegreerd om bezoekers een interactieve en toegankelijke ervaring te bieden.
            </p>
            <p className="text-base text-white mb-4">
              Een van de kernfunctionaliteiten is de interactieve **schoolkaart**, gebouwd met <strong>WP Go Maps</strong>. 
              Alle aangesloten scholen worden overzichtelijk weergegeven en kunnen gefilterd worden op onderwijsniveau of locatie. 
              Elke school leidt naar een detailpagina met praktische informatie, foto’s en contactgegevens.
            </p>
            <p className="text-base text-white mb-4">
              Voor de **studiekiezer** is gebruikgemaakt van <strong>Search & Filter Pro</strong>. 
              Hiermee kunnen leerlingen en ouders opleidingen selecteren op basis van interessegebied, onderwijsniveau of specifieke kenmerken. 
              De module haalt real-time gegevens uit de onderliggende database, zodat resultaten altijd up-to-date zijn.
            </p>
            <p className="text-base text-white mb-4">
              Daarnaast is er een **vacaturemodule** ontwikkeld met een op maat gemaakte PHP-API. 
              Deze koppelt de website aan de VDAB-databank en haalt actuele vacatures op. 
              Bezoekers kunnen eenvoudig filteren op locatie of functietype en doorklikken naar VDAB voor sollicitaties. 
              De automatisering zorgt ervoor dat het vacatureoverzicht altijd actueel blijft zonder handmatig onderhoud.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              Het platform is ontworpen als een toekomstbestendige digitale hub voor het volledige KOBA-netwerk. 
              Ouders, leerlingen en medewerkers vinden er informatie, nieuws en interactieve tools die echte meerwaarde bieden. 
              Door maatwerk in PHP en integratie van WordPress-tools worden contentbeheer, functionaliteit en gebruiksvriendelijkheid perfect gecombineerd.
            </p>
            <p className="text-base text-white mb-4">
              De combinatie van WP Go Maps, Search & Filter Pro en de VDAB-vacature-API maakt de site uniek. 
              Alle modules zijn geïntegreerd in één coherent systeem dat schaalbaar is en eenvoudig kan worden uitgebreid 
              met nieuwe functionaliteiten of scholen.
            </p>
            <p className="text-base text-white mb-4">
              Redacteuren kunnen zelfstandig content beheren via WordPress. Zo blijft het platform actueel, gebruiksvriendelijk en volledig afgestemd op de missie van KOBA Metropool.
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
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition duration-300"
                    />
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
