import { cacheLife } from "next/cache";
import { createClient } from "next-sanity";
import {
  business as fallbackBusiness,
  categories as fallbackCategories,
  owner as fallbackOwner,
  products as fallbackProducts,
  services as fallbackServices,
  testimonials as fallbackTestimonials,
  type Business,
  type Owner,
  type Product,
  type Service,
  type Testimonial,
} from "@/data/content";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

const QUERY = `{
  "business": *[_type == "siteSettings"][0]{ name, tagline, heroEyebrow, heroText, phone, whatsapp, email, address, hours, deliveryNote, instagram, facebook, tiktok },
  "owner": *[_type == "owner"][0]{ name, story, quote, "photo": photo.asset->url + "?w=900&auto=format" },
  "products": *[_type == "product"] | order(coalesce(order, 999) asc, _createdAt asc){
    "id": _id, name, "category": coalesce(categoryRef->title, category), price, description,
    "image": image.asset->url + "?w=800&auto=format",
    "available": coalesce(available, true)
  },
  "services": *[_type == "service"] | order(coalesce(order, 999) asc, _createdAt asc){ "id": _id, name, description },
  "categories": *[_type == "category"] | order(coalesce(order, 999) asc, title asc){ title },
  "testimonials": *[_type == "testimonial"] | order(_createdAt asc){ "id": _id, name, quote }
}`;

type Raw = {
  business: Record<string, string | null> | null;
  owner: Record<string, string | null> | null;
  products: (Omit<Product, "image"> & { image: string | null })[];
  services: Service[];
  categories: { title: string }[];
  testimonials: Testimonial[];
};

// Drop empty fields so the fallback value is used instead of a blank
const clean = (o: Record<string, string | null> | null) =>
  Object.fromEntries(Object.entries(o ?? {}).filter(([, v]) => v != null && v !== ""));

export async function getSiteData() {
  "use cache";
  cacheLife("minutes");

  const year = new Date().getFullYear();

  try {
    const data = await client.fetch<Raw>(QUERY);
    const products = data.products.length
      ? data.products.map((p) => ({ ...p, image: p.image ?? undefined }))
      : fallbackProducts;
    const used = [...new Set(products.map((p) => p.category))];
    const listed = data.categories.length
      ? data.categories.map((c) => c.title)
      : [...fallbackCategories];
    const categories = [
      ...listed.filter((c) => used.includes(c)),
      ...used.filter((c) => !listed.includes(c)),
    ];
    return {
      year,
      business: { ...fallbackBusiness, ...clean(data.business) } as Business,
      owner: { ...fallbackOwner, ...clean(data.owner) } as Owner,
      products,
      categories,
      services: data.services.length ? data.services : fallbackServices,
      testimonials: data.testimonials.length ? data.testimonials : fallbackTestimonials,
    };
  } catch {
    return {
      year,
      business: fallbackBusiness as Business,
      owner: fallbackOwner as Owner,
      products: fallbackProducts,
      categories: [...fallbackCategories],
      services: fallbackServices,
      testimonials: fallbackTestimonials,
    };
  }
}