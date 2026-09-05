/**
 * Genera public/photos a partir de los originales descargados de la ficha de
 * Google Maps. Cada foto se guarda en dos anchuras (800 / 1600) en WebP:
 * los JPEG originales pesan 100–540 KB cada uno y en móvil se notarían.
 *
 * Uso puntual: `node scripts/optimize-photos.mjs` desde la raíz del sitio.
 * Las rutas se calculan desde el propio script, no desde el cwd.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "..", "_photos");
const OUT = join(here, "..", "public", "photos");

/** Un nombre por fichero `_photos/<nombre>.jpg`. El orden no importa. */
const NAMES = [
  "fachada", // fachada de noche, rótulo «La Solana Mesón Restaurante»
  "comedor", // comedor: mantel blanco, sillas de madera, piedra en las paredes
  "barra-vinos", // barra con estantería de vinos y licores
  "pulpo", // pulpo a la gallega sobre tabla
  "chipirones-tinta", // cazuela de chipirones en su tinta
  "croquetas", // croquetas en fila
  "chuleton", // chuletón en plato de barro con patatas
  "solomillo-ternera", // solomillo con patatas y verdura
  "calamares", // calamares a la andaluza
  "sepionet", // sepionet a la plancha
  "mesa-tapas", // mesa con pulpo, calamares, pan
  "gambas-sepia", // gambas al ajillo y sepia
  "zamburinas", // zamburiñas en su concha
  "tarta-queso", // tarta de queso con sirope
  "montaditos-orza", // montaditos de lomo de orza
  "leche-frita", // leche frita con helado
  "jamon-queso", // tabla de jamón y queso
  "entrecot", // entrecot con patatas y habitas
  "tiramisu", // tiramisú en copa
  "gambas-ajillo", // gambas al ajillo en cazuela
  "tellinas", // tellinas con limón
  "solomillo-cerdo", // solomillo de cerdo con patatas y salsa
  "verdura", // variado de verdura a la plancha
  "pan", // cesta de pan
  "carta", // la carta en la vitrina de la puerta
];

await mkdir(OUT, { recursive: true });

const manifest = [];
for (const name of NAMES) {
  const buf = await readFile(join(SRC, `${name}.jpg`));
  const meta = await sharp(buf).rotate().metadata();
  for (const w of [800, 1600]) {
    const out = await sharp(buf)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    await writeFile(join(OUT, `${name}-${w}.webp`), out);
  }
  manifest.push({ name, width: meta.width, height: meta.height });
  console.log(`${name}: ${meta.width}x${meta.height}`);
}
console.log(JSON.stringify(manifest));
