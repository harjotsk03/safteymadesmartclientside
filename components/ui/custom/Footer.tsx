export default function Footer(){
  return (
    <footer className="bg-chart-3 text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white">
              Safety Made Smart
            </h3>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Safety Made Smart combines regulatory expertise from former
              WorkSafeBC officers with innovative technology to help
              organizations achieve compliance, reduce risk, and build stronger
              safety cultures.
            </p>

            {/* Social Proof */}
            <div className="mt-6 space-y-2 text-sm">
              <p>✔ 20+ Years Combined WorkSafe Experience</p>
              <p>✔ Trusted by Organizations Across BC</p>
              <p>✔ Serving All of British Columbia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Home",
                "Training Programs",
                "Services",
                "About Us",
                "Resources",
                "Contact",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <p>Phone: [Number]</p>
              <p>Email: [Email]</p>
              <p>Surrey, BC</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Safety Made Smart. All rights reserved.
          </p>
          <p className="text-white">
            Built for safety leaders across British Columbia
          </p>
        </div>
      </div>
    </footer>
  );
}
