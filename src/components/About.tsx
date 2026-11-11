import type { Owner } from "@/data/content";
import Reveal from "@/components/Reveal";


export default function About({ owner }: { owner: Owner }) {
  return (
    <section id="about" className="scroll-mt-16 bg-cream py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        {/* Photo placeholder: replace with <Image> once we have her photo */}
        <Reveal className="overflow-hidden rounded-3xl shadow-sm">
  {owner.photo ? (
    <img 
      src={owner.photo} 
      alt={owner.name} 
      className="h-auto w-full object-contain" 
    />
  ) : (
    <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-leaf/10 to-gold/15 p-8">
      <span className="text-sm text-ink/60">Image of {owner.name}</span>
    </div>
  )}
</Reveal>



        <Reveal delay={200}>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-leaf sm:text-4xl">
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