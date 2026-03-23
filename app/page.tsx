"use client";

import * as React from "react";
import Hero from "@/components/ui/custom/Hero/Hero";
import TrustedCompanies from "@/components/ui/custom/Hero/TrustedCompanies";
import ValueProposition from "@/components/ui/custom/ValueProposition/ValueProposition";
import ServicesSection from "@/components/ui/custom/ServicesSection/ServicesSection";
import WhyChooseUsSection from "@/components/ui/custom/WhyChooseUsSection/WhyChooseUsSection";
import HowWeWork from "@/components/ui/custom/HowWeWork/HowWeWork";
import TechnologyPlatformSection from "@/components/ui/custom/TechnologyPlatformSection/TechnologyPlatformSection";
import TeamSection from "@/components/ui/custom/TeamSection/TeamSection";
import Footer from "@/components/ui/custom/Footer";
import { useLenis } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import ContactSection from "@/components/ui/custom/ContactSection/ContactSection";

export default function Home() {
  const lenis = useLenis();
  const [reveal, setReveal] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    const snapToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(0, { immediate: true, force: true });
      }
    };

    snapToTop();

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    requestAnimationFrame(() => {
      snapToTop();
      requestAnimationFrame(() => {
        snapToTop();
        setReveal(true);
      });
    });
  }, [lenis]);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-10 pointer-events-none z-40">
        <div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div>
      <div
        className={cn(
          "pt-20 transition-opacity duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]",
          reveal ? "opacity-100" : "opacity-0",
        )}
      >
        <Hero />
        {/* <TrustedCompanies /> */}
        <ValueProposition />
        <ServicesSection />
        <WhyChooseUsSection />
        <HowWeWork />
        <TechnologyPlatformSection />
        <TeamSection />
        <ContactSection />
        <Footer />
        {showButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 hover:cursor-pointer bg-chart-1 size-12 rounded-full shadow-lg transition-all duration-300 md:bottom-8 md:right-8 flex items-center justify-center"
          >
            <ArrowUp className="size-5 text-white" />
          </button>
        )}
      </div>
    </>
  );
}
