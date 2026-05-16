import { createFileRoute } from "@tanstack/react-router";
import { Gift, Sparkles, Heart } from "lucide-react";
import { RESERVIO_URL } from "@/components/Layout";

export const Route = createFileRoute("/ajandekutalvanyok")({
  head: () => ({
    meta: [
      { title: "Ajándékutalványok és bérletek | ÚjMátrix" },
      { name: "description", content: "Ajándékozz légzésterápiát, coachingot vagy bérletet szeretteidnek. Bognár Eleonóra ÚjMátrix." },
      { property: "og:title", content: "Ajándékutalványok és bérletek — ÚjMátrix" },
      { property: "og:description", content: "Ajándékozz egy belső utazást." },
    ],
  }),
  component: Page,
});

const items = [
  {
    icon: Gift,
    title: "Egyalkalmas ajándékutalvány",
    price: "25 000 Ft",
    desc: "Egy alkalom légzésterápia vagy coaching. Tökéletes első találkozásra.",
  },
  {
    icon: Sparkles,
    title: "3 alkalmas bérlet",
    price: "69 000 Ft",
    desc: "Három alkalmas csomag, kedvezményes áron. Mélyebb folyamathoz ideális.",
  },
  {
    icon: Heart,
    title: "5 alkalmas bérlet",
    price: "110 000 Ft",
    desc: "Öt alkalmas csomag — komolyabb belső munkára, tartós változásra.",
  },
];

function Page() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Ajándékozz</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl">
          Ajándékutalványok<br /><em className="not-italic text-primary">és bérletek</em>
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed text-lg">
          Ajándékozz valami igazán értékeset: egy belső utazást, egy lélegzetvételnyi csendet, egy önmagával töltött órát. Az utalványok személyesek, igényesen elkészítve.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, price, desc }) => (
          <div key={title} className="rounded-3xl bg-card border border-border/60 p-8 hover:border-primary/40 transition-colors flex flex-col">
            <Icon className="text-primary" size={28} strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-2xl text-foreground">{title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
            <div className="mt-6 font-display text-3xl text-primary">{price}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Hogyan rendelhetsz?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Írj a <a href="mailto:hello@ujmatrix.hu" className="text-primary hover:underline">hello@ujmatrix.hu</a> címre, vagy hívj a <a href="tel:+36302092338" className="text-primary hover:underline">+36 30 209 2338</a> számon. Az utalványt e-mailben vagy nyomtatott formában is elküldöm.
        </p>
        <div className="mt-8">
          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition"
          >
            Időpontfoglalás
          </a>
        </div>
      </section>
    </>
  );
}
