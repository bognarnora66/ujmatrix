// Statikus HTML-előrenderelés GitHub Pages-hez.
// A `bun run build` (vite build) után futtatandó: node scripts/prerender-pages.mjs
// A dist/server/index.mjs SSR entry-t helyi HTTP szerveren futtatja,
// lekéri az összes oldalt, és a dist/client alá menti a HTML-eket.
import { createServer } from "node:http";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = join(root, "dist", "client");
const base = process.env["BASE_PATH"] ?? "/";

const routes = [
  "/",
  "/rolam",
  "/betekintes",
  "/media",
  "/ajandekutalvanyok",
  "/kapcsolat",
  "/aszf",
];

const serverEntry = (
  await import(pathToFileURL(join(root, "dist", "server", "index.mjs")).toString())
).default;

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  const webReq = new Request(url, { method: "GET", headers: req.headers });
  const noop = () => {};
  const ctx = { waitUntil: noop, context: { waitUntil: noop }, passThroughOnException: noop };
  const webRes = await serverEntry.fetch(webReq, {}, ctx);
  res.writeHead(webRes.status, Object.fromEntries(webRes.headers.entries()));
  const body = Buffer.from(await webRes.arrayBuffer());
  res.end(body);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;

let ok = true;
for (const route of routes) {
  const path = base === "/" ? route : `${base.replace(/\/$/, "")}${route === "/" ? "/" : route}`;
  const res = await fetch(`http://127.0.0.1:${port}${path}`);
  if (!res.ok) {
    console.error(`✗ ${route}: HTTP ${res.status}`);
    ok = false;
    continue;
  }
  let html = await res.text();
  if (!html.includes("<html")) {
    console.error(`✗ ${route}: nem HTML válasz`);
    ok = false;
    continue;
  }
  const out =
    route === "/"
      ? join(clientDir, "index.html")
      : join(clientDir, route.slice(1), "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`✓ ${route} -> ${out}`);
}

server.close();

if (!ok) {
  console.error("Prerender hiba – nem minden oldal készült el.");
  process.exit(1);
}

// SPA fallback: az ismeretlen útvonalakon is az app töltődjön be (GitHub Pages 404.html)
await copyFile(join(clientDir, "index.html"), join(clientDir, "404.html"));
// Jelzőfájl: GitHub Pages ne futtassa a Jekyll-t
await writeFile(join(clientDir, ".nojekyll"), "");

console.log("Kész: statikus oldalak a dist/client mappában.");
