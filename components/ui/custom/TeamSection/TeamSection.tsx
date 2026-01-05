import { ShieldCheck, HardHat, Cpu } from "lucide-react";

type Highlight = {
  index: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function TeamSection() {
  const highlights: Highlight[] = [
    {
      index: "01",
      title: "Former WorkSafeBC Officers",
      description:
        "Our team includes former WorkSafeBC officers with over 20 years of combined experience conducting inspections, investigating incidents, and enforcing safety regulations across multiple industries.",
      icon: ShieldCheck,
    },
    {
      index: "02",
      title: "OHS Professional",
      description:
        "An experienced occupational health and safety professional with 15+ years of hands-on experience building and implementing safety management systems for organizations of all sizes.",
      icon: HardHat,
    },
    {
      index: "03",
      title: "Technology Specialists",
      description:
        "A dedicated team of engineers and product designers building intuitive, powerful digital tools specifically designed for real-world safety operations—not generic software.",
      icon: Cpu,
    },
  ];

  return (
    <section className="w-full bg-background py-20 lg:py-28">
      <div className="px-6 w-full lg:px-40 ">
        {/* Top Layout */}
        <div className="items-end">
          {/* Left Editorial */}
          <div className="w-full">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Our Team
            </p>
            <h2 className="text-4xl font-medium text-primary mb-4 lg:text-4xl mt-2">
              Experience You Can Trust
            </h2>
            <div className="flex w-full justify-between items-start mt-8 gap-10">
              <p className="text-primary/50 text-lg leading-relaxed w-full">
                We’ve been on both sides of the inspection table—enforcing
                regulations, responding to incidents, and helping organizations
                build systems that don’t just pass audits, but genuinely protect
                people.
              </p>
              <p className="text-lg text-primary/50 w-full">
                Our team brings decades of regulatory expertise and industry
                knowledge, paired with a relentless focus on improving how
                workplace safety actually works.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-20 mt-20">
          {highlights.map((item) => (
            <div
              key={item.index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Index */}
              <div className="md:col-span-2 text-4xl font-mono text-neutral-300">
                {item.index}
              </div>

              {/* Content */}
              <div className="md:col-span-9 w-full">
                <div className="flex items-center gap-4">
                  <item.icon className="h-6 w-6 text-neutral-900" />
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
