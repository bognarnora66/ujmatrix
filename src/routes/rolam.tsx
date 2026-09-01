import { createFileRoute, Link } from "@tanstack/react-router";
import portraitImg from "@/assets/site/portrait-2026.jpg";
import doorwayImg from "@/assets/site/content1.jpg";
import heroImg from "@/assets/site/rolam-hero.jpg";
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
      <section className="relative w-full">
        <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden">
          <img src={heroImg} alt="ÚjMátrix — légzés és jelenlét" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-16 w-full">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Rólam</span>
              <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] max-w-3xl drop-shadow-sm">
                Bognár Eleonóra<br /><em className="not-italic text-primary">légzésterapeuta</em>
              </h1>
            </div>
          </div>
        </div>
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
            Munkám középpontjában a <em>transzlégzés</em> áll — egy olyan módszer, amellyel elérhető a módosult tudatállapot, és lehetőség nyílik a magzati, gyermekkori és egyéb traumák feldolgozására.
          </p>
          <p>
            Hiszem, hogy a Légzés általi tudatállapot mindent tud rólad. Csak az kell, hogy egy biztonságos térben végre meghalld. Ebben szeretnék melletted lenni.
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

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <img src={doorwayImg} alt="Átjáró az Új Mátrixba" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="font-display text-3xl md:text-4xl text-white max-w-md leading-tight drop-shadow-lg">
                Egy ajtón mindig át lehet menni, ha kinyitod.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
