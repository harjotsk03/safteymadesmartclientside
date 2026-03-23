"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../../../assets/logo.png";
import { lenisScrollToId, useLenis } from "@/components/ui/smooth-scroll";

const navSections = [
  { label: "Services", id: "services", href: "/#services" },
  { label: "Our Process", id: "our-process", href: "/#our-process" },
  { label: "Our Team", id: "our-team", href: "/#our-team" },
] as const;

function useInPageSectionNav() {
  const lenis = useLenis();
  const pathname = usePathname();

  return React.useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      sectionId: string,
      href: string,
    ) => {
      if (pathname !== "/") return;
      e.preventDefault();
      if (lenis) {
        lenisScrollToId(lenis, sectionId);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      window.history.replaceState(null, "", href);
    },
    [lenis, pathname],
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const onSectionNav = useInPageSectionNav();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 sm:w-100">
        <nav className="flex flex-col gap-4">
          {navSections.map(({ label, id, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => {
                onSectionNav(e, id, href);
                setOpen(false);
              }}
              className="block px-2 py-1 text-lg font-semibold"
            >
              {label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="mt-4 w-full text-center [&_a]:justify-center"
          >
            <Link
              href="/#contact"
              onClick={(e) => {
                onSectionNav(e, "contact", "/#contact");
                setOpen(false);
              }}
            >
              Get in Touch
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const scrollEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function CenteredNavbar() {
  const onSectionNav = useInPageSectionNav();
  const lenis = useLenis();
  const pathname = usePathname();

  const scrollHomeToTop = React.useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.15, easing: scrollEasing });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, [lenis]);

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    e.preventDefault();
    scrollHomeToTop();
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b bg-background">
      <div className="w-full flex h-20 items-center justify-between px-8">
        <div className="flex items-center">
          <Link
            href="/"
            onClick={onLogoClick}
            className="flex items-center space-x-2"
          >
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Safety Made Smart Logo"
            />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-8">
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {navSections.map(({ label, id, href }) => (
                  <NavigationMenuItem key={href}>
                    <Link
                      href={href}
                      className={navigationMenuTriggerStyle()}
                      onClick={(e) => onSectionNav(e, id, href)}
                    >
                      {label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center">
            <Button asChild>
              <Link
                href="/#contact"
                onClick={(e) => onSectionNav(e, "contact", "/#contact")}
              >
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
}
