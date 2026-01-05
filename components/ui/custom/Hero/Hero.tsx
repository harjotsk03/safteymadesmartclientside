import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "../../../../assets/heroImage.jpeg";

export default function Hero() {
  return (
    <section className="relative h-[89.4vh] w-full flex">
      <div className="absolute inset-0 w-[95%] grayscale h-full  mx-auto mt-8 rounded-2xl overflow-hidden">
        <Image
          src={HeroImage}
          alt="Workplace safety consulting"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute  inset-0 bg-linear-to-r from-chart-3/98 via-chart-2/95 to-chart-2/60"></div>
      </div>

      <div className="relative z-10 flex items-center h-full">
        <div className="px-6 lg:px-40 py-12 lg:py-24 text-left">
          <div className="flex flex-row items-center gap-3">
            <div className="bg-chart-1 px-3 py-1 rounded-md">
              <p className="text-white font-regular text-xs"> SMART</p>
            </div>
            <p className="font-light text-white text-xs">
              Specific, Measurable, Achievable, Relevant, and Time-bound
            </p>
          </div>
          <h1 className="text-5xl lg:text-7xl font-medium leading-20 text-white mt-6">
            Modern Safety Consulting. <br />{" "}
            <span className="text-chart-1">Powered by Experience.</span>
          </h1>

          <p className="mt-6 text-base lg:text-lg text-white/50 w-3/4">
            Combining 20+ years of BC work place expertise with cutting-edge
            technology to make workplace safety simpler, smarter, and more
            effective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-14">
            <Button size="lg" variant={"secondary"}>
              Explore Our Services
            </Button>
            <Button size="lg" variant={"primary"}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
