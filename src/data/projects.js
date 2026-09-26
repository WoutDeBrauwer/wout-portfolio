// Eén bron voor alle projecten. Een nieuw project toevoegen = één object toevoegen.
// Tekst in `intro` en `sections[].paragraphs` ondersteunt **vet** als markering.
// `devOnly: true` = ik deed enkel de development, het design kwam van het bureau.

export const agencies = {
  atelier64: { name: 'Atelier64', url: 'https://atelier64.eu/' },
  conversal: { name: 'Conversal', url: 'https://www.conversal.be/' },
}

// Korte regel voor kaarten, bv. "Conversal · enkel development"
export const agencyLabel = ({ agency, devOnly }) => {
  const name = agencies[agency]?.name
  return name && devOnly ? `${name} · enkel development` : name
}

const IMG = '/images/Images'

export const projects = [
  {
    slug: 'mv-events',
    title: 'M&V Events',
    agency: 'conversal',
    devOnly: true,
    url: 'https://mv-events.be/',
    cover: `${IMG}/MvEvents/Portfolio-wout-mvevents-home.webp`,
    tags: ['WordPress', 'Gutenberg', 'WooCommerce', 'Rentman', 'SwiperJS'],
    intro:
      'M&V Events verhuurt tenten en eventmateriaal en organiseert zelf events, sportdagen, teambuildings en kampen. Het is de grootste van mijn Conversal-sites: een uitgebreid verhuuraanbod, eigen events en een offertemodule, allemaal in één WordPress-site met Gutenberg.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'Het verhuuraanbod draait op **WooCommerce**, gekoppeld aan **Rentman**, de planningssoftware van M&V. Bezoekers zoeken en filteren in categorieën zoals tenten, meubilair, tafel- en keukenmateriaal en stellen zo hun offerteaanvraag samen.',
          'Custom **Gutenberg-blocks** voor onder meer een realisatieslider, een reviewslider en een ticker met nieuws en events bovenaan de pagina. De sliders werken met **SwiperJS**.',
          'Een menu met meerdere niveaus en een zoekfunctie houden het grote aanbod overzichtelijk.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Naast verhuur toont de site de eigen events van M&V, zoals JOENK Festival en Aperobeats, en het aanbod aan sportdagen, teambuildings, kampen en zwemlessen.',
          'Brochures zijn te downloaden en de medewerkers beheren producten, events en realisaties zelf in WordPress.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/MvEvents/Portfolio-wout-mvevents-stretchtenten.webp`,
      `${IMG}/MvEvents/Portfolio-wout-mvevents-realisaties.webp`,
      `${IMG}/MvEvents/Portfolio-wout-mvevents-sportdagen.webp`,
    ],
  },
  {
    slug: 'erfgoedklassen-brussels',
    title: 'Erfgoedklassen.brussels',
    agency: 'conversal',
    devOnly: true,
    url: 'https://www.erfgoedklassen.brussels/',
    cover: `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-home.webp`,
    tags: ['WordPress', 'Gutenberg', 'WPML', 'Custom post types'],
    intro:
      'Erfgoedklassen.brussels biedt gratis erfgoedactiviteiten aan voor leerlingen uit het Brussels Hoofdstedelijk Gewest, georganiseerd door vzw Paleis van Keizer Karel. Leerkrachten vinden er activiteiten, lesmaterialen en erfgoedkoffers. De site is tweetalig: Nederlands en Frans.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'Gebouwd op **WordPress** met **Gutenberg** en **WPML** voor de Nederlandse en Franse versie.',
          'Activiteiten en lesmaterialen zijn **custom post types** uit een eigen plugin. Ze verschijnen via query-blocks en zijn ingedeeld per onderwijsniveau: basisonderwijs, secundair onderwijs en toekomstige leerkrachten.',
          'Inschrijven voor een activiteit gebeurt via een formulier op maat.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De doelgroep is breed: leerkrachten uit het basis- en secundair onderwijs, toekomstige leerkrachten en de leerlingen zelf, die op “Leerlingen vertellen” hun ervaringen delen.',
          'Het team beheert activiteiten, lesmaterialen en verhalen zelf, in beide talen.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-klasactiviteiten.webp`,
      `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-lesmaterialen.webp`,
      `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-leerlingen-vertellen.webp`,
    ],
  },
  {
    slug: 'amitude',
    title: 'Amitude',
    agency: 'conversal',
    devOnly: true,
    url: 'https://amitude.be/',
    cover: `${IMG}/Amitude/Portfolio-wout-amitude-home.webp`,
    tags: ['WordPress', 'Gutenberg', 'Custom blocks', 'SwiperJS'],
    intro:
      'Amitude is een cateraar uit Torhout die kookt voor bedrijfsfeesten, huwelijken en events op locatie. De website heeft één duidelijk doel: bezoekers overtuigen om een offerte aan te vragen.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'Gebouwd op **WordPress** en **Gutenberg**, met **custom blocks** zoals een logoslider voor klanten en partners en een blok met Google-reviews en sterren.',
          'Op de referentiepagina filteren bezoekers de beelden op type moment of locatie (bedrijf, huwelijk, buitenlocatie, privé) en openen ze een foto groter.',
          'De sliders werken met **SwiperJS**. Veelgestelde vragen over allergieën, aantallen en prijzen staan in uitklapbare blocks.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het aanbod is opgesplitst in bedrijfsevents, privéfeesten en evenementen op locatie, elk met een eigen landingspagina.',
          'Op elke pagina staat een duidelijke oproep om een offerte aan te vragen, samen met cijfers en reviews die vertrouwen wekken.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Amitude/Portfolio-wout-amitude-bedrijfsfeest.webp`,
      `${IMG}/Amitude/Portfolio-wout-amitude-referenties.webp`,
      `${IMG}/Amitude/Portfolio-wout-amitude-faq.webp`,
    ],
  },
  {
    slug: 'algarvista',
    title: 'Algarvista',
    agency: 'conversal',
    devOnly: true,
    url: 'https://algarvistaguide.com/',
    cover: `${IMG}/Algarvista/Portfolio-wout-algarvista-home.webp`,
    tags: ['WordPress', 'Gutenberg', 'Custom blocks', 'SwiperJS', 'WPForms'],
    intro:
      'Algarvista is de reisgids van Elisa, half Portugees en half Belg, opgegroeid in Carvoeiro. De site bundelt haar tips over stranden, stadjes, restaurants en accommodaties in de Algarve, aangevuld met een blog met uitgebreide gidsen.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site draait op **WordPress** en is volledig opgebouwd met **Gutenberg-blocks**: core-blocks aangevuld met custom blocks in de huisstijl.',
          'Getuigenissen draaien in een **SwiperJS**-carousel, veelgestelde vragen staan in uitklapbare blocks en de nieuwsbrief- en contactformulieren lopen via **WPForms**.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Bezoekers vinden snel wat ze zoeken via de indeling in plannen, bezoeken en eten & drinken, met een aparte pagina per thema zoals stranden, stadjes of restaurants.',
          'Elisa schrijft nieuwe gidsen en blogartikels zelf in de blokeditor, met dezelfde blocks, zonder dat de lay-out breekt.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Algarvista/Portfolio-wout-algarvista-beaches.webp`,
      `${IMG}/Algarvista/Portfolio-wout-algarvista-blog.webp`,
      `${IMG}/Algarvista/Portfolio-wout-algarvista-faq.webp`,
    ],
  },
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
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-map-page.webp`,
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-vacature.webp`,
      `${IMG}/Koba/Portfolio-wout-Koba-screenshot-studiekiezer-selectedItem.webp`,
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
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reis-detailpagina.webp`,
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen-home.webp`,
      `${IMG}/Okra/Portfolio-wout-okra-reizen-screenshot-okra-reizen.webp`,
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
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
