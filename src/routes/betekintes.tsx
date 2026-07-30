import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RESERVIO_URL } from "@/components/Layout";
import heroStars from "@/assets/site/betekintes-hero.png";


export const Route = createFileRoute("/betekintes")({
  head: () => ({
    meta: [
      { title: "Betekintés — Gondolatok légzésről, stresszről, gyógyulásról | ÚjMátrix" },
      { name: "description", content: "Rövid írások stresszoldásról, légzésterápiáról, coachingról, kiégésről, anyai és apai sebek feldolgozásáról." },
      { property: "og:title", content: "Betekintés — ÚjMátrix" },
      { property: "og:description", content: "Gondolatok légzésről, stresszről és gyógyulásról." },
    ],
  }),
  component: Betekintes,
});

type Post = { title: string; body: string; tags: string[] };
type Topic = { id: string; label: string; posts: Post[] };

const topics: Topic[] = [
  {
    id: "stressz",
    label: "Stresszoldás",
    posts: [
      { title: "Érzed, hogy sosem tudsz lekapcsolni?", body: "Folyton pörög az agyad, még este is? Én is ismertem ezt az érzést. A légzésterápiában megtanulod, hogyan adj jelzést a tested idegrendszerének: most biztonságban vagy, most pihenhetsz. Már néhány alkalom után érezni fogod a különbséget.", tags: ["stresszoldás", "légzésterápia", "mentálisegészség"] },
      { title: "Reggel fáradtan kelsz fel?", body: "Hiába alszol eleget, mégis kimerülten ébredsz? Ez nem lustaság — ez a felhalmozott stressz. A testünk éjjel is dolgozik, ha nem engedjük el a feszültséget. Coachingban és légzésterápiával megmutatom, hogyan töltődhetsz fel ténylegesen.", tags: ["kimerültség", "stressz", "önismeret"] },
      { title: "Szól hozzád valaki és már ideges vagy?", body: "Ha az apróságokon is felrobbansz, az nem jellemhiba — az a tested vészjelzése. Túl sok feszültség gyűlt fel. Stresszoldó munkánk során visszakapod azt a belső nyugalmat, ahonnan már nem az ingerültség vezet.", tags: ["idegesség", "stresszkezelés", "coaching"] },
      { title: "Te vagy a legerősebb mindenki számára?", body: "Mindenki rád támaszkodik, de ki támaszkodik rád? Az önmagunkra fordított figyelem nem önzőség — ez az alapja annak, hogy másoknak is tudjunk adni. Gyere el egy alkalomra, és nézd meg, milyen az, amikor csak veled foglalkozol.", tags: ["burnout", "önmagadért", "légzésterápia"] },
      { title: "Mikor volt utoljára igazán csendes egy napod?", body: "Nem unatkozós csend — hanem olyan, amikor belül is megállt minden? Ha már nem emlékszel, ideje változtatni. A stresszoldó légzésterápia pont erről szól: visszaadni a belső csendet.", tags: ["belső béke", "relaxáció", "stresszoldás"] },
    ],
  },
  {
    id: "legzes",
    label: "Légzésterápia",
    posts: [
      { title: "Hallottál már a légzésterápiáról?", body: "Sokan azt hiszik, ez csak mély levegővétel. Valójában ennél sokkal több — egy olyan állapotba visz, ahol a tested és az elméd maga mutatja meg, mire van szüksége. Nem kell hozzá semmi előismeret. Csak egy nyitott szív.", tags: ["légzésterápia", "transzlégzés", "önismeret"] },
      { title: "Tudtad, hogy a légzésed tükrözi a lelkiállapotod?", body: "Ha szorongsz, sekélyen lélegzel. Ha félsz, visszatartod a levegőt. A légzésterápiában megtanulod tudatosan használni ezt a kapcsolatot — és visszavenni az irányítást. Az eredmény? Több nyugalom, kevesebb feszültség.", tags: ["légzés", "szorongás", "mentálisegészség"] },
      { title: "Van egy érzés, amit nem tudsz szavakba önteni?", body: "Néha nem kell szavakat találni. A transzlégzés megkerüli az elmét, és közvetlenül a testhez szól. Régi érzések, terhek, feszültségek oldódnak fel — anélkül, hogy magyaráznod kellene bármit. Csak lélegzel.", tags: ["transzlégzés", "feldolgozás", "lélekgyógyítás"] },
      { title: "Próbáltál már mindent, de a szorongás visszajön?", body: "Sok ügyfelemnek ez volt az első mondata. A légzésterápia nem tüneteket kezel — a gyökérhez nyúl. Ott, ahol a szavak már nem érnek el. Egy alkalom után megérted, miről beszélek.", tags: ["szorongáskezelés", "légzésterápia", "coaching"] },
      { title: "Mi történik egy légzésterápiás alkalmon?", body: "Lefekszel, becsukod a szemed, és csak lélegzel — egy meghatározott ritmusban. Közben képek, érzések, emlékek jönnek fel. Nem irányítod, csak figyeled. Utána könnyebbnek érzed magad. Sokan sírnak, sokan nevetnek — mindenki megtalálja, amire szüksége van.", tags: ["légzésterápia", "élmény", "ujmatrix"] },
    ],
  },
  {
    id: "coaching",
    label: "Coaching",
    posts: [
      { title: "Tudod, mit szeretnél, mégis helyben állsz?", body: "Van egy célod, látod magad előtt — de valami mindig visszahúz. Ez nem gyengeség, ez egy minta. A coachingban együtt feltérképezzük, mi az, ami valójában visszatart, és megtaláljuk a saját utadat előre.", tags: ["coaching", "személyesfejlődés", "önismeret"] },
      { title: "Érzed, hogy mindenki más halad, csak te nem?", body: "Összehasonlítod magad másokkal, és úgy érzed, lemaradtál? A coaching nem arról szól, hogy utolérj valakit — hanem hogy megtaláld a saját tempódat és iránytűdet. Mert a te utad csak a tiéd.", tags: ["életcélok", "coaching", "önbizalom"] },
      { title: "Mikor döntöttél utoljára magadért?", body: "Sokszor hozzuk meg döntéseinket mások elvárásai alapján. A coachingban megtanulod felismerni, melyik hang a tiéd valójában. És onnan már sokkal könnyebb lépni.", tags: ["döntéshozatal", "határok", "coaching"] },
      { title: "Van egy álmod, amiről már rég nem beszéltél?", body: "Lehet, hogy félsz kimondani, mert akkor el kellene indulni felé. A coaching egy biztonságos tér, ahol kimondhatod — ítélet nélkül. És ahol kiderül, hogy az álom nem is olyan elérhetetlen.", tags: ["álmok", "életváltás", "coaching"] },
      { title: "Mi a különbség a coach és a terapeuta között?", body: "A terapeuta a múltat gyógyítja, a coach a jövőre fókuszál. Én a kettőt ötvözöm — légzésterápiás alappal, coachingos szemlélettel. Mert néha a régi sebek tartanak vissza az új lépéstől.", tags: ["coach", "terapeuta", "légzésterápia"] },
    ],
  },
  {
    id: "kiegés",
    label: "Kiégés",
    posts: [
      { title: "Reggel fáradtan kelsz, este nem tudsz aludni?", body: "Ez a kiégés klasszikus jele. A tested annyira túlpörgött, hogy már nem tudja, mikor kell pihenni. Nem akaraterő kérdése — az idegrendszered ragadt be. Légzésterápiával és coachingal visszatalálhatsz önmagadhoz.", tags: ["kiégés", "burnout", "stresszoldás"] },
      { title: "Valamikor szeretted a munkádat — most csak túléled?", body: "Ha már nem emlékszel, mikor csináltál valamit örömből, az nem lustaság. Az kiégés. A test és lélek jelzése, hogy valami alapvetően elbillent. Ideje megállni és benézni befelé.", tags: ["burnout", "munkahelyi stressz", "coaching"] },
      { title: "Mindenre azt mondod „igen”, közben belül üres vagy?", body: "A folyamatos megfelelés kiüríti az embert. Előbb-utóbb nem marad semmi, amit adhatnál — magadnak sem. A coachingban megtanuljuk együtt, hogyan mondj nemet anélkül, hogy bűntudatod legyen.", tags: ["határok", "megfelelési kényszer", "kiégés"] },
      { title: "Mikor sírtál utoljára — de nem is tudtad, miért?", body: "Ez az egyik leggyakoribb jel. A test levezeti, amit az elme már nem bír tartani. A kiégés nem egyik napról a másikra jön — lassan gyűlik. De ugyanígy, lassan el is lehet engedni.", tags: ["érzelmi kimerültség", "burnout", "légzésterápia"] },
      { title: "Azt hiszed, majd megoldódik magától?", body: "A kiégés nem múlik el pihenéssel. Sokan egy hosszú hétvége után visszatérnek — és ugyanolyan üresnek érzik magukat. Mert nem a fáradtság a probléma, hanem ami mögötte van. Azt nézzük meg együtt.", tags: ["kiégés", "önismeret", "coaching"] },
    ],
  },
  {
    id: "anya",
    label: "Anyai sebek",
    posts: [
      { title: "Anyukádtól vártad a melegséget, ami nem jött?", body: "Nem minden anya tud úgy szeretni, ahogy a gyereknek szüksége lett volna. Ez nem a te hibád volt. De felnőttként a te felelősséged, hogy meggyógyítsd azt a kis gyereket, aki még mindig vár valamire.", tags: ["anyai seb", "gyerekkori trauma", "önismeret"] },
      { title: "Sosem voltál elég jó — bármennyit próbáltál?", body: "Ez az érzés általában nem a jelenből jön. Hanem abból a gyerekből, aki hiába teljesített, hiába volt jó — az elismerés elmaradt. A légzésterápiában visszamehetsz ahhoz a pillanathoz, és végre megkaphatod, amire vártál.", tags: ["megfelelési kényszer", "anyai seb", "gyógyulás"] },
      { title: "Az anyád kritikus volt — most te vagy a legszigorúbb?", body: "Amit gyerekként hallottunk, belső hanggá válik. „Nem vagy elég.” „Ezt is elrontottad.” Ha felismered ezt a hangot magadban — tudnod kell, hogy nem az igazság. Csak egy régi minta. Le lehet cserélni.", tags: ["belső kritikus", "anyakapcsolat", "önszeretet"] },
      { title: "Nehéz neked határt húzni az anyáddal?", body: "Ha gyerekként a határaidat nem tisztelték, felnőttként sem tanulhattad meg természetesen tartani őket. Ez nem gyengeség — ez egy hiányzó minta. A coachingban ezt együtt pótoljuk.", tags: ["határok", "anyakapcsolat", "coaching"] },
      { title: "Megbocsátani — de nem elfogadni, hogy rendben volt?", body: "Sokan összekeverik a kettőt. A megbocsátás nem azt jelenti, hogy ami történt, az oké volt. Azt jelenti, hogy te többé nem viseled a terhét. Ez a te szabadságod.", tags: ["megbocsátás", "trauma", "légzésterápia"] },
    ],
  },
  {
    id: "apa",
    label: "Apai sebek",
    posts: [
      { title: "Apukád ott volt, de érzelmileg nem?", body: "A jelenlét nem csak testből áll. Sok apa dolgozott, eltartotta a családot — de a melegség, a 'büszke vagyok rád', az ölelés elmaradt. Ez a hiány ugyanúgy nyomot hagy, mint a nyílt elhanyagolás. Meg lehet gyógyítani.", tags: ["apai seb", "érzelmi elhanyagolás", "gyógyulás"] },
      { title: "Mindig az apád elismerését keresed?", body: "Ha gyerekként nem kaptad meg apádtól a 'jól csináltad' érzést, felnőttként is keresni fogod. Emberekben, sikerekben, munkában. A légzésterápiában visszamegyünk a forráshoz — és végre betöltjük azt az űrt.", tags: ["apai elismerés", "önbizalom", "légzésterápia"] },
      { title: "Apád indulatos volt — most te is félsz?", body: "Amit gyerekként láttunk, mintává válik. Vagy követjük, vagy annyira félünk tőle, hogy teljesen elfojtjuk az érzelmeinket. Egyik sem egészséges. A coachingban megtanulod az egészséges közepet.", tags: ["indulat", "apai minta", "önismeret"] },
      { title: "Apád elment — azóta nehéz bízni?", body: "Az elhagyás — akár halál, akár válás, akár csak érzelmi távolodás — mély sebet hagy. „Ha ő is elment, mindenki elmegy." Ez a hiedelem irányítja a kapcsolataidat, amíg nem nézünk rá együtt.", tags: ["elhagyásfélelem", "bizalmatlanság", "párkapcsolat"] },
      { title: "Sosem mondta, hogy szeret — most te se tudod?", body: "A szeretet kifejezése tanult viselkedés. Ha nem láttad, nem kaptad — nehéz adni. De ez nem végzet. A minta felismerhető, és megváltoztatható. Ott tudok lenni ebben az úton.", tags: ["szeretet", "apai seb", "coaching"] },
    ],
  },
  {
    id: "szorongas",
    label: "Szorongás",
    posts: [
      { title: "Folyton azon agyalsz, mi történhet rosszul?", body: "A szorongás gyakran a jövő feletti kontroll illúziójából táplálkozik. Megtanulhatod, hogyan nyugtasd meg a gondolataidat. A légzéstechnika segítségével visszajutsz a jelenbe.", tags: ["szorongás", "légzésterápia", "mentálisegészség"] },
      { title: "Szorít a mellkasod, mikor stresszhelyzetbe kerülsz?", body: "Ez nem 'csak a fejedben van' — a tested fiziológiailag reagál a fenyegetésre, akkor is, ha az nem valódi veszély. Légzéssel megtanulod felismerni ezeket a jeleket, és időben közbelépni.", tags: ["szorongásoldás", "testtudatosság", "légzésterápia"] },
      { title: "Mielőtt bármi történne, már a legrosszabbra számítasz?", body: "A szorongás kimerítő, és valóban nem véd meg semmitől. Együtt feltérképezzük, honnan származik ez a mintázat, és hogyan építhetsz belső biztonságot.", tags: ["aggodalom", "önismeret", "mentálisegészség"] },
      { title: "Társaságban mindig azon járatod az agyad, mit gondolnak rólad?", body: "A szociális szorongás sokszor láthatatlan, mégis kimerítő terhet jelent. Megtanulhatod, hogyan engedd el az állandó megfelelési kényszert, és legyél jelen önmagad számára.", tags: ["légzés", "önbizalom", "coaching"] },
      { title: "Éjszaka nem hagy aludni a sok 'mi lenne, ha'?", body: "A szorongó gondolatok különösen akkor erősödnek fel, amikor nincs mivel elterelni a figyelmed. Légzéstechnikával megtanulhatod kikapcsolni ezt a kört.", tags: ["alvászavar", "légzésterápia", "szorongás"] },
      { title: "Úgy érzed, a tested állandó készültségben van?", body: "A krónikus szorongás a testedben nyomot hagy: feszültség, gyors szívverés, nyugtalanság. Légzés során megtanulod, hogyan vezeted vissza szervezeted a nyugalmi állapotba.", tags: ["nyugtalanság", "légzésterápia", "stresszkezelés"] },
    ],
  },
  {
    id: "onertekeles",
    label: "Önértékelés",
    posts: [
      { title: "Folyton másokhoz hasonlítod magad?", body: "Az összehasonlítás csapdájában könnyű elveszíteni a saját értéked érzését. Megtanulhatod, hogyan találd meg újra a belső mércédet, ami nem mások teljesítményétől függ.", tags: ["önértékelés", "önismeret", "coaching"] },
      { title: "Nehezen fogadod el a dicséretet?", body: "Ha ösztönösen elhárítod a pozitív visszajelzéseket, az gyakran mélyebb önértékelési sebekre utal. Együtt dolgozunk azon, hogy valóban befogadhasd, amit megérdemelsz.", tags: ["önbecsülés", "önismeret", "mentálisegészség"] },
      { title: "Folyton bocsánatot kérsz olyasmiért, amiért nem kellene?", body: "A túlzott bocsánatkérés sokszor abból fakad, hogy nem érzed méltónak magad a saját helyedre. Megtanulhatod, hogyan állj ki magadért szégyenkezés nélkül.", tags: ["önérvényesítés", "határok", "coaching"] },
      { title: "Úgy érzed, mindig többet kell teljesíts, hogy elég legyél?", body: "Az állandó bizonyítási kényszer mögött gyakran az áll, hogy az értékedet a teljesítményhez kötöd. Megmutatom, hogyan alakítsd ki a valódi önbecsülésedet, ami nem dől össze egy hibától.", tags: ["teljesítménykényszer", "önértékelés", "burnout"] },
      { title: "Nehezen mondasz nemet, mert félsz, hogy csalódást okozol?", body: "Ha a mások tetszésére törekszel a saját igényeid rovására, az hosszú távon kiüresít. Megtanulhatod kimondani, amire szükséged van, anélkül hogy bűntudatod legyen.", tags: ["határok", "önértékelés", "önmagadért"] },
      { title: "Folyton másokhoz méred magad, és mindig alulmaradsz?", body: "A közösségi média és a külvilág elvárásai miatt könnyű abba a csapdába esni, hogy a saját életedet mások 'kirakatához' hasonlítod. Ez a folyamatos összehasonlítgatás lassan felemészti az önbecsülésedet. A coaching során megtanuljuk áthelyezni a fókuszt a külső elvárásokról a saját, egyedi értékeidre.", tags: ["önbecsülés", "összehasonlítás", "coaching"] },
    ],
  },
];

function Betekintes() {
  const [active, setActive] = useState(topics[0].id);
  const current = topics.find((t) => t.id === active)!;

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroStars}
          alt="Csillagos ég — légzésterápia, belső utazás"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Betekintés</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl drop-shadow-sm">
            Gondolatok<br /><em className="not-italic text-primary">légzésről, csendről, gyógyulásról</em>
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/80 leading-relaxed text-lg">
            Rövid írások a mindennapi témáimról — stresszoldás, légzésterápia, coaching, kiégés, anyai és apai sebek. Olvasd, ami most rezonál benned.
          </p>
          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
          >
            Foglalj időpontot
          </a>
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4">
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
        {current.posts.map((p, i) => (
          <article key={i} className="rounded-3xl bg-card border border-border/60 p-8 hover:border-primary/40 transition-colors">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">#{String(i + 1).padStart(2, "0")}</div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight">{p.title}</h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">{p.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
