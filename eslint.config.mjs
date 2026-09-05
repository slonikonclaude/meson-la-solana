import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["components/**/*.tsx"],
    rules: {
      /*
       * El proyecto se exporta con output: "export", donde next/image no está
       * disponible. Las fotos ya vienen en WebP en dos anchuras
       * (scripts/optimize-photos.mjs) y se sirven con <img srcSet>, width/height
       * y loading="lazy" — justo lo que la regla quiere garantizar.
       */
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
