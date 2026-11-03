import Reveal from "@/components/Reveal";
import { Testimonial  } from "@/data/content";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="reviews" className="scroll-mt-16 bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Kind words
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 150} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-[#f0e8d2] p-7">
                <span className="font-serif text-5xl leading-none text-gold" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-ink/80">{t.quote}</blockquote>
                <figcaption className="mt-5 font-medium text-leaf">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}