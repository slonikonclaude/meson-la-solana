/**
 * Prefijo para rutas absolutas cuando el sitio vive en un subdirectorio
 * (GitHub Pages de proyecto: /meson-la-solana/).
 *
 * Next sólo añade basePath por su cuenta en next/link, next/font y los
 * ficheros de metadatos. Un <img src="/photos/…"> normal no lo recibe y en
 * un subdirectorio daría 404, así que el prefijo se pone aquí.
 *
 * Módulo aparte y no dentro de lib/site.ts: lo importan componentes cliente
 * y no tienen por qué arrastrar la construcción de metadatos.
 */

/** Misma normalización que next.config.ts: "/" y "" significan la raíz. */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

/** `/photos/x.webp` → `/meson-la-solana/photos/x.webp`. En la raíz devuelve tal cual. */
export const withBase = (path: string) => `${basePath}${path}`;
