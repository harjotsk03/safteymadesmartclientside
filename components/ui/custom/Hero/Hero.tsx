import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "../../../../assets/newhero.png";
import { HeroScrollHint } from "./HeroScrollHint";

export default function Hero() {
  return (
    <section className="relative w-full px-6 pb-20 pt-6 lg:px-20 lg:pb-24 lg:pt-10">
      <div className="flex flex-col gap-8 rounded-3xl bg-chart-1/10 p-6 sm:p-8 lg:min-h-[min(520px,72vh)] lg:flex-row lg:items-stretch lg:gap-10 lg:p-10 xl:gap-14 xl:pl-16 xl:pr-12 xl:py-12">
        <div className="flex min-w-0 flex-1 flex-col justify-center lg:max-w-[58%] lg:py-2 lg:pr-4">
          <h1 className="text-5xl font-medium leading-tight tracking-tight text-primary lg:text-6xl xl:text-7xl">
            Real Safety for <span className="text-chart-1">Real Work.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-black/60 lg:text-base">
            We help bridge the gap between &ldquo;safety as imagined&rdquo; and
            &ldquo;safety as done,&rdquo; building practical systems that
            protect your people and your operations.
          </p>
          {/* <p className="mt-4 text-sm leading-relaxed text-black/55 lg:text-sm">
            Whether you&apos;re building a Safety Management System from scratch
            or strengthening parts of an existing program, we can tailor support
            to your size, needs, and internal capacity.
          </p> */}

          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:pt-10">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Services
            </Button>
            <Button
              onClick={() => window.open("https://zbooking.ca/YCeFm", "_blank")}
              size="lg"
              variant="outline"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-4/5 w-full max-w-md shrink-0 overflow-hidden rounded-2xl sm:aspect-3/4 lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[min(400px,55vh)] lg:w-[42%] lg:max-w-none lg:self-stretch">
          <Image
            src={HeroImage}
            alt="Workplace safety consulting"
            fill
            priority
            className="object-cover object-[50%_60%]"
            sizes="(max-width: 1023px) 100vw, 38vw"
          />
        </div>
      </div>

      <HeroScrollHint />
    </section>
  );
}
