// import { business } from "@/data/content";

// export const whatsappLink = (message: string) =>
//   `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

// export const telLink = `tel:+${business.whatsapp}`;

export const whatsappLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const telLink = (number: string) => `tel:+${number}`;