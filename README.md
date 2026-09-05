# Mesón La Solana — landing

Sitio de una página del **Mesón La Solana**, Carrer Catalunya 1, 46520 Port de Sagunt (Valencia).

- Dos idiomas: español en `/` e inglés en `/en/`. No hay redirección; el selector son enlaces
  normales, así que la URL se puede compartir.
- Next.js 16 (Turbopack), React 19, Tailwind v4, `motion` 13, TypeScript.
- `output: "export"`: el resultado es estático en `out/`; no hace falta servidor.

La raíz del repositorio es la aplicación Next: `package.json`, `next.config.ts` y `app/` están al mismo
nivel que este fichero, sin subcarpeta. `DESIGN.md`, con todas las decisiones de diseño, está al lado y
**se lee antes de tocar cualquier cosa visual**.

---

## ⚠️ Derechos de las fotografías — pendiente

Las 25 fotos de `_photos/` (y sus WebP en `public/photos/`) están **descargadas de la ficha de Google
Maps** del local. Google las etiqueta «Las imágenes pueden estar protegidas por derechos de autor».
Antes de que el sitio salga en un dominio real hace falta la confirmación por escrito del propietario
o sustituirlas por fotografías propias. Lo mismo está anotado en `DESIGN.md`, §8.

---

## Estructura

```
.
├── app/          rutas: (es) → /, (en) → /en/, globals.css, icon.svg
├── components/   secciones de la landing y la envoltura RootShell
├── lib/          datos del local, carta, reseñas, diccionarios, helpers
├── public/       photos/ y .nojekyll
├── scripts/      optimize-photos.mjs — WebP a partir de _photos
├── _photos/      JPEG originales con nombre de contenido + urls.txt (id de Google de cada uno)
├── .github/      workflows/deploy.yml — publicación en GitHub Pages
├── DESIGN.md     decisiones de diseño — fuente de verdad
└── README.md     este fichero
```

## De dónde salen los datos

El local no ha facilitado textos ni precios. **Todo está leído de la ficha de Google Maps**
«Mesón La Solana» (CID `17551280698522033378`,
[enlace](https://maps.app.goo.gl/WDfVkR2VYQKZrHXq5)), estado a 5 de septiembre de 2026.
Nada está inventado; donde Google no da cifra, el sitio tampoco.

| Fichero | Contenido |
|---|---|
| `lib/restaurant.ts` | Dirección, coordenadas, Plus Code, teléfono `962 68 18 49`, horario semanal (miércoles cerrado, fin de semana partido), valoración 4,6 / 574, cuenta 20–30 € (134 personas), enlaces, grupos de atributos de la pestaña «Información» |
| `lib/menu.ts` | Carta completa: 79 platos en 6 apartados + 2 arreglos. 77 con precio; `Lenguado` («S. mercado») y `Cecina` (cifra corregida a mano, ilegible) llevan `priceNote` |
| `lib/reviews.ts` | 10 reseñas literales con respuesta del propietario donde la hubo; histograma real de las 574 (412 · 119 · 24 · 10 · 9); temas de reseña con recuento |
| `lib/photos.ts` | Manifiesto de 25 fotos: nombre, tamaño original, `alt` en dos idiomas, orden de la galería |
| `lib/dictionaries.ts` | Textos de interfaz en ES y EN. Los nombres de plato no se traducen: se muestran en español en ambas versiones, con una aclaración en inglés |

La carta se transcribió de la **foto de la carta expuesta en la vitrina del local** (Google, pestaña
«Carta», foto 1 de 3). Las otras dos fotos son cartas de años anteriores con precios más bajos y se
descartaron. La carta impresa dice «C/. Cataluña, 5»; Google dice «Carrer Catalunya, 1» — se usa Google.

### Qué se edita dónde

| Qué | Dónde |
|---|---|
| Teléfono | `lib/restaurant.ts` y nada más |
| Precio o nombre de un plato | `lib/menu.ts`. Ojo: `picks[]` en `components/Specialities.tsx` busca el precio por nombre exacto; si cambia el nombre, cámbialo también allí |
| Horario | `lib/restaurant.ts` (`hours` → tabla y JSON-LD) **y** los resúmenes en `lib/dictionaries.ts`: `hero.openLabel`, `footer.hours`, `meta.description`, en cada idioma |
| Dirección | `lib/restaurant.ts` **y** `hero.eyebrow`, `cta.lead` en `lib/dictionaries.ts` |
| Valoración y número de reseñas | `lib/restaurant.ts` (`rating`) y el histograma en `lib/reviews.ts` |
| Fotos | `_photos/` + `NAMES` en `scripts/optimize-photos.mjs` + entrada en `lib/photos.ts` |

## Comandos

Node ≥ 20.9. Desde la raíz del repositorio:

```bash
npm install     # dependencias
npm run dev     # http://localhost:3000
npm run build   # exportación estática a out/
npm run lint    # eslint
```

`npm run build` y `npm run lint` pasan sin errores ni avisos; así debe seguir.

### Regenerar los WebP

```bash
node scripts/optimize-photos.mjs
```

Lee `_photos/<nombre>.jpg` según la lista `NAMES` del script y escribe `public/photos/<nombre>-800.webp`
y `-1600.webp` (calidad 78). Imprime el tamaño original de cada foto, que es el que va en `lib/photos.ts`.

## Publicación

GitHub Pages, desde el workflow `.github/workflows/deploy.yml`: cada push a `main` (o un lanzamiento
manual desde la pestaña Actions) ejecuta `npm ci` → `npm run build` → sube `out/` → despliega.
En Settings → Pages la fuente debe ser **GitHub Actions**; con «Deploy from a branch» se publicarían
los fuentes en vez del sitio.

- Repositorio: <https://github.com/slonikonclaude/meson-la-solana> (público: Pages gratuito lo exige)
- Sitio: <https://slonikonclaude.github.io/meson-la-solana/>

Las dos variables de la build las rellena el propio workflow a partir de `actions/configure-pages`;
no hay que definirlas a mano:

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Subdirectorio si el sitio no va en la raíz (`/meson-la-solana` en Pages de proyecto). `"/"` y vacío significan raíz |
| `NEXT_PUBLIC_SITE_URL` | Origen del sitio; de él salen canonical, hreflang y og:image. Por defecto `https://mesonlasolana.example` |

`public/.nojekyll` evita que GitHub Pages descarte `_next/`. Cualquier ruta absoluta nueva en un `src`
o `href` escrito a mano debe pasar por `withBase()` de `lib/basePath.ts`.

## Provisional

- `app/icon.svg` es un monograma de sustitución; se cambia por el logotipo del local cuando lo haya.
- No hay formulario de reserva: el local no tiene canal en línea. El CTA es el teléfono.
