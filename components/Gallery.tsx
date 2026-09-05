import { galleryOrder, srcFor, srcSetFor } from "@/lib/photos";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Columnas en vez de retícula: hay fotos verticales y apaisadas, y una
 * cuadrícula cortaría los platos por la mitad (DESIGN.md §5).
 *
 * Cada imagen lleva width/height del original: el navegador reserva el
 * espacio y la galería no mueve la página mientras carga.
 */
export function Gallery({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="fotos" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} lead={dict.gallery.lead} />
        </Reveal>

        <RevealGroup className="mt-12 columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4">
          {galleryOrder.map((p) => (
            <RevealItem key={p.name} className="mb-4 break-inside-avoid sm:mb-5">
              <img
                src={srcFor(p, 800)}
                srcSet={srcSetFor(p)}
                sizes="(min-width: 1024px) 23vw, (min-width: 768px) 31vw, 47vw"
                width={p.width}
                height={p.height}
                alt={p.alt[locale]}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[var(--radius-soft)] border border-border bg-muted"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
