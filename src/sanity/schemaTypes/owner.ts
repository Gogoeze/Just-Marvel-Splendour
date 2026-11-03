import { title } from "process";
import { defineField, defineType } from "sanity";

export const owner = defineType({
  name: "owner",
  title: "About the owner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "story", title: "Her story", type: "text", rows: 8 }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Short line under her story", type: "string", description: "Shown in italics under her story. Leave empty to hide it.", }), 
],
  preview: { select: { title: "name", media: "photo" } },
});