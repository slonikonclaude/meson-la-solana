/**
 * Manifiesto de public/photos. Cada nombre existe en dos anchuras:
 * <name>-800.webp y <name>-1600.webp (scripts/optimize-photos.mjs).
 * width/height son los del original: hacen falta para aspect-ratio, para
 * que la galería no mueva la maquetación mientras carga.
 */

import { withBase } from "@/lib/basePath";

export type Photo = {
  name: string;
  width: number;
  height: number;
  alt: { es: string; en: string };
};

export const photos = {
  fachada: {
    name: "fachada",
    width: 1600,
    height: 1200,
    alt: {
      es: "Fachada del Mesón La Solana de noche, con el rótulo iluminado sobre la puerta",
      en: "Mesón La Solana's front at night, the lit sign above the door",
    },
  },
  comedor: {
    name: "comedor",
    width: 1200,
    height: 1600,
    alt: {
      es: "Comedor con mesas de mantel blanco, sillas de madera y paredes de piedra",
      en: "Dining room with white tablecloths, wooden chairs and stone-clad walls",
    },
  },
  barraVinos: {
    name: "barra-vinos",
    width: 722,
    height: 1600,
    alt: {
      es: "La barra, con la estantería de vinos y licores detrás",
      en: "The bar, with the shelves of wine and spirits behind it",
    },
  },
  pulpo: {
    name: "pulpo",
    width: 1200,
    height: 1600,
    alt: {
      es: "Pulpo a la gallega con pimentón y aceite sobre tabla de madera",
      en: "Galician-style octopus with paprika and oil on a wooden board",
    },
  },
  chipironesTinta: {
    name: "chipirones-tinta",
    width: 1414,
    height: 1600,
    alt: {
      es: "Cazuela de barro con chipirones en su tinta",
      en: "Earthenware dish of baby squid in their ink",
    },
  },
  croquetas: {
    name: "croquetas",
    width: 1200,
    height: 1600,
    alt: {
      es: "Croquetas caseras recién fritas, en fila sobre un plato blanco",
      en: "Freshly fried homemade croquettes lined up on a white plate",
    },
  },
  chuleton: {
    name: "chuleton",
    width: 1200,
    height: 1600,
    alt: {
      es: "Chuletón a la brasa con patatas fritas, calabacín y pimientos de padrón en plato de barro",
      en: "Grilled rib steak with chips, courgette and Padrón peppers on a clay plate",
    },
  },
  solomilloTernera: {
    name: "solomillo-ternera",
    width: 900,
    height: 1600,
    alt: {
      es: "Solomillo de ternera con patatas fritas y verdura a la plancha",
      en: "Beef tenderloin with chips and grilled vegetables",
    },
  },
  calamares: {
    name: "calamares",
    width: 1600,
    height: 778,
    alt: {
      es: "Calamares a la andaluza con un gajo de limón",
      en: "Fried squid rings with a wedge of lemon",
    },
  },
  sepionet: {
    name: "sepionet",
    width: 1600,
    height: 1200,
    alt: {
      es: "Sepionet a la plancha con ajo y perejil",
      en: "Grilled small cuttlefish with garlic and parsley",
    },
  },
  mesaTapas: {
    name: "mesa-tapas",
    width: 1600,
    height: 900,
    alt: {
      es: "Mesa con tapas para compartir: pulpo, calamares y pan",
      en: "A table of tapas to share: octopus, squid and bread",
    },
  },
  gambasSepia: {
    name: "gambas-sepia",
    width: 1600,
    height: 1200,
    alt: {
      es: "Gambas al ajillo en cazuela de barro junto a sepia a la plancha",
      en: "Garlic prawns in an earthenware dish beside grilled cuttlefish",
    },
  },
  zamburinas: {
    name: "zamburinas",
    width: 1600,
    height: 1200,
    alt: {
      es: "Zamburiñas a la plancha en su concha",
      en: "Grilled queen scallops in the shell",
    },
  },
  tartaQueso: {
    name: "tarta-queso",
    width: 1600,
    height: 1203,
    alt: {
      es: "Porción de tarta de queso con sirope de frutos rojos",
      en: "Slice of cheesecake with red berry syrup",
    },
  },
  montaditosOrza: {
    name: "montaditos-orza",
    width: 1600,
    height: 1502,
    alt: {
      es: "Montaditos de lomo de orza sobre pan con tomate",
      en: "Preserved pork loin on toasted bread with tomato",
    },
  },
  lecheFrita: {
    name: "leche-frita",
    width: 1200,
    height: 1600,
    alt: {
      es: "Leche frita con canela y una bola de helado",
      en: "Fried milk custard with cinnamon and a scoop of ice cream",
    },
  },
  jamonQueso: {
    name: "jamon-queso",
    width: 1600,
    height: 778,
    alt: {
      es: "Tabla de jamón y queso manchego",
      en: "Board of cured ham and Manchego cheese",
    },
  },
  entrecot: {
    name: "entrecot",
    width: 900,
    height: 1600,
    alt: {
      es: "Entrecot con patatas fritas, pimientos de padrón y habitas",
      en: "Sirloin steak with chips, Padrón peppers and baby broad beans",
    },
  },
  tiramisu: {
    name: "tiramisu",
    width: 900,
    height: 1600,
    alt: {
      es: "Tiramisú casero en copa, con cacao por encima",
      en: "Homemade tiramisu in a glass, dusted with cocoa",
    },
  },
  gambasAjillo: {
    name: "gambas-ajillo",
    width: 900,
    height: 1600,
    alt: {
      es: "Gambas al ajillo burbujeando en la cazuela",
      en: "Garlic prawns sizzling in the dish",
    },
  },
  tellinas: {
    name: "tellinas",
    width: 1600,
    height: 1200,
    alt: {
      es: "Tellinas al vapor con un gajo de limón",
      en: "Steamed wedge clams with a wedge of lemon",
    },
  },
  solomilloCerdo: {
    name: "solomillo-cerdo",
    width: 1200,
    height: 1600,
    alt: {
      es: "Solomillo de cerdo con patatas fritas, pimientos de padrón y salsa aparte",
      en: "Pork tenderloin with chips, Padrón peppers and sauce on the side",
    },
  },
  verdura: {
    name: "verdura",
    width: 778,
    height: 1600,
    alt: {
      es: "Variado de verdura a la plancha: champiñón, berenjena, calabacín y espárragos",
      en: "Grilled vegetable platter: mushrooms, aubergine, courgette and asparagus",
    },
  },
  pan: {
    name: "pan",
    width: 1600,
    height: 778,
    alt: {
      es: "Cesta de pan",
      en: "Bread basket",
    },
  },
  carta: {
    name: "carta",
    width: 1800,
    height: 2400,
    alt: {
      es: "La carta del mesón expuesta en la vitrina de la puerta: tapas, carnes, pescados, arreglos, postres y helados",
      en: "The restaurant's menu in the display case by the door: tapas, meat, fish, set menus, desserts and ice cream",
    },
  },
} satisfies Record<string, Photo>;

/**
 * Orden de la galería: local y platos alternados para que las columnas no se
 * agrupen por tema. Las tres del local abren; la carta no va aquí porque ya
 * está junto a los precios.
 */
export const galleryOrder: Photo[] = [
  photos.fachada,
  photos.gambasAjillo,
  photos.mesaTapas,
  photos.barraVinos,
  photos.zamburinas,
  photos.tartaQueso,
  photos.entrecot,
  photos.gambasSepia,
  photos.montaditosOrza,
  photos.tiramisu,
  photos.sepionet,
  photos.lecheFrita,
  photos.jamonQueso,
  photos.solomilloCerdo,
  photos.tellinas,
  photos.verdura,
  photos.pan,
  photos.comedor,
];

/** withBase obligatorio: en <img src> Next no añade la ruta base por sí solo. */
export const srcFor = (p: Photo, w: 800 | 1600) => withBase(`/photos/${p.name}-${w}.webp`);
export const srcSetFor = (p: Photo) => `${srcFor(p, 800)} 800w, ${srcFor(p, 1600)} 1600w`;
