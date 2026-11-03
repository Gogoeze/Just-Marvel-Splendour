export const business = {
  name: "Just Marvel Splendour Ventures",
  tagline: "Nature's remedies, made for your body.",
  heroEyebrow: "Holistic Wellness Center · Kuje, Abuja",
  heroText:  "Custom skincare, natural herbs, and hands-on therapy. Every journey starts with a one-on-one consultation, so what we make and recommend is right for you.",
  phone: "0706 845 5419",
  whatsapp: "2347068455419",
  email: "justmarvelsplendour@gmail.com",
  address: "Wuru Junction, Opposite Cocin Church, Kuje Area Council, Kuje, Abuja",
  hours: "Mon - Sat, 09:00 - 18:00",
  deliveryNote:
    "Walk-ins welcome. Delivery is available through Bolt dispatch or your own rider, and the delivery cost is paid by the customer.",
    instagram: "",
    facebook: "",
    tiktok: "",
 };

export type Business = typeof business;
export type Owner = { name: string; story: string; photo?: string; quote?: string };


export const categories = [
  "Custom Skincare",
  "Herbs & Detox Teas",
  "Oil Perfumes",
  "Honey & Natural Essentials",
  "Massage & Therapy Equipment",
] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number | null; // null shows "Ask for price"
  description: string;
  image?: string; // placeholder should be shown if no image is provided.
  available: boolean;
};

export type Service = { id: string; name: string; description: string };
export type Testimonial = { id: string; name: string; quote: string };

export const services: Service[] = [
  { id: "nuga", name: "Nuga Bed Therapy", description: "A relaxing, heat-based bed therapy session to help ease tension and leave your body feeling restored." },
  { id: "full", name: "Full Body Massage", description: "A head-to-toe massage tailored to where your body needs the most attention." },
  { id: "back", name: "Back & Spine", description: "Focused massage for the back and spine, helpful for stiffness and everyday strain." },
  { id: "neck", name: "Neck & Shoulders", description: "Targeted work to ease the tightness that builds up from daily stress and long hours." },
  { id: "arms", name: "Arms & Hands", description: "Gentle, focused care for tired arms, wrists, and hands." },
  { id: "legs", name: "Legs & Feet", description: "Soothing massage to help tired, heavy legs and feet feel lighter." },
  { id: "joint",name: "Joint & Muscle Relief", description: "Targeted therapy to support comfort and movement in sore joints and muscles." },
];

export const products: Product[] = [
  { id: "p1", name: "Herbal Black Soap", category: "Custom Skincare", price: null, description: "Placeholder.", available: true },
  { id: "p2", name: "Moringa Leaves", category: "Herbs & Detox Teas", price: null, description: "Placeholder.", available: true },
  { id: "p3", name: "Oil Perfume", category: "Oil Perfumes", price: null, description: "Placeholder.", available: true },
  { id: "p4", name: "Pure Organic Honey", category: "Honey & Natural Essentials", price: null, description: "Placeholder.", available: true },
  { id: "p5", name: "Handheld Massager", category: "Massage & Therapy Equipment", price: null, description: "Placeholder.", available: true },
  { id: "p6", name: "Custom Face Cream", category: "Custom Skincare", price: 8500, description: "Formulated for your skin after consultation.", available: true },
  { id: "p7", name: "Neem Leaves", category: "Herbs & Detox Teas", price: 2500, description: "Placeholder.", available: true },
  { id: "p8", name: "Detox Tea Blend", category: "Herbs & Detox Teas", price: 3000, description: "Placeholder.", available: false },
  { id: "p9", name: "Oil Perfume (Floral)", category: "Oil Perfumes", price: 4000, description: "Placeholder.", available: true },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Customer Name", quote: "Placeholder review."},
  { id: "t2", name: "Customer Name", quote: "Placeholder review."},
  { id: "t3", name: "Customer Name", quote: "Placeholder review."},
];

export const owner = {
  name: "Owner Name",
  story: "Placeholder story, to be replaced with her own words.",
  quote: "Come as you are. Leave cared for.",
};