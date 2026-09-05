import { restaurant } from "@/lib/restaurant";
import { reviews, ratingBreakdown, reviewTopics } from "@/lib/reviews";
import { fill, type Dictionary, type Locale } from "@/lib/dictionaries";
import { Container, SectionHeading } from "@/components/Section";
import { Stars } from "@/components/Stars";
import { IconArrowRight } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Reseñas de Google literales, incluidas la de cuatro y la de una estrella,
 * con la respuesta del propietario donde la hubo. Una vitrina sólo de cincos
 * sería prueba social falsa (DESIGN.md §5).
 *
 * El histograma es el real de las 574 reseñas, leído de Google — no el de
 * las diez que se muestran.
 */
export function Reviews({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const nf = locale === "es" ? "es-ES" : "en-GB";
  const rating = restaurant.rating.value.toLocaleString(nf, { minimumFractionDigits: 1 });
  const total = restaurant.rating.count;

  return (
    <section id="resenas" className="border-b border-border bg-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.reviews.eyebrow}
            title={dict.reviews.title}
            lead={`${rating} ${fill(dict.reviews.leadTemplate, { count: total })}`}
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start" delay={0.05}>
            <div className="rounded-[var(--radius-soft)] border border-border bg-card p-6">
              <p className="font-display text-6xl font-semibold leading-none text-foreground tabular">
                {rating}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Stars value={restaurant.rating.value} />
                <span className="text-sm text-muted-foreground tabular">
                  {total} {dict.reviews.reviewsWord}
                </span>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {fill(dict.reviews.breakdownLabel, { count: total })}
              </p>
              <ul className="mt-3 space-y-1.5">
                {ratingBreakdown.map((row) => (
                  <li key={row.stars} className="flex items-center gap-3">
                    <span className="w-8 shrink-0 text-xs text-muted-foreground tabular">{row.stars} ★</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                      <span
                        className="block h-full rounded-full bg-star"
                        style={{ width: `${(row.count / total) * 100}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right text-xs text-muted-foreground tabular">
                      {row.count}
                    </span>
                    <span className="sr-only">
                      {row.stars} {dict.reviews.starsSuffix}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {dict.reviews.topicsLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {reviewTopics.map((t) => (
                  <li
                    key={t.word}
                    className="inline-flex items-center gap-1.5 rounded-[var(--radius-sharp)] border border-border bg-background px-2.5 py-1 text-sm text-foreground"
                  >
                    {t.word}
                    <span className="text-xs text-muted-foreground tabular">{t.count}</span>
                    <span className="sr-only">{dict.reviews.mentionsSuffix}</span>
                  </li>
                ))}
              </ul>

              <a
                href={restaurant.links.reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent"
              >
                {dict.reviews.readAll}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <RevealItem
                as="li"
                key={r.author}
                className="flex flex-col rounded-[var(--radius-soft)] border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2">
                  <Stars value={r.rating} />
                  <span className="sr-only">
                    {r.rating} {dict.reviews.starsSuffix}
                  </span>
                  <span className="text-xs text-muted-foreground">{r.ago[locale]}</span>
                </div>
                <blockquote className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-foreground">
                  {r.text[locale]}
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">{r.author}</p>
                {r.ownerReply ? (
                  <div className="mt-4 border-l-2 border-clay pl-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {dict.reviews.ownerReply}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.ownerReply[locale]}
                    </p>
                  </div>
                ) : null}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
