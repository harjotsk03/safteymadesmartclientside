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
        <div className="absolute  inset-0 bg-linear-to-t from-background via-background/95 to-background/70"></div>
      </div>

      <div className="relative z-10 flex items-center h-full">
        <div className="px-6 lg:px-40 py-12 lg:py-24 text-left">
          {/* <div className="flex flex-row items-center gap-3">
            <div className="bg-chart-1 px-3 py-1 rounded-md">
              <p className="text-primary font-regular text-xs"> SMART</p>
            </div>
            <p className="font-regular text-primary text-xs">
              Specific, Measurable, Achievable, Relevant, and Time-bound
            </p>
          </div> */}
          <h1 className="text-5xl lg:text-7xl font-medium leading-22 tracking-tight text-primary mt-6">
            Real Safety for <span className="text-chart-1">Real Work.</span>
          </h1>

          <p className="mt-6 text-base lg:text-xl text-primary/70 w-3/4">
            From in-person training to digital safety systems, we help you stay
            compliant without slowing down operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-14">
            <Button size="lg">Explore Our Services</Button>
            <Button size="lg" variant={"outline"}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
