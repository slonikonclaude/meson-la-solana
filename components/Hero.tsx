import { restaurant } from "@/lib/restaurant";
import { reviews } from "@/lib/reviews";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { fill, type Dictionary, type Locale } from "@/lib/dictionaries";
import { Container } from "@/components/Section";
import { Stars } from "@/components/Stars";
import { IconArrowRight, IconClock, IconPhone, IconPin, IconQuote } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Héroe partido: texto a la izquierda, comedor en vertical a la derecha.
 * El texto no se superpone a la foto: el comedor está iluminado con
 * fluorescente y un velo suficiente para 4,5:1 lo apagaría (DESIGN.md §5).
 *
 * La cita bajo la foto es literal, de la reseña de Guillermo R Lallana en
 * lib/reviews.ts — no una frase de marketing.
 */
export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const nf = locale === "es" ? "es-ES" : "en-GB";
  const rating = restaurant.rating.value.toLocaleString(nf, { minimumFractionDigits: 1 });
  const photo = photos.comedor;
  const quote = reviews.find((r) => r.author === "Guillermo R Lallana");

  return (
    <section className="border-b border-border bg-background">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.hero.eyebrow}
          </p>
          <div className="rule mt-3" aria-hidden />

          <h1 className="font-display mt-6 text-[2.75rem] font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.75rem]">
            {dict.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.hero.lead}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="inline-flex items-center gap-2">
              <Stars value={restaurant.rating.value} />
              <span className="text-sm text-foreground">
                <strong className="font-semibold tabular">{rating}</strong> {dict.reviews.ratingOnGoogle}{" "}
                · <span className="tabular">{restaurant.rating.count}</span> {dict.reviews.reviewsWord}
              </span>
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="tabular">{dict.hero.priceLabel}</span>{" "}
              <span className="text-muted-foreground/80">
                ({fill(dict.hero.priceSource, { count: restaurant.priceRange.reportedBy })})
              </span>
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={restaurant.phone.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-sharp)] bg-primary px-6 text-base font-semibold text-on-primary transition-opacity duration-200 hover:opacity-90"
            >
              <IconPhone className="h-5 w-5" />
              {dict.hero.callCta}
            </a>
            <a
              href="#carta"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-sharp)] border border-primary px-6 text-base font-semibold text-primary transition-colors duration-200 hover:bg-muted"
            >
              {dict.hero.menuCta}
              <IconArrowRight className="h-5 w-5" />
            </a>
          </div>

          <dl className="mt-9 grid gap-3 border-t border-border pt-6 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
              <div>
                <dt className="sr-only">{dict.visit.addressTitle}</dt>
                <dd>
                  <a
                    href={restaurant.links.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-primary"
                  >
                    {restaurant.address.full}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <IconClock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
              <div>
                <dt className="sr-only">{dict.visit.hoursTitle}</dt>
                <dd className="text-muted-foreground">{dict.hero.openLabel}</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <Reveal className="relative" delay={0.1}>
          <img
            src={srcFor(photo, 800)}
            srcSet={srcSetFor(photo)}
            sizes="(min-width: 1024px) 42vw, 100vw"
            width={photo.width}
            height={photo.height}
            alt={photo.alt[locale]}
            /* Única foto por encima del primer pantallazo: se carga ya. */
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[var(--radius-soft)] border border-border object-cover"
          />
          {quote ? (
            <figure className="-mt-8 mr-4 ml-auto max-w-sm border border-border bg-card p-5 sm:-mt-10 sm:mr-6 lg:-ml-10 lg:mr-0">
              <IconQuote className="h-6 w-6 text-clay" />
              <blockquote className="font-display mt-2 text-xl italic leading-snug text-foreground sm:text-2xl">
                {locale === "es"
                  ? "«Todo casero. Ya no quedan muchos sitios como este.»"
                  : "“Everything homemade. There are not many places like this left.”"}
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {quote.author} · Google
              </figcaption>
            </figure>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
