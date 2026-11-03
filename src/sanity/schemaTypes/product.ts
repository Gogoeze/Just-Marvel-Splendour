import { defineField, defineType } from "sanity";


export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
   defineField({
     name: "categoryRef",
     title: "Category",
     type: "reference",
     to: [{ type: "category" }],
     options: { disableNew: true },
     validation: (r) => r.required(),
   }),
   defineField({ name: "category", title: "Category (old)", type: "string", hidden: true }),
    defineField({
      name: "price",
      title: "Price (₦)",
      type: "number",
      description: "Leave empty to show 'Ask for price' on the website.",
      validation: (r) => r.min(0),
    }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "available",
      title: "In stock",
      type: "boolean",
      description: "Turn off to show 'Sold out' without deleting the product.",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Optional. Smaller numbers appear first.",
    }),
  ],
  preview: { select: { title: "name", subtitle: "category", media: "image" } },
});