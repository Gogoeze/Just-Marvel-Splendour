import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Product category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Smaller numbers appear first.",
    }),
  ],
  preview: { select: { title: "title" } },
});