import Hero from "@/components/ui/custom/Hero/Hero";
import TrustedCompanies from "@/components/ui/custom/Hero/TrustedCompanies";
import ValueProposition from "@/components/ui/custom/ValueProposition/ValueProposition";
import ServicesSection from "@/components/ui/custom/ServicesSection/ServicesSection";
import WhyChooseUsSection from "@/components/ui/custom/WhyChooseUsSection/WhyChooseUsSection";
import Image from "next/image";
import HowWeWork from "@/components/ui/custom/HowWeWork/HowWeWork";
import TechnologyPlatformSection from "@/components/ui/custom/TechnologyPlatformSection/TechnologyPlatformSection";
import TeamSection from "@/components/ui/custom/TeamSection/TeamSection";
import Footer from "@/components/ui/custom/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";

export default function Home() {
  return (
    <div className="pt-20">
      <div className="fixed bottom-0 left-0 right-0 h-10 pointer-events-none z-40">
        <div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div>
      <SmoothScroll />
      <Hero />
      <TrustedCompanies />
      <ValueProposition />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowWeWork />
      <TechnologyPlatformSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
