// Statikus HTML-előrenderelés GitHub Pages-hez.
// A `bun run build` (vite build) után futtatandó: node scripts/prerender-pages.mjs
// A buildelt SSR entry-t helyi HTTP szerveren futtatja,
// lekéri az összes oldalt, és a kliens-oldali kimenet alá menti a HTML-eket.
import { createServer } from "node:http";
import { mkdir, writeFile, copyFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
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

// --- Kimeneti mappák felderítése -------------------------------------------
// A build kimenete környezetfüggő lehet (Nitro preset-detektálás CI-ben),
// ezért több ismert helyen is megkeressük a kliens és a szerver kimenetet.

const clientDirCandidates = [
  join(root, "dist", "client"),
  join(root, ".output", "public"),
  join(root, "dist"),
];

function looksLikeClientDir(dir) {
  return existsSync(join(dir, "assets")) || existsSync(join(dir, "index.html"));
}

const clientDir = clientDirCandidates.find(
  (dir) => existsSync(dir) && looksLikeClientDir(dir),
);
if (!clientDir) {
  console.error(
    `✗ Nem találom a kliens kimenetet. Keresett helyek:\n  ${clientDirCandidates.join("\n  ")}`,
  );
  process.exit(1);
}

// Rekurzívan megkeresi az első "index.mjs"-t, ami SSR entry-nek tűnik.
async function findServerEntry(dir, depth = 0) {
  if (depth > 3 || !existsSync(dir)) return undefined;
  const direct = join(dir, "index.mjs");
  if (existsSync(direct)) return direct;
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    if ((await stat(full)).isDirectory()) {
      const found = await findServerEntry(full, depth + 1);
      if (found) return found;
    }
  }
  return undefined;
}

const serverDirCandidates = [
  join(root, "dist", "server"),
  join(root, ".output", "server"),
];

let serverEntryPath;
for (const dir of serverDirCandidates) {
  serverEntryPath = await findServerEntry(dir);
  if (serverEntryPath) break;
}

if (!serverEntryPath) {
  console.error(
    `✗ Nem találom az SSR server entry-t. Keresett helyek:\n  ${serverDirCandidates.join("\n  ")}`,
  );
  process.exit(1);
}

console.log(`Kliens kimenet: ${clientDir}`);
console.log(`Server entry:   ${serverEntryPath}`);

// --- SSR entry betöltése -----------------------------------------------------

const serverModule = await import(pathToFileURL(serverEntryPath).toString());
const serverEntry =
  serverModule.default?.fetch
    ? serverModule.default
    : serverModule.fetch
      ? serverModule
      : undefined;

if (!serverEntry || typeof serverEntry.fetch !== "function") {
  console.error("✗ A server entry nem exportál fetch függvényt.");
  process.exit(1);
}

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

console.log("Kész: statikus oldalak a kliens kimenetben.");
