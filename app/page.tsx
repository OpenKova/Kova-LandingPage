import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickStart } from "@/components/sections/QuickStart";
import { Features } from "@/components/sections/Features";
import { IntegrationsPreview } from "@/components/sections/IntegrationsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { SITE } from "@/lib/constants";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  description: SITE.description,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, macOS, Linux",
  offers: [{ "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" }],
  url: "https://kova-agent.neuralstudio.in",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema).replace(/</g, "\\u003c") }} />
      <Header />
      <div className="rail">
        <Hero />
        <QuickStart />
        <Testimonials />
        <Features />
        <IntegrationsPreview />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
