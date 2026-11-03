import Reveal from "@/components/Reveal";
import { Business  } from "@/data/content";
import { telLink, whatsappLink } from "@/lib/links";


export default function Visit({ business }: { business: Business }) {
  const q = encodeURIComponent(business.address);
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${q}`;
  return (
    <section id="visit" className="scroll-mt-16 bg-[#f0e8d2] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Visit us
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            Come in, we are happy to see you
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
          <Reveal className="flex flex-col justify-center">
            <dl className="space-y-6">
              <div>
                <dt className="text-sm font-medium uppercase tracking-wider text-gold">Address</dt>
                <dd className="mt-1 text-lg text-ink/85">{business.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wider text-gold">Opening hours</dt>
                <dd className="mt-1 text-lg text-ink/85">{business.hours}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wider text-gold">Phone and email</dt>
                <dd className="mt-1 text-lg text-ink/85">
                  <a href={telLink(business.whatsapp)} className="hover:text-leaf">{business.phone}</a>
                  <br />
                  <a href={`mailto:${business.email}`} className="break-all hover:text-leaf">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wider text-gold">Delivery</dt>
                <dd className="mt-1 text-ink/85">{business.deliveryNote}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-leaf px-6 py-3 text-center font-medium text-white transition hover:bg-leaf-dark"
              >
                Get directions
              </a>
              <a
                href={whatsappLink(business.whatsapp, "Hello, I'd like to book a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-leaf px-6 py-3 text-center font-medium text-leaf transition hover:bg-leaf hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="min-h-[320px] overflow-hidden rounded-3xl shadow-md">
            <iframe
              title={`Map showing ${business.name}`}
              src={embedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}