import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import logo from "@/assets/site/logo.png";
import footerBg from "@/assets/site/footer-bg.jpg";


const RESERVIO_URL = "https://ujmatrix.reservio.com/";

const nav = [
  { to: "/", label: "Főoldal" },
  { to: "/rolam", label: "Rólam" },
  { to: "/betekintes", label: "Betekintés" },
  { to: "/media", label: "Média" },
  { to: "/ajandekutalvanyok", label: "Ajándékutalványok" },
  { to: "/kapcsolat", label: "Kapcsolat" },
  { to: "/aszf", label: "ÁSZF" },
] as const;

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
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
          >
            Időpontfoglalás
          </a>
        </nav>
        <button
          aria-label="Menü"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-foreground text-base"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm text-center"
            >
              Időpontfoglalás
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
            {nav.map((n) => (
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

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <MessengerFab />
    </div>
  );
}

export { RESERVIO_URL };
