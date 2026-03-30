import {
  FileText,
  Workflow,
  BarChart3,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  points: string[];
};

export default function TechnologyPlatformSection() {
  const features: Feature[] = [
    {
      title: "Digital Forms & Checklists",
      description:
        "Replace paper-based processes with customizable digital forms built for real-world safety operations.",
      icon: FileText,
      points: [
        "Pre-trip inspections",
        "Incident reports",
        "Workplace inspections",
        "Safety observations",
        // "Fully customizable templates",
      ],
    },
    {
      title: "Automated Workflows",
      description:
        "Ensure nothing falls through the cracks with smart automation and real-time visibility.",
      icon: Workflow,
      points: [
        "Route forms for approvals",
        "Trigger alerts for critical issues",
        "Schedule recurring inspections",
        "Track completion and follow-ups",
      ],
    },
    {
      title: "Centralized Data & Reporting",
      description:
        "Access all your safety data in one secure system—ready when you need it.",
      icon: BarChart3,
      points: [
        "Single source of truth",
        "Instant report generation",
        "Trend and risk analysis",
        "Audit-ready documentation",
      ],
    },
    {
      title: "Mobile-First Design",
      description: "Built for teams in the field, not just behind a desk.",
      icon: Smartphone,
      points: [
        "Works on any device",
        // "Offline functionality",
        "Photo & signature capture",
        "Real-time sync across teams",
      ],
    },
  ];

  return (
    <section className="w-full bg-background py-20 lg:py-28">
      <div className="px-6 lg:px-40">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Technology Platform
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900">
            Safety Management, Simplified
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Say goodbye to paper forms, filing cabinets, and compliance chaos.
            Our digital platform transforms how you manage workplace safety.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary">
            WorkSafeBC resources (always current)
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Use these official links for the latest requirements, forms, and
            online reporting tools.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            <li>
              <Link
                href="https://www.worksafebc.com/en/claims/report-workplace-injury-illness/how-employers-report-workplace-injury-illness"
                className="text-sm font-medium text-chart-1 underline underline-offset-4 hover:text-chart-1/80"
                target="_blank"
                rel="noreferrer"
              >
                Employer reporting: how to report an injury/illness
              </Link>
            </li>
            <li>
              <Link
                href="https://www.worksafebc.com/en/health-safety/create-manage/incident-investigations/reporting-incidents-worksafebc"
                className="text-sm font-medium text-chart-1 underline underline-offset-4 hover:text-chart-1/80"
                target="_blank"
                rel="noreferrer"
              >
                Incident investigations: reporting incidents to WorkSafeBC
              </Link>
            </li>
            <li>
              <Link
                href="https://www.worksafebc.com/en/resources/health-safety/forms/incident-investigation-report-form-52e40?lang=en"
                className="text-sm font-medium text-chart-1 underline underline-offset-4 hover:text-chart-1/80"
                target="_blank"
                rel="noreferrer"
              >
                EIIR form (52E40): incident investigation report
              </Link>
            </li>
            <li>
              <Link
                href="https://www.worksafebc.com/resources/health-safety/forms/employer-incident-investigations-online-reporting-tool?lang=en"
                className="text-sm font-medium text-chart-1 underline underline-offset-4 hover:text-chart-1/80"
                target="_blank"
                rel="noreferrer"
              >
                EIIR online reporting tool
              </Link>
            </li>
          </ul>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white p-8 hover:cursor-default"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-chart-1/50 bg-chart-1/5">
                <feature.icon className="h-6 w-6 text-chart-1" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-primary/50 leading-relaxed">
                {feature.description}
              </p>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3">
                {feature.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-chart-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
