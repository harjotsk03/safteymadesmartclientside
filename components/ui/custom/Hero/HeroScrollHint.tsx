"use client";

import * as React from "react";
import { ChevronsDown, Mouse } from "lucide-react";
import { usePathname } from "next/navigation";
import { lenisScrollToId, useLenis } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";

const TARGET_ID = "intro";

export function HeroScrollHint() {
  const lenis = useLenis();
  const pathname = usePathname();

  const scrollToContent = React.useCallback(() => {
    if (pathname !== "/") return;
    if (lenis) {
      lenisScrollToId(lenis, TARGET_ID);
    } else {
      document.getElementById(TARGET_ID)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    window.history.replaceState(null, "", `/#${TARGET_ID}`);
  }, [lenis, pathname]);

  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:-bottom-0">
      <button
        type="button"
        onClick={scrollToContent}
        aria-label="Scroll to content below"
        className={cn(
          "pointer-events-auto flex flex-col items-center gap-2 rounded-full px-4 py-2",
          "text-primary/55 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chart-1/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary/45 pb-1">
          Scroll
        </span>
        {/* <Mouse
          className="size-6 motion-reduce:opacity-70"
          strokeWidth={1.5}
          aria-hidden
        /> */}
        <ChevronsDown
          className="size-6 motion-safe:animate-bounce motion-reduce:animate-none"
          strokeWidth={1}
          aria-hidden
        />
      </button>
    </div>
  );
}
