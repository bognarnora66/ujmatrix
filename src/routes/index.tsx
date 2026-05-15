import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Wind, Heart, Compass, PlayCircle } from "lucide-react";
import heroImg from "@/assets/site/banner3.jpg";
import letGoImg from "@/assets/site/content3.jpg";
import { RESERVIO_URL } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ÚjMátrix — Az Újmátrixban teljes vagy" },
      { name: "description", content: "Légzésterápia, coaching és stresszoldás Budapesten. Foglalj időpontot Bognár Eleonórához." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-32 md:pt-40 md:pb-44 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Légzésterápia · Coaching
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05]">
            Az Újmátrixban<br />
            <em className="not-italic text-primary">teljes vagy</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Visszatalálni önmagadhoz a légzéseden keresztül. Csendben, biztonságban, ítélet nélkül.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base hover:opacity-90 transition"
            >
              Időpontfoglalás
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/rolam"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-8 py-4 text-base hover:bg-foreground/5 transition"
            >
              Rólam
            </Link>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Felismered magad?</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">
            Néha csak egy lélegzet választ el a változástól
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Wind, q: "Stresszesek a napjaid?", t: "Folyton pörög az agyad, nem tudsz lekapcsolni — még este sem." },
            { icon: Heart, q: "Döcög a párkapcsolatod?", t: "Régi minták térnek vissza, és nem találsz kiutat belőlük." },
            { icon: Compass, q: "Karrier elakadás?", t: "Tudod, mit szeretnél, mégis valami visszahúz, ahányszor lépnél." },
          ].map(({ icon: Icon, q, t }) => (
            <div key={q} className="group rounded-3xl bg-card border border-border/60 p-8 hover:border-primary/40 transition-colors">
              <Icon className="text-primary" size={28} strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl text-foreground">{q}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base hover:opacity-90 transition"
          >
            Foglalj időpontot
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={portraitImg} alt="Légzésterápia" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">A módszer</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight">
              Transzlégzés — ahol a test megmutatja, mire van szüksége
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A légzésterápiában megtanulod, hogyan adj jelzést a tested idegrendszerének: most biztonságban vagy, most pihenhetsz. A módosult tudatállapotban felszínre kerülnek azok az érzések, amiket sokszor nem is tudsz szavakba önteni.
            </p>
            <Link to="/betekintes" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              Olvass bele <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
