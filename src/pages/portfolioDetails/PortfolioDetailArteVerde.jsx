import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioDetailArteVerde() {
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
            <img src="/images/Images/ArteVerde\Arte-verde-tuin.jpg" alt="Arte-Verde overzicht" className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Arte-Verde</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">PHP</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">GSAP Animaties</span>
            </div>
            <p className="text-lg mb-12 text-white">
              Arte-Verde ontwerpt leeftuinen en biozwembaden met een focus op natuurlijke elegantie en maatwerk. De website is gebouwd op WordPress met custom animaties via GSAP en een portfolio-galerij. Het design is afgestemd op de huisstijl van de klant en bevat interactieve secties voor een optimale gebruikerservaring.
            </p>
            <a href="https://arte-verde.be/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition mt-2">Bezoek website</a>
          </div>
        </div>

        {/* Features sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De website is gebouwd op <strong>WordPress</strong> en maakt gebruik van een custom thema dat volledig is afgestemd op de huisstijl van Arte-Verde. Voor de animaties en visuele effecten is <strong>GSAP</strong> geïntegreerd, waarmee dynamische overgangen en interactieve secties zijn gerealiseerd. Dit zorgt voor een moderne en vloeiende gebruikerservaring.
            </p>
            <p className="text-base text-white mb-4">
              <strong>PHP</strong> wordt ingezet voor backend maatwerk, zoals het dynamisch genereren van portfolio-items, het koppelen van klantcases en het optimaliseren van laadtijden. Er zijn custom post types en taxonomieën ontwikkeld om projecten en biozwembaden overzichtelijk te presenteren en eenvoudig te beheren.
            </p>
            <p className="text-base text-white mb-4">
              <strong>WordPress</strong> als CMS biedt flexibiliteit en schaalbaarheid voor toekomstige uitbreidingen en contentbeheer. Plugins voor SEO, caching en security zijn zorgvuldig geselecteerd en geconfigureerd voor optimale prestaties.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de website</h2>
            <p className="text-base text-white mb-4">
              Arte-Verde presenteert projecten en biozwembaden in een visueel aantrekkelijke en informatieve layout. Het portfolio is dynamisch opgebouwd en eenvoudig uit te breiden dankzij custom post types. De website is volledig responsive en geoptimaliseerd voor alle apparaten.
            </p>
            <p className="text-base text-white mb-4">
              De integratie van <strong>GSAP</strong> zorgt voor een moderne uitstraling en een unieke gebruikerservaring. Content is eenvoudig te beheren en uit te breiden via het WordPress-dashboard. Dankzij backend maatwerk in <strong>PHP</strong> zijn er koppelingen met externe systemen mogelijk, zoals klantreviews en projectdocumentatie.
            </p>
            <p className="text-base text-white mb-4">
              SEO-optimalisatie is gerealiseerd met plugins en custom code, zodat projecten goed vindbaar zijn in zoekmachines. De site is beveiligd met geavanceerde plugins en custom scripts tegen spam en ongewenste bots.
            </p>
          </div>
        </div>

        {/* Screenshots gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/Images/ArteVerde/Portfolio-Wout-Arte-verde-Home.jpg" alt="Homepage screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/ArteVerde/Portfolio-Wout-Arte-verde-projectDetail.jpg" alt="Projecten screenshot" className="rounded-lg shadow" />
            <img src="/images/Images/ArteVerde/Portfolio-Wout-Arte-verde-projectpagina.jpg" alt="Biozwembad screenshot" className="rounded-lg shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
