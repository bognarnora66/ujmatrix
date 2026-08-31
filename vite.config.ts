import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages és egyedi domain (ujmatrix.hu) gyökér útvonala
const base = "/";

export default defineConfig({
  vite: {
    base,
    build: {
      // Biztosítja a relatív/gyökér megbízható asset betöltést
      assetsDir: "assets",
    },
  },
  tanstackStart: {
    // Statikus kiszolgáláshoz / GitHub Pages-hez előkészített konfiguráció
    pages: {
      router: {
        type: "history",
      },
    },
  },
});
