import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/welbex/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_mixins.scss" as *;`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
})