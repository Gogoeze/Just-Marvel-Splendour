import { title } from "process";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Business details",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Business name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "heroText", title: "Intro text under the tagline", type: "text", rows: 3 }),
    defineField({
      name: "phone",
      title: "Phone number (as shown on the site)",
      type: "string",
      description: "Example: 0706 845 5419",
    }),
    defineField({
      name: "heroEyebrow",
      title: "Small line above the tagline",
      type: "string",
      description: "Example: Holistic Wellness Center · Kuje, Abuja",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp / call number",
      type: "string",
      description: "Digits only with country code, no plus or spaces. Example: 2347068455419",
      validation: (r) => r.regex(/^\d{10,15}$/).error("Digits only, for example 2347068455419"),
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({ name: "hours", title: "Opening hours", type: "string" }),
    defineField({ name: "deliveryNote", title: "Delivery note", type: "text", rows: 3 }),
    defineField({ name: "instagram", title: "Instagram link", type: "url", description: "Leave empty to hide it from the footer." }),
    defineField({ name: "facebook", title: "Facebook link", type: "url", description: "Leave empty to hide it from the footer." }),
    defineField({ name: "tiktok", title: "TikTok link", type: "url", description: "Leave empty to hide it from the footer." }),
  ],
});