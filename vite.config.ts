import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";

// plugins
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";

// postcss
import postcssCustomMedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/welbex/",

  plugins: [react(), eslint(), stylelint({ fix: true })],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    modules: {
      localsConvention: "camelCase",
    },
    postcss: {
      plugins: [postcssCustomMedia, autoprefixer({})],
    },
  },
});
