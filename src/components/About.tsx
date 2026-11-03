import type { Owner } from "@/data/content";
import Reveal from "@/components/Reveal";


export default function About({ owner }: { owner: Owner }) {
  return (
    <section id="about" className="scroll-mt-16 bg-cream py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        {/* Photo placeholder: replace with <Image> once we have her photo */}
        <Reveal  className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-gradient-to-br from-leaf/20 to-gold/20 text-leaf/50">
          {owner.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={owner.photo} alt={owner.name} className="h-full w-full rounded-3xl object-cover" />
          ) : (
            <span className="text-sm">Photo of {owner.name}</span>
          )}
        </Reveal >

         <Reveal delay={200}>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Meet the founder
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            {owner.name}
          </h2>
          <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-ink/80">
            {owner.story}
          </p>
          {owner.quote && (
            <p className="mt-6 border-l-2 border-gold pl-4 font-serif text-xl italic text-leaf">
              {owner.quote}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}