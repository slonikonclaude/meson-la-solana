/**
 * Juego propio de iconos: trazo único de 1,5 px, viewBox 24, currentColor.
 * Nada de emojis como iconos (DESIGN.md §5).
 *
 * Todos son decorativos — siempre van junto a un texto visible — y por eso
 * llevan aria-hidden. Si alguno queda solo alguna vez, necesitará alternativa
 * textual.
 */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} className={className}>
      <path d="m12 3.6 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconCross({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} className={className}>
      <path d="M9.5 5.5C6.2 6.4 4.5 8.7 4.5 12.3V18.5h6.3v-6.3H7.4c0-2 1-3.3 3-3.9l-.9-2.8Zm9.4 0c-3.3.9-5 3.2-5 6.8V18.5h6.3v-6.3h-3.4c0-2 1-3.3 3-3.9l-.9-2.8Z" />
    </svg>
  );
}

export function IconUtensils({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3v7.5M4 3v4a2.5 2.5 0 0 0 5 0V3M6.5 10.5V21" />
      <path d="M17 3c-1.7 1.3-2.5 3.2-2.5 5.5 0 2 .8 3.3 2.5 4V21M17 3v9.5" />
    </svg>
  );
}

export function IconExternal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 4.5h5.5V10M19.5 4.5 11 13M9 6H6.5A2 2 0 0 0 4.5 8v9.5a2 2 0 0 0 2 2H16a2 2 0 0 0 2-2V15" />
    </svg>
  );
}

export function IconMenuBars({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Monograma provisional del mesón: una S de rasgo caligráfico en un óvalo. */
export function Monogram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden focusable={false} className={className}>
      <ellipse cx="16" cy="16" rx="14.5" ry="14.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20.5 11.2c-.6-1.6-2-2.4-3.9-2.4-2.4 0-4 1.3-4 3.1 0 4.2 8.3 2.6 8.3 7.3 0 2.2-2 3.7-4.6 3.7-2.3 0-4-1-4.7-2.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
