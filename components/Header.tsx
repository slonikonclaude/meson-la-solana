"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";
import { localeHome, localeLabel, type Dictionary, type Locale } from "@/lib/dictionaries";
import { IconClose, IconMenuBars, IconPhone, Monogram } from "@/components/icons";
import { Container } from "@/components/Section";

/**
 * Cabecera fija. Un solo CTA principal: el teléfono (DESIGN.md §5).
 * El cambio de idioma son enlaces normales a / y /en: la URL sigue siendo
 * compartible en vez de esconderse en el estado del componente.
 */
export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const other: Locale = locale === "es" ? "en" : "es";

  const links = [
    { href: "#favoritos", label: dict.nav.specialities },
    { href: "#carta", label: dict.nav.menu },
    { href: "#fotos", label: dict.nav.gallery },
    { href: "#resenas", label: dict.nav.reviews },
    { href: "#visita", label: dict.nav.visit },
  ];

  /* El menú móvil abierto no debe dejar que la página se desplace por debajo. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape cierra el menú: salida obligatoria (escape-routes). */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href={localeHome[locale]}
          className="flex items-center gap-2.5 text-primary"
        >
          <Monogram className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span className="font-display text-xl font-semibold leading-none tracking-wide sm:text-2xl">
            {restaurant.name}
          </span>
        </Link>

        <nav aria-label={dict.nav.menu} className="hidden items-center gap-7 lg:flex">
          {/*
            min-h-11 no es decoración: una línea text-sm da un objetivo de unos
            20 px de alto, por debajo del mínimo 24×24 de WCAG 2.2. Además alinea
            los enlaces con los h-11 del idioma y del teléfono.
          */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={localeHome[other]}
            hrefLang={other}
            aria-label={dict.meta.switchTo}
            className="flex h-11 min-w-11 items-center justify-center rounded-[var(--radius-sharp)] border border-border px-3 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            {localeLabel[other]}
          </Link>

          <a
            href={restaurant.phone.href}
            className="hidden h-11 items-center gap-2 rounded-[var(--radius-sharp)] bg-primary px-4 text-sm font-semibold text-on-primary transition-opacity duration-200 hover:opacity-90 sm:inline-flex"
          >
            <IconPhone className="h-[18px] w-[18px]" />
            {dict.nav.call}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sharp)] border border-border text-foreground lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenuBars className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div id="mobile-nav" hidden={!open} className="border-t border-border bg-background lg:hidden">
        <Container className="flex flex-col py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border/70 text-base text-foreground last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={restaurant.phone.href}
            className="my-3 flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-sharp)] bg-primary px-4 font-semibold text-on-primary"
          >
            <IconPhone className="h-[18px] w-[18px]" />
            <span className="tabular">{restaurant.phone.display}</span>
          </a>
        </Container>
      </div>
    </header>
  );
}
