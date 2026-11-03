import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
// import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Marvel Splendour Ventures | Natural Wellness Center, Kuje, Abuja",
  description:
    "Nature's remedies, made for your body. Custom skincare, herbal wellness, oil perfumes and therapy in Kuje, Abuja.",
 };


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full font-sans antialiased`}
      
    >
      <body className="min-h-full flex flex-col">{children}  
        {/* <WhatsAppButton /> */}
        </body>
    </html>
  );
}
