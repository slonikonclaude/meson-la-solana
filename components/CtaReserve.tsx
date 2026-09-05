import { restaurant } from "@/lib/restaurant";
import type { Dictionary } from "@/lib/dictionaries";
import { Container } from "@/components/Section";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Segundo y último CTA, después de las reseñas, como pide el patrón
 * hero-testimonials-cta: primero la prueba social, luego la petición.
 */
export function CtaReserve({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface-dark py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="rule mx-auto" aria-hidden />
          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight text-on-dark sm:text-5xl md:text-[3.25rem]">
            {dict.cta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {dict.cta.lead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={restaurant.phone.href}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-[var(--radius-sharp)] bg-on-dark px-7 text-lg font-semibold text-surface-dark transition-opacity duration-200 hover:opacity-90 sm:w-auto"
            >
              <IconPhone className="h-5 w-5" />
              <span className="tabular">{restaurant.phone.display}</span>
              <span className="sr-only">
                {dict.cta.call} {restaurant.phone.international}
              </span>
            </a>
            <a
              href={restaurant.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[var(--radius-sharp)] border border-on-dark-muted px-7 text-base font-semibold text-on-dark transition-colors duration-200 hover:border-on-dark sm:w-auto"
            >
              {dict.cta.directions}
              <IconArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
