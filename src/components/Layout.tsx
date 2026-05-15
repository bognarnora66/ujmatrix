import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const RESERVIO_URL = "https://www.reservio.com/";

const nav = [
  { to: "/", label: "Főoldal" },
  { to: "/rolam", label: "Rólam" },
  { to: "/betekintes", label: "Betekintés" },
  { to: "/media", label: "Média" },
  { to: "/kapcsolat", label: "Kapcsolat" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
          Új<span className="text-primary">Mátrix</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
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
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-foreground">Új<span className="text-primary">Mátrix</span></div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Légzésterápia, coaching és belső csend — visszatalálni önmagadhoz.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Kapcsolat</div>
          <div className="text-sm text-foreground/80 leading-relaxed">
            Bognár Eleonóra<br />
            1073 Budapest, Erzsébet körút 58.<br />
            <a href="tel:+36302092338" className="hover:text-primary">+36 30 209 2338</a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Menü</div>
          <ul className="text-sm space-y-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ÚjMátrix · Minden jog fenntartva
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}

export { RESERVIO_URL };
