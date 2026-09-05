/**
 * Carta de Mesón La Solana — transcrita de la foto de la carta expuesta en la
 * vitrina del local (ficha de Google Maps, pestaña «Carta», foto 1 de 3),
 * el 5 de septiembre de 2026. Las otras dos fotos de la ficha son cartas
 * antiguas con precios más bajos y se han descartado.
 *
 * Los nombres se dejan en español en las dos versiones del sitio — así se
 * piden en sala. Se traduce sólo la aclaración de debajo.
 *
 * Los precios no se inventan: Lenguado lleva «S. mercado» en la carta y
 * Cecina tiene la cifra corregida a mano e ilegible en la foto — ambos van
 * con `priceNote` en lugar de número.
 */

export type Dish = {
  name: string;
  /** Aclaración bajo el nombre. `es` sólo si está impresa en la carta. */
  note?: { es?: string; en: string };
  /** Euros. Ausente cuando la carta no da cifra. */
  price?: number;
  /** «/ud» en la carta: precio por unidad. */
  perUnit?: boolean;
  priceNote?: { es: string; en: string };
};

export type MenuSection = {
  id: string;
  title: { es: string; en: string };
  dishes: Dish[];
};

export const menu: MenuSection[] = [
  {
    id: "tapas",
    title: { es: "Tapas", en: "Tapas" },
    dishes: [
      { name: "Ensaladilla rusa", note: { en: "Potato, tuna and vegetable salad" }, price: 6.9 },
      { name: "Variado de verdura", note: { en: "Grilled vegetable platter" }, price: 9 },
      { name: "Champiñón", note: { en: "Mushrooms" }, price: 6 },
      { name: "Tabla de paté", note: { en: "Pâté board" }, price: 7.5 },
      { name: "Jamón serrano Gran Reserva", note: { en: "Gran Reserva cured ham" }, price: 9 },
      { name: "Jamón ibérico de cebo", note: { en: "Iberian ham" }, price: 16 },
      { name: "Jamón y queso", note: { en: "Ham and cheese board" }, price: 11 },
      { name: "Montaditos de ahumados", note: { es: "8 uds.", en: "8 smoked-fish open sandwiches" }, price: 16 },
      { name: "Anchoas naturales", note: { es: "6 uds.", en: "6 fresh anchovy fillets" }, price: 12 },
      { name: "Queso frito Camembert", note: { en: "Fried Camembert" }, price: 8 },
      { name: "Queso manchego", note: { en: "Manchego cheese" }, price: 8 },
      { name: "Zapatillas", note: { en: "Toasted bread with topping" }, price: 4.5 },
      { name: "Pinchos morunos", note: { en: "Spiced pork skewers" }, price: 3.3 },
      { name: "Pulpo a la gallega", note: { en: "Galician-style octopus" }, price: 14.9 },
      { name: "Sepia", note: { en: "Grilled cuttlefish" }, price: 12 },
      {
        name: "Cecina",
        note: { es: "de León", en: "Cured beef from León" },
        priceNote: { es: "Consultar", en: "Ask staff" },
      },
      { name: "Calamares", note: { en: "Fried squid rings" }, price: 9.5 },
      { name: "Caracoles", note: { en: "Snails" }, price: 7.5 },
      { name: "Montadito de lomo", note: { en: "Pork loin mini sandwich" }, price: 2 },
      { name: "Montadito de chorizo", note: { en: "Chorizo mini sandwich" }, price: 2 },
      { name: "Montadito de morcilla", note: { en: "Black pudding mini sandwich" }, price: 2 },
      { name: "Tellinas", note: { en: "Wedge clams" }, price: 12 },
      { name: "Albóndigas", note: { en: "Meatballs" }, price: 7.5 },
      { name: "Croqueta de bacalao", note: { es: "1 ud.", en: "Cod croquette, each" }, price: 1.7 },
      { name: "Croqueta de pollo y jamón", note: { es: "1 ud.", en: "Chicken and ham croquette, each" }, price: 1.7 },
      { name: "Mojama", note: { en: "Salt-cured tuna" }, price: 11 },
      { name: "Boquerones en vinagre", note: { en: "Anchovies in vinegar" }, price: 6.5 },
      { name: "Solomillo trinchado", note: { en: "Sliced pork tenderloin" }, price: 9.5 },
      { name: "Chipirones plancha", note: { en: "Grilled baby squid" }, price: 9.9 },
      { name: "Gambas al ajillo", note: { en: "Garlic prawns" }, price: 11 },
      { name: "Ventresca con tomate", note: { en: "Tuna belly with tomato" }, price: 10.9 },
      { name: "Chipirones en su tinta", note: { en: "Baby squid in their ink" }, price: 9.9 },
      { name: "Morcilla de Baza", note: { en: "Black pudding from Baza" }, price: 6.5 },
      { name: "Pimiento relleno", note: { es: "1 ud.", en: "Stuffed pepper, each" }, price: 3 },
      { name: "Pimientos de padrón", note: { en: "Padrón peppers" }, price: 5 },
      { name: "Zamburiñas", note: { en: "Queen scallops, each" }, price: 2.9, perUnit: true },
      { name: "Puntilla", note: { en: "Tiny fried squid" }, price: 8.5 },
      { name: "Ensalada", note: { en: "Mixed salad" }, price: 8 },
      { name: "Revuelto de ajos y gambas", note: { en: "Scrambled eggs with garlic shoots and prawns" }, price: 8.5 },
      { name: "Revuelto de morcilla", note: { en: "Scrambled eggs with black pudding" }, price: 7 },
      { name: "Patatas bravas", note: { en: "Fried potatoes with spicy sauce" }, price: 6.5 },
      { name: "Huevas de sepia", note: { en: "Cuttlefish roe" }, price: 8.5 },
      { name: "Clochinas", note: { en: "Valencian mussels" }, price: 8 },
      { name: "Pescaito frito", note: { en: "Mixed fried fish" }, price: 11 },
      { name: "Lomo de orza", note: { en: "Pork loin preserved in oil" }, price: 8 },
      { name: "Huevos rotos con jamón", note: { en: "Broken eggs with ham over chips" }, price: 8.5 },
      { name: "Cesta de pan", note: { en: "Bread basket" }, price: 1.5 },
      { name: "Tarrina de tomate o ajoaceite", note: { en: "Tub of tomato or garlic mayonnaise" }, price: 1 },
    ],
  },
  {
    id: "carnes",
    title: { es: "Carnes", en: "Meat" },
    dishes: [
      { name: "Manitas de cerdo", note: { en: "Pig's trotters" }, price: 10.5 },
      { name: "Chuletón", note: { en: "Bone-in rib steak" }, price: 22 },
      { name: "Solomillo de ternera", note: { en: "Beef tenderloin" }, price: 20 },
      { name: "Chuletas de cordero", note: { es: "lechal", en: "Suckling lamb chops" }, price: 17.5 },
      { name: "Entrecot", note: { en: "Sirloin steak" }, price: 17.5 },
      { name: "Carrillada de ternera", note: { en: "Braised beef cheek" }, price: 14 },
      { name: "Solomillo de cerdo", note: { en: "Pork tenderloin" }, price: 12 },
    ],
  },
  {
    id: "pescados",
    title: { es: "Pescados", en: "Fish" },
    dishes: [
      { name: "Rape a la marinera", note: { en: "Monkfish in seafood sauce" }, price: 19 },
      { name: "Merluza de pincho", note: { en: "Line-caught hake" }, price: 14.5 },
      { name: "Emperador a la plancha", note: { es: "fresco", en: "Grilled fresh swordfish" }, price: 14 },
      { name: "Sepionet", note: { en: "Small cuttlefish, grilled" }, price: 13.5 },
      { name: "Bacalao a la vizcaína", note: { en: "Cod in Biscayan pepper sauce" }, price: 16 },
      { name: "Lubina a la espalda", note: { en: "Butterflied sea bass" }, price: 13 },
      {
        name: "Lenguado",
        note: { en: "Sole" },
        priceNote: { es: "Según mercado", en: "Market price" },
      },
    ],
  },
  {
    id: "salsas",
    title: { es: "Salsas", en: "Sauces" },
    dishes: [
      {
        name: "Roquefort, pimienta, foie o almendra",
        note: { en: "Roquefort, pepper, foie or almond sauce for your steak" },
        price: 2.5,
      },
    ],
  },
  {
    id: "postres",
    title: { es: "Postres", en: "Desserts" },
    dishes: [
      { name: "Tarta de queso", note: { en: "Cheesecake" }, price: 4.5 },
      { name: "Mousse", note: { en: "Chocolate mousse" }, price: 4.5 },
      { name: "Crema catalana", note: { en: "Catalan custard" }, price: 4.5 },
      { name: "Leche frita", note: { en: "Fried milk custard" }, price: 4.5 },
      { name: "Flan", note: { en: "Crème caramel" }, price: 4.5 },
      { name: "Tiramisú", note: { en: "Tiramisu" }, price: 4.5 },
      { name: "Peras al vino", note: { en: "Pears in wine" }, price: 4.5 },
      { name: "Tarta de frutos rojos", note: { en: "Red berry tart" }, price: 4.5 },
      { name: "Piña natural", note: { en: "Fresh pineapple" }, price: 3.5 },
    ],
  },
  {
    id: "helados",
    title: { es: "Helados", en: "Ice cream" },
    dishes: [
      { name: "Tarta Whisky", note: { en: "Whisky ice-cream cake" }, price: 5 },
      { name: "Contesa", note: { en: "Ice-cream slice" }, price: 3 },
      { name: "Copa Brasil", note: { en: "Ice-cream cup" }, price: 3.5 },
      { name: "Copa Turrón", note: { en: "Nougat ice-cream cup" }, price: 5 },
      { name: "Corneto", note: { en: "Cone" }, price: 2.5 },
      { name: "Haribo", note: { en: "Ice lolly" }, price: 2.8 },
      { name: "Frigo Pie", note: { en: "Ice lolly" }, price: 2.8 },
    ],
  },
];

/**
 * Los dos «arreglos» — menús cerrados para compartir — tal y como están
 * impresos, con la advertencia en rojo de la carta: no se hacen cambios.
 */
export type SetMenu = {
  id: string;
  title: { es: string; en: string };
  minPeople: number;
  pricePerPerson: number;
  items: { name: string; note?: { en: string } }[];
};

export const setMenus: SetMenu[] = [
  {
    id: "arreglo-1",
    title: { es: "Arreglo n.º 1", en: "Set menu no. 1" },
    minPeople: 4,
    pricePerPerson: 17,
    items: [
      { name: "Jamón y queso", note: { en: "Ham and cheese" } },
      { name: "Montadito de lomo de orza", note: { en: "Preserved pork loin mini sandwich" } },
      { name: "Variado de paté", note: { en: "Pâté selection" } },
      { name: "Sepia a la plancha", note: { en: "Grilled cuttlefish" } },
      { name: "Revuelto de ajos y gambas", note: { en: "Scrambled eggs with garlic shoots and prawns" } },
      { name: "Croquetas caseras", note: { en: "Homemade croquettes" } },
      { name: "Calamares", note: { en: "Fried squid rings" } },
      { name: "Solomillo trinchado", note: { en: "Sliced pork tenderloin" } },
    ],
  },
  {
    id: "arreglo-2",
    title: { es: "Arreglo n.º 2", en: "Set menu no. 2" },
    minPeople: 2,
    pricePerPerson: 17,
    items: [
      { name: "Jamón y queso", note: { en: "Ham and cheese" } },
      { name: "Ensaladilla rusa", note: { en: "Potato salad" } },
      { name: "Puntilla", note: { en: "Tiny fried squid" } },
      { name: "2 croquetas", note: { en: "Two croquettes" } },
      { name: "4 montaditos de ahumados", note: { en: "Four smoked-fish mini sandwiches" } },
      { name: "Solomillo trinchado", note: { en: "Sliced pork tenderloin" } },
    ],
  },
];

export const dishCount = menu.reduce((n, s) => n + s.dishes.length, 0);
export const pricedDishCount = menu.reduce(
  (n, s) => n + s.dishes.filter((d) => d.price !== undefined).length,
  0,
);

/** 14,90 € en notación española, €14.90 en la inglesa. */
export function formatPrice(value: number, locale: "es" | "en") {
  return new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}

/** Busca un plato por nombre en toda la carta: una sola fuente para los precios. */
export function findDish(name: string): Dish | undefined {
  return menu.flatMap((s) => s.dishes).find((d) => d.name === name);
}
