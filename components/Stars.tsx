import { IconStar } from "@/components/icons";

/**
 * Cinco estrellas con relleno parcial de la última. Color --color-star, que
 * por DESIGN.md §3 sólo se usa aquí y en las barras del histograma.
 *
 * Las estrellas son decorativas: al lado va siempre la nota en texto, así que
 * el significado no descansa en el color (color-not-only).
 */
export function Stars({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative block h-4 w-4">
            <IconStar className="absolute inset-0 h-4 w-4 text-border" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <IconStar className="h-4 w-4 text-star" />
            </span>
          </span>
        );
      })}
    </span>
  );
}
