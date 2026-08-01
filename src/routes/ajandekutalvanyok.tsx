import { createFileRoute } from "@tanstack/react-router";
import { RESERVIO_URL } from "@/components/Layout";
import heroImg from "@/assets/site/gift-hero.jpg";
import utalvany1 from "@/assets/site/utalvany-1.png";
import utalvany5 from "@/assets/site/utalvany-5.png";
import utalvany10 from "@/assets/site/utalvany-10.png";
import berlet5 from "@/assets/site/berlet-5.png";
import berlet10 from "@/assets/site/berlet-10.png";

export const Route = createFileRoute("/ajandekutalvanyok")({
  head: () => ({
    meta: [
      { title: "Ajándék & Bérletek | ÚjMátrix" },
      { name: "description", content: "Ajándékozz légzésterápiát, coachingot vagy bérletet szeretteidnek. Bognár Eleonóra ÚjMátrix." },
      { property: "og:title", content: "Ajándék & Bérletek — ÚjMátrix" },
      { property: "og:description", content: "Ajándékozz egy belső utazást." },
    ],
  }),
  component: Page,
});

const utalvanyok = [
  { src: utalvany1, title: "1 alkalmas ajándékutalvány", desc: "Egy alkalom légzésterápia vagy coaching.", price: "20 000 Ft" },
  { src: utalvany5, title: "5 alkalmas ajándékutalvány", desc: "Mélyebb folyamathoz, kedvezményes csomagban.", price: "100 000 Ft" },
  { src: utalvany10, title: "10 alkalmas ajándékutalvány", desc: "Komoly belső munkára, tartós változásra.", price: "180 000 Ft" },
];

const berletek = [
  { src: berlet5, title: "5 alkalmas bérlet", desc: "Saját magadnak — öt alkalom, kedvezménnyel.", price: "90 000 Ft" },
  { src: berlet10, title: "10 alkalmas bérlet", desc: "Hosszabb folyamathoz, a legkedvezőbb áron.", price: "180 000 Ft" },
];

const szolgaltatasok = [
  { title: "Légzésterápia (transzlégzés)", price: "20 000 Ft" },
  { title: "Coaching", price: "20 000 Ft" },
];

function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-24 md:pt-40 md:pb-32 text-center">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.32em] font-semibold text-white bg-black/35 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg">
            Ajándékozz
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.05]">
            Ajándékutalványok<br /><em className="not-italic text-primary">és bérletek</em>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
            Ajándékozz valami igazán értékeset: egy belső utazást, egy lélegzetvételnyi csendet, egy önmagával töltött órát.
          </p>
        </div>
      </section>

      {/* AJÁNDÉKUTALVÁNYOK */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Ajándékba</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">Ajándékutalványok</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {utalvanyok.map(({ src, title, desc }) => (
            <div key={title} className="rounded-3xl bg-card border border-border/60 overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-[3/2] overflow-hidden bg-black">
                <img src={src} alt={title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BÉRLETEK */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Magadnak</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">Bérletek</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {berletek.map(({ src, title, desc }) => (
              <div key={title} className="rounded-3xl bg-card border border-border/60 overflow-hidden hover:border-primary/40 transition-colors">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={src} alt={title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Hogyan rendelhetsz?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Írj a <a href="mailto:bognarnora66@gmail.com" className="text-primary hover:underline">bognarnora66@gmail.com</a> címre, vagy hívj a <a href="tel:+36302092338" className="text-primary hover:underline">+36 30 209 2338</a> számon. Az utalványt e-mailben vagy nyomtatott formában is elküldöm.
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
