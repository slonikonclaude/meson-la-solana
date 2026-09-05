import type { NextConfig } from "next";

/**
 * Ruta base cuando el sitio no se sirve desde la raíz del dominio.
 *
 *   GitHub Pages de proyecto  →  NEXT_PUBLIC_BASE_PATH=/meson-la-solana
 *   dominio propio            →  no definir la variable
 *
 * Next se niega a arrancar con un basePath acabado en barra, así que "/" y ""
 * se reducen aquí al mismo valor: sitio en la raíz.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

/**
 * Exportación estática: una landing de restaurante no necesita servidor y
 * `out/` se puede subir a cualquier hosting. trailingSlash hace que /en se
 * escriba como /en/index.html y funcione sin reescrituras de rutas.
 *
 * El optimizador de imágenes no está disponible al exportar, así que las fotos
 * ya vienen convertidas a WebP en dos anchuras (scripts/optimize-photos.mjs)
 * y se sirven con <img srcSet>, no con next/image.
 */
const nextConfig: NextConfig = {
  basePath,
  // El código no ve basePath por sí solo; lib/basePath.ts lo lee de aquí.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
