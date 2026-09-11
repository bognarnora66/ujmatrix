export const SITE_URL = "https://ujmatrix.hu";

/** Kanonikus URL az adott útvonalhoz (mindig a végleges domainen). */
export function canonical(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

/** BreadcrumbList JSON-LD a Főoldal → adott oldal útvonalhoz. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Főoldal",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: canonical(path),
      },
    ],
  };
}

/** Közös head-elemek egy aloldalhoz: canonical link + og:url. */
export function pageHead(path: string) {
  return {
    meta: [{ property: "og:url", content: canonical(path) }],
    links: [{ rel: "canonical", href: canonical(path) }],
  };
}
