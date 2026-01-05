import { Button } from "../../button";

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-chart-1 py-32 mx-28 mb-20 rounded-3xl">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-800/10 via-transparent to-orange-100/10" />

      <div className="relative mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Ready to Modernize Your Safety Program?
        </h2>

        <p className="mt-6 text-lg w-3/4 mx-auto text-white/70 leading-relaxed">
          Whether you need immediate compliance support or want to transform
          your entire safety management system, we’re here to help. Schedule a
          free consultation to discuss your needs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant={"outline"} size={"lg"}>
            Book a Call
          </Button>
          <Button variant={"secondary"} size={"lg"}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
