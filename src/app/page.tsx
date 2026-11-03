import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Therapy from "@/components/Therapy";
import Visit from "@/components/Visit";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteData } from "@/sanity/lib/getSiteData";

export default async function Home() {
  const { business, owner, products, categories, services, testimonials, year } =
    await getSiteData();

  return (
    <>
      <Header business={business} />
      <main>
        <Hero business={business} />
        <About owner={owner} />
        <Therapy items={services} whatsapp={business.whatsapp} />
        <HowItWorks whatsapp={business.whatsapp} />
        <Products items={products} categories={categories} whatsapp={business.whatsapp} />
        <Testimonials items={testimonials} />
        <Visit business={business} />
      </main>
      <Footer business={business} year={year} />
      <WhatsAppButton number={business.whatsapp} />
    </>
  );
}