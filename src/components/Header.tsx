"use client";

import { useEffect, useState } from "react";
import type { Business } from "@/data/content";
import { telLink, whatsappLink } from "@/lib/links";


const links = [
  { href: "#about", label: "About" },
  { href: "#therapy", label: "Therapy" },
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
];

export default function Header({ business }: { business: Business }) {
    const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-leaf/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg font-semibold leading-tight text-leaf sm:text-xl">
          {business.name}
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/80 transition hover:text-leaf">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(business.whatsapp, "Hello, I'd like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-leaf px-4 py-2 text-sm font-medium text-white transition hover:bg-leaf-dark"
          >
            Book
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu the mobile menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-leaf transition hover:bg-leaf/10 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-leaf/10 bg-cream px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-leaf/10 py-3 text-ink/80 transition hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink(business.whatsapp,)}
            className="mt-4 block rounded-full border border-leaf py-3 text-center font-medium text-leaf"
          >
            Call {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}