import { restaurant, weekDays } from "@/lib/restaurant";
import { menu, dishCount } from "@/lib/menu";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { metadataBase, ogImagePath } from "@/lib/site";

const dayName = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
} as const;

/**
 * Schema.org Restaurant: horario, teléfono, rango de precios y carta para que
 * buscadores y mapas los muestren sin entrar en la página.
 *
 * Todos los valores salen de los mismos módulos que la maquetación; el marcado
 * no puede discrepar de lo que la persona lee.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const openingHoursSpecification = weekDays.flatMap((day) =>
    restaurant.hours[day].map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayName[day],
      opens: slot.open,
      closes: slot.close,
    })),
  );

  /*
   * url e image absolutas, resueltas sobre metadataBase: heredan el origen y
   * el subdirectorio de Pages igual que canonical y og:image (lib/site.ts).
   * Google las lista como recomendadas para Restaurant.
   */
  const pageUrl = new URL(locale === "es" ? "./" : "./en/", metadataBase).toString();
  const imageUrl = new URL(`.${ogImagePath}`, metadataBase).toString();

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": pageUrl,
    url: pageUrl,
    image: [imageUrl],
    name: restaurant.name,
    description: dict.meta.description,
    servesCuisine: locale === "es" ? ["Española", "Tapas"] : ["Spanish", "Tapas"],
    priceRange: "€€",
    telephone: restaurant.phone.international,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      postalCode: restaurant.address.postalCode,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.province,
      addressCountry: restaurant.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating.value,
      reviewCount: restaurant.rating.count,
      bestRating: 5,
    },
    sameAs: [restaurant.links.googleMaps],
    acceptsReservations: "True",
    hasMenu: {
      "@type": "Menu",
      name: dict.menu.title,
      numberOfItems: dishCount,
      hasMenuSection: menu.map((section) => ({
        "@type": "MenuSection",
        name: section.title[locale],
        hasMenuItem: section.dishes.map((dish) => ({
          "@type": "MenuItem",
          name: dish.name,
          ...(dish.note?.[locale] ? { description: dish.note[locale] } : {}),
          ...(dish.price !== undefined
            ? {
                offers: {
                  "@type": "Offer",
                  price: dish.price.toFixed(2),
                  priceCurrency: "EUR",
                },
              }
            : {}),
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Datos propios de lib/*, no entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
