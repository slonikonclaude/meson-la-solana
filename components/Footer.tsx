import { restaurant } from "@/lib/restaurant";
import type { Dictionary } from "@/lib/dictionaries";
import { Container } from "@/components/Section";
import { IconExternal, IconPhone, IconPin, Monogram } from "@/components/icons";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-surface-dark pb-10 pt-12 text-on-dark-muted">
      <Container>
        <div className="grid gap-8 border-t border-on-dark/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-2.5 text-on-dark">
              <Monogram className="h-8 w-8" />
              <span className="font-display text-2xl font-semibold">{restaurant.name}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed">{dict.footer.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed">{dict.footer.hours}</p>
          </div>

          <address className="not-italic">
            <a
              href={restaurant.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm leading-relaxed transition-colors duration-200 hover:text-on-dark"
            >
              <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0" />
              {restaurant.address.full}
            </a>
            <a
              href={restaurant.phone.href}
              className="mt-3 flex min-h-11 items-center gap-2.5 text-sm transition-colors duration-200 hover:text-on-dark"
            >
              <IconPhone className="h-[18px] w-[18px] shrink-0" />
              <span className="tabular">{restaurant.phone.international}</span>
            </a>
          </address>

          <div>
            <a
              href={restaurant.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm underline decoration-on-dark/30 underline-offset-4 transition-colors duration-200 hover:text-on-dark"
            >
              {dict.footer.source}
              <IconExternal className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-on-dark/15 pt-6 text-xs">
          © {new Date().getFullYear()} {dict.footer.rightsPrefix}
        </p>
      </Container>
    </footer>
  );
}
