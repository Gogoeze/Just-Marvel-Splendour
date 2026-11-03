import type { Business } from "@/data/content";
import { telLink, whatsappLink } from "@/lib/links";

export default function Hero({ business }: { business: Business }) {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-cream to-[#f0e8d2]">
      <div className="blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
      <div className="blob pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
        <p className="rise d1 mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
          {business.heroEyebrow}
        </p>

        <h1 className="rise d2 mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight text-leaf sm:text-7xl">
          {business.tagline}
        </h1>

        <p className="rise d2 mx-auto mt-6 max-w-xl text-lg text-ink/80">
          {business.heroText}
        </p>

        <div className="rise d4 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(business.whatsapp,"Hello, I'd like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-leaf px-8 py-3.5 font-medium text-white transition hover:bg-leaf-dark sm:w-auto"
          >
            Book a Consultation
          </a>
          <a
            href={telLink(business.whatsapp)}
            className="w-full rounded-full border border-leaf px-8 py-3.5 font-medium text-leaf transition hover:bg-leaf hover:text-white sm:w-auto"
          >
            Call {business.phone}
          </a>
        </div>

        <p className=" rise d5 mt-8 text-sm text-ink/60">
          {business.hours} · Walk-ins welcome
        </p>
      </div>
    </section>
  );
}