import { Cormorant_Garamond, Karla } from "next/font/google";
import type { ReactNode } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

/**
 * Envoltorio común de los dos layouts raíz ((es) y (en)). Cada idioma tiene su
 * <html lang>, por eso hay dos layouts raíz, y las fuentes y el <body> se
 * describen aquí una sola vez.
 *
 * Fuentes: Cormorant Garamond para títulos, Karla para texto y precios
 * (DESIGN.md §4). display: "swap" para evitar texto invisible mientras cargan.
 */

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <html lang={dict.htmlLang} className={`${cormorant.variable} ${karla.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
