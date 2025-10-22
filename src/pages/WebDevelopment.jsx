import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Tech Minds Academy — Web Development Page (compact-ready)
 * - Next Cohort auto-updates to the first Monday of the upcoming month
 */

// --- Helpers: first Monday logic ---
function firstMondayOfMonth(year, monthIndex) {
  // monthIndex: 0 = Jan ... 11 = Dec
  const d = new Date(year, monthIndex, 1);
  const day = d.getDay(); // 0=Sun ... 6=Sat
  const offset = (8 - day) % 7; // days to Monday (if Monday -> 0)
  d.setDate(1 + offset);
  d.setHours(0, 0, 0, 0);
  return d;
}

function nextFirstMondayFrom(today = new Date()) {
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const thisMonthFirstMonday = firstMondayOfMonth(now.getFullYear(), now.getMonth());
  if (thisMonthFirstMonday >= now) return thisMonthFirstMonday;

  // else next month’s first Monday
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return firstMondayOfMonth(nextMonth.getFullYear(), nextMonth.getMonth());
}

function formatCohortDate(d) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

const BRAND_GRADIENT =
  "bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800";

const WD_META = {
  track: "Web Development",
  level: "Beginner → Intermediate",
  format: "• Hybrid",
  durationWeeks: 12,
  weeklyPace: "3 days/week • 2–3 hrs/session",
  // nextCohort will be overridden by computed value below
  nextCohort: "",
  price: "₦300,000",
};

const OUTCOMES = [
  "Build responsive sites with HTML5, CSS3, and Tailwind",
  "Write modern JavaScript (ES6+) and manipulate the DOM",
  "Build single-page apps with React and client-side routing",
  "Work with REST APIs, auth patterns, and app state",
  "Deploy production builds and collaborate with Git/GitHub",
];

const TOOLS = [
  { name: "HTML5", abbr: "HTML" },
  { name: "CSS3", abbr: "CSS" },
  { name: "Tailwind CSS", abbr: "Tw" },
  { name: "JavaScript (ES6+)", abbr: "JS" },
  { name: "React", abbr: "Re" },
  { name: "React Router", abbr: "RR" },
  { name: "Git/GitHub", abbr: "Git" },
  { name: "Node.js", abbr: "Nd" },
  { name: "Express (intro)", abbr: "Ex" },
  { name: "REST & JSON", abbr: "API" },
  { name: "Vite", abbr: "Vi" },
  { name: "Postman", abbr: "Pm" },
];

const MODULES = [
  {
    id: "wd-01",
    title: "Foundations: The Web, HTML & CSS",
    duration: "2 weeks",
    lessons: [
      "How the web works (URLs, HTTP, DevTools)",
      "Semantic HTML & accessible structure",
      "Modern layout with Flexbox & Grid",
      "Design systems with Tailwind CSS",
      "Responsive patterns & media queries",
    ],
    projects: ["Personal portfolio landing page"],
  },
  {
    id: "wd-02",
    title: "Modern JavaScript (ES6+)",
    duration: "3 weeks",
    lessons: [
      "Syntax, types, arrays, objects, modules",
      "Functions, scope, closures",
      "DOM APIs, events & forms",
      "Async JS: Promises, fetch, JSON",
      "Clean code & debugging in DevTools",
    ],
    projects: ["Interactive dashboard widget (API-powered)"],
  },
  {
    id: "wd-03",
    title: "React Essentials",
    duration: "3 weeks",
    lessons: [
      "Components, props, state, effects",
      "React Router & SPA navigation",
      "Forms & validation",
      "Performance basics & code splitting",
      "State patterns (context & reducers)",
    ],
    projects: ["Multi-page React app with routing & search"],
  },
  {
    id: "wd-04",
    title: "APIs, Auth & App State",
    duration: "2 weeks",
    lessons: [
      "Fetching & caching patterns",
      "Auth flows, protected routes (mocked)",
      "Error handling & UX feedback",
      "Environment variables & configs",
    ],
    projects: ["API-driven app with auth stub & protected views"],
  },
  {
    id: "wd-05",
    title: "Backend Basics & Deployment",
    duration: "1 week",
    lessons: [
      "Express fundamentals (intro)",
      "Hosted databases (overview) & .env",
      "Build scripts, CI basics",
      "Static & SPA deploys (HTTPS, domains)",
    ],
    projects: ["Full-stack mini app deployed"],
  },
  {
    id: "wd-06",
    title: "Capstone & Portfolio",
    duration: "1 week",
    lessons: [
      "Planning, scope cuts & MVP",
      "Code reviews & polishing",
      "README, screenshots, demo video",
    ],
    projects: ["Capstone project + live demo"],
  },
];

const PROJECT_GALLERY = [
  {
    title: "Tech Minds Landing (Responsive)",
    desc: "HTML/CSS/Tailwind build with grid layouts & dark mode.",
  },
  {
    title: "Movie Explorer",
    desc: "React app with search, favorites, and pagination.",
  },
  {
    title: "TaskFlow",
    desc: "SPA with CRUD, forms, and client-side routing.",
  },
  {
    title: "WeatherCast",
    desc: "API-driven dashboard with charts & state management.",
  },
];

const INSTRUCTORS = [
  {
    name: "Fortune Nwakanma",
    role: "Front-end Engineer",
    bio: "Design systems, accessibility & Tailwind craft.",
    initials: "FN",
  },
  {
    name: "Michael Amadi",
    role: "Backend/DevOps (Intro)",
    bio: "APIs, Express basics & deployments.",
    initials: "MA",
  },
];

const FAQS = [
  { q: "Do I need coding experience?", a: "No. We start from HTML/CSS and gradually ramp up through JavaScript and React with mentor support." },
  { q: "What laptop specs do I need?", a: "At least 8GB RAM and a modern browser. Node.js LTS will be installed in class." },
  { q: "Is there a certificate?", a: "Yes—students who complete the projects and capstone receive a Tech Minds Academy certificate." },
  { q: "Will we cover backend?", a: "You’ll get an intro to Express, REST, and deployment to ship a full-stack mini project." },
  { q: "Career support?", a: "We review portfolios and resumes, and run mock interviews focused on front-end roles." },
];

export default function WebDevelopmentPage({ compact = true, metaOverrides = {} }) {
  const [openId, setOpenId] = useState(MODULES[0].id);

  // Compute upcoming first Monday (this month if still ahead; else next month)
  const computedNextCohort = useMemo(() => {
    const next = nextFirstMondayFrom(new Date());
    return formatCohortDate(next); // e.g., "Nov 3, 2025"
  }, []);

  const meta = useMemo(
    () => ({
      ...WD_META,
      nextCohort: computedNextCohort,
      ...metaOverrides, // allow manual override if provided
    }),
    [computedNextCohort, metaOverrides]
  );

  const syllabusJSON = useMemo(
    () =>
      JSON.stringify(
        { meta, outcomes: OUTCOMES, tools: TOOLS.map((t) => t.name), modules: MODULES },
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
      jsonRef.current.download = "techminds-web-development.json";
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
              Web Development
            </span>{" "}
            Program
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, project-based training that takes you from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800">
              fundamentals
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800">
              portfolio-ready
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
                <Badge>Project-based</Badge>
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
            <h2 className="text-xl font-bold text-gray-900">Your Instructors</h2>
            <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSTRUCTORS.map((t) => (
              <InstructorCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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

          {/* Actions (optional) */}
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
      <dd className={`mt-0.5 font-semibold ${highlight ? "text-blue-800" : "text-gray-900"}`}>{value}</dd>
    </div>
  );
}

function ToolPill({ label, abbr }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm">
      <span className={`grid h-6 w-6 place-items-center rounded-xl text-[10px] font-bold text-white ${BRAND_GRADIENT}`}>{abbr}</span>
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
                {(!module.projects || module.projects.length === 0) && <li className="text-gray-500">— To be assigned in class —</li>}
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
        <div className={`grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white ${BRAND_GRADIENT}`}>{t.initials}</div>
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
      {open && (
        <div id={`${id}-panel`} className="mt-2 text-sm text-gray-700">
          {a}
        </div>
      )}
    </div>
  );
}
