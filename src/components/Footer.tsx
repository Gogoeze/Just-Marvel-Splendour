import type { Business } from "@/data/content";

export default function Footer({ business, year }: { business: Business; year: number }) {
  const socials = [
    { label: "Instagram", href: business.instagram },
    { label: "Facebook", href: business.facebook },
    { label: "TikTok", href: business.tiktok },
  ].filter((s) => s.href);

    return (
    <footer className="bg-leaf-dark py-10 text-cream">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="font-serif text-2xl font-semibold">{business.name}</p>
        <p className="mt-2 text-cream/80">{business.tagline}</p>
         {socials.length > 0 && (
         <div className="mt-5 flex justify-center gap-5 text-sm">
           {socials.map((s) => (
             <a
               key={s.label}
               href={s.href}
               target="_blank"
               rel="noopener noreferrer"
               className="text-cream/80 underline-offset-4 transition hover:text-gold hover:underline"
             >
               {s.label}
             </a>
           ))}
         </div>
       )}
        <p className="mt-6 text-sm text-cream/60">
           © {year} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}