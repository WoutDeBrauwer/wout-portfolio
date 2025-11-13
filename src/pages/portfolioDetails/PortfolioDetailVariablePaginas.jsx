import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioDetailVariablePaginas() {
  return (
    <div className="bg-dark min-h-screen w-full p-0">
      <div className="max-w-[1600px] mx-auto p-10 text-white">
        <div className="mb-12">
          <Link to="/portfolio" className="text-primary underline">← Terug naar portfolio</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <img src="/images/Images/Template-portfolio-item.jpg" alt="Variable Paginas" className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">Variable Paginas</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">WordPress</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Design</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">PHP</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">Spreadsheet integratie</span>
            </div>
            <p className="text-lg mb-12 text-white">
              Dit project is een template voor variabele pagina's binnen WordPress. Het doel is om eenvoudig nieuwe pagina's te kunnen toevoegen en beheren via een spreadsheet-integratie. Het design is flexibel en aanpasbaar voor verschillende doeleinden, zoals landingspagina's, productpagina's of informatieve secties.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technieken & Features</h2>
            <p className="text-base text-white mb-4">
              De basis van dit systeem is een custom WordPress-plugin die spreadsheet-data (bijvoorbeeld Google Sheets) inleest en omzet naar dynamische pagina's. Hierdoor kunnen redacteuren zonder technische kennis nieuwe content publiceren en aanpassen.
            </p>
            <p className="text-base text-white mb-4">
              Het design is modulair opgebouwd: elke pagina kan eigen componenten, kleuren en indelingen krijgen. Dit maakt het systeem geschikt voor uiteenlopende toepassingen, van marketing tot interne communicatie.
            </p>
            <p className="text-base text-white mb-4">
              De integratie met spreadsheets zorgt voor snelle bulk-updates en eenvoudige contentbeheer. Redacteuren kunnen via een centrale sheet alle pagina's beheren, zonder in te loggen op WordPress.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Over het systeem</h2>
            <p className="text-base text-white mb-4">
              Het systeem is ontworpen voor maximale flexibiliteit en schaalbaarheid. Nieuwe functionaliteiten, zoals extra velden, custom layouts of koppelingen met externe systemen, kunnen eenvoudig worden toegevoegd.
            </p>
            <p className="text-base text-white mb-4">
              De template is volledig responsive en geoptimaliseerd voor snelheid en gebruiksgemak. Zowel op desktop als mobiel zijn de pagina's goed leesbaar en snel te beheren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
