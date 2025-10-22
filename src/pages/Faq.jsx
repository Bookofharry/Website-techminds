import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Tech Minds Academy — FAQ Page (No-Refresh Accordion)
 * - Data-driven via props with sensible defaults
 * - Sticky category chips + mobile-friendly horizontal scroll
 * - Debounced search
 * - Deep-linking (URL #hash opens a question)
 * - Accessible accordion using <details> (no hash navigation on click)
 * - SEO JSON-LD extracted into a component
 * - Green–white–green accents for brand
 *
 * Usage:
 * <FaqPage />
 * // or provide your own data:
 * <FaqPage faqs={...} categories={...} />
 */

/* ------------------------------ Brand tokens ------------------------------ */
const BRAND_GRADIENT =
  "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100";
const TEXT_GRADIENT =
  "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent";

/* --------------------------------- Data ---------------------------------- */
const DEFAULT_CATEGORIES = [
  "All",
  "Admissions",
  "Courses",
  "Payments",
  "Facilities",
  "Careers",
  "Policies",
];

const DEFAULT_FAQS = [
  {
    q: "Where is Tech Minds Academy located?",
    a: "We are in Bwari, Abuja. You can learn on-campus (Bwari) or join live online from anywhere in Nigeria.",
    cat: ["Admissions", "Facilities"],
  },
  {
    q: "What courses do you offer?",
    a: "Web Development, App Development, Cloud Computing, Data & Analytics, and Coding for Kids. Each track is mentor-led and project-based.",
    cat: ["Courses"],
  },
  {
    q: "How long do programs run?",
    a: "Short programs run 4–8 weeks; comprehensive tracks typically run 12–24 weeks with capstone projects.",
    cat: ["Courses", "Admissions"],
  },
  {
    q: "Do I need a laptop?",
    a: "Yes, a laptop helps you practice continuously. However, our lab is open with reliable systems so you can keep learning even without one.",
    cat: ["Facilities", "Admissions"],
  },
  {
    q: "Is power and internet stable during classes?",
    a: "Yes. We run on 24/7 power (inverter + generator backup) and high-speed internet to ensure smooth installs, live sessions, and deployments.",
    cat: ["Facilities"],
  },
  {
    q: "How do payments work?",
    a: "You can pay once or in flexible instalments. We accept bank transfer, card, or POS. Receipts are issued automatically via email.",
    cat: ["Payments"],
  },
  {
    q: "Do you offer scholarships?",
    a: "Occasionally via partners or merit-based challenges announced on our social channels and at events like the Build Conference.",
    cat: ["Payments", "Admissions"],
  },
  {
    q: "Can beginners register?",
    a: "Absolutely. We start from fundamentals and quickly move to practical projects so you build confidence and a portfolio.",
    cat: ["Admissions", "Courses"],
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, you’ll receive a Tech Minds Academy Certificate upon successful completion of your program and capstone.",
    cat: ["Policies", "Admissions"],
  },
  {
    q: "Do you help with internships or jobs?",
    a: "We provide CV/portfolio reviews, mock interviews, referrals where available, and recommend top performers to partner employers.",
    cat: ["Careers"],
  },
  {
    q: "What is your refund policy?",
    a: "Refunds are considered within the first 7 days of a program in line with our Terms. After this window, fees are non-refundable.",
    cat: ["Policies", "Payments"],
  },
  {
    q: "How are classes scheduled?",
    a: "Weekday and weekend options are available. You’ll get a timetable after admission and can view updates on the Schedules page.",
    cat: ["Courses", "Facilities"],
  },
  {
    q: "Do you support remote learners?",
    a: "Yes. All lessons are live-online with recordings and resources. You’ll collaborate in Slack/Discord and submit projects via GitHub.",
    cat: ["Facilities", "Courses"],
  },
  {
    q: "How do I apply?",
    a: "Click Apply on the website, complete the form, and our team will contact you to confirm your track, schedule, and next steps.",
    cat: ["Admissions"],
  },
];

/* --------------------------------- Utils --------------------------------- */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);

function useDebouncedValue(value, delay = 200) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/* --------------------------------- Page ---------------------------------- */
export default function FaqPage({
  faqs = DEFAULT_FAQS,
  categories = DEFAULT_CATEGORIES,
  contact = {
    phone: "+234 (8) 147-328-332",
    whatsapp: "https://wa.me/2348147328332",
  },
  routes = {
    apply: "/application",
    contact: "/contact",
    terms: "/terms",
    privacy: "/privacy",
    schedules: "/schedule",
  },
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(categories[0] || "All");
  const debouncedQuery = useDebouncedValue(query, 250);

  // Enrich with ids/slugs
  const items = useMemo(
    () => faqs.map((f, i) => ({ id: i + 1, slug: slugify(f.q), ...f })),
    [faqs]
  );

  // Open item if URL hash matches (deep link)
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) return;
    const el = document.getElementById(`faq-${hash}`);
    if (el && el.tagName.toLowerCase() === "details") {
      el.setAttribute("open", "");
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [items]);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return items.filter((f) => {
      const inCat = active === "All" || f.cat?.includes(active);
      const inText =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [items, active, debouncedQuery]);

  const handleOpen = (slug) => {
    // Update URL hash without triggering scroll/jump
    if (window?.history?.replaceState) {
      window.history.replaceState(null, "", `#${slug}`);
    } else {
      // Fallback: assign but then immediately restore scroll
      const { scrollX, scrollY } = window;
      window.location.hash = slug;
      window.scrollTo(scrollX, scrollY);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero query={query} setQuery={setQuery} />
      <NigeriaStripe />

      <CategoryChips
        categories={categories}
        active={active}
        setActive={setActive}
        count={filtered.length}
      />

      <section className="px-6 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-6xl">
          {filtered.length === 0 ? (
            <EmptyState query={debouncedQuery} />
          ) : (
            <FaqList items={filtered} onOpen={handleOpen} />
          )}
        </div>
      </section>

      <HelpCta routes={routes} contact={contact} />

      <FaqSchema items={items} />
    </main>
  );
}

/* ------------------------------- Subcomponents ------------------------------ */
function Hero({ query, setQuery }) {
  return (
    <section className={`relative ${BRAND_GRADIENT} px-6 py-14 sm:py-20`}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-100">
              FAQ • Tech Minds Academy
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-blue-900 sm:text-4xl lg:text-5xl">
              Everything you need to know
            </h1>
            <p className="mt-3 max-w-xl text-blue-500/90">
              Quick answers about admissions, courses, payments, and
              facilities—on campus in Bwari and live online across Nigeria.
            </p>
          </div>
          <div className="md:justify-self-end">
            <label htmlFor="faq-search" className="sr-only">
              Search FAQs
            </label>
            <div className="relative mt-2">
              <input
                id="faq-search"
                type="text"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-2xl border-0 bg-white/95 px-5 py-4 pr-12 text-base shadow-lg outline-none ring-1 ring-blue-700/20 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-700/40"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 grid place-items-center text-blue-800/70">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NigeriaStripe() {
  return (
    <div className="pointer-events-none h-1 w-full">
      <div className="grid h-full grid-cols-3">
        <div className="bg-blue-700" />
        <div className="bg-white" />
        <div className="bg-blue-700" />
      </div>
    </div>
  );
}

function CategoryChips({ categories, active, setActive, count }) {
  return (
    <div className="sticky top-0 z-20 border-b border-blue-900/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-6 py-3 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={[
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
              active === c
                ? "bg-blue-700 text-white shadow"
                : "bg-emebluerald-50 text-blue-800 ring-1 ring-blue-700/15 hover:bg-blue-100",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto hidden shrink-0 text-sm text-gray-500 sm:inline">
          {count} results
        </span>
      </div>
    </div>
  );
}

function FaqList({ items, onOpen }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
      {items.map((f) => (
        <li key={f.id}>
          <FaqItem item={f} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}

function FaqItem({ item, onOpen }) {
  const { q, a, cat = [], slug } = item;
  const ref = useRef(null);

  return (
    <details
      id={`faq-${slug}`}
      ref={ref}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md open:ring-1 open:ring-blue-700/15"
      onToggle={(e) => {
        // When toggled by clicking anywhere on <summary>, update hash without scroll
        if (e.currentTarget.open) onOpen?.(slug);
      }}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        {/* Button avoids anchor navigation (no hash jump) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const d = ref.current;
            if (d) {
              d.open = !d.open;
              if (d.open) onOpen?.(slug);
            }
          }}
          className={`text-left text-base font-semibold sm:text-lg no-underline hover:underline ${TEXT_GRADIENT}`}
        >
          {q}
        </button>

        <span className="shrink-0 rounded-full border border-blue-700/20 p-1 text-blue-800 transition group-open:rotate-45">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>

      <div className="mt-3 text-sm leading-6 text-gray-700">{a}</div>

      {cat.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {cat.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-900 ring-1 ring-blue-700/15"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </details>
  );
}

function EmptyState({ query }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-blue-700/20 bg-white p-10 text-center shadow-sm">
      <div className="rounded-full bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-700/15">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        No results for “{query}”
      </h3>
      <p className="mt-1 max-w-md text-sm text-gray-600">
        Try a different keyword or pick another category like Admissions or
        Payments.
      </p>
    </div>
  );
}

function HelpCta({ routes, contact }) {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-6 py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Still need help?
          </h2>
          <p className="mt-2 max-w-xl text-gray-600">
            We’re happy to guide you—whether you’re choosing a track or sorting
            out payments.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={routes.contact}
              className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700/60"
            >
              Contact Support
            </a>
            <a
              href={routes.apply}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-800 ring-1 ring-blue-700/20 hover:bg-blue-50"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          <ContactCard
            title="Call"
            value={contact.phone}
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            icon={PhoneIcon}
          />
          <ContactCard
            title="WhatsApp"
            value="Chat with us"
            href={contact.whatsapp}
            icon={ChatIcon}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, value, href, icon: Icon }) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
    >
      <span className="rounded-xl bg-blue-50 p-3 text-blue-800 ring-1 ring-blue-700/15">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-gray-900">
          {title}
        </span>
        <span className="block text-sm text-blue-800 group-hover:underline">
          {value}
        </span>
      </span>
    </a>
  );
}

/* ---------------------------------- Icons ---------------------------------- */
function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

/* ----------------------------- SEO: FAQ Schema ----------------------------- */
function FaqSchema({ items }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.text = JSON.stringify(schema);
    const existing = document.getElementById("faq-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-jsonld");
      if (el) el.remove();
    };
  }, [items]);
  return null;
}
