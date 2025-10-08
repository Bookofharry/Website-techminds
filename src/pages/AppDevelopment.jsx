import React, { useMemo, useRef, useState } from "react";

/**
 * Tech Minds Academy — App Development Page (compact-ready)
 * Usage:
 *   <AppDevelopmentPage />           // normal
 *   <AppDevelopmentPage compact />   // no bottom gap after FAQs
 */

const BRAND_GRADIENT =
  "bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800";

const AD_META = {
  track: "App Development",
  level: "Beginner → Intermediate",
  format: "On-Campus (Bwari) • Online (Live) • Hybrid",
  durationWeeks: 12,
  weeklyPace: "3 days/week • 2–3 hrs/session",
  nextCohort: "Dec 2, 2025",
  price: "₦270,000",
};

const OUTCOMES = [
  "Set up a mobile dev environment with Expo & React Native",
  "Build polished, responsive UIs that feel native",
  "Handle navigation, deep links, forms, and app state",
  "Work with device APIs: camera, media, location, notifications",
  "Integrate REST APIs/auth, persist data offline, and ship builds",
];

const TOOLS = [
  { name: "React Native (Expo)", abbr: "RN" },
  { name: "TypeScript", abbr: "TS" },
  { name: "React Navigation", abbr: "Nav" },
  { name: "Zustand / RTK", abbr: "State" },
  { name: "Axios / Fetch", abbr: "API" },
  { name: "AsyncStorage/SecureStore", abbr: "Store" },
  { name: "Firebase (Auth/DB)", abbr: "Fb" },
  { name: "Jest + RN Testing Library", abbr: "Test" },
  { name: "EAS Build / OTA", abbr: "EAS" },
  { name: "Node/Express (Intro)", abbr: "BE" },
];

const MODULES = [
  {
    id: "ad-01",
    title: "Foundations: JS/TS, Expo & UI Basics",
    duration: "2 weeks",
    lessons: [
      "JS → TypeScript essentials for RN",
      "Expo toolchain & project scaffolding",
      "Core components, styling & responsive layouts",
      "Design tokens & reusable UI patterns",
    ],
    projects: ["Welcome App: onboarding screens + theme toggle"],
  },
  {
    id: "ad-02",
    title: "Navigation, Forms & State",
    duration: "3 weeks",
    lessons: [
      "Stack/Tab/Drawer navigation + deep links",
      "Forms, validation & UX feedback",
      "Local state vs global state (Context/Zustand/RTK)",
      "Error boundaries & loading patterns",
    ],
    projects: ["TaskMate: multi-screen app with search & filters"],
  },
  {
    id: "ad-03",
    title: "APIs, Auth & Data",
    duration: "3 weeks",
    lessons: [
      "REST patterns, pagination & caching hints",
      "Auth flows (email/password, tokens) with Firebase",
      "Offline-first: AsyncStorage & optimistic UI",
      "Security basics & environment configs",
    ],
    projects: ["ShopLite: API-driven catalog + auth + favourites"],
  },
  {
    id: "ad-04",
    title: "Device & Native Integrations",
    duration: "2 weeks",
    lessons: [
      "Camera, media picker & uploads",
      "Location, maps & permissions",
      "Push notifications with Expo",
      "Platform differences (iOS/Android) & native modules (intro)",
    ],
    projects: ["CampusGo: camera, maps, and notifications mini app"],
  },
  {
    id: "ad-05",
    title: "Performance, Testing & Quality",
    duration: "1 week",
    lessons: [
      "Profiling UI & reducing bundle size",
      "Jest & React Native Testing Library",
      "Accessibility & internationalization (intro)",
      "Crash & analytics basics",
    ],
    projects: ["Test suite + performance checklist for your app"],
  },
  {
    id: "ad-06",
    title: "Deployment & Capstone",
    duration: "1 week",
    lessons: [
      "EAS builds, signing, and store assets",
      "OTA updates & release channels",
      "Store listings & beta testing (TestFlight/Play Console)",
    ],
    projects: ["Capstone: end-to-end app with live demo"],
  },
];

const PROJECT_GALLERY = [
  { title: "FitTrack", desc: "Workout logger with charts, reminders & dark mode." },
  { title: "EventHub", desc: "Listings, tickets & push alerts with deep links." },
  { title: "CampusGo", desc: "Maps, places, and camera-based reporting." },
  { title: "ShopLite", desc: "Catalog, auth, favourites, and offline cache." },
];

const INSTRUCTORS = [
  { name: "David Sule", role: "React Native Engineer", bio: "Navigation, device APIs & production patterns.", initials: "DS" },
  { name: "Ada Okon", role: "Front-end → Mobile", bio: "Design systems, accessibility & TypeScript.", initials: "AO" },
  { name: "Ifeanyi O.", role: "Backend/DevOps (Intro)", bio: "APIs, auth, and deployments.", initials: "IO" },
];

const FAQS = [
  {
    q: "Do I need prior mobile experience?",
    a: "No. We start with React Native via Expo and gradually introduce state, navigation and device APIs.",
  },
  {
    q: "Android or iOS required?",
    a: "Any modern laptop works. You can test with Expo Go on an Android or iPhone. Simulators/emulators are covered.",
  },
  {
    q: "Will I publish to stores?",
    a: "We cover EAS builds, TestFlight/Play Console basics, and how to prepare listings and screenshots.",
  },
  {
    q: "What will be in my portfolio?",
    a: "At least three mini-apps and a capstone with auth, API integration, and native features.",
  },
];

export default function AppDevelopment({ compact = true, metaOverrides = {} }) {
  const [openId, setOpenId] = useState(MODULES[0].id);
  const meta = { ...AD_META, ...metaOverrides };

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
      jsonRef.current.download = "techminds-app-development.json";
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
          <p className="text-sm font-semibold text-emerald-800/80 tracking-wide">
            Tech Minds Academy — Abuja (Bwari)
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">
              App Development
            </span>{" "}
            Program
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, project-based training from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">first screen</span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">store-ready build</span>
            .
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#apply" className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Apply Now
            </a>
            <a href="#contact" className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Talk to Admissions
            </a>
            <button onClick={handlePrint} className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Print Page
            </button>
            <button onClick={handleExportJSON} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Export JSON
            </button>
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
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={handlePrint} className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Print Page
            </button>
            <button onClick={handleExportJSON} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Export JSON
            </button>
            <a ref={jsonRef} className="hidden" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Small Components ----------------------------- */

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/80">
      {children}
    </span>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div>
      <dt className="text-gray-500">{label}</dt>
      <dd className={`mt-0.5 font-semibold ${highlight ? "text-emerald-800" : "text-gray-900"}`}>
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
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
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
