// Eén bron voor alle projecten. Een nieuw project toevoegen = één object toevoegen.
// Tekst in `intro` en `sections[].paragraphs` ondersteunt **vet** als markering.

export const agencies = {
  atelier64: { name: 'Atelier64', url: 'https://atelier64.eu/' },
  conversal: { name: 'Conversal', url: 'https://www.conversal.be/' },
}

const IMG = '/images/Images'

export const projects = [
  {
    slug: 'koba-metropool',
    title: 'KOBA Metropool',
    agency: 'atelier64',
    url: 'https://kobametropool.be/',
    cover: `${IMG}/Koba/Portfolio-wout-koba-overzichtsfoto.jpg`,
    tags: ['WordPress', 'PHP', 'API-integratie', 'Search & Filter Pro', 'WP Go Maps'],
    intro:
      'KOBA Metropool is het onderwijsnetwerk van zestien scholen in de regio Antwerpen. De organisatie bundelt de krachten van kleuter-, lagere, secundaire en post-secundaire instellingen. De website vormt de digitale spil van dit netwerk en werd gebouwd met WordPress en maatwerk in PHP, volledig afgestemd op de missie van KOBA: transparante communicatie, gebruiksvriendelijkheid en verbondenheid tussen scholen, ouders en leerlingen.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website draait op WordPress met PHP-logica en plugins voor de verschillende functionaliteiten: een API-koppeling voor vacatures vanuit de VDAB, Search & Filter Pro voor de studiekiezer en WP Go Maps voor de kaarten met de locaties van de scholen.',
          'Een van de kernfunctionaliteiten is de interactieve schoolkaart, gebouwd met **WP Go Maps**. Alle aangesloten scholen worden overzichtelijk weergegeven; elke school is aanklikbaar en toont de contactgegevens.',
          'Voor de studiekiezer is **Search & Filter Pro** gekoppeld aan een custom post type. Leerlingen en ouders selecteren opleidingen op basis van interessegebied, onderwijsniveau of specifieke kenmerken.',
          'De vacaturemodule gebruikt een op maat gemaakte **PHP-API** die de website koppelt aan de VDAB-databank. Bezoekers filteren op locatie of functietype en klikken door naar de VDAB om te solliciteren. Het overzicht blijft zo altijd actueel zonder handmatig onderhoud.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het platform is ontworpen als toekomstbestendige digitale hub voor het volledige KOBA-netwerk. Ouders, leerlingen en medewerkers vinden er informatie, nieuws en interactieve tools.',
          'Alle modules zijn geïntegreerd in één coherent systeem dat schaalbaar is en eenvoudig uit te breiden met nieuwe functionaliteiten of scholen.',
          'Redacteurs beheren zelfstandig de content via WordPress, zodat het platform actueel blijft.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-map-page.png`,
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-vacature.png`,
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-studiekiezer-selectedItem.png`,
    ],
  },
  {
    slug: 'okra-reizen',
    title: 'OKRA Reizen',
    agency: 'atelier64',
    url: 'https://okra-reizen.be/',
    cover: `${IMG}/Okra/Portfolio-wout-Okra-reizen-overzichtsfoto.jpg`,
    tags: ['WordPress', 'ACF', 'PHP', 'Custom post types'],
    intro:
      'Voor OKRA Reizen ontwikkelde ik een gebruiksvriendelijke, overzichtelijke website in WordPress, gericht op senioren die graag reizen. De site bevat een uitgebreide reiszoeker, een digitale brochure en informatieve pagina’s. Dankzij Advanced Custom Fields (ACF) vullen beheerders eenvoudig alle reisgegevens in, zoals vertrekdata, prijs per persoon, begeleiders en het niveau van de reis.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website is gebouwd op **WordPress** met het thema **Betheme**. De reizen worden beheerd via een **custom post type**, gekoppeld aan categorieën voor filtering die op maat in PHP is gebouwd met bijhorende shortcodes. Met **ACF-velden** geeft de klant eenvoudig reisdetails in.',
          'De filterfunctionaliteit is volledig op maat ontwikkeld in **PHP**, zodat bezoekers reizen filteren op type reis, type vervoer en periode.',
          'Daarnaast is een **digitale brochure** geïntegreerd die online te bekijken en te downloaden is. SEO, caching en beveiliging zijn geoptimaliseerd voor snelheid en stabiliteit.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Dankzij de structuur met custom post types en ACF is het beheer van reizen overzichtelijk en schaalbaar. De klant voegt zelf nieuwe reizen toe of past ze aan zonder technische kennis.',
          'Elk reisdetail, zoals begeleider, periode, foto’s en niveau, wordt dynamisch weergegeven op basis van de ingevulde velden. De moeilijkheidsgraad verschijnt bijvoorbeeld automatisch als bolletjes.',
          'De site is volledig **responsive**. Dankzij de warme uitstraling en duidelijke structuur spreekt ze de doelgroep van actieve senioren aan.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reis-detailpagina.png`,
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen-home.png`,
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen.png`,
    ],
  },
  {
    slug: 'arte-verde',
    title: 'Arte-Verde',
    agency: 'atelier64',
    url: 'https://arte-verde.be/',
    cover: `${IMG}/ArteVerde/Arte-verde-tuin.jpg`,
    tags: ['WordPress', 'PHP', 'GSAP', 'ACF'],
    intro:
      'Arte-Verde ontwerpt leeftuinen en biozwembaden met een focus op natuurlijke elegantie en maatwerk. De website is gebouwd op WordPress met custom animaties in GSAP en CSS. Het design is afgestemd op de huisstijl van de klant en bevat interactieve secties.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website is gebouwd op **WordPress** met het thema Betheme. Voor de animaties is **GSAP** geïntegreerd, waarmee dynamische overgangen en interactieve secties zijn gerealiseerd, zoals de animatie op de projectitems.',
          '**PHP** wordt ingezet voor custom code en shortcodes. Er zijn custom post types en taxonomieën ontwikkeld om projecten en biozwembaden overzichtelijk te presenteren en eenvoudig te beheren.',
          'Plugins voor SEO, caching en beveiliging zijn zorgvuldig geselecteerd en geconfigureerd voor optimale prestaties.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Arte-Verde presenteert projecten en biozwembaden in een visueel aantrekkelijke lay-out. Het portfolio is dynamisch opgebouwd en eenvoudig uit te breiden dankzij custom post types.',
          'De **GSAP**-animaties zorgen voor een moderne uitstraling. Content is eenvoudig te beheren via het WordPress-dashboard.',
          'De site is beveiligd met plugins en custom scripts tegen spam en ongewenste bots.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/ArteVerde/Portfolio-Wout-Arte-verde-Home.jpg`,
      `${IMG}/ArteVerde/Portfolio-Wout-Arte-verde-projectDetail.jpg`,
      `${IMG}/ArteVerde/Portfolio-Wout-Arte-verde-projectpagina.jpg`,
    ],
  },
  {
    slug: 'le-chic-hairboetiek',
    title: 'Le Chic Hairboetiek',
    agency: 'atelier64',
    url: 'https://www.lechichairboetiek.be/',
    cover: `${IMG}/LeChic/Portfolio-wout-lechic-overzichtsfoto.jpg`,
    tags: ['WordPress', 'WooCommerce', 'Ultimate Member'],
    intro:
      'Le Chic Hairboetiek is een modern kapsalon met een webshop voor consumenten en professionals. De website is gebouwd op WordPress met WooCommerce en is geoptimaliseerd voor conversie en gebruiksgemak, met duidelijke navigatie naar diensten, producten en openingsuren.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De webshop draait op **WooCommerce**, uitgebreid met **Search & Filter Pro** voor productfilters. Er is een aparte omgeving voor consumenten en professionals.',
          'Er zijn plugins geïntegreerd voor betalingsverwerking, filtering, SEO en het contactformulier.',
          'SEO, caching en beveiliging zijn geoptimaliseerd met plugins en custom scripts.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het platform is volledig responsive en eenvoudig te beheren via het WordPress-dashboard.',
          '**WooCommerce** zorgt voor een complete webshopervaring: productbeheer, bestellingen, klantcommunicatie en kortingsacties. Custom code maakt unieke productbundels en loyaliteitsprogramma’s mogelijk.',
          'De site is voorbereid op toekomstige uitbreidingen, zoals koppelingen met externe systemen en marketingtools.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/LeChic/Portfolio-Wout-lechic-home.webp`,
      `${IMG}/LeChic/Portfolio-Wout-lechic-tussen-pagina.jpg`,
      `${IMG}/LeChic/Portfolio-Wout-lechic-professionals-pagina.jpg`,
      `${IMG}/LeChic/Portfolio-Wout-lechic-webshop.jpg`,
    ],
  },
  {
    slug: 'hidromek',
    title: 'Hidromek',
    agency: 'atelier64',
    url: 'https://hidromek.be/',
    cover: `${IMG}/Hidromek/Portfolio-Wout-hidromek-overzichtfoto.jpg`,
    tags: ['WordPress', 'PHP', 'ACF', 'WPML'],
    intro:
      'Hidromek België is de officiële verdeler van Hidromek-machines en -onderdelen. De website is gebouwd in WordPress met maatwerk in PHP. WPML is geïntegreerd zodat de site in meerdere talen beschikbaar kan worden. De site heeft een duidelijke productcatalogus en is geoptimaliseerd voor zoekmachines.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website draait op WordPress met custom PHP-logica. **WPML** is voorbereid voor Nederlands, Frans en Engels. De productcatalogus is dynamisch opgebouwd met custom post types en taxonomieën.',
          'SEO-optimalisatie gebeurde met onder meer Yoast SEO. Een filtermodule helpt bezoekers snel het juiste product te vinden op categorie of specificatie.',
          'Contactformulieren en offerteaanvragen zijn gemaakt met **Contact Form 7**, gekoppeld aan Flamingo om inkomende berichten bij te houden. Bij een offerteaanvraag wordt de link van de pagina meegestuurd, zodat meteen duidelijk is in welke machine de klant interesse heeft.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het platform is de centrale plek voor klanten in België, met productinfo, technische fiches, nieuws en serviceaanvragen.',
          'De productcatalogus vormt de kern: elk product heeft een eigen detailpagina met foto’s, specificaties en downloads.',
          'Nieuwe producten, talen en functies kunnen worden toegevoegd zonder dat de structuur wijzigt.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-Home.webp`,
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-machine-detail.webp`,
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-machines-pagina.webp`,
    ],
  },
  {
    slug: 'biaform-provital',
    title: 'Biaform Provital',
    agency: 'atelier64',
    url: 'https://biaform-provital.com/',
    cover: `${IMG}/Biaform/Portfolio-wout-Biaform-overzichtfoto.jpg`,
    tags: ['WordPress', 'PHP', 'WPML', 'Search & Filter Pro'],
    intro:
      'Biaform Provital is een merk van eiwitrijke broden en wraps. De website draait op WordPress en bevat een productcatalogus, recepten en content over voeding, gericht op sporters en gezondheidsbewuste consumenten.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website is gebouwd op **WordPress** met Betheme en custom post types voor producten en recepten. Met **Search & Filter Pro** vinden bezoekers snel producten of recepten op basis van categorieën en andere eigenschappen.',
          'De productcatalogus werkt dynamisch met aangepaste taxonomieën. De filters zijn volledig geïntegreerd in het ontwerp.',
          'SEO, caching en beveiliging zijn geoptimaliseerd met plugins en maatwerk.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De website presenteert producten en recepten in een heldere lay-out, responsive en eenvoudig te beheren via WordPress en WPBakery.',
          'Door recepten en producten te combineren vinden bezoekers snel inspiratie.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Biaform/Portfolio-Wout-Biafrom-home.webp`,
      `${IMG}/Biaform/Portfolio-Wout-Biafrom-product-detail.webp`,
      `${IMG}/Biaform/Portfolio-Wout-Biafrom-producten-overzicht.jpg`,
    ],
  },
  {
    slug: 'variable-paginas',
    title: 'Variabele pagina’s',
    agency: 'atelier64',
    url: '',
    cover: `${IMG}/Template-portfolio-item.jpg`,
    tags: ['WordPress', 'PHP', 'Spreadsheet-integratie'],
    intro:
      'Gepersonaliseerde pagina’s op basis van een spreadsheet. De URL eindigt met een slug die ook in de spreadsheet staat; die slug bepaalt welke rij wordt opgehaald. De waarden uit die rij verschijnen via shortcodes op de pagina. De klant past alleen de spreadsheet aan en kan de link per persoon delen, zonder dat er per persoon een aparte pagina nodig is.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'In de spreadsheet staat per item een slug, titel, tekst, URL en afbeeldingspad. De shortcodes lezen de juiste kolom uit en tonen die op de juiste plek.',
          'De shortcodes worden in WPBakery geplaatst en kunnen meerdere keren op dezelfde pagina gebruikt worden.',
          'Bulkaanpassingen gebeuren in de spreadsheet. Nieuwe items zijn meteen bereikbaar via de bijbehorende URL.',
        ],
      },
      {
        title: 'Over het systeem',
        paragraphs: [
          'De backend bevat **PHP**-code die de spreadsheet inleest, de slug uit de URL haalt en de juiste rij selecteert. Die waarden worden vertaald naar shortcodes die WPBakery rendert.',
          'Dezelfde template is herbruikbaar: voor een ander publiek koppel je een andere sheet of voeg je extra velden toe.',
        ],
      },
    ],
    screenshots: [],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
