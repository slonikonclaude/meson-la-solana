import { photos, srcFor, srcSetFor, type Photo } from "@/lib/photos";
import { findDish, formatPrice } from "@/lib/menu";
import { reviewTopics } from "@/lib/reviews";
import { fill, type Dictionary, type Locale } from "@/lib/dictionaries";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Seis platos: los que Google marca como «Popular» y los que más veces
 * aparecen en las reseñas. El precio se lee de lib/menu.ts por nombre — una
 * sola fuente — y el recuento de menciones, de lib/reviews.ts.
 *
 * `dish` es la clave de búsqueda en la carta; `topic`, la palabra de Google.
 * El texto de la tarjeta vive en los diccionarios, en el mismo orden.
 */
const picks: { dish: string; photo: Photo; topic?: string; popular?: boolean }[] = [
  { dish: "Pulpo a la gallega", photo: photos.pulpo, topic: "pulpo" },
  { dish: "Chipirones en su tinta", photo: photos.chipironesTinta, topic: "chipirones" },
  { dish: "Croquetas de bacalao", photo: photos.croquetas, topic: "croquetas" },
  { dish: "Chuletón", photo: photos.chuleton, topic: "chuletón" },
  { dish: "Solomillo de ternera", photo: photos.solomilloTernera, popular: true },
  { dish: "Calamares", photo: photos.calamares, popular: true },
];

export function Specialities({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="favoritos" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.specialities.eyebrow}
            title={dict.specialities.title}
            lead={dict.specialities.lead}
          />
        </Reveal>

        <RevealGroup as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {picks.map((pick, i) => {
            const copy = dict.specialities.items[i];
            const dish = findDish(pick.dish);
            const mentions = pick.topic
              ? reviewTopics.find((t) => t.key === pick.topic)?.count
              : undefined;
            return (
              <RevealItem
                as="li"
                key={pick.dish}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-soft)] border border-border bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={srcFor(pick.photo, 800)}
                    srcSet={srcSetFor(pick.photo)}
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                    width={pick.photo.width}
                    height={pick.photo.height}
                    alt={pick.photo.alt[locale]}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {pick.popular
                      ? dict.specialities.popularBadge
                      : mentions !== undefined
                        ? fill(dict.specialities.mentions, { count: mentions })
                        : ""}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
                      {copy.name}
                    </h3>
                    {dish?.price !== undefined ? (
                      <span className="shrink-0 text-[0.9375rem] font-semibold text-primary tabular">
                        {formatPrice(dish.price, locale)}
                        {dish.perUnit || dish.note?.es?.includes("ud") ? (
                          <span className="ml-1 text-xs font-normal text-muted-foreground">
                            /{dict.menu.perUnit}
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {copy.text}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
