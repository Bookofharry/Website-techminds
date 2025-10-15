import React, { useState } from "react";
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";

const Footer = ({ onSubscribe }) => {
  const year = new Date().getFullYear();

  // --- newsletter state
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'ok'|'error', text: string }

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      setSubmitting(true);
      if (typeof onSubscribe === "function") {
        // Parent decides what to do with the email
        await onSubscribe(email);
      } else {
        // Default action if no parent callback is provided
        console.log("Newsletter subscribe:", email);
      }
      setMessage({ type: "ok", text: "Thanks! You’re on the list." });
      setEmail("");
    } catch (err) {
      setMessage({ type: "error", text: err?.message || "Something went wrong. Try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className="py-12 bg-gray-50 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-y-14 gap-x-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand + pitch */}
          <div className="lg:col-span-2 lg:pr-10">
            <a href="/" className="inline-flex items-center">
              <img className="h-9 w-auto" src={Logo} alt="Tech Minds Academy logo" />
            </a>

            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Build your future in <strong>DIGITAL TECHNOLOGY</strong> at Tech Minds Academy—Abuja.
            </p>
            <p className="mt-2 text-sm text-gray-600 italic">
              Practical labs, Real-world projects, Mentor feedback & Flexible payment plans designed to get you job-ready faster.
            </p>

            {/* Socials */}
            <ul className="mt-8 flex items-center gap-3">
              <li>
                <a
                  href="https://x.com/ACADTechMinds?t=HBukmrSZAIub1-iPsfnb6Q&s=08"
                  aria-label="Tech Minds on X"
                  title="Follow us on X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-blue-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M18.244 2H21l-6.51 7.44L22.5 22h-5.56l-4.35-5.82L7.5 22H3l6.93-7.92L1.5 2h5.64l4.01 5.41L18.244 2Zm-1.947 18h1.5L7.76 4h-1.5L16.297 20Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1BdiHsz9Xf/"
                  aria-label="Tech Minds on Facebook"
                  title="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-blue-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tmindsacademy?utm_source=qr&igsh=MTN5aWhneGtmbjAz"
                  aria-label="Tech Minds on Instagram"
                  title="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-blue-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Tech-Minds-Academy"
                  aria-label="Tech Minds on GitHub"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-blue-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <nav aria-label="Company" className="sm:pl-2">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              <li><Link to="/" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Home</Link></li>
              <li><Link to="/programs" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Courses</Link></li>
              <li><Link to='/programs/coding-for-kids-engineering' className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Kids Program</Link></li>
              <li><Link to="https://techmindsacademyapp.netlify.app/" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Portfolio</Link></li>
              <li><Link to="/facilities" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Facilities</Link></li>
            </ul>
          </nav>

          {/* Help */}
          <nav aria-label="Help">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="mt-6 space-y-4">
              <li><Link to="/contact" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Customer Support</Link></li>
              <li><Link to="/faq" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">FAQs</Link></li>
              <li><Link to='/terms' className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/pricing" className="text-base text-black transition hover:text-blue-600 focus:text-blue-600">Admissions & Pricing</Link></li>
             
            </ul>
          </nav>

          {/* Contact (with Local SEO microdata) */}
          <div className="lg:pl-8" itemScope itemType="https://schema.org/EducationalOrganization">
            <meta itemProp="name" content="Tech Minds Academy" />
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Contact</p>

            <address className="mt-6 not-italic text-gray-700">
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span className="block" itemProp="streetAddress">G5 Plaza, Abuja 901101 Nigeria.</span>
              </p>

              <p className="mt-3">
                <a className="text-blue-600 hover:underline" href="tel:+2348147328332" itemProp="telephone">(+234)8147328332</a>
              </p>
              <p className="mt-1">
                <a className="text-blue-600 hover:underline" href="mailto:info@techmindsacademy.org" itemProp="email">info@techmindsacademy.org</a>
              </p>

              <p className="mt-3">
                <a className="text-sm text-gray-700 hover:text-blue-600 hover:underline" href="https://maps.app.goo.gl/UmQfth1kZoWZixBA6?g_st=aw">Map & directions</a>
              </p>
            </address>

            <p className="mt-4 text-xs text-gray-500">
              Mon–Sat: 9:00am–6:00pm • Sun: Closed
            </p>
          </div>

          {/* Newsletter (controlled input + submit handler) */}
          <div className="lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={message?.type === "error"}
                className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition focus:outline-none focus:border-blue-600 disabled:opacity-60"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Subscribing…" : "Subscribe"}
              </button>

              {/* inline feedback */}
              {message && (
                <p className={`mt-2 text-sm ${message.type === "error" ? "text-red-600" : "text-emerald-700"}`}>
                  {message.text}
                </p>
              )}

              {!message && (
                <p className="mt-2 text-xs text-gray-500">
                  By subscribing you agree to our <a href="/privacy" className="underline hover:text-blue-600">Privacy Policy</a>.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="mt-14 mb-8 border-gray-200" />
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-600 md:flex-row">
          <p>© {year} Tech Minds Academy. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a className="hover:text-blue-600" href="/sitemap.xml">Sitemap</a>
            <span aria-hidden>•</span>
            <a className="hover:text-blue-600" href="https://www.linkedin.com/company/officialtechmindsacademy/">LinkedIn</a>
            <span aria-hidden>•</span>
            <a className="hover:text-blue-600" href="/syllabus">Course Syallabus</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
