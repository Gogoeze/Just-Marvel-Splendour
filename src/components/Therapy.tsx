import type { Service } from "@/data/content";
import { whatsappLink } from "@/lib/links";
import Reveal from "@/components/Reveal";


export default function Therapy({ items, whatsapp }: { items: Service[]; whatsapp: string }) {
  return (
    <section id="therapy" className="scroll-mt-16 bg-[#f0e8d2] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Body therapy
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            Hands-on therapy, focused on you
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            Every therapy plan begins with a consultation, so we can understand
            what your body needs before we start.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 120} className="h-full">
              <article className="flex flex-col rounded-2xl border-t-4 border-gold bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-serif text-2xl font-semibold text-leaf">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-ink/75">{s.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-ink/60">Contact for pricing</span>
                  <a
                    href={whatsappLink(whatsapp, `Hello, I'd like to enquire about ${s.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-leaf underline-offset-4 hover:underline"
                  >
                    Enquire
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}