import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
/**
 * Tech Minds Academy — Pricing
 * - Green/white brand styling
 * - One-time vs 3-month installment toggle
 * - NGN currency formatting
 * - Mobile-first responsive grid
 */

export default function Pricing() {
  const [billing, setBilling] = useState("once"); // "once" | "installments"

  const courses = useMemo(
    () => [
      {
        id: "software-engineering/web-development",
        title: "Web Development",
        price: 300_000,
        blurb:
          "Full-stack fundamentals with React, APIs, auth, and deploys that ship.",
        features: ["Project-based learning", "Career support", "Weekend options"],
        accent: "from-blue-600 to-blue-500",
      },
      {
        id: "software-engineering/app-development",
        title: "App Development",
        price: 400_000,
        blurb:
          "Build mobile apps end-to-end — UI, APIs, auth, testing, and publishing basics.",
        features: ["Mobile-first projects", "API & auth flows", "Store-ready guidance"],
        accent: "from-teal-600 to-blue-500",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        price: 200_000,
        blurb:
          "SEO, content, ads & analytics — grow brands with data-driven strategy.",
        features: ["Hands-on campaigns", "Analytics basics", "Portfolio tasks"],
        accent: "from-blue-700 to-teal-500",
      },
      {
        id: "data-science",
        title: "Data Science",
        price: 400_000,
        blurb:
          "Python, pandas, ML basics & dashboards — go from data to decisions.",
        features: ["Real datasets", "Visualization", "Capstone project"],
        accent: "from-teal-600 to-blue-600",
      },
      {
        id: "cloud-computing",
        title: "Cloud (DevOps/Cloud)",
        price: 600_000,
        blurb:
          "Cloud foundations, CI/CD, containers & monitoring for production-ready skills.",
        features: ["Labs included", "Deploy pipelines", "Interview prep"],
        accent: "from-blue-800 to-blue-600",
      },
      {
        id: "coding-for-kids-engineering",
        title: "Coding for Kids",
        price: 150_000,
        blurb:
          "Creativity-first programming with games, animations & safe challenges.",
        features: ["Small groups", "Friendly mentors", "Parents reports"],
        accent: "from-teal-500 to-blue-500",
      },
    ],
    []
  );

  const formatNGN = (n) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(n);

  const monthly = (total) => Math.ceil(total / 3 / 1000) * 1000; // round to neat NGN

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header */}
      <header className="px-6 sm:px-12 lg:px-20 py-14 border-b border-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold tracking-wide">
            Tech Minds Academy • Pricing
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-blue-700">
            Transparent Pricing, Real Skills
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Choose a payment option that fits you — pay once or split over 3 months.
          </p>

          {/* Billing Toggle */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white p-1">
            <button
              onClick={() => setBilling("once")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                billing === "once"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setBilling("installments")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                billing === "installments"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              3-Month Plan
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            * Installments attract no extra fees. Seats are limited.
          </p>
        </div>
      </header>

      {/* Pricing Grid */}
      <section className="px-6 sm:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="group relative rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Top ribbon */}
              <div
                className={`absolute inset-x-0 -top-10 h-24 bg-gradient-to-r ${c.accent} opacity-10 blur-2xl`}
                aria-hidden
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.blurb}</p>

                {/* Price */}
                <div className="mt-5">
                  {billing === "once" ? (
                    <>
                      <div className="text-3xl font-extrabold text-blue-700">
                        {formatNGN(c.price)}
                      </div>
                      <p className="text-xs text-gray-500">One-time payment</p>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl font-extrabold text-blue-700">
                        {formatNGN(monthly(c.price))}{" "}
                        <span className="text-base font-semibold text-gray-700">/mo</span>
                      </div>
                      <p className="text-xs text-gray-500">3 payments • Total {formatNGN(c.price)}</p>
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {c.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 rounded-full bg-blue-100 ring-1 ring-blue-300" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 flex gap-2">
                  <Link
                    to="/application"
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to={`/programs/${c.id}`}
                    className="px-4 inline-flex items-center justify-center rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Highlight card for Cloud if grid needs balance */}
          <div className="lg:col-span-3">
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/60 p-6 text-center">
              <p className="text-sm text-blue-800">
                Need employer/group pricing or invoices?{" "}
                <a href="/contact" className="font-semibold underline">
                  Contact admissions
                </a>
                . Scholarships may be available for exceptional candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Notes */}
      <section className="px-6 sm:px-12 lg:px-20 pb-14">
        <div className="max-w-4xl mx-auto grid gap-4">
          <details className="group rounded-xl border border-blue-100 bg-white p-5 open:shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-blue-700">
              What’s included in tuition?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Mentor-led classes, labs, projects, career guidance, certificates, and access to
              learning resources. Some courses include practice environments.
            </p>
          </details>

          <details className="group rounded-xl border border-blue-100 bg-white p-5">
            <summary className="cursor-pointer list-none font-semibold text-blue-700">
              Are there refunds?
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Seats are limited; fees are generally non-refundable once classes begin. Review our{" "}
              <a href="/terms" className="underline">Terms & Conditions</a> for details.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}
