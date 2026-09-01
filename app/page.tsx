import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickStart } from "@/components/sections/QuickStart";
import { Features } from "@/components/sections/Features";
import { IntegrationsPreview } from "@/components/sections/IntegrationsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { SITE } from "@/lib/constants";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  description: SITE.description,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
    { "@type": "Offer", price: "2.99", priceCurrency: "USD", name: "Pro Monthly" },
  ],
  url: "https://appkova.com",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header />
      <div className="rail">
        <Hero />
        <QuickStart />
        <Testimonials />
        <Features />
        <IntegrationsPreview />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
