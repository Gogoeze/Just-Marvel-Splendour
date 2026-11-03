import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Customer review",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Customer name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "quote", title: "Review", type: "text", rows: 4, validation: (r) => r.required() }),
  ],
  preview: { select: { title: "name", subtitle: "quote" } },
});