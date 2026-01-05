import { Shield, Zap, TrendingUp } from "lucide-react";
import imageOne from "../../../../assets/imageOne.jpg"
import imageTwo from "../../../../assets/imageTwo.jpg"
import imageThree from "../../../../assets/imageThree.jpg"
import Image from "next/image";

export default function ValueProposition() {
  const benefits = [
    {
      icon: Shield,
      title: "Expert-Led Guidance",
      description:
        "Real-world regulatory experience from former WorkSafeBC officers who understand compliance from both sides.",
      image: imageOne,
    },
    {
      icon: Zap,
      title: "Technology-Driven Solutions",
      description:
        "Transform paper-based processes into streamlined digital workflows that save time and improve accuracy.",
      image: imageTwo
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Reduce incidents, simplify audits, and build a stronger safety culture with our comprehensive approach.",
      image: imageThree
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="px-6 lg:px-40">
        {/* Header */}
        <div className="flex flex-col justify-between items-start lg:items-start gap-6 mb-14">
          <div className="flex items-start gap-3">
            <h2 className="text-4xl lg:text-4xl font-medium text-primary">
              Where Regulatory Expertise Meets Innovation
            </h2>
          </div>
          <div className="w-11/12">
            <p className="text-lg text-primary font-normal leading-relaxed">
              We're not just another safety consulting firm. Our team includes
              former WorkSafeBC officers with{" "}
              <span className="text-chart-1">
                20+ years combined experience
              </span>
              , using insider knowledge to help you stay compliant and modernize
              safety management.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col bg-accent rounded-3xl overflow-hidden group "
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-normal leading-relaxed">
                    {benefit.description}
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
