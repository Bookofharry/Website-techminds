import React, { useMemo, useState, useRef, useEffect } from "react";

/**
 * Tech Minds Academy — Syllabus Page
 * - Hero with brand accent (subtle green–white–green)
 * - Track/Level/Format filters + search
 * - Sticky Table of Contents (jumps to modules)
 * - Expandable modules with lessons
 * - “Print” and “Export JSON” actions
 * - Keyboard accessible, mobile-first, elegant
 *
 * Drop-in usage:
 *   <SyllabusPage />
 *
 * Styling: Tailwind CSS
 */

const BRAND_GRADIENT = "bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800";

const DEFAULT_TRACK = "Web Development";
const TRACKS = [
  "Web Development",
  "App Development",
  "Cloud Computing",
  "Data & Analytics",
  "Coding for Kids",
];

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const FORMATS = ["On-Campus (Bwari)", "Online (Live)", "Hybrid"];

const SYLLABI = {
  "Web Development": {
    level: "Beginner",
    format: "Hybrid",
    durationWeeks: 12,
    outcomes: [
      "Build responsive websites with HTML5, CSS3, and Tailwind",
      "Use modern JavaScript (ES6+) to build interactive UIs",
      "Create React SPAs and deploy to production",
      "Collaborate with Git/GitHub and ship portfolio projects",
    ],
    modules: [
      {
        id: "wd-01",
        title: "Foundations: The Web, HTML & CSS",
        duration: "2 weeks",
        lessons: [
          "How the web works (HTTP, DNS, DevTools)",
          "Semantic HTML & accessible structure",
          "Modern CSS layout: Flexbox & Grid",
          "Design systems with Tailwind CSS",
          "Responsive patterns & mobile-first thinking",
        ],
        projects: ["Portfolio landing page", "Accessible multi-section site"],
      },
      {
        id: "wd-02",
        title: "JavaScript Essentials",
        duration: "3 weeks",
        lessons: [
          "Syntax, types, arrays, objects",
          "Functions, scope, modules",
          "DOM APIs & events",
          "Async (Promises, fetch, JSON)",
          "Clean code & debugging in DevTools",
        ],
        projects: ["Interactive dashboard widget", "API-driven mini app"],
      },
      {
        id: "wd-03",
        title: "React & App Architecture",
        duration: "4 weeks",
        lessons: [
          "Components, props, state, effects",
          "React Router & SPA patterns",
          "Forms, validation & controlled inputs",
          "Performance basics & code-splitting",
          "State management patterns (context & reducers)",
        ],
        projects: ["Multi-page React app with routing & auth stub"],
      },
      {
        id: "wd-04",
        title: "Backend Basics & Deployment",
        duration: "2 weeks",
        lessons: [
          "REST fundamentals & Express overview",
          "Working with a hosted DB (intro)",
          "CORS, .env & environment configs",
          "CI/CD basics, hosting, and HTTPS",
        ],
        projects: ["Full-stack mini app (CRUD) deployed"],
      },
      {
        id: "wd-05",
        title: "Capstone & Portfolio",
        duration: "1 week",
        lessons: [
          "Project planning & wireframing",
          "Code reviews & polishing",
          "README, docs, and demo day prep",
        ],
        projects: ["Personal capstone project + live demo"],
      },
    ],
  },

  "App Development": {
    level: "Intermediate",
    format: "Online (Live)",
    durationWeeks: 10,
    outcomes: [
      "Build cross-platform apps with React Native basics",
      "Consume APIs and manage app state cleanly",
      "Handle navigation, storage, and offline patterns",
    ],
    modules: [
      {
        id: "app-01",
        title: "Mobile UI & Navigation",
        duration: "3 weeks",
        lessons: [
          "React Native core components",
          "Navigation stacks & tabs",
          "Adaptive design & accessibility",
        ],
        projects: ["Multi-screen mobile app MVP"],
      },
      {
        id: "app-02",
        title: "Data & APIs",
        duration: "4 weeks",
        lessons: ["Fetching, caching, offline", "Auth flows", "Local storage"],
        projects: ["API-driven app with auth + caching"],
      },
      {
        id: "app-03",
        title: "Publish & Monetize",
        duration: "3 weeks",
        lessons: ["App store prep", "Crash & perf monitoring", "Monetization"],
        projects: ["Store-ready build with release checklist"],
      },
    ],
  },

  "Cloud Computing": {
    level: "Intermediate",
    format: "Hybrid",
    durationWeeks: 8,
    outcomes: [
      "Understand cloud primitives (compute, storage, networking)",
      "Deploy web apps to a managed platform",
      "Use IaC to provision reproducible infra (intro)",
    ],
    modules: [
      {
        id: "cloud-01",
        title: "Cloud Fundamentals",
        duration: "2 weeks",
        lessons: ["Compute & containers", "Networking", "Storage & CDN"],
        projects: ["Static site + CDN + SSL"],
      },
      {
        id: "cloud-02",
        title: "Platform Deployments",
        duration: "3 weeks",
        lessons: ["PaaS deploys", "Logging/metrics", "Secrets management"],
        projects: ["Full-stack app with logs & monitoring"],
      },
      {
        id: "cloud-03",
        title: "Infra as Code (Intro)",
        duration: "3 weeks",
        lessons: ["Templates & modules", "Environments", "Rollbacks"],
        projects: ["IaC stack for a demo app"],
      },
    ],
  },

  "Data & Analytics": {
    level: "Beginner",
    format: "On-Campus (Bwari)",
    durationWeeks: 10,
    outcomes: [
      "Use Python & notebooks for analysis",
      "Clean, transform, and visualize datasets",
      "Tell data stories that influence decisions",
    ],
    modules: [
      {
        id: "data-01",
        title: "Data Literacy & Python",
        duration: "3 weeks",
        lessons: ["Python basics", "Pandas intro", "CSV/JSON wrangling"],
        projects: ["Exploratory analysis on public dataset"],
      },
      {
        id: "data-02",
        title: "Visualization & Dashboards",
        duration: "4 weeks",
        lessons: ["Chart design", "Dashboards", "Metrics & KPIs"],
        projects: ["KPI dashboard with a mini case study"],
      },
      {
        id: "data-03",
        title: "Decision Making",
        duration: "3 weeks",
        lessons: ["Hypothesis framing", "A/B basics", "Storytelling"],
        projects: ["Insight report + presentation"],
      },
    ],
  },

  "Coding for Kids": {
    level: "Beginner",
    format: "On-Campus (Bwari)",
    durationWeeks: 8,
    outcomes: [
      "Think logically with fun projects",
      "Build games and stories with block coding",
      "Explore web basics safely",
    ],
    modules: [
      {
        id: "kids-01",
        title: "Playful Coding",
        duration: "4 weeks",
        lessons: ["Scratch blocks", "Sprites & stages", "Game logic"],
        projects: ["Simple game & animated story"],
      },
      {
        id: "kids-02",
        title: "Web Basics (Gentle Intro)",
        duration: "4 weeks",
        lessons: ["HTML tags", "Colors & images", "Safe sharing"],
        projects: ["Personal web page (parent-reviewed)"],
      },
    ],
  },
};

export default function SyllabusPage() {
  const [track, setTrack] = useState(DEFAULT_TRACK);
  const [level, setLevel] = useState("All");
  const [format, setFormat] = useState("All");
  const [query, setQuery] = useState("");

  const data = SYLLABI[track];

  const filteredModules = useMemo(() => {
    let mods = data.modules;
    if (query.trim()) {
      const q = query.toLowerCase();
      mods = mods.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.lessons.some((l) => l.toLowerCase().includes(q)) ||
          (m.projects || []).some((p) => p.toLowerCase().includes(q))
      );
    }
    return mods;
  }, [data.modules, query]);

  // computed pills
  const levelMatches =
    level === "All" ? true : data.level.toLowerCase() === level.toLowerCase();
  const formatMatches =
    format === "All" ? true : data.format.toLowerCase() === format.toLowerCase();
  const visible = levelMatches && formatMatches;

  const jsonHref = useRef(null);

  function handleExportJSON() {
    const payload = { track, ...data };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    if (jsonHref.current) {
      jsonHref.current.href = url;
      jsonHref.current.download = `${track.replace(/\s+/g, "-").toLowerCase()}-syllabus.json`;
      jsonHref.current.click();
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
        <div
          aria-hidden
          className={`absolute inset-x-0 -top-24 h-48 opacity-25 blur-3xl ${BRAND_GRADIENT}`}
        />
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-800/80 tracking-wide">
            Tech Minds Academy — Abuja (Bwari)
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Syllabus & Course Outline
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, project-based learning designed to take you from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">
              fundamentals
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">
              portfolio-ready
            </span>
            .
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handlePrint}
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Print Syllabus
            </button>
            <button
              onClick={handleExportJSON}
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
            >
              Export JSON
            </button>
            <a ref={jsonHref} className="hidden" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/95 border-y">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {/* Track */}
              <Select
                label="Track"
                value={track}
                onChange={(v) => setTrack(v)}
                options={TRACKS}
              />
              {/* Level */}
              <Select
                label="Level"
                value={level}
                onChange={(v) => setLevel(v)}
                options={["All", ...LEVELS]}
              />
              {/* Format */}
              <Select
                label="Format"
                value={format}
                onChange={(v) => setFormat(v)}
                options={["All", ...FORMATS]}
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <SearchInput value={query} onChange={setQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header Card */}
        <header className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {track}
              </h2>
              <p className="mt-1 text-gray-600">
                Duration: <strong>{data.durationWeeks} weeks</strong>{" "}
                • Level: <strong>{data.level}</strong> • Format:{" "}
                <strong>{data.format}</strong>
              </p>
            </div>

            {/* Visible/Hidden note based on filter */}
            {!visible && (
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-amber-800 bg-amber-50 border-amber-200">
                This track doesn’t match your Level/Format filters
              </span>
            )}
          </div>

          {/* Outcomes */}
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {data.outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span
                  className={`mt-1 inline-block h-2 w-2 rounded-full ${BRAND_GRADIENT}`}
                />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </header>

        {/* Main Grid: TOC + Modules */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* TOC */}
          <aside className="lg:col-span-4">
            <nav className="sticky top-[92px] rounded-2xl border bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Modules
              </p>
              <ul className="mt-3 space-y-1">
                {filteredModules.map((m, idx) => (
                  <li key={m.id}>
                    <a
                      href={`#${m.id}`}
                      className="group block rounded-xl px-3 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {idx + 1}. {m.title}
                        </span>
                        <span className="text-xs text-gray-500">{m.duration}</span>
                      </span>
                    </a>
                  </li>
                ))}
                {filteredModules.length === 0 && (
                  <li className="text-sm text-gray-500 px-3 py-2">
                    No modules match your search.
                  </li>
                )}
              </ul>
            </nav>
          </aside>

          {/* Modules */}
          <section className="lg:col-span-8">
            <div className="space-y-4">
              {visible ? (
                filteredModules.map((m, idx) => (
                  <ModuleCard key={m.id} module={m} index={idx} />
                ))
              ) : (
                <div className="rounded-2xl border bg-white p-6 text-gray-700 shadow-sm">
                  This track is hidden by your filters. Choose matching{" "}
                  <strong>Level</strong> and <strong>Format</strong> above.
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small Components ---------- */

function SearchInput({ value, onChange }) {
  return (
    <label className="relative block w-full md:w-80">
      <span className="sr-only">Search syllabus</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search lessons, modules, projects…"
        className="w-full rounded-2xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        type="text"
      />
      <svg
        className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-3.6-3.6" />
      </svg>
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => label.toLowerCase().replace(/\s+/g, "-"), [label]);

  return (
    <div className="relative">
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        id={`${id}-button`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
      >
        <span className="text-gray-500">{label}:</span>
        <span>{value}</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={`${id}-button`}
          className="absolute z-10 mt-2 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white py-1 shadow-lg"
        >
          {options.map((opt) => {
            const active = opt === value;
            return (
              <li key={opt}>
                <button
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 ${
                    active ? "font-semibold text-emerald-800" : "text-gray-800"
                  }`}
                >
                  <span>{opt}</span>
                  {active && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ModuleCard({ module, index }) {
  const [open, setOpen] = useState(index === 0); // open first by default
  return (
    <article
      id={module.id}
      className="rounded-2xl border bg-white shadow-sm overflow-hidden"
    >
      <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-gray-900">
            {index + 1}. {module.title}
          </h3>
          <p className="text-sm text-gray-500">{module.duration}</p>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
        >
          {open ? "Hide" : "View"}
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </header>

      {open && (
        <div className="border-t px-4 py-4 sm:px-6 sm:py-6">
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
