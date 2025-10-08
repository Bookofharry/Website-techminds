import React from "react";

/**
 * Tech Minds Academy — Privacy Policy
 * - Green/white brand styling
 * - Table of contents with anchor links
 * - Clear sections for NDPR/GDPR-style transparency
 * - Props: lastUpdated (string, optional)
 */

export default function PrivacyPolicy({ lastUpdated = "October 2025" }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
      {/* Header */}
      <header className="px-6 sm:px-12 lg:px-20 py-14 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold tracking-wide">
            Tech Minds Academy • Privacy
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-emerald-700">
            Privacy Policy
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Your privacy matters. This policy explains what we collect, why we collect it,
            how we use it, and the choices you have.
          </p>
          <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Body */}
      <div className="px-6 sm:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto">

          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5"
          >
            <h2 className="text-sm font-semibold text-emerald-700 mb-3">On this page</h2>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm list-decimal list-inside">
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#scope">Scope</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#data-we-collect">Data we collect</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#how-we-use">How we use data</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#lawful-basis">Lawful bases</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#sharing">Sharing & disclosure</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#cookies">Cookies & analytics</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#retention">Data retention</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#security">Security</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#children">Children’s data</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#international">International transfers</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#your-rights">Your privacy rights</a></li>
              <li><a className="hover:text-emerald-700 underline underline-offset-2" href="#contact">Contact us</a></li>
            </ol>
          </nav>

          {/* 1. Scope */}
          <section id="scope" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">1) Scope</h2>
            <p className="leading-relaxed text-gray-700">
              This Privacy Policy describes how <span className="font-semibold">Tech Minds Academy</span> (“we”, “us”, “our”)
              collects, uses, and safeguards personal data when you visit our website, apply or enroll in our
              programs (on-campus in Bwari, Abuja or online), or interact with our platforms, communications, and events.
            </p>
          </section>

          {/* 2. Data we collect */}
          <section id="data-we-collect" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">2) Data we collect</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li><span className="font-semibold">Identity & contact:</span> name, email, phone, country, location (city/state), emergency contact (for minors where applicable).</li>
              <li><span className="font-semibold">Academic & profile:</span> course selections, learning goals, prior experience, submissions, assessment results, certificates.</li>
              <li><span className="font-semibold">Payments:</span> billing name, transaction references, and amounts (processed securely by payment providers; we don’t store card numbers).</li>
              <li><span className="font-semibold">Technical:</span> device info, IP address, app version, and usage logs for reliability, fraud prevention, and improvements.</li>
              <li><span className="font-semibold">Communications:</span> emails, chat messages, support requests, feedback, testimonials.</li>
              <li><span className="font-semibold">Media (optional):</span> class photos/screenshots for academic records or marketing (only with permission where required).</li>
            </ul>
          </section>

          {/* 3. How we use data */}
          <section id="how-we-use" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">3) How we use your data</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>To process admissions, manage classes, track progress, and issue certificates.</li>
              <li>To deliver online learning, labs, and student support.</li>
              <li>To personalize content, improve curricula, and ensure platform reliability.</li>
              <li>To communicate class updates, schedules, and important notices.</li>
              <li>To comply with legal/financial obligations (e.g., invoicing, tax, audits).</li>
              <li>With your consent, to share success stories or send marketing you can opt out from anytime.</li>
            </ul>
          </section>

          {/* 4. Lawful bases */}
          <section id="lawful-basis" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">4) Lawful bases for processing</h2>
            <p className="text-gray-700 leading-relaxed">
              Depending on the context, we rely on one or more of the following: <span className="font-semibold">consent</span>,
              <span className="font-semibold"> contract necessity</span> (to provide your course), <span className="font-semibold">legal obligation</span>,
              and <span className="font-semibold">legitimate interests</span> (e.g., service improvement, fraud prevention).
              We aim to align with Nigeria’s NDPR and, where relevant, international standards like GDPR best practices.
            </p>
          </section>

          {/* 5. Sharing */}
          <section id="sharing" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">5) Sharing & disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal data. We may share limited data with trusted providers who help us operate
              (e.g., payment processors, LMS, cloud hosting, email/SMS). These providers follow contractual
              confidentiality and security obligations. We may also disclose information to comply with law or protect
              our rights and community safety.
            </p>
          </section>

          {/* 6. Cookies */}
          <section id="cookies" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">6) Cookies & analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies or similar technologies to keep you signed in, remember preferences, and measure performance.
              You can control cookies in your browser settings; disabling some may impact features (e.g., login persistence).
            </p>
          </section>

          {/* 7. Retention */}
          <section id="retention" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">7) Data retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We keep personal data only as long as needed for learning delivery, records, and legal/accounting purposes.
              Typical ranges: student records and certifications up to 5–7 years; support communications 1–3 years; analytics in aggregated form longer without identifying details.
            </p>
          </section>

          {/* 8. Security */}
          <section id="security" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">8) Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement administrative, technical, and physical safeguards (access controls, encryption in transit,
              least-privilege, back-ups). No method is 100% secure, but we work continuously to protect your data.
            </p>
          </section>

          {/* 9. Children */}
          <section id="children" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">9) Children’s data</h2>
            <p className="text-gray-700 leading-relaxed">
              For programs like “Coding for Kids,” we collect only the data needed to deliver training and keep students safe.
              Where required, we obtain consent from a parent/guardian, and we limit communications to class-relevant updates.
            </p>
          </section>

          {/* 10. International transfers */}
          <section id="international" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">10) International data transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Some providers may process data outside Nigeria. When that happens, we take reasonable steps to ensure
              comparable protection through contractual safeguards and reputable vendors.
            </p>
          </section>

          {/* 11. Rights */}
          <section id="your-rights" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">11) Your privacy rights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>Access a copy of your personal data we hold.</li>
              <li>Request correction or deletion (where legally permissible).</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw consent at any time (processing before withdrawal remains lawful).</li>
              <li>Opt out of marketing messages via unsubscribe links or by contacting us.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              We may ask for verification to protect your account and data.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">Contact us</h2>
            <p className="text-gray-700 leading-relaxed">
              For privacy questions or requests, reach us at:
            </p>
            <address className="not-italic mt-3 font-semibold text-emerald-700">
              Tech Minds Academy — Bwari, Abuja, Nigeria <br />
              Email: <a href="mailto:privacy@techmindsacademy.org" className="underline">privacy@techmindsacademy.org</a> <br />
              Website: <a href="https://techmindsacademy.org" className="underline">www.techmindsacademy.org</a>
            </address>
          </section>


        </div>
      </div>
    </main>
  );
}
