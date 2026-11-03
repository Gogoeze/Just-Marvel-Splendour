import { whatsappLink } from "@/lib/links";
import Reveal from "@/components/Reveal";


const steps = [
  {
    title: "Consultation",
    text: "We start with a one-on-one conversation about what is going on with your body, your skin, and your goals.",
  },
  {
    title: "Your personal plan",
    text: "Based on what we learn, we recommend therapy sessions and, where needed, prepare your skincare or herbal products just for you.",
  },
  {
    title: "Therapy and care",
    text: "Come in for your sessions, collect your custom products, and check in with us as you go.",
  },
];

export default function HowItWorks({ whatsapp }: { whatsapp: string }) {
  return (
    <section id="how" className="scroll-mt-16 bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
         <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            How it works
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            Made around you, step by step
          </h2>
        </Reveal>

        <Reveal fade={false} className="relative mt-12">
          <div className="step-line absolute left-[16.7%] right-[16.7%] top-7 hidden border-t-2 border-dashed border-gold/60 md:block" />
        <ol className="relative grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 200} className="text-center">
              <div className="step-dot relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf font-serif text-2xl font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-leaf">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-ink/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        </Reveal>

          <Reveal className="mt-12 text-center" delay={500}>
          <a
            href={whatsappLink("Hello, I'd like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-leaf px-8 py-3.5 font-medium text-white transition hover:bg-leaf-dark"
          >
            Book your consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}