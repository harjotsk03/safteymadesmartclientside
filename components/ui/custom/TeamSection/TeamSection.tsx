import * as React from "react";
import Image from "next/image";
import { ShieldCheck, HardHat, Cpu } from "lucide-react";
import AndyLim from "../../../../assets/AndrewLim.jpg";
import SukhwantSingh from "../../../../assets/SukhwantSingh.jpeg";

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
        "Our team includes former WorkSafeBC officers with over 50 years of combined experience conducting inspections, investigating incidents, and enforcing safety regulations across multiple industries.",
      icon: ShieldCheck,
    },
    {
      index: "02",
      title: "OHS Professionals",
      description:
        "Our team includes experienced occupational health and safety professionals with decades of combined experience building and implementing safety systems for organizations of all sizes.",
      icon: HardHat,
    },
    // {
    //   index: "03",
    //   title: "Technology Specialists",
    //   description:
    //     "A dedicated team of engineers and product designers building intuitive, powerful digital tools specifically designed for real-world safety operations—not generic software.",
    //   icon: Cpu,
    // },
  ];

  return (
    <section id="our-team" className="w-full bg-background py-20 lg:py-28">
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
                {/* At the intersection of "safety as imagined" and "safety as
                done," we provide the strategic oversight and educational
                expertise needed to build safer workplaces. Our goal is simple:
                create practical, resilient systems that protect your team and
                your bottom line. */}
                Having been on both sides of the table, we understand many of
                the challenges involved when integrating regulatory enforcement
                and the operational needs into everyday work. This allows us to
                help you build systems that will meet regulatory requirements
                while remaining functional.
              </p>
              <p className="text-lg text-primary/50 w-full">
                {/* Our team doesn’t just comprise of Safety professionals but also
                includes Human Resources (HR) professionals and our own in house
                IT expertise, allowing us to integrate the human aspect, and
                technology into our solutions. */}
                Our team brings decades of regulatory expertise and industry
                knowledge, paired with a relentless focus on improving how
                workplace safety actually works.
              </p>
            </div>
          </div>
        </div>
        {/* Team member spotlight */}

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start  mt-16">
          <div className="md:col-span-2 rounded-full overflow-hidden aspect-square w-full max-w-[200px]">
            <Image
              src={AndyLim}
              alt="Member 1"
              width={200}
              height={200}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-9">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Andrew Lim{" "}
              <span className="text-sm text-neutral-600 font-normal">
                MEd, PID, CRSP{" "}
                <span className="text-xs text-neutral-400 font-normal">
                  (Retired)
                </span>
              </span>
            </h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              With over 30 years of experience at WorkSafeBC, my career has
              spanned roles from a Prevention Officer, providing consultation,
              education and enforcement at workplaces to an Instructor and
              Supervisor in Learning and Education Services, where I developed
              and delivered the essential curriculum used to train both new and
              tenured officers. This deep field experience is backed by a Master
              of Education (MEd), a Provincial Instructor Diploma (PID), and a
              Licentiateship of the City & Guilds of London, alongside a retired
              CRSP status. Having served on the CSA Z1002-12 committee and
              WorkSafeBC’s Corporate Health and Safety Committee.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-16">
          <div className="md:col-span-2 rounded-full overflow-hidden">
            <Image
              src={SukhwantSingh}
              alt="Member 1"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="md:col-span-9">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Sukhwant Singh{" "}
              <span className="text-sm text-neutral-600 font-normal">
                PGDip, BSc, CRSP
              </span>
            </h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              With over 25 years of safety and operational leadership, Suki's
              career spans diverse sectors in the manufacturing, liquid waste,
              transportation, and warehousing industries as well as the
              management of COR (Certificate of Recognition) program
              certifications. Suki's experience is augmented by his past role as
              a Prevention Officer with WorkSafeBC, where he specialized in
              workplace consultation, education and enforcement, and new officer
              instruction and mentoring. Suki's credentials include a Bachelor
              of Science (BSc) in Engineering Management, a Post-Graduate
              Diploma (PGDip) in Management Development, and he holds a
              designation as a Canadian Registered Safety Professional (CRSP).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
