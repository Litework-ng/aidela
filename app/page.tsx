import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container my-12">
        <ServicesGrid />
      </section>

      <section className="bg-neutral-100 py-12">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="container my-16">
        <CTASection />
      </section>
    </>
  );
}
