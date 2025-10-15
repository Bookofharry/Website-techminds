import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  const items = useMemo(
    () => [
      {
        q: "I’m a complete beginner. Can I really learn to code at Tech Minds?",
        a: `Absolutely. Our beginner tracks start from zero and focus on hands-on learning.
            You’ll build small projects in your first week and grow to real portfolio projects.
            We keep classes interactive and mentor-led so you’re never lost.`,
      },
      {
        q: "Do you offer physical classes in Abuja and online classes too?",
        a: `Yes. Learn at our Abuja campus in Bwari or join live online from anywhere.
            We also run evening and weekend cohorts for busy professionals and students.`,
      },
      {
        q: "How long does a typical program take, and what will I build?",
        a: `Most core programs run 8–12 weeks (Web Dev, UI/UX), with optional add-ons.
            You’ll ship multiple portfolio-ready projects—landing pages, APIs, mini apps,
            responsive designs—and a capstone you can show employers.`,
      },
      {
        q: "What do I need to get started—laptop, internet, software?",
        a: `A laptop (8GB RAM recommended) and basic internet access.
            All required tools are free or student-friendly.
            On-campus learners get guided setup and reliable power/internet.`,
      },
      {
        q: "How much are the fees? Do you have payment plans?",
        a: `We keep pricing accessible with installment options.
            You can pay per module or spread payments across the cohort.
            Chat with us for the current fee sheet and available discounts.`,
      },
      {
        q: "Do you issue certificates and offer career support?",
        a: `Yes. You’ll receive a Tech Minds Academy certificate upon completion.
            We also help with CV/portfolio reviews, interview prep, and job search tips.`,
      },
      {
        q: "Where is the Abuja campus and how do I contact support?",
        a: `We’re in Bwari, Abuja. Send us a message via
            <a href="#" className="text-blue-600 transition hover:underline">WhatsApp</a>,
            call <a href="tel:+2348147328332" className="text-blue-600 transition hover:underline">+234 81 4732 8332</a>,
            or email <a href="mailto:support@techmindsacademy.org" className="text-blue-600 transition hover:underline">support@techmindsacademy.org</a>.`,
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Quick answers about Tech Minds Academy - (Abuja campus & live online cohorts, beginner-friendly
            paths, payment options, certificates, and more)
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            const buttonId = `faq-trigger-${i}`;
            return (
              <div
                key={i}
                className="relative rounded-lg border border-gray-200 bg-white shadow-sm transition-colors duration-300 hover:bg-gray-50"
              >
                {/* left accent bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-l-lg transition-all duration-300 ${
                    isOpen ? "bg-blue-600" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />

                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="group flex w-full items-center justify-between gap-4 rounded-lg px-4 py-5 sm:p-6 text-left"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {item.q}
                  </span>

                  {/* chevron with rotation + glow */}
                  <svg
                    className={`h-6 w-6 shrink-0 text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* collapsible content: height + fade + slight slide */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <p
                        className="text-gray-700 leading-relaxed [transition:transform_300ms,opacity_300ms] data-[open=false]:-translate-y-1"
                        data-open={isOpen}
                        // allow inline links we placed in content
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    </div>
                  </div>
                </div>

                {/* subtle bottom glow when open */}
                {isOpen && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent"
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-gray-600">
          Didn’t find what you need?{" "}

          <Link className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700" to='/contact'>Talk to our support team</Link>
          .
        </p>
        
      </div>
    </section>
  );
};

export default Faq;
