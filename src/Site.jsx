export default function Site() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 shadow-md" />
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight text-indigo-700">Ansari Insurance Group</div>
              <div className="text-xs text-slate-500">Medicare • Life • Annuities • Health</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#why" className="hover:text-indigo-700">Why Us</a>
            <a href="#book" className="hover:text-indigo-700">Book</a>
            <a href="#faq" className="hover:text-indigo-700">FAQ</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:14252479415" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-indigo-50">Call: 425-247-9415</a>
            <a href="#book" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-semibold shadow">Schedule</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 via-indigo-100 to-blue-50" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-b from-indigo-200/60 to-indigo-50 clip-path-[polygon(30%_0,100%_0,100%_100%,0_100%)] hidden md:block" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Your Medicare Experts Across the PNW —
              <span className="block text-indigo-700 mt-1">Clear Guidance. Better Benefits.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-md">
              A friendly team helping residents across <span className="font-medium">Oregon, Washington (including Vancouver), Arizona, and California</span> compare <span className="font-medium">Medicare Advantage</span> plans — plus Medigap, Part D, Life, Annuities & Health. No-cost consultations. No pressure.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-white font-semibold shadow-md transition">Schedule a Free Consultation</a>
              <a href="tel:14252479415" className="inline-flex justify-center rounded-xl border border-slate-300 hover:border-indigo-500 px-6 py-3 font-semibold shadow-sm transition">Call 425-247-9415</a>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Not connected with or endorsed by the U.S. government or the federal Medicare program.
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-lg overflow-hidden ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?auto=format&fit=crop&w=800&q=80"
                alt="Senior couple with advisor"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-indigo-600/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-indigo-100 rounded-xl shadow p-4 text-sm text-slate-600 w-60">
              <strong className="text-indigo-700">Licensed Across OR, WA, AZ, & CA</strong>
              <p className="mt-1 text-xs">Your trusted Medicare & Life Insurance team serving the Pacific Northwest and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-center text-indigo-700 border-b-2 border-indigo-200 inline-block">Our Services</h2>
        <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">Comprehensive coverage options focusing on Medicare Advantage and more.</p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Medicare Advantage (Part C)",
            "Medicare Supplement (Medigap)",
            "Prescription Drug Plans (Part D)",
            "Life Insurance",
            "Annuities",
            "Health, Dental & Vision"
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white to-indigo-50/30"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Booking and Lead Form */}
      <section id="book" className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Book an Appointment</h2>
            <p className="text-slate-600 mb-4">Use our calendar or form to schedule your free consultation.</p>
            <iframe src="https://calendly.com/ansariinsurancegroup/consultation" className="w-full h-[500px] rounded-xl border border-slate-300"></iframe>
          </div>

          <div id="contact" className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Request a Call Back</h3>
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Lead from website\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nZIP: ${data.get("zip")}\nNotes: ${data.get("notes")}`;
                window.location.href = `mailto:info@ansariinsurancegroup.com?subject=${encodeURIComponent("New Lead — Ansari Insurance Group")}&body=${encodeURIComponent(body)}`;
              }}
            >
              <input name="name" required placeholder="Full Name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <input name="phone" required placeholder="Phone Number" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <input name="email" placeholder="Email" type="email" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <input name="zip" placeholder="ZIP Code" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <textarea name="notes" rows={3} placeholder="Questions or details..." className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <button type="submit" className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 text-sm font-semibold shadow-md transition">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700 border-b-2 border-indigo-200 inline-block">Frequently Asked Questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "What is Medicare Advantage?",
              a: "It combines Part A and Part B, often including drug coverage and extras like dental or vision."
            },
            {
              q: "Do you charge for help?",
              a: "No, consultations are free; carriers pay us if you enroll."
            },
            {
              q: "Can I keep my doctors?",
              a: "We check your plan’s network and confirm your providers."
            },
            {
              q: "What states do you serve?",
              a: "We are licensed in Oregon, Washington (including Vancouver), Arizona, and California."
            }
          ].map((f, i) => (
            <details key={i} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <summary className="cursor-pointer select-none px-5 py-4 font-medium text-slate-800 flex justify-between items-center">
                {f.q}
                <span className="text-indigo-600">▾</span>
              </summary>
              <div className="bg-indigo-50 px-5 py-4 text-sm text-slate-600">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white py-10 text-sm text-center">
        <div>© {new Date().getFullYear()} Ansari Insurance Group — Licensed in OR, WA, AZ, and CA.</div>
        <div className="text-xs mt-2 max-w-3xl mx-auto opacity-90">
          We do not offer every plan available in your area. Any information we provide is limited to the plans we do offer in your area. Please contact{" "}
          <a className="underline" href="https://www.medicare.gov/" target="_blank" rel="noreferrer">Medicare.gov</a> or 1-800-MEDICARE to get information on all your options.
        </div>
        <div className="text-xs mt-4">
          <a href="#privacy" className="underline text-indigo-200 hover:text-white">Privacy Policy</a>
        </div>
      </footer>

      {/* Privacy Policy */}
      <section id="privacy" className="max-w-4xl mx-auto px-4 py-10 text-xs text-slate-600">
        <h2 className="text-base font-semibold mb-2 text-indigo-700">Privacy Policy</h2>
        <p className="mb-2">
          Your privacy is important to us. We only collect information you provide voluntarily through our forms or calendar booking. This data is used solely for scheduling and providing insurance consultations.
        </p>
        <p>
          We never sell or share your personal data. You may request deletion of your information at any time by contacting{" "}
          <a href="mailto:info@ansariinsurancegroup.com" className="underline text-indigo-600">info@ansariinsurancegroup.com</a>.
        </p>
      </section>
    </div>
  );
}
