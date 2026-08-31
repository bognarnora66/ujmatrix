import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Phone } from "lucide-react";
import { RESERVIO_URL } from "@/components/Layout";
import mediaHero from "@/assets/site/media-hero.png";

// Helyi, statikusan kiszolgált videók — GitHub Pages-en is működnek (BASE_PATH-tal).
const mediaBase = `${import.meta.env.BASE_URL}media/`;

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Média — Videók, hanganyagok | ÚjMátrix" },
      { name: "description", content: "Bognár Eleonóra légzésterapeuta videói és hanganyagai. Nézz be egy pillanatra a munkámba." },
      { property: "og:title", content: "Média — ÚjMátrix" },
      { property: "og:description", content: "Videók és hanganyagok légzésterápiáról." },
    ],
  }),
  component: Media,
});

const videos = [
  { id: "3Ccr9Tn-0Ms", title: "Miért gyere el hozzám?" },
  { id: "zqt3E8OLfTI", title: "ÚjMátrix — bemutatkozás" },
];

const tiktoks = [
  { src: tiktok1.url, title: "TikTok promó — 2025.10.01" },
  { src: tiktok2.url, title: "ÚjMátrix promó — TikTok" },
];

function Media() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={mediaHero}
          alt="Média képernyők kollázs"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Média</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl drop-shadow-sm">
            Videók és<br /><em className="not-italic text-primary">hanganyagok</em>
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/85 leading-relaxed text-lg">
            Foglalj időpontot egy rövid beszélgetésre, és nézzük meg, hogyan tudok segíteni.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((v) => (
            <div key={v.id} className="space-y-4">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/60 shadow-xl bg-card">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h2 className="font-display text-2xl text-foreground">{v.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">TikTok videók</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
          {tiktoks.map((v) => (
            <div key={v.src} className="space-y-4">
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-border/60 shadow-xl bg-black">
                <video
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-foreground">{v.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-secondary/40 border border-border/60 p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Bognár Eleonóra — légzésterapeuta
          </h2>
          <p className="mt-4 text-muted-foreground">
            Foglalj időpontot egy rövid beszélgetésre, és nézzük meg, hogyan tudok segíteni.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition"
            >
              Időpontfoglalás
            </a>
            <a
              href="tel:+36302092338"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 hover:bg-foreground/5 transition text-foreground"
            >
              <Phone size={16} /> +36 30 209 2338
            </a>
          </div>
          <div className="mt-8 flex gap-5 justify-center text-muted-foreground">
            <a href="https://www.facebook.com/bognareleonora/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition">
              <Facebook size={22} />
            </a>
            <a href="https://www.instagram.com/bognarnora66" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition">
              <Instagram size={22} />
            </a>
            <a href="https://www.tiktok.com/@legzesterapia_elinor" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-primary transition text-sm font-semibold self-center">
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
