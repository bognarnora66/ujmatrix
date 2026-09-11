import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { SITE_URL } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Nem található az oldal</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A keresett oldal nem létezik vagy elköltözött.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition">
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Hiba történt</h1>
        <p className="mt-2 text-sm text-muted-foreground">Próbáld újra, vagy térj vissza a főoldalra.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90">Újra</button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm text-foreground hover:bg-accent">Főoldal</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ÚjMátrix — Légzésterápia és Coaching | Bognár Eleonóra" },
      { name: "description", content: "Légzésterapeuta Budapesten. Stresszoldás, transzlégzés, coaching — visszatalálni önmagadhoz." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Bognár Eleonóra" },
      { property: "og:title", content: "ÚjMátrix — Légzésterápia és Coaching" },
      { property: "og:description", content: "Az Újmátrixban teljes vagy. Légzésterápia, coaching, belső csend." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ÚjMátrix" },
      { property: "og:locale", content: "hu_HU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "ÚjMátrix",
              inLanguage: "hu-HU",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": ["HealthAndBeautyBusiness", "Organization"],
              "@id": `${SITE_URL}/#organization`,
              name: "ÚjMátrix — Bognár Eleonóra",
              url: `${SITE_URL}/`,
              image: `${SITE_URL}/logo-2026.png`,
              logo: `${SITE_URL}/logo-2026.png`,
              telephone: "+36302092338",
              email: "bognarnora66@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Erzsébet körút 58.",
                postalCode: "1073",
                addressLocality: "Budapest",
                addressCountry: "HU",
              },
              sameAs: [
                "https://www.facebook.com/bognareleonora/",
                "https://www.instagram.com/bognarnora66",
                "https://www.tiktok.com/@legzesterapia_elinor",
              ],
              founder: { "@id": `${SITE_URL}/#person` },
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: "Bognár Eleonóra",
              jobTitle: "Légzésterapeuta, coach",
              url: `${SITE_URL}/rolam`,
              telephone: "+36302092338",
              email: "bognarnora66@gmail.com",
              worksFor: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <Toaster />
    </QueryClientProvider>
  );
}
