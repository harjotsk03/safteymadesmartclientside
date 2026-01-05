import React from "react";
import { ShieldCheck, Target, Cpu, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Regulatory Experience You Can Trust",
      description:
        "Our team has enforced WorkSafe regulations firsthand. We understand how inspections really work and help you prepare with confidence—not guesswork.",
    },
    {
      icon: Target,
      title: "Built for Real Workplaces",
      description:
        "We design safety programs that people actually follow. Practical systems, clear expectations, and tools your team won’t resist using.",
    },
    {
      icon: Cpu,
      title: "Modern Systems, Not Paper Binders",
      description:
        "Digital-first safety management that replaces spreadsheets and paperwork with automation, visibility, and accountability.",
    },
    {
      icon: Users,
      title: "A Long-Term Safety Partner",
      description:
        "We support you beyond setup—helping you adapt, improve, and stay compliant as your business grows.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="px-6 lg:px-40">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="text-4xl lg:text-4xl font-medium text-primary">
            Why organizations choose{" "}
            <span className="text-orange-500">Safety Made Smart</span>
          </h2>
          <p className="text-lg text-primary/50 w-3/4">
            We combine real regulatory experience with modern systems to help
            organizations build safety programs that actually work.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-chart-2/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-chart-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-primary/50 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
