import { createFileRoute, Link } from "@tanstack/react-router";
import portraitImg from "@/assets/site/content3.jpg";
import doorwayImg from "@/assets/site/content1.jpg";
import { RESERVIO_URL } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/rolam")({
  head: () => ({
    meta: [
      { title: "Rólam — Bognár Eleonóra légzésterapeuta | ÚjMátrix" },
      { name: "description", content: "Bognár Eleonóra légzésterapeuta. Transzperszonális Pszichológia és Légzés Intézete. Transzlégzés és integrálpszichológia." },
      { property: "og:title", content: "Rólam — Bognár Eleonóra" },
      { property: "og:description", content: "Légzésterapeuta, coach. Transzlégzés és integrálpszichológia." },
    ],
  }),
  component: Rolam,
});

function Rolam() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Rólam</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl">
          Bognár Eleonóra<br /><em className="not-italic text-primary">légzésterapeuta</em>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] sticky top-28">
            <img src={portraitImg} alt="Bognár Eleonóra" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6 text-foreground/85 leading-relaxed text-lg">
          <p>
            Régóta foglalkozom légzésterápiával. A <strong className="text-foreground">Transzperszonális Pszichológia és Légzés Intézetében</strong> végeztem, ahol az integrálpszichológia alapjait sajátítottam el.
          </p>
          <p>
            Munkám középpontjában a <em>transzlégzés</em> áll — egy olyan módszer, amellyel elérhető a módosult tudatállapot, és lehetőség nyílik a magzati vagy gyermekkori traumák feldolgozására.
          </p>
          <p>
            Hiszem, hogy a tested mindent tud rólad. Csak az kell, hogy egy biztonságos térben végre meghallgasd. Ebben szeretnék melletted lenni.
          </p>

          <div className="pt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Transzlégzés", d: "Módosult tudatállapot, mély feldolgozás" },
              { t: "Integrálpszichológia", d: "Egészben látni az embert" },
              { t: "Stresszoldás", d: "Idegrendszeri visszahangolás" },
              { t: "Coaching", d: "Jövőre fókuszáló munka" },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-border/60 p-5 bg-card">
                <div className="font-display text-xl text-foreground">{s.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <a href={RESERVIO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition">
              Időpontfoglalás <ArrowRight size={16} />
            </a>
            <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 hover:bg-foreground/5 transition">
              Írj nekem
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
