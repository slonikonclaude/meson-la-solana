import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { restaurant } from "@/lib/restaurant";
import { basePath } from "@/lib/basePath";

/**
 * El restaurante no tiene dominio (en Google figura «Añadir sitio web»), así
 * que el origen se toma de una variable de entorno. Sin ella, canonical y
 * hreflang apuntarían a ninguna parte.
 */
const rawOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mesonlasolana.example";
export const siteOrigin = rawOrigin.replace(/\/+$/, "");

/**
 * El subdirectorio va dentro de metadataBase: Next pega las rutas relativas de
 * los metadatos al pathname de esta URL. Sin él, canonical, hreflang y
 * og:image señalarían la raíz del dominio en vez de /meson-la-solana/.
 */
export const metadataBase = new URL(`${siteOrigin}${basePath}/`);

/** El español es la raíz; el inglés vive en /en/. No hay redirección. */
export const languageAlternates = {
  "es-ES": "/",
  en: "/en/",
  "x-default": "/",
};

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "es" ? "/" : "/en/";

  return {
    metadataBase,
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: restaurant.name,
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: restaurant.name,
      locale: locale === "es" ? "es_ES" : "en_GB",
      title: dict.meta.title,
      description: dict.meta.description,
      url: path,
      images: [
        {
          // Relativa a propósito: metadataBase ya lleva el subdirectorio.
          url: "/photos/fachada-1600.webp",
          width: 1600,
          height: 1200,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}
