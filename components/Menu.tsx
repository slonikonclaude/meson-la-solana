"use client";

import { useRef, useState } from "react";
import { menu, setMenus, dishCount, formatPrice, type Dish } from "@/lib/menu";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { fill, type Dictionary, type Locale } from "@/lib/dictionaries";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * La carta completa: 6 apartados en pestañas y los 2 arreglos aparte.
 *
 * Las pestañas son un tablist real: flechas mueven la selección, Home/End
 * saltan a los extremos, sólo la activa entra en el tabulador. En móvil la
 * tira de pestañas hace scroll horizontal; la página no.
 *
 * La línea de puntos entre plato y precio (.leaders) cita la carta impresa.
 */
function PriceCell({ dish, locale, dict }: { dish: Dish; locale: Locale; dict: Dictionary }) {
  if (dish.price === undefined) {
    return (
      <span className="shrink-0 text-sm text-muted-foreground">{dish.priceNote?.[locale]}</span>
    );
  }
  return (
    <span className="shrink-0 text-[0.9375rem] font-semibold text-accent tabular">
      {formatPrice(dish.price, locale)}
      {dish.perUnit ? (
        <span className="ml-1 text-xs font-normal text-muted-foreground">/{dict.menu.perUnit}</span>
      ) : null}
    </span>
  );
}

export function Menu({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = menu.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const carta = photos.carta;

  return (
    <section id="carta" className="border-b border-border bg-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={dict.menu.eyebrow}
            title={dict.menu.title}
            lead={fill(dict.menu.lead, { count: dishCount, sections: menu.length })}
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          {/* Tira de pestañas. -mx-5 + px-5: en móvil el scroll llega al borde. */}
          <div
            role="tablist"
            aria-label={dict.menu.sectionNav}
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {menu.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={[
                    "min-h-11 shrink-0 rounded-[var(--radius-sharp)] border px-4 text-sm font-semibold transition-colors duration-200",
                    selected
                      ? "border-primary bg-primary text-on-primary"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                  ].join(" ")}
                >
                  {s.title[locale]}
                  <span className="ml-1.5 text-xs font-normal opacity-70 tabular">{s.dishes.length}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-10">
          {/*
            Los seis paneles se renderizan siempre y se ocultan con `hidden`, no
            se monta sólo el activo: así cada aria-controls de la tira de
            pestañas apunta a un id que existe (patrón APG de pestañas) y los
            79 platos van completos en el HTML exportado, no sólo las tapas.
          */}
          <div>
            {menu.map((section, i) => (
              <div
                key={section.id}
                role="tabpanel"
                id={`panel-${section.id}`}
                aria-labelledby={`tab-${section.id}`}
                tabIndex={0}
                hidden={i !== active}
                className="rounded-[var(--radius-soft)] border border-border bg-card p-5 sm:p-7"
              >
                <h3 className="font-display text-3xl font-semibold text-foreground">
                  {section.title[locale]}
                </h3>
                {/*
                  Dos columnas desde md, como la carta impresa. La regla va en
                  cada fila y no con divide-y: en dos columnas divide-y trazaría
                  la línea entre columnas y no bajo el plato.
                */}
                <ul className="mt-5 md:grid md:grid-cols-2 md:gap-x-10">
                  {section.dishes.map((dish) => (
                    <li key={dish.name} className="border-b border-border py-3">
                      <div className="flex items-baseline">
                        <span className="text-[0.9375rem] font-medium text-foreground">{dish.name}</span>
                        <span className="leaders" aria-hidden />
                        <PriceCell dish={dish} locale={locale} dict={dict} />
                      </div>
                      {dish.note?.[locale] ? (
                        <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                          {dish.note[locale]}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {dict.menu.allergenNote}
                </p>
              </div>
            ))}
          </div>

          <figure className="hidden lg:block">
            <img
              src={srcFor(carta, 800)}
              srcSet={srcSetFor(carta)}
              sizes="300px"
              width={carta.width}
              height={carta.height}
              alt={carta.alt[locale]}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[var(--radius-soft)] border border-border"
            />
            <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {dict.menu.photoCaption}
            </figcaption>
          </figure>
        </div>

        <Reveal className="mt-12">
          <h3 className="font-display text-3xl font-semibold text-foreground">{dict.menu.setMenusTitle}</h3>
          <p className="mt-2 text-base text-muted-foreground">{dict.menu.setMenusLead}</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {setMenus.map((sm) => (
              <li
                key={sm.id}
                className="flex flex-col rounded-[var(--radius-soft)] border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-2xl font-semibold text-foreground">{sm.title[locale]}</h4>
                  <p className="text-[0.9375rem] font-semibold text-accent tabular">
                    {formatPrice(sm.pricePerPerson, locale)}{" "}
                    <span className="font-normal text-muted-foreground">{dict.menu.perPerson}</span>
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {fill(dict.menu.minPeople, { count: sm.minPeople })}
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {sm.items.map((it) => (
                    <li key={it.name} className="text-[0.9375rem] leading-snug text-foreground">
                      {it.name}
                      {locale === "en" && it.note ? (
                        <span className="block text-sm text-muted-foreground">{it.note.en}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-3 text-sm text-primary">
                  {dict.menu.setMenuNote}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
