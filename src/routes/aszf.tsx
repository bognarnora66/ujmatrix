import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/aszf")({
  head: () => ({
    meta: [
      { title: "ÁSZF — Általános Szerződési Feltételek | ÚjMátrix" },
      { name: "description", content: "Általános Szerződési Feltételek — Bognár Eleonóra légzésterapeuta. Kezelések, bérletek, időpontfoglalás, lemondás és módosítás szabályai." },
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
          Általános Szerződési Feltételek (ÁSZF)
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
          Jelen dokumentum nem kerül iktatásra (utólag nem hozzáférhető), kizárólag elektronikus formában kerül megkötésre, nem minősül írásbeli szerződésnek, magyar nyelven íródik, magatartási kódexre nem utal. Bármely időpontot a Reservio-n keresztül lefoglaló személy az időpont befoglalásakor automatikusan elfogadja az Általános Szerződési Feltételeket az alábbiak szerint:
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-16">
        {/* 1. Kezelések és együttműködés */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              1. Kezelések és együttműködés
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>Az időpontot lefoglaló Személy (a továbbiakban: Felhasználó) a szükséges, általa, szabad akaratából választott kezeléshez hozzájárul. A kezelés eredményessége érdekében a Felhasználó a terapeutával együttműködik.</li>
            <li>Felhasználó hozzájárul személyes adatai használatához az állapotát illető utánkövetés céljából, vagy időpont-egyeztetés miatt (az Adatkezelési Tájékoztatóban foglaltak szerint). A kezeléssel járó kötelességeket a Felhasználó megértette, tudomásul veszi és vállalja.</li>
          </ul>
        </div>

        {/* 2. Bérletre vonatkozó szabályok */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              2. Bérletre vonatkozó szabályok
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>A vásárolható bérletek felhasználhatósági ideje a bérlet vásárlásának napjától számítva pontosan 2 hónap. E határidőn túl a fel nem használt alkalmak elvesznek, pénz visszatérítésére nincsen mód.</li>
            <li className="list-none pl-0">
              <span className="text-sm text-muted-foreground italic">
                Példa: Egy 2026.06.05-én vásárolt 5 alkalmas bérletet legkésőbb 2026.08.05-ig lehet felhasználni.
              </span>
            </li>
            <li>A bérlet minden esetben névre szóló, más személyre át nem ruházható.</li>
          </ul>
        </div>

        {/* 3. Időpontfoglalás */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              3. Időpontfoglalás
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li>Felhasználó a weboldalon, vagy telefonon történő kezelésre való jelentkezéssel kijelenti, hogy jelen ÁSZF és a weboldalon közzétett Adatkezelési Tájékoztató feltételeit megismerte és elfogadja, az adatkezelésekhez hozzájárul.</li>
            <li>Felhasználó a weboldalon vagy telefonon történő kezelésre való jelentkezés során köteles a saját, valós adatait megadni. Valótlan, vagy más személyhez köthető adatok esetén a létrejövő szerződés semmis. Szolgáltató kizárja felelősségét, amennyiben Felhasználó más nevében, más személy adataival veszi igénybe szolgáltatását.</li>
          </ul>
        </div>

        {/* 4. Időpont lemondásának és módosításának szabályai */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              4. Időpont lemondásának és módosításának szabályai
            </h2>
          </div>
          <ul className="space-y-4 text-foreground/80 leading-relaxed list-disc pl-5">
            <li><strong>Díjmentes lemondás és módosítás:</strong> A lefoglalt időpont legkésőbb 48 órával a kezelés kezdete előtt díjmentesen lemondható vagy módosítható. Az időpont lefoglalásával a fenti lemondási feltételek elfogadásra kerülnek.</li>
            <li><strong>48 órán belüli, de 24 órán túli lemondás/módosítás:</strong> 48 és 24 órán belüli lemondás vagy időpont-módosítás esetén a szolgáltatás díjának 50%-a, azaz 10 000 Ft fizetendő bánatpénzként.</li>
            <li><strong>24 órán belüli lemondás/módosítás:</strong> 24 órán belüli lemondás vagy időpont-módosítás esetén a szolgáltatás teljes díja, azaz 20 000 Ft fizetendő.</li>
            <li><strong>Meg nem jelenés:</strong> Amennyiben a Felhasználó a lefoglalt időpontban nem jelenik meg, a szolgáltatás teljes díja, azaz 20 000 Ft fizetendő.</li>
          </ul>
        </div>

        {/* 5. Fizetési feltételek lemondási díj esetén */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary" size={22} strokeWidth={1.5} />
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              5. Fizetési feltételek lemondási díj esetén
            </h2>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A lemondási díj a lemondástól, illetve meg nem jelenés esetén a kezelési időponttól számított 2 naptári napon belül, banki átutalással fizetendő az alábbi számlaszámra:
          </p>
          <div className="rounded-2xl bg-secondary/40 p-6 text-sm text-foreground/80 space-y-3">
            <p><strong className="text-foreground">Kedvezményezett neve:</strong> Eleonóra Bognár</p>

            <p className="font-medium text-foreground pt-1">Belföldi utalás esetén</p>
            <p><strong className="text-foreground">Belföldi bankszámlaszám (HUF):</strong> 30200014 19913410 93780771</p>

            <p className="font-medium text-foreground pt-1">Külföldről utalás esetén</p>
            <p><strong className="text-foreground">Nemzetközi bankszámlaszám (IBAN):</strong> HU78 3020 0014 1991 3410 9378 0771</p>
            <p><strong className="text-foreground">SWIFT / BIC kód:</strong> REVOHUHB</p>
            <p><strong className="text-foreground">Bank neve és címe:</strong> Revolut Bank UAB Magyarországi Fióktelepe, Szervita tér 8, 1052, Budapest, Hungary</p>
            <p><strong className="text-foreground">Levelező Bank BIC kódja:</strong> BARCGB22</p>

            <p className="pt-1"><strong className="text-foreground">Közlemény rovat:</strong> A lefoglalt időpontot lemondó/módosító személy neve, valamint a választott módosításnak megfelelően: „módosítás48”, „törlés48” vagy „törlés24”.</p>
          </div>
        </div>

        {/* Dátum */}
        <div className="pt-8 border-t border-border/60">
          <p className="text-sm text-muted-foreground">
            Készült: Budapest, 2026.06.30
          </p>
        </div>
      </section>
    </>
  );
}
