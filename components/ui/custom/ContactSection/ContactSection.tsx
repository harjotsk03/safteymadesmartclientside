"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none  placeholder:text-muted-foreground focus-visible:border-chart-1 focus-visible:ring-2 focus-visible:ring-chart-1/20";

const supportColumns = [
  {
    title: "Customer Support",
    body: "Questions about training, audits, or your account? Our team is here to help during business hours.",
  },
  {
    title: "Feedback & suggestions",
    body: "We improve when you share ideas. Tell us what would make safety simpler for your workplace.",
  },
//   {
//     title: "Media inquiries",
//     body: "For press, partnerships, or speaking requests, reach out and we’ll connect you with the right person.",
//   },
];

export default function ContactSection() {
  const [message, setMessage] = React.useState("");
  const maxMessage = 120;
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorText("");
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setErrorText(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setMessage("");
    } catch {
      setErrorText("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full px-6 py-16 lg:px-20 lg:py-16 lg:pl-32 lg:pr-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="min-w-0 flex-1 space-y-10 lg:max-w-xl xl:max-w-2xl">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-primary lg:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Email, call, or use the form and we&apos;ll connect you with the
                right support.
              </p>
            </div>

            <div className="space-y-1 text-sm text-foreground">
              <p>
                <a
                  href="tel:+16045128677"
                  className="hover:text-chart-1 transition-colors"
                >
                  +1 (604) 512-8677
                </a>
              </p>
              <p>
                <a
                  href="mailto:sukhwantsingh@safetymadesmart.com"
                  className="hover:text-chart-1 transition-colors"
                >
                  sukhwantsingh@safetymadesmart.com
                </a>
              </p>
              <Link
                href="mailto:sukhwantsingh@safetymadesmart.com"
                className="inline-block pt-2 text-sm font-medium text-chart-1 underline underline-offset-4 hover:text-chart-1/80"
              >
                Customer Support
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:gap-8">
              {supportColumns.map((col) => (
                <div key={col.title} className="space-y-2">
                  <h3 className="text-sm font-semibold text-primary">
                    {col.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {col.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full shrink-0 lg:w-[min(100%,460px)] lg:max-w-none">
            <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary">
                  Get in touch
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Any queries or questions? Just send us a message—we&apos;ll
                  get back to you as soon as we can.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="first-name" className="text-xs text-black">
                      First name
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="last-name" className="text-xs text-black">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-black">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email"
                    className={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs text-black">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                    className={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs text-black">
                    How can we help?
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={maxMessage}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?"
                      className={cn(inputBase, "min-h-[120px] resize-y pb-7")}
                    />
                    <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-muted-foreground">
                      {message.length}/{maxMessage}
                    </span>
                  </div>
                </div>

                {status === "success" && (
                  <p className="rounded-lg border border-chart-1/30 bg-chart-1/10 px-3 py-2 text-sm text-primary">
                    Thanks — we received your message and will get back to you
                    soon.
                  </p>
                )}
                {status === "error" && errorText && (
                  <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {errorText}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-11 w-full rounded-full border-0 bg-chart-1 text-white hover:bg-chart-1/90 focus-visible:ring-chart-1/40 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Submit"}
                </Button>
              </form>

              {/* <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
                By contacting us, you agree to our{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-foreground underline-offset-2 hover:text-chart-1 hover:underline"
                >
                  Terms of service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-foreground underline-offset-2 hover:text-chart-1 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
