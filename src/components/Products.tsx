"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import type { Product } from "@/data/content";
import { whatsappLink } from "@/lib/links";

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function Products({
  items,
  categories,
  whatsapp,
}: {
  items: Product[];
  categories: string[];
  whatsapp: string;
}) {


  const [active, setActive] = useState("All");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible =
    active === "All" ? items : items.filter((p) => p.category === active);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [active, updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="products" className="scroll-mt-16 bg-[#f0e8d2] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our products
          </p>
          <h2 className="font-serif text-4xl font-semibold text-leaf sm:text-5xl">
            Natural, made with care
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            Tap a product to order on WhatsApp. Skincare and herbal blends are
            custom-made after your consultation.
          </p>
        </Reveal>

        {/* Category chips */}
        <Reveal delay={150} className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === c
                  ? "border-leaf bg-leaf text-white"
                  : "border-leaf/30 bg-cream text-leaf hover:border-leaf"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-10 md:px-12">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous products"
            className={`absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-leaf text-white shadow transition hover:bg-leaf-dark md:flex ${
              canPrev ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div
            key={active}
            ref={trackRef}
            className="rise no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {visible.length === 0 && (
              <p className="w-full py-10 text-center text-ink/70">
                Nothing listed here yet. Message us to see what is available.
              </p>
            )}

            {visible.map((p) => (
              <article
                key={p.id}
                data-card
                className="flex w-[78%] max-w-[22rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:w-[calc(50%-10px)] sm:max-w-none lg:w-[calc(33.333%-14px)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-leaf/20 via-cream to-gold/25">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-leaf/50">
                      {p.category}
                    </span>
                     )}
                  {!p.available && (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white">
                      Sold out
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl font-semibold text-leaf">
                    {p.name}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-ink/70">{p.description}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-leaf-dark">
                      {p.price !== null ? naira(p.price) : "Ask for price"}
                    </span>

                    {p.available ? (
                      <a
                        href={whatsappLink(
                           whatsapp,
                          `Hello, I'd like to order ${p.name}${
                            p.price !== null ? ` (${naira(p.price)})` : ""
                          }.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-leaf px-4 py-2 text-sm font-medium text-white transition hover:bg-leaf-dark"
                      >
                        Order on WhatsApp
                      </a>
                    ) : (
                      <a
                        href={whatsappLink(whatsapp, `Hello, is ${p.name} coming back in stock?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-leaf px-4 py-2 text-sm font-medium text-leaf transition hover:bg-leaf hover:text-white"
                      >
                        Ask about restock
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next products"
            className={`absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-leaf text-white shadow transition hover:bg-leaf-dark md:flex ${
              canNext ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-ink/70">
            There is more in store than what is shown here.{" "}
            <a
              href={whatsappLink(whatsapp, "Hello, I'd like to know what products are available.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-leaf underline-offset-4 hover:underline"
            >
              Message us to see what is available.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}