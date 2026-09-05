/**
 * Todo lo que se ha leído en la ficha de Google Maps de «Mesón La Solana»
 * (https://maps.app.goo.gl/WDfVkR2VYQKZrHXq5, CID 17551280698522033378)
 * el 5 de septiembre de 2026.
 *
 * Aquí va sólo lo que es igual en los dos idiomas: dirección, coordenadas,
 * teléfono, horario, cifras. Los textos traducibles están en lib/dictionaries.ts.
 * Las cifras no se inventan: si Google no lo dice, aquí no está.
 */

export const restaurant = {
  name: "Mesón La Solana",
  /** Categoría literal de Google. */
  googleCategory: "Restaurante",
  address: {
    street: "Carrer Catalunya, 1",
    postalCode: "46520",
    city: "Port de Sagunt",
    /** Nombre castellano del mismo municipio, como lo escribe el Plus Code y la carta impresa. */
    cityEs: "Puerto de Sagunto",
    province: "Valencia",
    country: "ES",
    full: "Carrer Catalunya, 1, 46520 Port de Sagunt, Valencia",
    plusCode: "MQ6Q+JF Puerto de Sagunto",
  },
  geo: { lat: 39.6615293, lng: -0.2113011 },
  phone: {
    /** Como lo muestra Google. */
    display: "962 68 18 49",
    international: "+34 962 68 18 49",
    href: "tel:+34962681849",
  },
  links: {
    googleMaps: "https://maps.app.goo.gl/WDfVkR2VYQKZrHXq5",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=39.6615293,-0.2113011&destination_place_id=&travelmode=walking",
    /** La ficha completa, con todas las reseñas y fotos. */
    reviews: "https://maps.google.com/?cid=17551280698522033378",
  },
  rating: { value: 4.6, count: 574 },
  /** «20-30 € por persona · Notificado por 134 personas». */
  priceRange: { min: 20, max: 30, currency: "EUR", reportedBy: 134 },
  /**
   * Horario semanal. Miércoles cerrado; sábado y domingo también al mediodía.
   * Clave = día ISO (1 = lunes … 7 = domingo).
   */
  hours: {
    1: [{ open: "20:00", close: "23:30" }],
    2: [{ open: "20:00", close: "23:30" }],
    3: [],
    4: [{ open: "20:00", close: "23:30" }],
    5: [{ open: "20:00", close: "23:30" }],
    6: [
      { open: "13:00", close: "16:00" },
      { open: "20:00", close: "23:30" },
    ],
    7: [
      { open: "13:00", close: "16:00" },
      { open: "20:00", close: "23:30" },
    ],
  } as Record<1 | 2 | 3 | 4 | 5 | 6 | 7, { open: string; close: string }[]>,
  /** «Comer allí · Terraza»; a domicilio tachado en la ficha. */
  service: { dineIn: true, terrace: true, delivery: false },
} as const;

export type IsoDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const weekDays: IsoDay[] = [1, 2, 3, 4, 5, 6, 7];

/**
 * Lo que Google lista en la pestaña «Información», agrupado como allí.
 * El orden es el de salida; las etiquetas traducidas están en los diccionarios.
 */
export const amenityGroups = [
  { id: "highlights", keys: ["coffee", "wine", "desserts"] },
  { id: "service", keys: ["terrace", "dineIn", "tableService", "noDelivery"] },
  { id: "planning", keys: ["reservations", "bookLunch", "bookDinner"] },
  { id: "access", keys: ["wheelchair", "wheelchairToilet", "wheelchairSeating"] },
  { id: "crowd", keys: ["groups", "tourists", "kids", "soloDinner"] },
  { id: "payment", keys: ["cards", "nfc"] },
  { id: "parking", keys: ["streetParking", "parkingHard"] },
] as const;

export type AmenityKey = (typeof amenityGroups)[number]["keys"][number];

/** «Ambiente» según Google: acogedor, de moda, informal, tranquilo. */
export const atmosphereKeys = ["cosy", "trendy", "casual", "quiet"] as const;
export type AtmosphereKey = (typeof atmosphereKeys)[number];
