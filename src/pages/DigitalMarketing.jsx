import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
/**
 * Tech Minds Academy — Digital Marketing Page (auto-cohort)
 * - `nextCohort` auto-sets to the FIRST MONDAY of the next available month (Africa/Lagos).
 * - You can still override via: <Digital metaOverrides={{ nextCohort: "Jan 5, 2026" }} />
 */

const BRAND_GRADIENT =
  "bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800";

/* ------------------------------- Date Utils ------------------------------- */

const TIMEZONE_TZID = "Africa/Lagos";

/** First Monday for a given year & 0-based month (0=Jan). */
function firstMondayOfMonth(year, monthIndex) {
  const firstOfMonthUTC = new Date(Date.UTC(year, monthIndex, 1));
  const weekday = new Date(
    firstOfMonthUTC.toLocaleString("en-US", { timeZone: TIMEZONE_TZID })
  ).getDay(); // 0=Sun..6=Sat
  const offset = (1 - weekday + 7) % 7; // Monday=1
  const firstMondayUTC = new Date(Date.UTC(year, monthIndex, 1 + offset));
  // Return as a Date object representing Lagos local time
  return new Date(firstMondayUTC.toLocaleString("en-US", { timeZone: TIMEZONE_TZID }));
}

/**
 * Next upcoming FIRST MONDAY (Lagos):
 * - If today's Lagos date is before this month's first Monday → use this month.
 * - Else → use next month's first Monday.
 */
function getNextFirstMonday(now = new Date()) {
  const lagosNow = new Date(now.toLocaleString("en-US", { timeZone: TIMEZONE_TZID }));
  const y = lagosNow.getFullYear();
  const m = lagosNow.getMonth();

  const fmThis = firstMondayOfMonth(y, m);

  const isBefore =
    lagosNow.getFullYear() < fmThis.getFullYear() ||
    (lagosNow.getFullYear() === fmThis.getFullYear() &&
      (lagosNow.getMonth() < fmThis.getMonth() ||
        (lagosNow.getMonth() === fmThis.getMonth() &&
          lagosNow.getDate() < fmThis.getDate())));

  if (isBefore) return fmThis;

  const nextY = m === 11 ? y + 1 : y;
  const nextM = (m + 1) % 12;
  return firstMondayOfMonth(nextY, nextM);
}

function formatDateInLagos(date) {
  return date.toLocaleDateString("en-US", {
    timeZone: TIMEZONE_TZID,
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* --------------------------------- Meta ---------------------------------- */

const DM_META_BASE = {
  track: "Digital Marketing",
  level: "Beginner → Intermediate",
  format: "• Hybrid",
  durationWeeks: 12,
  weeklyPace: "3 days/week • 2–3 hrs/session",
  price: "₦200,000",
};

/* ------------------------------ Page Content ------------------------------ */

const OUTCOMES = [
  "Create a full-funnel digital strategy that drives results",
  "Plan and produce content that converts (copy + visuals)",
  "Run paid campaigns on Meta & Google with smart budgets",
  "Optimize websites for SEO and track growth with GA4",
  "Set up email automations and report ROI with dashboards",
];

const TOOLS = [
  { name: "Strategy & Funnels", abbr: "SF" },
  { name: "Copywriting", abbr: "Cp" },
  { name: "Content Calendar", abbr: "CC" },
  { name: "SEO (On/Off-Page)", abbr: "SEO" },
  { name: "Google Ads", abbr: "GAds" },
  { name: "Meta Ads", abbr: "MAds" },
  { name: "GA4 & UTMs", abbr: "GA4" },
  { name: "Email (Mailchimp)", abbr: "Em" },
  { name: "Canva", abbr: "Cv" },
  { name: "Landing Pages", abbr: "LP" },
  { name: "A/B Testing", abbr: "A/B" },
  { name: "CRM Basics", abbr: "CRM" },
];

const MODULES = [
  {
    id: "dm-01",
    title: "Foundations: Digital Strategy & Funnels",
    duration: "2 weeks",
    lessons: [
      "Personas, JTBD & customer journeys",
      "Full-funnel mapping (Awareness → Retention)",
      "Channels overview: SEO, Social, Paid, Email",
      "Creative direction & brand voice basics",
    ],
    projects: ["Draft a funnel & strategy doc for a local SME"],
  },
  {
    id: "dm-02",
    title: "Content Marketing & Copywriting",
    duration: "2 weeks",
    lessons: [
      "Content pillars & editorial calendars",
      "Copy frameworks (AIDA, PAS, 4C’s)",
      "Design with Canva (templates, reels, carousels)",
      "Landing page structure & offers",
    ],
    projects: ["30-day content calendar + 3 landing page drafts"],
  },
  {
    id: "dm-03",
    title: "SEO: Traffic that Compounds",
    duration: "2 weeks",
    lessons: [
      "Keyword research & search intent",
      "On-page SEO: titles, meta, headings, internal links",
      "Technical SEO basics (speed, mobile, sitemaps)",
      "Off-page & local SEO; content optimization workflow",
    ],
    projects: ["SEO brief + optimized blog post"],
  },
  {
    id: "dm-04",
    title: "Paid Ads: Meta & Google",
    duration: "3 weeks",
    lessons: [
      "Campaign structure & objectives",
      "Audiences, creatives, budgets & pacing",
      "Google Search/Display & Meta Ads setup (sandbox)",
      "Optimization, retargeting, and compliance basics",
    ],
    projects: ["Simulated ad campaigns + performance report"],
  },
  {
    id: "dm-05",
    title: "Analytics, CRO & Email",
    duration: "2 weeks",
    lessons: [
      "GA4, UTMs & event tracking",
      "Dashboards & KPI storytelling",
      "A/B testing & landing page optimization",
      "Email journeys & automations (welcome, nurture)",
    ],
    projects: ["GA4 dashboard + A/B test plan + email flow"],
  },
  {
    id: "dm-06",
    title: "Capstone & Portfolio",
    duration: "1 week",
    lessons: [
      "Campaign planning & budget sheet",
      "Execution checklist & stakeholder updates",
      "Final report & presentation skills",
    ],
    projects: ["Capstone: multi-channel campaign with ROI report"],
  },
];

const PROJECT_GALLERY = [
  { title: "FoodBox Abuja — Launch Sprint", desc: "30-day content + Meta ads that drove first 200 orders." },
  { title: "FinTech SEO Turnaround", desc: "Technical fixes + content briefs → +120% organic sessions." },
  { title: "Event Ticketing Funnel", desc: "Google Ads + landing page CRO grew conversion to 6.8%." },
  { title: "Edu Newsletter Revamp", desc: "Automations & segmentation lifted CTR by 35%." },
];

const INSTRUCTORS = [
  { name: "Rachael Fidelis", role: "Performance Marketer", bio: "Paid media strategy, budgeting & optimization.", initials: "RF" },

];

const FAQS = [
  { q: "Do I need prior marketing experience?", a: "No. We start from strategy fundamentals and practice each channel with mentor guidance." },
  { q: "Will I run real ads?", a: "We simulate campaign setup end-to-end. For real budgets, we use sandbox or small caps under instructor supervision." },
  { q: "What portfolio pieces will I have?", a: "A strategy doc, SEO brief, ad plan with creatives, GA4 dashboard, and a capstone multi-channel report." },
  { q: "Is there certification?", a: "Yes—complete the projects to earn a Tech Minds Academy certificate. We also guide Google & Meta exam prep." },
];

/* -------------------------------- Component ------------------------------- */

export default function Digital({ compact = true, metaOverrides = {} }) {
  const [openId, setOpenId] = useState(MODULES[0].id);

  // Compute the auto cohort date once per mount (Lagos TZ)
  const computedNextCohort = useMemo(() => formatDateInLagos(getNextFirstMonday()), []);

  // Merge base meta + auto cohort; allow user overrides to win
  const meta = useMemo(
    () => ({
      ...DM_META_BASE,
      nextCohort: computedNextCohort,
      ...metaOverrides,
    }),
    [computedNextCohort, metaOverrides]
  );

  const syllabusJSON = useMemo(
    () =>
      JSON.stringify(
        {
          meta,
          outcomes: OUTCOMES,
          tools: TOOLS.map((t) => t.name),
          modules: MODULES,
        },
        null,
        2
      ),
    [meta]
  );

  const jsonRef = useRef(null);

  function handleExportJSON() {
    const blob = new Blob([syllabusJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    if (jsonRef.current) {
      jsonRef.current.href = url;
      jsonRef.current.download = "techminds-digital-marketing.json";
      jsonRef.current.click();
      URL.revokeObjectURL(url);
    }
  }
  function handlePrint() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className={`absolute inset-x-0 -top-24 h-48 opacity-25 blur-3xl ${BRAND_GRADIENT}`} />
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-800/80 tracking-wide">
            Tech Minds Academy — Abuja (Bwari)
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800">
              Digital Marketing
            </span>{" "}
            Program
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, campaign-driven training that takes you from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800">
              strategy
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800">
              measurable results
            </span>
            .
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/application"
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Apply Now
            </Link>
            <a
              href="tel:+2348147328332"
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
            >
              Talk to Admissions
            </a>

            <a ref={jsonRef} className="hidden" />
          </div>
        </div>
      </section>

      {/* Stats + Outcomes */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Stats Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Program at a Glance</h2>
              <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <StatRow label="Duration" value={`${meta.durationWeeks} weeks`} />
                <StatRow label="Level" value={meta.level} />
                <StatRow label="Format" value={meta.format} />
                <StatRow label="Weekly Pace" value={meta.weeklyPace} />
                <StatRow label="Next Cohort" value={meta.nextCohort} />
                <StatRow label="Tuition" value={meta.price} highlight />
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <Badge>Mentor-led</Badge>
                <Badge>Campaign-based</Badge>
                <Badge>Portfolio-ready</Badge>
              </div>
            </div>
          </div>

          {/* Right: Outcomes + Tools */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">What you’ll achieve</h2>
              <ul className="mt-3 space-y-2">
                {OUTCOMES.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className={`mt-1 inline-block h-2 w-2 rounded-full ${BRAND_GRADIENT}`} />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-gray-900">Tools you’ll master</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <ToolPill key={t.name} label={t.name} abbr={t.abbr} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-900">Curriculum Overview</h2>
            <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
          </div>

          <div className="mt-4 space-y-4">
            {MODULES.map((m, idx) => (
              <ModuleCard
                key={m.id}
                module={m}
                index={idx}
                open={openId === m.id}
                onToggle={() => setOpenId((v) => (v === m.id ? "" : m.id))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-900">Student Projects (Preview)</h2>
            <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
          </div>

          <div className="mt-4 overflow-x-auto">
            <div className="min-w-max flex gap-4">
              {PROJECT_GALLERY.map((p, i) => (
                <article key={i} className="w-72 shrink-0 rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow">
                  <div className="aspect-video grid place-items-center rounded-xl bg-gray-100 text-sm text-gray-400">
                    Preview
                  </div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-900">Your Instructor</h2>
            <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSTRUCTORS.map((t) => (
              <InstructorCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (no trailing bottom margin by default) */}
      <section className={`mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8 ${compact ? "mb-0" : "mb-12"}`}>
        <div className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-900">FAQs</h2>
            <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
          </div>

          <div className="mt-4 divide-y">
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>

          {/* Actions */}
          {/* <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={handlePrint} className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Print Page
            </button>
            <button onClick={handleExportJSON} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Export JSON
            </button>
            <a ref={jsonRef} className="hidden" />
          </div> */}
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Small Components ----------------------------- */

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-200/80">
      {children}
    </span>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div>
      <dt className="text-gray-500">{label}</dt>
      <dd className={`mt-0.5 font-semibold ${highlight ? "text-blue-800" : "text-gray-900"}`}>
        {value}
      </dd>
    </div>
  );
}

function ToolPill({ label, abbr }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm">
      <span className={`grid h-6 w-6 place-items-center rounded-xl text-[10px] font-bold text-white ${BRAND_GRADIENT}`}>
        {abbr}
      </span>
      {label}
    </span>
  );
}

function ModuleCard({ module, index, open, onToggle }) {
  return (
    <article id={module.id} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-gray-900">
            {index + 1}. {module.title}
          </h3>
          <p className="text-sm text-gray-500">{module.duration}</p>
        </div>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${module.id}-panel`}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
        >
          {open ? "Hide" : "View"}
          <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </header>

      {open && (
        <div id={`${module.id}-panel`} className="border-t px-4 py-4 sm:px-6 sm:py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Lessons</h4>
              <ul className="mt-2 space-y-2">
                {module.lessons.map((l, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${BRAND_GRADIENT}`} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">Projects</h4>
              <ul className="mt-2 space-y-2">
                {(module.projects || []).map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${BRAND_GRADIENT}`} />
                    <span>{p}</span>
                  </li>
                ))}
                {(!module.projects || module.projects.length === 0) && (
                  <li className="text-gray-500">— To be assigned in class —</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function InstructorCard({ t }) {
  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white ${BRAND_GRADIENT}`}>
          {t.initials}
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900">{t.name}</h3>
          <p className="text-sm text-gray-600">{t.role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700">{t.bio}</p>
    </article>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const id = q.toLowerCase().replace(/\s+/g, "-").slice(0, 24);
  return (
    <div className="py-3 first:pt-0 last:pb-0">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <span className="text-sm font-semibold text-gray-900">{q}</span>
        <svg className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div id={`${id}-panel`} className="mt-2 text-sm text-gray-700">{a}</div>}
    </div>
  );
}
