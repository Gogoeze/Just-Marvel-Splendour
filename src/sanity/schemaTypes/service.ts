import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Therapy",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Optional. Smaller numbers appear first.",
    }),
  ],
  preview: { select: { title: "name" } },
});