"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../../../assets/logo.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Joint Health & Safety Committee Training",
    href: "/training/joint-health-and-safety-committee-training",
    description: "Training for committee roles and responsibilities.",
  },
  {
    title: "Incident Reporting and Investigations",
    href: "/training/incident-reporting-and-investigations",
    description: "Document and investigate workplace incidents.",
  },
  {
    title: "Workplace Inspections",
    href: "/training/workplace-inspections",
    description: "Identify hazards through systematic inspections.",
  },

  {
    title: "WHMIS 2026",
    href: "/training/whmis-2026",
    description: "Latest hazardous materials safety standards.",
  },
  {
    title: "Hazard Identification",
    href: "/training/hazard-identification",
    description: "Recognize potential workplace hazards.",
  },
  {
    title: "Risk Assessment and Ranking",
    href: "/training/risk-assessment-and-ranking",
    description: "Evaluate and prioritize workplace risks.",
  },
];

const services: { title: string; href: string }[] = [
  {
    title: "Safety Training",
    href: "/services/safety-training",
  },
//   {
//     title: "Develop your Safety Management System",
//     href: "/services/safety-management-system",
//   },
  {
    title: "Safety System Auditing/Gap Analysis",
    href: "/services/safety-system-auditing",
  },
  {
    title: "Incident Investigations",
    href: "/services/incident-investigations",
  },
  {
    title: "Custom Policy and Procedure Development",
    href: "/services/custom-policy-development",
  },
  {
    title: "Workplace Inspections",
    href: "/services/workplace-inspections",
  },
  {
    title: "Health & Safety Manual Development",
    href: "/services/health-safety-manual",
  },
  {
    title: "Customized Learning Management System",
    href: "/services/learning-management-system",
  },
];

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
  href: string;
}

function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-snug">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

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
          <a href="/" className="block px-2 py-1 text-lg font-semibold">
            Home
          </a>
          <div className="space-y-3">
            <div className="px-2 py-1">
              <p className="text-sm font-semibold mb-2">Getting Started</p>
              <div className="space-y-2">
                <a
                  href="/docs"
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Introduction
                </a>
                <a
                  href="/docs/installation"
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Installation
                </a>
                <a
                  href="/docs/primitives/typography"
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Typography
                </a>
              </div>
            </div>
            <div className="px-2 py-1">
              <p className="text-sm font-semibold mb-2">Components</p>
              <div className="space-y-2">
                {components.map((component) => (
                  <a
                    key={component.title}
                    href={component.href}
                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {component.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="/docs" className="block px-2 py-1 text-lg font-semibold">
            Docs
          </a>
          <Button className="mt-4">Get Started</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function CenteredNavbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b bg-background">
      <div className="w-full flex h-20 items-center justify-between px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Safety Made Smart Logo"
            />
          </a>
        </div>

        <div className="flex flex-row items-center gap-10">
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <a href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/training" className={navigationMenuTriggerStyle()}>
                    Training
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/services" className={navigationMenuTriggerStyle()}>
                    Services
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/about-us" className={navigationMenuTriggerStyle()}>
                    About Us
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Button>Get in Touch</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNav />
      </div>
    </nav>
  );
}
