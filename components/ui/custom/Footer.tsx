import Link from "next/link";
import { Button } from "../button";

export default function Footer() {
  return (
    <footer className="w-11/12 mx-auto mb-5 rounded-2xl ">
      <div className="bg-orange-600 h-80 text-white/80 rounded-2xl px-8 py-6 relative overflow-hidden ">
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 " />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="">
              <div className="relative z-10">
                <p className="text-4xl font-medium">
                  Turn your chaos,<br></br> into compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-200 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white/80 hover:text-white transition-colors hover:cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() =>
                  document
                    .getElementById("our-process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white/80 hover:text-white transition-colors hover:cursor-pointer"
              >
                Our Process
              </a>
              <a
                onClick={() =>
                  document
                    .getElementById("our-team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white/80 hover:text-white transition-colors hover:cursor-pointer"
              >
                Our Team
              </a>
              <a
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white/80 hover:text-white transition-colors hover:cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-200 mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+16045128677"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us
              </a>
              <a
                href="mailto:sukhwantsingh@safetymadesmart.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-4 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-8">
          <a href="#" className="hover:text-neutral-800 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-neutral-800 transition-colors">
            Privacy Policy
          </a>
        </div>
        <p>© {new Date().getFullYear()} Safety Made SMART</p>
      </div>
    </footer>
  );
}
