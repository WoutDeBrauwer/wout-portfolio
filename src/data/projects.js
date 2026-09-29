// Eén bron voor alle projecten. Een nieuw project toevoegen = één object toevoegen.
// Tekst in `intro` en `sections[].paragraphs` ondersteunt **vet** als markering.
// `devOnly: true` = ik deed enkel de development, het design kwam van het bureau.

export const agencies = {
  // `color` = Tailwind-tekstkleur waarmee het bureau op kaarten verschijnt
  atelier64: { name: 'Atelier64', url: 'https://atelier64.eu/', color: 'text-violet' },
  conversal: { name: 'Conversal', url: 'https://www.conversal.be/', color: 'text-iris' },
}

const IMG = '/images/Images'

export const projects = [
  {
    slug: 'mv-events',
    title: 'M&V Events',
    agency: 'conversal',
    devOnly: true,
    url: 'https://mv-events.be/',
    cover: `${IMG}/MvEvents/Portfolio-wout-mvevents-overzichtsfoto.webp`,
    tags: ['WordPress', 'Gutenberg', 'WooCommerce', 'Rentman', 'SwiperJS'],
    intro:
      'M&V Events verhuurt tenten en eventmateriaal en organiseert zelf events, sportdagen, teambuildings en kampen. Het is de grootste site die ik bij Conversal bouwde, met een uitgebreid verhuuraanbod, eigen events en een offertemodule.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'Het verhuuraanbod draait op **WooCommerce**, gekoppeld aan **Rentman**, de planningssoftware van M&V. Bezoekers zoeken en filteren in categorieën zoals tenten, meubilair, tafel- en keukenmateriaal en stellen zo hun offerteaanvraag samen.',
          'Met custom **Gutenberg-blocks** kwamen er onder meer een realisatieslider, een reviewslider en een ticker met nieuws en events bovenaan de pagina. De sliders werken met **SwiperJS**.',
          'Door het grote aanbod kreeg de site een menu met meerdere niveaus en een zoekfunctie.',
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
      `${IMG}/MvEvents/Portfolio-wout-mvevents-home.webp`,
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
    cover: `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-overzichtsfoto.webp`,
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
          'De site is er voor leerkrachten uit het basis- en secundair onderwijs, toekomstige leerkrachten en de leerlingen zelf. Leerlingen delen hun ervaringen op “Leerlingen vertellen”.',
          'Het team beheert activiteiten, lesmaterialen en verhalen zelf, in beide talen.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Erfgoedklassen/Portfolio-wout-erfgoedklassen-home.webp`,
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
    cover: `${IMG}/Amitude/Portfolio-wout-amitude-overzichtsfoto.webp`,
    tags: ['WordPress', 'Gutenberg', 'Custom blocks', 'SwiperJS'],
    intro:
      'Amitude is een cateraar uit Torhout die kookt voor bedrijfsfeesten, huwelijken en events op locatie. De website moet vooral offerteaanvragen opleveren.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'Gebouwd op **WordPress** en **Gutenberg**, met **custom blocks** zoals een logoslider voor klanten en partners en een blok met Google-reviews en sterren.',
          'Op de referentiepagina filteren bezoekers de foto’s op gelegenheid of locatie (bedrijf, huwelijk, buitenlocatie, privé) en openen ze een foto groter.',
          'De sliders werken met **SwiperJS**. Veelgestelde vragen over allergieën, aantallen en prijzen staan in uitklapbare blocks.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het aanbod is opgesplitst in bedrijfsevents, privéfeesten en evenementen op locatie, elk met een eigen landingspagina.',
          'Op elke pagina staat een knop om een offerte aan te vragen, met cijfers en reviews erbij.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Amitude/Portfolio-wout-amitude-home.webp`,
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
    cover: `${IMG}/Algarvista/Portfolio-wout-algarvista-overzichtsfoto.webp`,
    tags: ['WordPress', 'Gutenberg', 'Custom blocks', 'SwiperJS', 'WPForms'],
    intro:
      'Algarvista is de reisgids van Elisa, half Portugees en half Belg, opgegroeid in Carvoeiro. Op de site deelt ze tips over stranden, stadjes, restaurants en accommodaties in de Algarve, en schrijft ze uitgebreide gidsen op de blog.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site draait op **WordPress** en is volledig opgebouwd met **Gutenberg-blocks**: core-blocks aangevuld met custom blocks in de huisstijl.',
          'Getuigenissen draaien in een **SwiperJS**-carrousel, veelgestelde vragen staan in uitklapbare blocks en de nieuwsbrief- en contactformulieren lopen via **WPForms**.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De site is ingedeeld in plannen, bezoeken en eten & drinken, met een aparte pagina per thema zoals stranden, stadjes of restaurants.',
          'Elisa schrijft nieuwe gidsen en blogartikels zelf in de blokeditor. Ze gebruikt dezelfde blocks, dus de lay-out blijft kloppen.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Algarvista/Portfolio-wout-algarvista-home.webp`,
      `${IMG}/Algarvista/Portfolio-wout-algarvista-beaches.webp`,
      `${IMG}/Algarvista/Portfolio-wout-algarvista-blog.webp`,
      `${IMG}/Algarvista/Portfolio-wout-algarvista-faq.webp`,
    ],
  },
  {
    slug: 'koba-metropool',
    title: 'KOBA Metropool',
    agency: 'atelier64',
    devOnly: true,
    url: 'https://kobametropool.be/',
    cover: `${IMG}/Koba/Portfolio-wout-koba-overzichtsfoto.jpg`,
    tags: ['WordPress', 'PHP', 'API-integratie', 'Search & Filter Pro', 'WP Go Maps'],
    intro:
      'KOBA Metropool is een onderwijsnetwerk van zestien scholen in de regio Antwerpen, van kleuter- tot postsecundair onderwijs. De website is gebouwd in WordPress, met maatwerk in PHP voor de schoolkaart, de studiekiezer en de vacatures.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site draait op WordPress, met eigen PHP-code en een paar plugins. WP Go Maps zorgt voor de schoolkaart, Search & Filter Pro voor de studiekiezer en een API-koppeling met de VDAB voor de vacatures.',
          'Op de schoolkaart, gemaakt met **WP Go Maps**, staan alle scholen van het netwerk. Klik je op een school, dan zie je de contactgegevens.',
          'De studiekiezer gebruikt **Search & Filter Pro** op een custom post type. Leerlingen en ouders filteren opleidingen op interessegebied, onderwijsniveau en andere kenmerken.',
          'De vacatures komen binnen via een **PHP-koppeling** met de databank van de VDAB. Bezoekers filteren op locatie of functie en solliciteren via de VDAB. Nieuwe vacatures verschijnen vanzelf, niemand moet ze met de hand toevoegen.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De site is er voor ouders, leerlingen en medewerkers van alle KOBA-scholen. Ze vinden er informatie, nieuws, de schoolkaart en de studiekiezer.',
          'Redacteurs beheren de inhoud zelf in WordPress.',
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
    devOnly: true,
    url: 'https://okra-reizen.be/',
    cover: `${IMG}/Okra/Portfolio-wout-Okra-reizen-overzichtsfoto.jpg`,
    tags: ['WordPress', 'ACF', 'PHP', 'Custom post types'],
    intro:
      'OKRA Reizen organiseert reizen voor senioren. Ik bouwde hun website in WordPress, met een reiszoeker, een digitale brochure en infopagina’s. Met Advanced Custom Fields (ACF) vullen de beheerders zelf alle reisgegevens in, zoals vertrekdata, prijs per persoon, begeleiders en het niveau van de reis.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De website is gebouwd op **WordPress** met het thema **Betheme**. De reizen zitten in een **custom post type** met eigen categorieën. Met **ACF-velden** vult de klant zelf de reisdetails in.',
          'De reisfilter is maatwerk in **PHP**, met eigen shortcodes. Bezoekers filteren op soort reis, vervoer en periode.',
          'De **digitale brochure** kun je online bekijken of downloaden. Voor SEO, caching en beveiliging zijn plugins ingesteld.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Omdat elke reis een custom post type met ACF-velden is, voegt de klant zelf reizen toe of past ze aan, zonder technische kennis.',
          'De detailpagina toont wat in de velden staat, zoals begeleider, periode, foto’s en niveau. Het niveau verschijnt automatisch als bolletjes.',
          'De site is **responsive** en werkt op gsm, tablet en desktop.',
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
    devOnly: true,
    url: 'https://arte-verde.be/',
    cover: `${IMG}/ArteVerde/Arte-verde-tuin.jpg`,
    tags: ['WordPress', 'PHP', 'GSAP', 'ACF'],
    intro:
      'Arte-Verde ontwerpt leeftuinen en biozwembaden op maat. De website is gebouwd op WordPress, met animaties in GSAP en CSS.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site is gebouwd op **WordPress** met het thema Betheme. De animaties en overgangen zijn gemaakt met **GSAP**, bijvoorbeeld op de projectitems.',
          'Met **PHP** kwamen er custom code en shortcodes bij. Projecten en biozwembaden zijn custom post types met eigen taxonomieën, zodat de klant ze makkelijk beheert.',
          'Voor SEO, caching en beveiliging zijn plugins ingesteld.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Het overzicht van projecten en biozwembaden vult zich vanzelf vanuit de custom post types. De klant voegt nieuwe projecten toe via het WordPress-dashboard.',
          'Plugins en eigen scripts houden spam en bots tegen.',
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
    devOnly: true,
    url: 'https://biaform-provital.com/',
    cover: `${IMG}/Biaform/Portfolio-wout-Biaform-overzichtfoto.jpg`,
    tags: ['WordPress', 'PHP', 'WPML', 'Search & Filter Pro'],
    intro:
      'Biaform Provital maakt eiwitrijke broden en wraps. De website draait op WordPress en heeft een productcatalogus, recepten en info over voeding, voor sporters en mensen die gezond willen eten.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site is gebouwd op **WordPress** met Betheme en custom post types voor producten en recepten. Met **Search & Filter Pro** zoeken bezoekers producten of recepten op categorie en andere eigenschappen.',
          'De productcatalogus werkt met eigen taxonomieën, en de filters passen in het ontwerp van de site.',
          'Voor SEO, caching en beveiliging zijn plugins ingesteld, met wat maatwerk erbij.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De site is responsive. De klant beheert producten en recepten zelf via WordPress en WPBakery.',
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
    slug: 'le-chic-hairboetiek',
    title: 'Le Chic Hairboetiek',
    agency: 'atelier64',
    devOnly: true,
    url: 'https://www.lechichairboetiek.be/',
    cover: `${IMG}/LeChic/Portfolio-wout-lechic-overzichtsfoto.jpg`,
    tags: ['WordPress', 'WooCommerce', 'Ultimate Member'],
    intro:
      'Le Chic Hairboetiek is een kapsalon met een webshop voor particulieren en professionals. De website is gebouwd op WordPress met WooCommerce. Bezoekers vinden er de diensten, producten en openingsuren.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De webshop draait op **WooCommerce**, met **Search & Filter Pro** voor de productfilters. Particulieren en professionals hebben elk een eigen omgeving.',
          'Plugins regelen de betalingen, SEO, caching, beveiliging en het contactformulier, met eigen scripts erbij.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'De site is responsive en de klant beheert alles zelf via het WordPress-dashboard.',
          'In **WooCommerce** beheert de klant producten, bestellingen en kortingsacties. Met custom code kwamen er productbundels en een loyaliteitsprogramma bij.',
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
    devOnly: true,
    url: 'https://hidromek.be/',
    cover: `${IMG}/Hidromek/Portfolio-Wout-hidromek-overzichtfoto.jpg`,
    tags: ['WordPress', 'PHP', 'ACF', 'WPML'],
    intro:
      'Hidromek België is de officiële verdeler van Hidromek-machines en -onderdelen. De website is gebouwd in WordPress met maatwerk in PHP en heeft een catalogus met alle machines. WPML staat klaar om de site later in meerdere talen aan te bieden.',
    sections: [
      {
        title: 'Technieken & features',
        paragraphs: [
          'De site draait op WordPress met eigen PHP-code. **WPML** staat klaar voor Nederlands, Frans en Engels. De catalogus is opgebouwd met custom post types en taxonomieën.',
          'Voor SEO gebruikt de site onder meer Yoast SEO. Met een filter zoeken bezoekers machines op categorie of specificatie.',
          'De contact- en offerteformulieren zijn gemaakt met **Contact Form 7**, met Flamingo om de berichten bij te houden. Bij een offerteaanvraag gaat de link van de pagina mee, zodat Hidromek meteen ziet over welke machine het gaat.',
        ],
      },
      {
        title: 'Over de website',
        paragraphs: [
          'Klanten vinden er productinfo, technische fiches, nieuws en een formulier voor serviceaanvragen.',
          'Elke machine heeft een eigen pagina met foto’s, specificaties en downloads.',
        ],
      },
    ],
    screenshots: [
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-Home.webp`,
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-machine-detail.webp`,
      `${IMG}/Hidromek/Portfolio-Wout-hidromek-machines-pagina.webp`,
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
