import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/aszf")({
  head: () => ({
    meta: [
      { title: "ÁSZF — Általános Szerződési Feltételek | ÚjMátrix" },
      { name: "description", content: "Általános Szerződési Feltételek — Bognár Eleonóra légzésterapeuta. Kezelések, bérletek, időpontfoglalás, módosítás és lemondás szabályai." },
      { property: "og:title", content: "ÁSZF — ÚjMátrix" },
      { property: "og:description", content: "Általános Szerződési Feltételek." },
    ],
  }),
  component: Aszf,
});

function Aszf() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">
          Dokumentum
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl text-foreground leading-[1.05]">
          Általános Szerződési Feltételek
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
          Jelen dokumentum nem kerül iktatásra (utólag nem hozzáférhető), kizárólag elektronikus formában kerül megkötésre, nem minősül írásbeli szerződésnek, magyar nyelven íródik, magatartási kódexre nem utal. Bármely időpontot a Reservio-n keresztül lefoglaló személy az időpont befoglalásakor automatikusan elfogadja az Általános Szerződési Feltételeket az alábbiak szerint:
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-16">
        {/* Kezelések */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Kezelések
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>Az időpontot lefoglaló Személy a szükséges, általa, szabad akaratából választott kezeléshez hozzájárul.</li>
            <li>A kezelés eredményessége érdekében a terapeutával együttműködik.</li>
            <li>Hozzájárul személyes adatai használatához az állapotát illető utánkövetés céljából, vagy időpont egyeztetés miatt.</li>
            <li>A kezeléssel járó kötelezettséget megértette, tudomásul veszi és vállalja.</li>
            <li>Elfogadja, hogy ha a számára előjegyzett időpontban nem tud megjelenni és ezt nem jelzi legalább 48 órával a fenntartott kezelési időpont előtt, köteles a kezelés díját 8 naptári napon belül Bognár Eleonóra – Légzésterapeuta részére megtéríteni az alábbi számlaszámra: OTP .......................................................................................</li>
          </ul>
        </div>

        {/* Bérlet */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Bérletre vonatkozó szabályok
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>Tudomásul veszi, hogy a vásárolható bérletek felhasználhatósági ideje a bérlet vásárlásának napjától számítva 2 hónap. E határidőn túl a fel nem használt alkalmak elvesznek, pénz visszatérítésre nincsen mód.</li>
            <li className="list-none pl-0">
              <span className="text-sm text-muted-foreground italic">
                Pl.: egy 2022.03.05-én vásárolt 5 alkalmas Coaching bérletet legkésőbb 2022.05.05-ig lehet használni.
              </span>
            </li>
            <li>A bérlet névre szóló, át nem ruházható más személyre.</li>
          </ul>
        </div>

        {/* Időpontfoglalás */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Időpontfoglalás
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>Felhasználó a weboldalon, vagy telefonon történő kezelésre való jelentkezéssel kijelenti, hogy jelen ÁSZF és a weboldalon közzétett Adatkezelési tájékoztató feltételeit megismerte és elfogadja, az adatkezelésekhez hozzájárul.</li>
            <li>Felhasználó a weboldalon vagy telefonon történő kezelésre való jelentkezés során köteles a saját, valós adatait megadni. Valótlan, vagy más személyhez köthető adatok esetén a létrejövő szerződés semmis.</li>
            <li>Szolgáltató kizárja felelősségét, amennyiben Felhasználó más nevében, más személy adataival veszi igénybe szolgáltatását.</li>
          </ul>
        </div>

        {/* Időpont módosítása */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Időpont módosítása
            </h2>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Időpont módosítása a Szolgáltató hozzájárulásával lehetséges. Amennyiben 48 órán belül történik az időpont módosítása, a helyiség bérleti díját (2800 Ft / óra), valamint további 10% költségtérítést számol fel Szolgáltató a szolgáltatást igénybe vevő személynek, melyet a szolgáltatás teljesítésekor fizet meg a Szolgáltatónak:
          </p>
          <div className="rounded-2xl bg-secondary/40 p-6 text-sm text-foreground/80">
            <p className="font-medium text-foreground mb-1">Bognár Eleonóra – Légzésterapeuta</p>
            <p>OTP .......................................................................................</p>
            <p className="mt-2 text-muted-foreground">
              Megjegyzés rovatba: az időpontot lemondó személy neve, valamint „módosítás48”
            </p>
          </div>
        </div>

        {/* Időpont lemondása */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Időpont lemondásának szabályai
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>A lefoglalt időpont visszamondása legkésőbb 48 órával az időpont megkezdése előttig költségmentes.</li>
            <li>Azt követően, tekintettel az előre kifizetett helyiség bérleti díj költségre, valamint az utazás költségére:</li>
            <li>Szolgáltatást lefoglaló személy elfogadja, hogy ha a számára előjegyzett időpontban nem tud megjelenni és ezt nem jelzi legalább 48 órával a fenntartott kezelési időpont előtt, köteles a kezelés díj 50%-át 8 naptári napon belül Bognár Eleonóra – Légzésterapeuta részére megtéríteni az alábbiak szerint:</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-secondary/40 p-6 text-sm text-foreground/80">
            <p className="font-medium text-foreground mb-1">Bognár Eleonóra – Légzésterapeuta</p>
            <p>OTP .......................................................................................</p>
            <p className="mt-2 text-muted-foreground">
              Megjegyzés rovatba: az időpontot lemondó személy neve, valamint „törlés48”
            </p>
          </div>
        </div>

        {/* Dátum */}
        <div className="pt-8 border-t border-border/60">
          <p className="text-sm text-muted-foreground">
            Kelt: 2023.02.15, Budapest
          </p>
        </div>
      </section>
    </>
  );
}
