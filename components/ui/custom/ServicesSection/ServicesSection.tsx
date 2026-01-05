import React from "react";
import {
  GraduationCap,
  ClipboardCheck,
  Smartphone,
  FileText,
} from "lucide-react";
import { Button } from "../../button";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Training & Consulting",
      items: [
        "Joint Health & Safety Committee training",
        "WHMIS 2015 certification",
        "Hazard identification & risk assessments",
        "Custom workplace-specific training",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "On-Site Safety Support",
      items: [
        "Mock WorkSafe inspections",
        "Safety audits & gap analysis",
        "Incident investigations",
        "Real-time compliance assessments",
      ],
    },
    {
      icon: Smartphone,
      title: "Digital Safety Tools",
      items: [
        "Online learning management system",
        "Digital inspections & incident reports",
        "Automated workflows & reminders",
        "Compliance dashboards & tracking",
      ],
    },
    {
      icon: FileText,
      title: "Safety System Development",
      items: [
        "Policies & procedures",
        "Health & Safety manuals",
        "Safety management systems",
        "Ongoing updates & maintenance",
      ],
    },
  ];

  return (
    <section className="w-full bg-accent/50 py-20 lg:py-28">
      <div className="px-6 lg:px-40">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-medium text-primary mb-4 lg:text-4xl">
            What we help you build
          </h2>
          <p className="text-lg text-primary/50">
            End-to-end safety solutions designed to support your organization at
            every stage—from setup to ongoing compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-primary/2 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-medium text-primary">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-primary/70 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
