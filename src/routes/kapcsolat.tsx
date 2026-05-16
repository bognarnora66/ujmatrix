import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { RESERVIO_URL } from "@/components/Layout";
import cityWoman from "@/assets/site/city-woman.png";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — Bognár Eleonóra légzésterapeuta | ÚjMátrix" },
      { name: "description", content: "Kapcsolat: Bognár Eleonóra légzésterapeuta, 1073 Budapest, Erzsébet körút 58. Telefon: +36 30 209 2338." },
      { property: "og:title", content: "Kapcsolat — ÚjMátrix" },
      { property: "og:description", content: "Bognár Eleonóra légzésterapeuta — Budapest, Erzsébet körút 58." },
    ],
  }),
  component: Kapcsolat,
});

const schema = z.object({
  name: z.string().trim().min(2, "Add meg a neved").max(100),
  email: z.string().trim().email("Érvénytelen email cím").max(255),
  message: z.string().trim().min(10, "Legalább 10 karakter").max(2000),
});

function Kapcsolat() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Üzenet — ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:hello@ujmatrix.hu?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Köszönöm! Megnyílt az email küldő — kérlek küldd el az üzenetet.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={cityWoman}
          alt="Naplemente a város felett"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <span className="text-xs uppercase tracking-[0.3em] text-primary drop-shadow">Kapcsolat</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl drop-shadow-sm">
            Írj nekem<br /><em className="not-italic text-primary">vagy gyere el</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-5 gap-12">
        <aside className="md:col-span-2 space-y-8">
          <div className="rounded-3xl bg-secondary/40 p-8">
            <div className="font-display text-2xl text-foreground mb-6">Bognár Eleonóra</div>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                <div className="text-sm text-foreground/80 leading-relaxed">
                  1073 Budapest<br />Erzsébet körút 58.
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="text-primary shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                <a href="tel:+36302092338" className="text-sm text-foreground/80 hover:text-primary">+36 30 209 2338</a>
              </div>
              <div className="flex gap-3">
                <Mail className="text-primary shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                <a href="mailto:hello@ujmatrix.hu" className="text-sm text-foreground/80 hover:text-primary">hello@ujmatrix.hu</a>
              </div>
            </div>
          </div>

          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl bg-primary text-primary-foreground p-8 hover:opacity-95 transition"
          >
            <div className="text-xs uppercase tracking-widest opacity-70 mb-2">Foglalás</div>
            <div className="font-display text-2xl">Időpontfoglalás Reservión →</div>
          </a>
        </aside>

        <form onSubmit={onSubmit} className="md:col-span-3 space-y-6">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Név</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg text-foreground transition-colors"
              placeholder="A neved"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg text-foreground transition-colors"
              placeholder="email@pelda.hu"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Üzenet</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              rows={6}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg text-foreground transition-colors resize-none"
              placeholder="Mit szeretnél megosztani velem?"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition disabled:opacity-60"
          >
            <Send size={16} />
            {sending ? "Küldés..." : "Üzenet küldése"}
          </button>
        </form>
      </section>
    </>
  );
}
