import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { svg4VuePlugin } from "vite-plugin-svg4vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svg4VuePlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
