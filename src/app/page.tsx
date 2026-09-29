import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Products from "@/components/sections/Product";
import CaseStudies from "@/components/sections/CaseStudies";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <Products />
      <CaseStudies />
      <ContactForm />
    </main>
  );
}