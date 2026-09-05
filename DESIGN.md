# DESIGN.md — Mesón La Solana

Fuente de las decisiones: el skill `ui-ux-pro-max` (`--design-system`, `--domain style|typography|color|landing`)
más la factura del propio local, leída en su ficha de Google Maps
(`https://maps.app.goo.gl/WDfVkR2VYQKZrHXq5` → «Mesón La Solana», CID `17551280698522033378`,
Carrer Catalunya 1, Port de Sagunt), estado a 5 de septiembre de 2026.

Todo lo de abajo es la fuente de verdad. El código no se aparta de esto.

---

## 1. Producto y brief

| Punto | Valor | Razón |
|---|---|---|
| Producto | Landing del Mesón La Solana, Puerto de Sagunto (Valencia) | Local real: 4,6★ sobre 574 reseñas en Google, categoría «Restaurante», 20–30 € por persona (134 personas lo indican) |
| Qué es | Mesón de barrio: tapas, carnes y pescados de siempre, todo casero | Lo dicen la carta (Tapas / Carnes / Pescados / Postres / Helados) y las reseñas: «Todo casero», «Ya no quedan muchos sitios como este», «como las hacía mi abuela» |
| Audiencia | Vecinos del Puerto, familias, grupos y turistas de playa | Google: «Clientela: Grupos, Turistas», «Popular por: Comida, Cena, Cenar solo», «Adecuado para niños» |
| Tono | Honesto, cercano, sin pretensión; el local tiene años y lo presume | Cuenta razonable y cocina casera: un tono de «alta cocina» sería mentira; uno «moderno-startup» también |
| Idiomas | Español (por defecto, `/`) + inglés (`/en/`) | Requisito del brief. ES primero: la audiencia y todas las fuentes son españolas. La barra final no es cosmética: la exportación deja la versión inglesa en `out/en/index.html` (§10) |
| Acción principal | Llamar para reservar: `962 68 18 49` | Google: «Se aceptan reservas», «Se recomienda hacer una reserva para comer / para cenar». No hay reserva en línea ni sitio web («Añadir sitio web» en la ficha) |
| Acción secundaria | «Cómo llegar» (Google Maps) | Aparcar «es algo difícil»; el mapa importa más que en un local con parking |

### Datos tomados de Google Maps (no inventados)

- Dirección: Carrer Catalunya, 1, 46520 Port de Sagunt, Valencia (la carta impresa lo escribe «C/. Cataluña, 5 · Puerto de Sagunto»; se usa el dato de Google)
- Coordenadas: 39.6615293, -0.2113011 · Plus Code MQ6Q+JF Puerto de Sagunto
- Teléfono: 962 68 18 49
- Horario: lun, mar, jue, vie 20:00–23:30 · sáb y dom 13:00–16:00 y 20:00–23:30 · **miércoles cerrado**
- Valoración: 4,6 sobre 574 reseñas; histograma real 412 · 119 · 24 · 10 · 9
- Cuenta: 20–30 € por persona, según 134 personas
- Carta: transcrita de la foto de la carta expuesta en la vitrina (Google, pestaña «Carta», foto 1 de 3; las otras dos son cartas antiguas con precios más bajos y se descartan). 79 platos en 6 apartados + 2 «arreglos» (menús cerrados a 17 €/persona). 77 con precio; `Lenguado` lleva «S. mercado» y `Cecina` tiene la cifra corregida a mano e ilegible — ambos van con nota en vez de número
- Platos populares según Google: Solomillo de Ternera, Calamares, Sepionet. Temas de las reseñas: tapas 22, cena 10, croquetas 9, pulpo 8, vinos 7, chuletón 6, chipirones 5, bravas 5
- Información: terraza, comer allí (sin reparto), buen café, buena carta de vinos, buenos postres, acceso y aseo adaptados, grupos, turistas, niños, tarjetas y NFC, aparcamiento en la calle gratuito pero difícil. Ambiente: acogedor, de moda, informal, tranquilo
- 25 fotografías seleccionadas de las 33 descargadas (§8): fachada, comedor, barra y platos

---

## 2. Estilo de UI

**Elegido: Minimalism & Swiss Style (retícula, aire, tipografía) × «Carta impresa» — los materiales del propio mesón.**

| Decisión | Razón |
|---|---|
| Rechazado «Claymorphism» que devuelve `--design-system` para «restaurant meson tapas home cooking» | El perfil del estilo es «playful, toy-like, bubbly… children's apps, casual games». Un mesón con manteles blancos y paredes de piedra no es eso; las esquinas de 16–24 px y las sombras dobles lo harían parecer una app de reparto |
| Rechazada la tipografía que acompaña (Varela Round + Nunito Sans) | Misma razón: redondas y «amigables» para producto infantil. La carta del local está compuesta en una caligráfica con serifas |
| Rechazado el patrón «Hero-Centric» | Pide «hero a pantalla completa, texto mínimo». El visitante de un mesón busca precios y horario, no una foto épica. Se usa `hero-testimonials-cta` (`--domain landing`): prueba social antes del CTA |
| Base: Minimalism & Swiss Style (`minimalism-and-swiss-style`, `--domain style`) | «Clean, spacious, grid-based, essential», riesgo de accesibilidad bajo. El contenido es denso (79 precios, horario partido, 21 atributos): necesita retícula y aire, no decoración |
| Material: la carta impresa | Papel crema, tinta oscura, línea de puntos entre plato y precio, círculos rojo ladrillo y verde oliva de los alérgenos. Se citan tres cosas: el crema como fondo, la línea de puntos en la carta del sitio (`.leaders` en `globals.css`) y el filete con dos puntos oliva bajo cada antetítulo (`.rule`) |
| Tomado de «Nature Distilled» (`--domain style`, resultado 2) sólo la temperatura de la paleta | Terracota, arena, crema, oliva: coincide con lo que se ve en las fotos (platos de barro, mantel, piedra). No se toman sus texturas de grano ni los «radios orgánicos» |
| Radios 2 px / 4 px | La carta está compuesta sin redondeos. Único `rounded-full`: las barras del histograma de reseñas, donde es forma de indicador y no de botón |
| Sin sombras. La separación es una regla `--color-border` o un cambio de fondo a `--color-muted` | Swiss: «no box-shadow unless necessary». En hover la tarjeta de plato no se eleva; sólo la foto crece un 2 % (`group-hover:scale-[1.02]`) |
| Las fotografías son la única «riqueza» | No hay ilustraciones propias. 25 fotos reales de la ficha hacen el trabajo del decorado |

## 3. Paleta

No es la del motor (`#9A3412` terracota + `#059669` verde «fresh», pensada para app de recetas): sale de la
carta impresa y de las fotos. Valores oscurecidos hasta pasar WCAG AA.

| Token | Hex | Papel | Contraste sobre fondo |
|---|---|---|---|
| `--color-background` | `#F6F1E7` | Papel crema de la carta | — |
| `--color-foreground` | `#2A211B` | Texto principal, tinta | 14,01:1 ✓ AAA |
| `--color-primary` | `#7C2D1E` | Rojo ladrillo de los círculos de alérgenos y del aviso «No se hacen cambios» — botón principal, antetítulos, enlaces | 8,29:1 ✓ AAA |
| `--color-on-primary` | `#F6F1E7` | Texto sobre el botón | 8,29:1 ✓ |
| `--color-accent` | `#4F5D2F` | Verde oliva de los círculos de la carta — puntos del filete, marcas de «sí» en la ficha, precios | 6,35:1 ✓ AA |
| `--color-star` | `#A6741F` | Sólo estrellas y barras del histograma | 3,63:1 ✓ AA para gráfico no textual |
| `--color-clay` | `#C67B5C` | Terracota de los platos de barro — **sólo** decoración: filete del `.rule` | 2,92:1 — prohibido como texto |
| `--color-card` | `#FFFFFF` | Tarjetas de plato y reseña, panel de la carta | — |
| `--color-muted` | `#EEE6D8` | Secciones tintadas (carta, reseñas) | — |
| `--color-muted-foreground` | `#5F554A` | Texto secundario, aclaraciones de plato | 6,47:1 ✓ AA |
| `--color-border` | `#DFD4C2` | Reglas, marcos, línea de puntos | — |
| `--color-surface-dark` | `#2B1D17` | Nogal oscuro de la barra — fondo del CTA y del pie; también texto sobre el botón claro del CTA | — |
| `--color-on-dark` | `#F1E9DC` | Texto sobre oscuro | 13,50:1 ✓ AAA |
| `--color-on-dark-muted` | `#C9BCA9` | Texto secundario sobre oscuro | 8,72:1 ✓ AAA |

Los ratios están calculados por WCAG 2.x (luminancia relativa sRGB, `(L1 + 0,05) / (L2 + 0,05)`) sobre
`--color-background` `#F6F1E7`; las dos últimas filas, sobre `--color-surface-dark` `#2B1D17`.

Reglas:
- `--color-clay` **nunca** es texto ni icono con significado. Sólo rellenos decorativos.
- `--color-star` sólo estrellas y barras, nunca texto.
- Prohibido el hex suelto en componentes; todo por variables de `app/globals.css`.
- Dos excepciones, y las dos están donde la variable no llega:
  `themeColor: "#f6f1e7"` en el `viewport` de los dos layouts raíz (`app/(es)/layout.tsx`, `app/(en)/layout.tsx`)
  — es dato para `<meta name="theme-color">`, y debe coincidir con `--color-background` —,
  y `app/icon.svg`, que el navegador pide sin la página (§9).

## 4. Tipografía

| Papel | Fuente | Razón |
|---|---|---|
| Títulos | **Cormorant Garamond** 500/600/700 + cursiva | Del par «Editorial Classic» (`--domain typography`: «traditional, refined»). Sus cursivas caligráficas son lo más cercano a la letra de la carta impresa sin copiarla; las lleva la cita de reseña en el héroe |
| Texto, precios, navegación | **Karla** 400/500/600/700 | Del par «Restaurant Menu» de la misma consulta («restaurant, menu, culinary»). Grotesca con calor, legible a 16 px en móvil; se descarta el Playfair SC de ese par porque las versalitas en 79 líneas de carta cansan |
| Carga | `next/font/google` en `components/RootShell.tsx`, `display: "swap"`, subconjuntos `latin` + `latin-ext` | Regla `font-loading`: sin texto invisible. Hay dos layouts raíz (uno por `<html lang>`), así que las fuentes se declaran en la envoltura común |
| Escala | 12 / 14 / **15** / 16 / **17** / 18 / 20 / 24 / 30 / 36 / 48 / **52** / **60** px | Escalones estándar de Tailwind; en negrita los valores arbitrarios: `text-[0.9375rem]` (líneas de carta, reseñas, ficha), `text-[1.0625rem]` (entradilla en sm), `text-[3.25rem]` (`h2` en md), `text-[3.75rem]` (`h1` en lg). Cuerpo 16 px, nunca menos en móvil (`readable-font-size`) |
| Interlineado | Párrafos `leading-relaxed` (1,625); `h1` 1,05; `h2` 1,1; títulos menores `leading-tight`. `leading-snug` sólo en la aclaración bajo el plato; `leading-none` sólo en la cifra grande de la valoración |
| Precios | `font-variant-numeric: tabular-nums` (`.tabular`) | `number-tabular`: la columna de precios no baila |

## 5. Secciones y reglas de UX

Orden (patrón `hero-testimonials-cta` adaptado a restaurante):

| # | Sección | Regla de UX y razón |
|---|---|---|
| 1 | Header (sticky) | Un solo CTA principal: teléfono (`primary-action`). Cambio ES/EN con enlaces, no estado JS (`deep-linking`) |
| 2 | Hero | Partido: texto a la izquierda, foto vertical del comedor a la derecha. El texto **no** va sobre la foto: el comedor está iluminado con fluorescente y cualquier velo que diera 4,5:1 lo apagaría. Debajo del titular, valoración con estrellas, cuenta media con su origen («según 134 clientes») y horario resumido en una línea |
| 3 | Lo más pedido | Seis platos: los tres que Google marca «Popular» (solomillo, calamares, sepionet → en el sitio solomillo y calamares) más los que más se citan en reseñas (pulpo 8, chipirones 5, croquetas 9, chuletón 6). Cada tarjeta muestra la foto real del plato, el precio leído de `lib/menu.ts` por nombre y el número de menciones o la marca «Popular» |
| 4 | Carta | Los 79 platos en 6 pestañas + los 2 arreglos en tarjetas aparte. Pestañas = `tablist` real: flechas mueven la selección, Home/End saltan a los extremos, sólo la pestaña activa entra en el tabulador. Línea de puntos entre plato y precio como en la carta impresa. Junto al panel, la foto de la carta en la vitrina como procedencia de los precios. En móvil las pestañas hacen scroll horizontal; la página no (`horizontal-scroll`) |
| 5 | Fotos | 18 fotos en `columns` (2 / 3 / 4): hay verticales y apaisadas, y una retícula cuadrada partiría los platos. `width`/`height` declarados → CLS ≈ 0 (`image-dimension`); `loading="lazy"` bajo el primer pantallazo |
| 6 | Reseñas | 10 reseñas literales, con nombre y fecha. **Incluidas la de 4★ y la de 1★** de esa primera pantalla, con la respuesta del propietario a cada una que la tuvo: una selección sólo de cincos sería prueba social falsa. El histograma es el **real de las 574 reseñas** (leído de Google), no el de las diez. Chips «de qué hablan» con el recuento de menciones |
| 7 | Visita | Horario semanal en tabla — no cabe en una línea: miércoles cerrado y fin de semana partido — con el día de hoy marcado en el cliente. **Sin** «Abierto ahora»: estado calculado en una página estática miente a la primera modificación (`outdated-hours`). Dirección, Plus Code, teléfono, y los atributos de Google agrupados como en su pestaña «Información», incluida la negativa «No hay reparto a domicilio» |
| 8 | CTA | Bloque oscuro, teléfono en grande, segunda vez (`primary CTA: hero + post-testimonials`) |
| 9 | Footer | Contacto, horario resumido, enlace a la ficha de Google como fuente |

Reglas generales, del checklist del skill:
- Iconos: SVG propio inline, trazo 1,5 px, `viewBox 24`, `currentColor`. Excepción consciente: la estrella
  y las comillas van rellenas — en trazo, media estrella parece un defecto. Nada de emojis (`no-emoji-icons`).
- Botones y enlaces-botón ≥ 44 px (`touch-target-size`): `min-h-11` en cabecera, pestañas, pie; `min-h-12` en
  héroe y menú móvil; `min-h-13` en el CTA oscuro. Los enlaces dentro de texto corrido viven en su línea.
- Cursor de mano en todo lo clicable, una sola vez en `globals.css` sobre `a[href]`, `button`, `[role="button"]`
  y `[role="tab"]`. Hace falta porque el preflight de Tailwind v4 ya no toca el cursor de `<button>`.
- `focus-visible` de 2 px `--color-primary`, una sola vez en `globals.css`.
- Teléfono siempre `<a href="tel:">`; dirección siempre enlace al mapa. Sin `aria-label` encima de un texto
  visible que ya es el nombre accesible; `sr-only` sólo en el CTA oscuro, donde el número va sin verbo.
- Puntos de corte: los de Tailwind, sólo `sm` (640), `md` (768), `lg` (1024). Prueba obligatoria a 375 px.
- Contraste de texto ≥ 4,5:1 en todo.

## 6. Animaciones

Paquete `motion`, importado siempre `from "motion/react"`. `framer-motion` no se instala ni se importa.

| Regla | Valor |
|---|---|
| Por defecto | Aparición al hacer scroll: `opacity 0→1`, `y 24→0` en la sección (`Reveal`), `y 20→0` en cada elemento de un grupo (`RevealItem`) |
| Duración | 0,5 s sección, 0,45 s elemento (rango 0,3–0,6 s) |
| Curva | Una para todo el sitio: `EASE = [0.16, 1, 0.3, 1]` en `components/Reveal.tsx`. Casi todo el recorrido en los primeros fotogramas y frenada al final: la sección «se asienta» |
| Desplazamiento | ≤ 24 px (límite 32) |
| Repetición | `once: true`. Umbral `amount: 0.2` en `Reveal`, `0.15` en `RevealGroup` (el grupo es más alto que sus hijos) |
| Dentro de una sección | `staggerChildren: 0.07` en vez de animar cada elemento por separado |
| Propiedades | Sólo `transform` y `opacity` |
| Reduced motion | `useReducedMotion()` → bloque estático, sin desplazamiento ni retardos |

Dial de movimiento del skill: 4/10 «Standard». Se lee desde el móvil buscando un precio o un horario; más
coreografía estorbaría.

## 7. Qué viene del catálogo 21st.dev

**Nada.** Las herramientas `mcp__21st__*` no están en la sesión — el catálogo no está conectado.
Todas las secciones están maquetadas a mano con Tailwind sobre los tokens de este fichero.

## 8. Fotografías

Las fotos son de la ficha de Google Maps y las subieron el local o sus clientes. Google las marca
«Las imágenes pueden estar protegidas por derechos de autor»: **antes de publicar en un dominio real hace
falta la confirmación del propietario del mesón** o sustituirlas por fotos propias.

```
_photos/*.jpg  --( scripts/optimize-photos.mjs )-->  public/photos/*.webp
```

| Qué | Dónde | Contenido |
|---|---|---|
| Originales | `_photos/` | 25 JPEG con nombre de contenido (`fachada.jpg`, `pulpo.jpg`…) + `urls.txt` con el identificador de Google de cada uno. No entran en el sitio: Next sólo copia a `out/` lo que hay en `public/` |
| Script | `scripts/optimize-photos.mjs` | Cada foto en WebP a 800 y 1600 px de ancho, calidad 78. La lista `NAMES` del script es la fuente de qué se convierte |
| Resultado | `public/photos/` | 50 ficheros: 25 nombres × 2 anchuras. Sólo estos van a la build |
| Manifiesto | `lib/photos.ts` | Nombre, tamaño del original (para `aspect-ratio`) y `alt` en dos idiomas |

Descartadas de las 33 descargadas: dos fotos de cartas antiguas (precios de otra época), una foto borrosa de
revuelto, un plano de palitos de mozzarella que no está en la carta, dos fotos de la galería general
repetidas en contenido, y dos que no aportaban nada (chuletón y solomillo por segunda vez).

El héroe usa el comedor (vertical). La fachada de noche va en «Visítanos» — es lo que se ve al llegar — y
como `og:image`.

## 9. Icono del sitio

`app/icon.svg` es provisional: una «S» de trazo caligráfico dentro de un óvalo, en `--color-primary`
sobre `--color-background`, eco del óvalo con el cocinero que lleva la carta impresa. Cuando el mesón facilite
su logotipo, el fichero se sustituye entero.

## 10. Construcción y publicación

El sitio se publica en GitHub Pages en `https://slonikonclaude.github.io/meson-la-solana/`, desde la rama
`main` del repositorio `slonikonclaude/meson-la-solana`, con el workflow `.github/workflows/deploy.yml`.

La raíz del repositorio es la aplicación Next: `package.json`, `next.config.ts`, `app/`, `components/`,
`lib/`, `public/`, `scripts/` y `_photos/` están al mismo nivel que este fichero, sin subcarpeta — como en
Areamar. Por eso el workflow no cambia de directorio: `npm ci` y `npm run build` corren donde están, y el
artefacto de Pages es simplemente `out`.

| Decisión | Razón |
|---|---|
| `output: "export"` | La landing no necesita servidor; `out/` va a cualquier hosting estático. Efecto: sin optimizador de imágenes, de ahí los WebP prehechos y `<img srcSet>` en vez de `next/image` (§8) |
| `trailingSlash: true` | La versión inglesa se escribe en `out/en/index.html`; sin barra un hosting sin reescrituras no la encuentra. Por eso la URL inglesa es siempre `/en/` en canonical y hreflang |
| `basePath` de `NEXT_PUBLIC_BASE_PATH` | Pages de proyecto sirve el sitio desde `/meson-la-solana/`. El valor lo pone `actions/configure-pages` en el CI; con dominio propio no se define |
| `withBase()` en `lib/basePath.ts` | Next sólo añade el prefijo en `next/link`, `next/font` y ficheros de metadatos. Un `<img src="/photos/…">` no lo recibe; `srcFor`/`srcSetFor` en `lib/photos.ts` lo pasan por `withBase()`. Regla: cualquier ruta absoluta nueva va por `withBase()` |
| `metadataBase` = `siteOrigin` + `basePath` | Así canonical, hreflang y `og:image` heredan el subdirectorio. La `og:image` se escribe relativa y **sin** `withBase()`, o saldría duplicado el prefijo |
| `.nojekyll` en `public/` | GitHub Pages pasa la salida por Jekyll, que descarta `_next/`; el fichero vacío lo evita |
| `NEXT_PUBLIC_SITE_URL` | Sin dominio conocido, por defecto `https://mesonlasolana.example`: canonical y hreflang apuntan a un sitio que no existe hasta que se defina |
