"use client"
import { useEffect, useRef } from "react";

export default function TrustedCompanies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Company logos - you can replace these with actual logo images
  const companies = [
    { name: "TENQ", logo: "TENQ" },
    { name: "northbyte", logo: "northbyte" },
    { name: "liva", logo: "liva" },
    { name: "krona", logo: "krona" },
    { name: "velto", logo: "velto" },
    { name: "sonar", logo: "sonar" },
    { name: "BLOOM", logo: "BLOOM" },
    { name: "TENQ", logo: "TENQ" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position when we've scrolled through one set
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="w-full pt-16 lg:pt-24 overflow-hidden">
      <div className="mb-12">
        <h2 className="text-xl font-regular text-primary text-center">
          Trusted by leading companies worldwide
        </h2>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 w-80 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-12 lg:gap-16 overflow-x-hidden border-b border-border pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] lg:min-w-[150px]"
            >
              {/* Placeholder for company logo */}
              <div className="flex items-center justify-center">
                <span className="text-xl lg:text-2xl font-medium text-gray-800 whitespace-nowrap">
                  {company.logo}
                </span>
                {/* Replace with actual logo:
                <Image
                  src={`/logos/${company.logo}.png`}
                  alt={company.name}
                  width={150}
                  height={40}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
