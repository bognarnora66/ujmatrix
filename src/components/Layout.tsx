import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/site/logo.png";
import footerBg from "@/assets/site/footer-bg.jpg";


const RESERVIO_URL = "https://ujmatrix.reservio.com/";

const headerNav: { to: string; label: string; children?: { to: string; label: string }[] }[] = [
  { to: "/", label: "Főoldal" },
  { to: "/rolam", label: "Rólam" },
  { to: "/betekintes", label: "Betekintés" },
  { to: "/media", label: "Média" },
  { to: "/ajandekutalvanyok", label: "Bérletek" },
  { to: "/kapcsolat", label: "Kapcsolat", children: [{ to: "/aszf", label: "ÁSZF" }] },
];

const footerNav: { to: string; label: string }[] = [
  { to: "/", label: "Főoldal" },
  { to: "/rolam", label: "Rólam" },
  { to: "/betekintes", label: "Betekintés" },
  { to: "/media", label: "Média" },
  { to: "/ajandekutalvanyok", label: "Bérletek" },
  { to: "/kapcsolat", label: "Kapcsolat" },
  { to: "/aszf", label: "ÁSZF" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="ÚjMátrix logo" width={40} height={40} className="w-9 h-9 md:w-10 md:h-10 object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
              Új<span className="text-primary">Mátrix</span>
            </span>
            <span className="hidden sm:block text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Bognár Eleonóra · +36 30 209 2338
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {headerNav.map((item) =>
            item.children ? (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "flex items-center gap-1 text-sm text-foreground font-medium transition-colors" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                  <ChevronDown size={14} className="opacity-70" />
                </Link>
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity">
                  <div className="rounded-lg border border-border bg-background shadow-lg py-2 px-1 min-w-[10rem]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        activeProps={{ className: "block px-3 py-2 text-sm text-foreground font-medium bg-accent/50 rounded-md transition-colors" }}
                        activeOptions={{ exact: true }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-sm text-foreground font-medium transition-colors" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
          >
            Foglalás és Árak
          </a>
        </nav>
        <button
          aria-label="Menü"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {headerNav.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-foreground text-base"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-border/60">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm text-center"
            >
              Foglalás és Árak
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 relative isolate overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Új<span className="text-primary">Mátrix</span></div>
          <p className="mt-3 text-sm text-white/75 max-w-xs leading-relaxed">
            Légzésterápia, coaching és belső csend — visszatalálni önmagadhoz.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/60 mb-3">Kapcsolat</div>
          <div className="text-sm text-white/85 leading-relaxed">
            Bognár Eleonóra<br />
            1073 Budapest, Erzsébet körút 58.<br />
            <a href="tel:+36302092338" className="hover:text-primary">+36 30 209 2338</a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/60 mb-3">Menü</div>
          <ul className="text-sm space-y-2">
            {footerNav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/85 hover:text-primary">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-white/70">
        © {new Date().getFullYear()} ÚjMátrix · Minden jog fenntartva
      </div>
    </footer>
  );
}

function MessengerFab() {
  return (
    <a
      href="https://m.me/bognareleonora"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Írj nekünk Messengeren"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#0084FF] text-white pl-3 pr-4 py-3 shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.14 2 11.25c0 2.88 1.43 5.45 3.67 7.14V22l3.36-1.84c.89.25 1.83.39 2.97.39 5.5 0 10-4.14 10-9.3S17.5 2 12 2zm1 12.5l-2.5-2.67-5 2.67 5.5-5.83L13.6 11.3 18.5 8.67 13 14.5z"/>
      </svg>
      <span className="hidden sm:inline text-sm font-medium">Messenger</span>
    </a>
  );
}

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Ugrás az oldal tetejére"
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-2 shadow-lg hover:opacity-90 transition"
    >
      <ArrowUp size={16} /> Fel
    </button>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <MessengerFab />
      <ScrollToTop />
    </div>
  );
}


export { RESERVIO_URL };
