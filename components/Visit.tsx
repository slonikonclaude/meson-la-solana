import { restaurant, amenityGroups, atmosphereKeys, weekDays } from "@/lib/restaurant";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Container, SectionHeading } from "@/components/Section";
import { HoursTable } from "@/components/HoursTable";
import { IconArrowRight, IconCheck, IconClock, IconCross, IconPhone, IconPin } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Horario en tabla semanal: miércoles cerrado y fin de semana partido no caben
 * en una línea. No hay «Abierto ahora»: calculado en una página estática
 * mentiría a la primera modificación (DESIGN.md §5).
 *
 * Los atributos van agrupados como en la pestaña «Información» de Google,
 * incluida la negativa (sin reparto a domicilio) con su propio icono.
 */
export function Visit({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const photo = photos.fachada;

  return (
    <section id="visita" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={dict.visit.eyebrow} title={dict.visit.title} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
          <div>
            <dl className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2 lg:col-span-1">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  <IconClock className="h-[18px] w-[18px]" />
                  {dict.visit.hoursTitle}
                </dt>
                <dd className="mt-3">
                  <HoursTable dict={dict} days={weekDays} hours={restaurant.hours} />
                  <p className="mt-3 text-sm text-muted-foreground">{dict.visit.hoursNote}</p>
                </dd>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    <IconPhone className="h-[18px] w-[18px]" />
                    {dict.visit.phoneTitle}
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={restaurant.phone.href}
                      className="font-display text-3xl font-semibold text-foreground tabular underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-primary"
                    >
                      {restaurant.phone.display}
                    </a>
                    <p className="mt-1.5 text-sm text-muted-foreground">{dict.visit.phoneNote}</p>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    <IconPin className="h-[18px] w-[18px]" />
                    {dict.visit.addressTitle}
                  </dt>
                  <dd className="mt-3">
                    <p className="text-lg text-foreground">{restaurant.address.full}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {dict.visit.plusCodeLabel}: {restaurant.address.plusCode}
                    </p>
                    <a
                      href={restaurant.links.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-sharp)] border border-primary px-5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-muted"
                    >
                      {dict.visit.directions}
                      <IconArrowRight className="h-4 w-4" />
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {dict.visit.amenitiesTitle}
            </h3>
            <RevealGroup as="div" className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {amenityGroups.map((group) => (
                <RevealItem key={group.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {dict.visit.groups[group.id]}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {group.keys.map((key) => {
                      const negative = key === "noDelivery" || key === "parkingHard";
                      const Icon = negative ? IconCross : IconCheck;
                      return (
                        <li key={key} className="flex items-start gap-2 text-[0.9375rem] text-foreground">
                          <Icon
                            className={[
                              "mt-0.5 h-[18px] w-[18px] shrink-0",
                              negative ? "text-muted-foreground" : "text-accent",
                            ].join(" ")}
                          />
                          {dict.amenities[key]}
                        </li>
                      );
                    })}
                  </ul>
                </RevealItem>
              ))}
              <RevealItem>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {dict.visit.atmosphereTitle}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {atmosphereKeys.map((key) => (
                    <li
                      key={key}
                      className="rounded-[var(--radius-sharp)] border border-border bg-card px-2.5 py-1 text-sm text-foreground"
                    >
                      {dict.atmosphere[key]}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            </RevealGroup>
          </div>

          <Reveal delay={0.05}>
            <img
              src={srcFor(photo, 800)}
              srcSet={srcSetFor(photo)}
              sizes="(min-width: 1024px) 400px, 100vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt[locale]}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[var(--radius-soft)] border border-border object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
