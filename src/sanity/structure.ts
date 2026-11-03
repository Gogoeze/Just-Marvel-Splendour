// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())


import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website")
    .items([
      S.listItem()
        .title("Business details")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("About the owner")
        .id("owner")
        .child(S.document().schemaType("owner").documentId("owner")),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("category").title("Product categories"),
      S.documentTypeListItem("service").title("Therapies"),
      S.documentTypeListItem("testimonial").title("Customer reviews"),
    ]);