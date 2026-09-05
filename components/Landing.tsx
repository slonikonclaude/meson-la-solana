import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialities } from "@/components/Specialities";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { CtaReserve } from "@/components/CtaReserve";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

/**
 * Una sola página en los dos idiomas: español en /, inglés en /en/.
 * Orden de secciones: patrón hero-testimonials-cta de DESIGN.md §5.
 */
export function Landing({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sharp)] focus:bg-primary focus:px-4 focus:py-3 focus:text-on-primary"
      >
        {dict.nav.skipToContent}
      </a>

      <Header dict={dict} locale={locale} />

      <main id="contenido" className="flex-1">
        <Hero dict={dict} locale={locale} />
        <Specialities dict={dict} locale={locale} />
        <Menu dict={dict} locale={locale} />
        <Gallery dict={dict} locale={locale} />
        <Reviews dict={dict} locale={locale} />
        <Visit dict={dict} locale={locale} />
        <CtaReserve dict={dict} />
      </main>

      <Footer dict={dict} />
      <JsonLd locale={locale} />
    </>
  );
}
