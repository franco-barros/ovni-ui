import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Desactiva el reset si no es necesario
  preflight: false,

  // Restringe la inclusión de archivos a un directorio específico
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Archivos para excluir
  exclude: ["./node_modules/**/*", "./tests/**/*"],

  // Útil para la personalización del tema
  theme: {
    extend: {},
  },

  // El directorio de salida para tu sistema CSS
  outdir: "styled-system",

  syntax: "object-literal",
  jsxFramework: "react",
});
