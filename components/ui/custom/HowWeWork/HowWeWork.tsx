import { ClipboardCheck, Map, TrendingUp, Wrench } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Assessment",
      description:
        "We evaluate your current safety systems, identify gaps, and understand your unique challenges and goals.",
      icon: ClipboardCheck,
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Together, we develop a customized plan combining training, processes, and technology to address your specific needs.",
      icon: Map,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Our team delivers training, builds your systems, and sets up digital tools—with hands-on support every step of the way.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "We monitor results, refine processes, and provide ongoing support to ensure continuous improvement and compliance.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="w-full bg-background py-20 lg:py-28">
      <div className="px-6 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="lg:sticky lg:top-32 self-start">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            OUR PROCESS
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900">
            Your Path to Safety Excellence
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-md">
            A proven, step-by-step approach that transforms safety from a
            requirement into a competitive advantage.
          </p>
        </div>

        {/* Right Steps */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-7 top-20 h-[75%] w-px bg-chart-1/20" />

          {steps.map((item, index) => (
            <div key={index} className="relative pl-20 group">
              {/* Step Indicator */}
              <div className="absolute left-0 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-chart-1">
                <item.icon className="h-6 w-6 text-white" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-chart-1/20 bg-white p-8 transition-all duration-300 group-hover:bg-chart-1/5 group-hover:cursor-default">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    <span className="text-sm font-light mr-2 text-neutral-400">
                      {item.step}
                    </span>
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
