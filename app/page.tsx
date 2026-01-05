import Hero from "@/components/ui/custom/Hero/Hero";
import TrustedCompanies from "@/components/ui/custom/Hero/TrustedCompanies";
import ValueProposition from "@/components/ui/custom/ValueProposition/ValueProposition";
import ServicesSection from "@/components/ui/custom/ServicesSection/ServicesSection";
import WhyChooseUsSection from "@/components/ui/custom/WhyChooseUsSection/WhyChooseUsSection";
import Image from "next/image";
import HowWeWork from "@/components/ui/custom/HowWeWork/HowWeWork";
import TechnologyPlatformSection from "@/components/ui/custom/TechnologyPlatformSection/TechnologyPlatformSection";
import TeamSection from "@/components/ui/custom/TeamSection/TeamSection";
import CallToActionSection from "@/components/ui/custom/CallToActionSection/CallToActionSection";
import Footer from "@/components/ui/custom/Footer";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <TrustedCompanies />
      <ValueProposition />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowWeWork />
      <TechnologyPlatformSection />
      <TeamSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
