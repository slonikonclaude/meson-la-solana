import type { ReactNode } from "react";

/**
 * Cabecera común de sección: antetítulo, filete con dos puntos oliva (cita de
 * los iconos de alérgenos de la carta), título y entradilla. Mantiene el mismo
 * ritmo vertical en todas las secciones.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <header
      className={["max-w-2xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}
    >
      <p
        className={[
          "text-xs font-semibold uppercase tracking-[0.2em]",
          onDark ? "text-on-dark-muted" : "text-primary",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <div
        className={["rule mt-3", align === "center" ? "mx-auto" : ""].join(" ")}
        aria-hidden
      />
      <h2
        className={[
          "font-display mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-[3.25rem]",
          onDark ? "text-on-dark" : "text-foreground",
        ].join(" ")}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={[
            "mt-4 text-base leading-relaxed sm:text-[1.0625rem]",
            onDark ? "text-on-dark-muted" : "text-muted-foreground",
          ].join(" ")}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/** Ancho máximo idéntico en todas las secciones (DESIGN.md §5). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}
