import { SchemaTypeDefinition } from "sanity";
import { owner } from "./owner";
import { product } from "./product";
import { service } from "./service";
import { testimonial } from "./testimonial";
import { siteSettings } from "./siteSettings";
import { category } from "./category";


export const schema: { types: SchemaTypeDefinition[] } = {
   types: [product, service, testimonial, owner, siteSettings, category],
 };
