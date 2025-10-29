import React from "react";
import logoAIG from "./logo-aig.svg";

export default function Site() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased flex min-h-screen flex-col">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Logo + brand */}
          <div className="flex items-center gap-3">
            {/* Purple AIG square */}
            <div className="shrink-0">
              <img
                src={logoAIG}
                alt="AIG logo"
                className="h-9 w-9 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
              />
            </div>

            {/* Brand text */}
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                Ansari Insurance Group
              </div>
              <div className="text-[11px] font-medium text-slate-500 -mt-0.5">
                Medicare • Life • Dental • Vision
              </div>
            </div>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a
              href="#plans"
              className="hover:text-slate-900 transition-colors"
            >
              Plans
            </a>
            <a
              href="#benefits"
              className="hover:text-slate-900 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#about"
              className="hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center">
            <a
              href="tel:14252479415"
              className="inline-flex items-center rounded-xl bg-[#6D28D9] px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:opacity-90 active:opacity-80 md:text-sm md:px-4 md:py-2.5"
            >
              Call / Text 425-247-9415
            </a>
          </div>
        </div>
      </header>

      {/* page content pushed down so it doesn't sit under fixed header */}
      <main className="flex-1 pt-[80px]">
        {/* ===== HERO ===== */}
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#6D28D9] shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
              No-cost Medicare review
            </div>

            <h1 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Guiding you through Medicare
              <br className="hidden sm:block" />
              <span className="text-[#6D28D9]"> with Care and Clarity.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Medicare Advantage, Supplements, Prescription (Part D), Dental,
              Vision, and even extra benefits like OTC allowances — explained
              in plain English (and Farsi if you or your family prefer) by our
              licensed team.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="tel:14252479415"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#6D28D9] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:opacity-90 active:opacity-80 sm:w-auto"
              >
                Call / Text 425-247-9415
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200 hover:bg-slate-50 sm:w-auto"
              >
                Book with our team
              </a>
            </div>

            <div className="mt-6 text-[11px] text-slate-500">
              Licensed independent agents • Local help • No obligation
            </div>
          </div>
        </section>

        {/* ===== PLANS SECTION ===== */}
        <section
          id="plans"
          className="bg-white/60 border-y border-slate-200/70 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
                Which plan actually fits you?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 text-base leading-relaxed">
                Everyone’s situation is different. Our team helps you compare
                Medicare Advantage, Medicare Supplement (Medigap), and
                Prescription Drug Plans — side by side — based on your doctors,
                your prescriptions, and your budget.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {/* Card 1 */}
                <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-[#6D28D9]">
                    Medicare Advantage (Part C)
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    $0 premium plans may include extras
                  </div>
                  <ul className="mt-3 text-sm leading-relaxed text-slate-600 space-y-2">
                    <li>• OTC / grocery allowance</li>
                    <li>• Dental / vision / hearing</li>
                    <li>• Gym, rides, more</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-[#6D28D9]">
                    Medicare Supplement (Medigap)
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    Predictable out-of-pocket costs
                  </div>
                  <ul className="mt-3 text-sm leading-relaxed text-slate-600 space-y-2">
                    <li>• Keep Original Medicare</li>
                    <li>• Lower surprise bills</li>
                    <li>• Usually see any provider who takes Medicare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXTRA BENEFITS ===== */}
        <section id="benefits" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl text-center">
              Want the extras?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 text-base leading-relaxed">
              Some plans give you more than just medical coverage. If you
              qualify, you could get things like OTC money, transportation to
              appointments, flex cards, dental/vision credit, etc.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  OTC Allowance
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Money every quarter for health items like vitamins, cold meds,
                  bandages, etc.
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  Dental / Vision / Hearing
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Cleanings, glasses, hearing aids depending on the plan.
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  Transportation &amp; More
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Rides to medical visits, gym memberships, and more.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section
          id="about"
          className="bg-white/60 border-y border-slate-200/70 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Real help. Not a call center.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                We’re independent licensed agents. That means we walk you
                through options from multiple companies — and we’ll tell you
                what you actually qualify for, not just what sounds good in a TV
                ad. We can also help in Farsi if that’s easier for you or your
                family.
              </p>

              <div className="mt-8 inline-block rounded-xl bg-white px-4 py-3 text-left shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200">
                <div className="text-xs font-semibold text-slate-900">
                  Our promise:
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Your doctors, your meds, your budget come first. If we can’t
                  improve your situation, we’ll tell you that.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT / BOOKING ===== */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 py-16 md:py-24"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Let’s look at your options
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Call, text, or schedule a time. Our team will review your doctors,
              prescriptions, and available benefits — and let you know what
              you’re actually eligible for.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="tel:14252479415"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#6D28D9] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:opacity-90 active:opacity-80 sm:w-auto"
              >
                Call / Text 425-247-9415
              </a>

              <a
                href="mailto:info@ansariinsurancegroup.com"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200 hover:bg-slate-50 sm:w-auto"
              >
                info@ansariinsurancegroup.com
              </a>
            </div>

            {/* Calendly embed */}
            <div className="mt-10 text-left">
              <div className="text-sm font-semibold text-slate-900 text-center">
                Or book a meeting with our team:
              </div>
              <div className="mt-4 w-full rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.07)] ring-1 ring-slate-200 p-4">
                <iframe
                  title="Book a call with Ansari Insurance Group"
                  src="https://calendly.com/ansariinsurancegroup/consult"
                  className="w-full"
                  style={{
                    minHeight: "600px",
                    border: "0",
                  }}
                />
              </div>
            </div>

            <div className="mt-6 text-[11px] text-slate-500 leading-relaxed text-center">
              Zero cost. Zero obligation. You don’t sign anything unless you
              want to enroll.
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER / DISCLAIMER ===== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3 text-sm text-slate-600">
            <div className="space-y-2">
              <div className="text-slate-900 font-semibold text-base">
                Ansari Insurance Group
              </div>
              <div className="text-slate-500 text-xs leading-relaxed">
                Guiding you through Medicare with Care and Clarity.
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-slate-900 font-semibold text-base">
                Contact
              </div>
              <div className="text-xs leading-relaxed">
                Call / Text: 425-247-9415
                <br />
                Email: info@ansariinsurancegroup.com
              </div>
            </div>

            <div className="space-y-2 text-xs leading-relaxed">
              <div className="text-slate-900 font-semibold text-base">
                Medicare Disclaimer
              </div>
              <p className="text-slate-500">
                We do not offer every plan available in your area. Any
                information we provide is limited to the plans we do offer in
                your area. Please contact Medicare.gov or 1-800-MEDICARE to get
                information on all your options.
              </p>
              <p className="text-slate-400">
                Not connected with or endorsed by the United States government
                or the federal Medicare program.
              </p>
            </div>
          </div>

          <div className="mt-12 text-[11px] text-slate-400 text-center">
            © {new Date().getFullYear()} Ansari Insurance Group. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
