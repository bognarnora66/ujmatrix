// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// GitHub Pages-hez statikus build: BASE_PATH pl. "/repo-neve/" (alapértelmezett "/")
const base = process.env["BASE_PATH"] ?? "/";
// Statikus (GitHub Pages) buildnél nincs szükség a Cloudflare worker entry-re;
// a prerenderhez az alapértelmezett szerver build kell (dist/server/server.js).
const isStaticPagesBuild = Boolean(process.env["BASE_PATH"]);

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    ...(isStaticPagesBuild ? {} : { server: { entry: "server" } }),
    prerender: {
      routes: [
        "/",
        "/rolam",
        "/betekintes",
        "/media",
        "/ajandekutalvanyok",
        "/kapcsolat",
        "/aszf",
      ],
      crawlLinks: true,
    },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "404.html",
      },
    },
  },
});
