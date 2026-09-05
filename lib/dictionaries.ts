/**
 * Textos de la interfaz en los dos idiomas. El español es el idioma por
 * defecto (`/`); el inglés vive en `/en/`. Lo que no se traduce — dirección,
 * teléfono, nombres de los platos — está en lib/restaurant.ts y lib/menu.ts.
 */

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeHome: Record<Locale, string> = { es: "/", en: "/en" };
export const localeLabel: Record<Locale, string> = { es: "ES", en: "EN" };

export const dictionaries = {
  es: {
    htmlLang: "es-ES",
    meta: {
      title: "Mesón La Solana · Tapas y cocina casera en Puerto de Sagunto",
      description:
        "Mesón de toda la vida en Puerto de Sagunto: tapas, pulpo a la gallega, chipirones en su tinta, croquetas caseras, chuletón y pescado fresco. 4,6 sobre 5 en Google con 574 reseñas. Cenas de lunes a domingo (miércoles cerrado) y comidas los fines de semana.",
      switchTo: "Ver esta página en inglés",
    },
    nav: {
      specialities: "Lo más pedido",
      menu: "Carta",
      gallery: "Fotos",
      reviews: "Reseñas",
      visit: "Visítanos",
      call: "Reservar",
      skipToContent: "Saltar al contenido",
      openMenu: "Abrir el menú de navegación",
      closeMenu: "Cerrar el menú de navegación",
    },
    hero: {
      eyebrow: "Puerto de Sagunto · Calle Cataluña, 1",
      title: "Tapas de mesón, cocina casera y cuenta razonable",
      lead: "Un mesón de barrio a dos calles de la playa: croquetas hechas en casa, pulpo a la gallega, chipirones en su tinta, chuletón para compartir y postres de los de siempre. Con terraza.",
      callCta: "Reservar por teléfono",
      menuCta: "Ver la carta",
      priceLabel: "20–30 € por persona",
      priceSource: "según {count} clientes en Google",
      openLabel: "Cenas de lunes a domingo, comidas sábado y domingo. Miércoles cerrado.",
    },
    specialities: {
      eyebrow: "Lo más pedido",
      title: "Lo que más se repite en las reseñas",
      lead: "Google marca como populares el solomillo, los calamares y el sepionet; en las reseñas se citan una y otra vez el pulpo, los chipirones en su tinta, las croquetas y el chuletón.",
      popularBadge: "Popular en Google",
      mentions: "{count} menciones en reseñas",
      items: [
        {
          name: "Pulpo a la gallega",
          text: "«Muy sabroso», dice la reseña más reciente. Ocho reseñas lo nombran; se pide para picar antes del principal.",
        },
        {
          name: "Chipirones en su tinta",
          text: "«Una pasada.» El plato que Google enseña como recomendado en las reseñas, con arroz blanco y tinta espesa.",
        },
        {
          name: "Croquetas caseras",
          text: "De bacalao o de pollo y jamón, a 1,70 € la unidad. «Como las hacía mi abuela», escribe un cliente.",
        },
        {
          name: "Chuletón",
          text: "«Súper tierno», para compartir. Con salsa de roquefort, pimienta, foie o almendra por 2,50 €.",
        },
        {
          name: "Solomillo de ternera",
          text: "Uno de los tres platos que Google marca como populares. Va a la brasa, con guarnición de patatas.",
        },
        {
          name: "Calamares",
          text: "A la andaluza, en anillas. El segundo plato popular de Google y una de las tapas más fotografiadas.",
        },
      ],
    },
    menu: {
      eyebrow: "La carta",
      title: "Toda la carta, con precios",
      lead: "{count} platos en {sections} apartados, transcritos de la carta expuesta en la puerta del local. Los precios pueden cambiar sin previo aviso.",
      sectionNav: "Apartados de la carta",
      setMenusTitle: "Arreglos para compartir",
      setMenusLead: "Dos menús cerrados de tapas, tal y como están impresos en la carta.",
      minPeople: "mínimo {count} personas",
      perPerson: "por persona",
      setMenuNote: "No se hacen cambios en los platos de los arreglos.",
      perUnit: "la unidad",
      allergenNote:
        "La carta impresa señala los alérgenos de cada plato con iconos. Pregunta en sala si necesitas el detalle.",
      photoCaption: "La carta en la vitrina del local, de donde salen estos precios.",
    },
    gallery: {
      eyebrow: "Fotos",
      title: "Los platos, tal cual llegan a la mesa",
      lead: "Fotografías de la ficha de Google Maps: platos de loza blanca, raciones generosas y la carta en la puerta. Nada de estudio.",
    },
    reviews: {
      eyebrow: "Lo que dicen",
      title: "Reseñas de Google, sin filtrar",
      leadTemplate:
        "de media sobre {count} reseñas. Están también la de cuatro estrellas y la de una: están publicadas y merece leerlas, con la respuesta del mesón.",
      readAll: "Leer todas en Google",
      breakdownLabel: "Las {count} reseñas, por estrellas",
      starsSuffix: "de 5 estrellas",
      ratingOnGoogle: "sobre 5 en Google",
      reviewsWord: "reseñas",
      topicsLabel: "De qué hablan",
      mentionsSuffix: "menciones",
      ownerReply: "Respuesta del mesón",
    },
    visit: {
      eyebrow: "Visítanos",
      title: "Dónde estamos y cuándo abrimos",
      hoursTitle: "Horario",
      closed: "Cerrado",
      todayLabel: "Hoy",
      hoursNote: "Google recomienda reservar tanto para comer como para cenar.",
      addressTitle: "Dirección",
      directions: "Cómo llegar",
      phoneTitle: "Teléfono",
      phoneNote: "Las reservas se hacen por teléfono; no hay reserva en línea.",
      plusCodeLabel: "Plus Code",
      amenitiesTitle: "En el local, según Google",
      atmosphereTitle: "Ambiente",
      days: {
        1: "Lunes",
        2: "Martes",
        3: "Miércoles",
        4: "Jueves",
        5: "Viernes",
        6: "Sábado",
        7: "Domingo",
      },
      groups: {
        highlights: "Destacado",
        service: "Servicio",
        planning: "Reservas",
        access: "Accesibilidad",
        crowd: "Para quién",
        payment: "Pago",
        parking: "Aparcamiento",
      },
    },
    amenities: {
      coffee: "Buen café",
      wine: "Buena carta de vinos",
      desserts: "Buenos postres",
      terrace: "Terraza",
      dineIn: "Para comer allí",
      tableService: "Servicio en mesa",
      noDelivery: "No hay reparto a domicilio",
      reservations: "Se aceptan reservas",
      bookLunch: "Se recomienda reservar para comer",
      bookDinner: "Se recomienda reservar para cenar",
      wheelchair: "Acceso para sillas de ruedas",
      wheelchairToilet: "Aseo adaptado",
      wheelchairSeating: "Asientos adaptados",
      groups: "Bien para grupos",
      tourists: "Habitual entre turistas",
      kids: "Adecuado para niños",
      soloDinner: "Cómodo para cenar solo",
      cards: "Tarjetas de crédito y débito",
      nfc: "Pago con móvil (NFC)",
      streetParking: "Aparcamiento gratuito en la calle",
      parkingHard: "Puede costar encontrar sitio",
    },
    atmosphere: {
      cosy: "Acogedor",
      trendy: "De moda",
      casual: "Informal",
      quiet: "Tranquilo",
    },
    cta: {
      title: "¿Te guardamos mesa?",
      lead: "Llámanos y te la reservamos. Estamos en la calle Cataluña, 1, en el Puerto de Sagunto, a dos calles de la playa.",
      call: "Llamar al",
      directions: "Cómo llegar",
    },
    footer: {
      tagline: "Mesón de tapas y cocina casera en Puerto de Sagunto.",
      hours: "Cenas de lunes a domingo, comidas los fines de semana. Miércoles cerrado.",
      source: "Datos y fotografías de la ficha de Google Maps",
      rightsPrefix: "Mesón La Solana",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "Mesón La Solana · Tapas and home cooking in Puerto de Sagunto",
      description:
        "A traditional Spanish mesón in Puerto de Sagunto, Valencia: tapas, Galician-style octopus, baby squid in ink, homemade croquettes, rib steak and fresh fish. Rated 4.6 out of 5 on Google from 574 reviews. Dinner Monday to Sunday (closed Wednesdays), lunch at weekends.",
      switchTo: "View this page in Spanish",
    },
    nav: {
      specialities: "Favourites",
      menu: "Menu",
      gallery: "Photos",
      reviews: "Reviews",
      visit: "Visit us",
      call: "Book",
      skipToContent: "Skip to content",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    hero: {
      eyebrow: "Puerto de Sagunto · Calle Cataluña 1",
      title: "Tavern tapas, home cooking and an honest bill",
      lead: "A neighbourhood mesón two streets from the beach: homemade croquettes, Galician-style octopus, baby squid in ink, a rib steak to share and the desserts your grandmother made. Terrace outside.",
      callCta: "Book by phone",
      menuCta: "See the menu",
      priceLabel: "€20–30 per person",
      priceSource: "according to {count} Google guests",
      openLabel: "Dinner Monday to Sunday, lunch on Saturday and Sunday. Closed Wednesdays.",
    },
    specialities: {
      eyebrow: "Favourites",
      title: "The dishes the reviews keep naming",
      lead: "Google flags the tenderloin, the fried squid and the sepionet as popular; the reviews come back again and again to the octopus, the squid in ink, the croquettes and the rib steak.",
      popularBadge: "Popular on Google",
      mentions: "{count} mentions in reviews",
      items: [
        {
          name: "Pulpo a la gallega",
          text: "“Full of flavour,” says the most recent review. Eight reviews name it; ordered to share before the main.",
        },
        {
          name: "Chipirones en su tinta",
          text: "“Amazing.” The dish Google shows as recommended in the reviews — baby squid in thick ink with white rice.",
        },
        {
          name: "Croquetas caseras",
          text: "Cod, or chicken and ham, €1.70 each. “Just like my grandmother made,” writes one guest.",
        },
        {
          name: "Chuletón",
          text: "“Incredibly tender,” for two. Roquefort, pepper, foie or almond sauce for €2.50.",
        },
        {
          name: "Solomillo de ternera",
          text: "One of the three dishes Google marks as popular. Beef tenderloin off the grill, with chips.",
        },
        {
          name: "Calamares",
          text: "Andalusian-style fried squid rings. Google's second popular dish and one of the most photographed tapas.",
        },
      ],
    },
    menu: {
      eyebrow: "The menu",
      title: "The whole menu, with prices",
      lead: "{count} dishes across {sections} sections, transcribed from the menu displayed at the restaurant door. Prices may change without notice.",
      sectionNav: "Menu sections",
      setMenusTitle: "Set menus to share",
      setMenusLead: "Two fixed tapas menus, exactly as printed on the menu.",
      minPeople: "minimum {count} people",
      perPerson: "per person",
      setMenuNote: "No substitutions are made on the set menus.",
      perUnit: "each",
      allergenNote:
        "The printed menu marks allergens for every dish with icons. Ask the staff if you need the detail.",
      photoCaption: "The menu in the restaurant's display case, where these prices come from.",
    },
    gallery: {
      eyebrow: "Photos",
      title: "The dishes, just as they reach the table",
      lead: "Photographs from the Google Maps listing: white china, generous portions and the menu by the door. No studio.",
    },
    reviews: {
      eyebrow: "What guests say",
      title: "Google reviews, unfiltered",
      leadTemplate:
        "on average across {count} reviews. The four-star and the one-star are here too: they are published and worth reading, with the restaurant's reply.",
      readAll: "Read them all on Google",
      breakdownLabel: "All {count} reviews, by stars",
      starsSuffix: "out of 5 stars",
      ratingOnGoogle: "out of 5 on Google",
      reviewsWord: "reviews",
      topicsLabel: "What they talk about",
      mentionsSuffix: "mentions",
      ownerReply: "Reply from the restaurant",
    },
    visit: {
      eyebrow: "Visit us",
      title: "Where we are and when we open",
      hoursTitle: "Opening hours",
      closed: "Closed",
      todayLabel: "Today",
      hoursNote: "Google recommends booking for both lunch and dinner.",
      addressTitle: "Address",
      directions: "Get directions",
      phoneTitle: "Phone",
      phoneNote: "Bookings are taken by phone; there is no online booking.",
      plusCodeLabel: "Plus Code",
      amenitiesTitle: "In the restaurant, according to Google",
      atmosphereTitle: "Atmosphere",
      days: {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
      },
      groups: {
        highlights: "Highlights",
        service: "Service",
        planning: "Bookings",
        access: "Accessibility",
        crowd: "Who it suits",
        payment: "Payment",
        parking: "Parking",
      },
    },
    amenities: {
      coffee: "Great coffee",
      wine: "Good wine list",
      desserts: "Good desserts",
      terrace: "Terrace",
      dineIn: "Dine-in",
      tableService: "Table service",
      noDelivery: "No delivery",
      reservations: "Reservations accepted",
      bookLunch: "Booking recommended for lunch",
      bookDinner: "Booking recommended for dinner",
      wheelchair: "Wheelchair access",
      wheelchairToilet: "Accessible toilet",
      wheelchairSeating: "Accessible seating",
      groups: "Good for groups",
      tourists: "Popular with tourists",
      kids: "Good for children",
      soloDinner: "Comfortable for solo dining",
      cards: "Credit and debit cards",
      nfc: "Mobile payments (NFC)",
      streetParking: "Free street parking",
      parkingHard: "Parking can be hard to find",
    },
    atmosphere: {
      cosy: "Cosy",
      trendy: "Trendy",
      casual: "Casual",
      quiet: "Quiet",
    },
    cta: {
      title: "Shall we hold a table?",
      lead: "Give us a call and we will keep one for you. We are at Calle Cataluña 1 in Puerto de Sagunto, two streets from the beach.",
      call: "Call",
      directions: "Get directions",
    },
    footer: {
      tagline: "Tapas and home cooking in Puerto de Sagunto.",
      hours: "Dinner Monday to Sunday, lunch at weekends. Closed Wednesdays.",
      source: "Data and photographs from the Google Maps listing",
      rightsPrefix: "Mesón La Solana",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["es"];

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale] as Dictionary;

/** «{count} reseñas» → «574 reseñas». */
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
