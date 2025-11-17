import React from 'react'
import { Link } from 'react-router-dom'

export default function PortfolioDetailVariablePaginas() {
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
            src="/images/Images/Template-portfolio-item.jpg"
            alt="Variable Paginas"
            className="w-full h-48 md:h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-6">Variable Paginas</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              WordPress
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              Design
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              PHP
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20">
              Spreadsheet integratie
            </span>
          </div>


          <p className="text-lg mb-12 text-white">
            De URL eindigt met een slug die ook in de spreadsheet staat. Die
            slug bepaalt welke rij wordt opgehaald. De waarden uit die rij
            verschijnen in de shortcodes op de pagina, per kolom gekoppeld aan
            de juiste shortcode.
          </p>

          <p className="text-lg mb-12 text-white">
            De klant hoeft alleen de spreadsheet aan te passen. De pagina werkt
            automatisch bij. De klant kan de link per persoon delen, waardoor de
            ontvanger een gepersonaliseerde pagina ziet zonder dat er per
            persoon een aparte pagina is gemaakt.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Technieken en features</h2>
          <p className="text-base text-white mb-4">
            In de spreadsheet staat per item een slug, titel, tekst, url en
            afbeeldingspad. De shortcodes lezen de juiste kolom uit en tonen die
            op de juiste plek in de pagina.
          </p>

          <p className="text-base text-white mb-4">
            Je plaatst de shortcodes in WPBakery. De shortcode kan meerdere
            keren op dezelfde pagina gebruikt worden om dezelfde data op
            verschillende plaatsen te tonen.
          </p>

          <p className="text-base text-white mb-4">
            Bulk-aanpassingen doe je in de spreadsheet. Nieuwe items voeg je toe
            in de sheet, waarna ze direct bereikbaar zijn via de bijbehorende
            URL.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Over het systeem</h2>
          <p className="text-base text-white mb-4">
            De backend bevat PHP-code die de spreadsheet inleest, de slug uit de
            URL haalt en de corresponderende rij selecteert. Die waarden worden
            vertaald naar shortcodes die WPBakery kan renderen.
          </p>

          <p className="text-base text-white mb-4">
            Dezelfde template is herbruikbaar. Voor een ander publiek koppel je
            eenvoudig een andere sheet of voeg je extra velden toe.
          </p>

          <p className="text-base text-white mb-4">
            Het resultaat is schaalbaar beheer en snelle personalisatie zonder
            dat je steeds nieuwe pagina's moet aanmaken.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}