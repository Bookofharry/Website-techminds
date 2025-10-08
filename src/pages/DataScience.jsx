import React, { useMemo, useRef, useState } from "react";

/**
 * Tech Minds Academy — Data Science Page (compact-ready)
 * Pass `compact` to remove bottom gap before the next component.
 *   <DataSciencePage compact />
 */

const BRAND_GRADIENT = "bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800";

const DS_META = {
  track: "Data Science",
  level: "Beginner → Intermediate",
  format: "On-Campus (Bwari) • Online (Live)",
  durationWeeks: 12,
  weeklyPace: "3 days/week • 2–3 hrs/session",
  nextCohort: "Oct 28, 2025",
  price: "₦250,000",
};

const OUTCOMES = [
  "Work confidently in Python and Jupyter",
  "Wrangle datasets with Pandas & SQL",
  "Build visualizations that tell clear stories",
  "Train and evaluate ML models with scikit-learn",
  "Ship a mini analytics app (Streamlit) and portfolio",
];

const TOOLS = [
  { name: "Python", abbr: "Py" },
  { name: "Jupyter", abbr: "Jp" },
  { name: "Pandas", abbr: "Pd" },
  { name: "NumPy", abbr: "Np" },
  { name: "Matplotlib", abbr: "Mp" },
  { name: "Seaborn", abbr: "Sb" },
  { name: "scikit-learn", abbr: "Sk" },
  { name: "SQL", abbr: "SQL" },
  { name: "Streamlit", abbr: "St" },
  { name: "Git/GitHub", abbr: "Git" },
];

const MODULES = [
  {
    id: "ds-01",
    title: "Foundations: Python, Notebooks & Data Mindset",
    duration: "2 weeks",
    lessons: [
      "Python basics: syntax, data types, control flow",
      "Jupyter notebooks: cells, markdown, reproducibility",
      "Working with files: CSV/JSON; data ethics & privacy",
      "Clean code, debugging, and documentation",
    ],
    projects: ["Notebook: Lagos weather mini-exploration"],
  },
  {
    id: "ds-02",
    title: "Data Wrangling with Pandas & NumPy",
    duration: "3 weeks",
    lessons: [
      "Series, DataFrame, indexing, filtering",
      "Merging, grouping, aggregations",
      "Handling missing data & outliers",
      "Vectorization with NumPy; performance tips",
    ],
    projects: ["Case study: Nigeria e-commerce dataset clean-up"],
  },
  {
    id: "ds-03",
    title: "SQL for Analysts",
    duration: "2 weeks",
    lessons: [
      "SELECT, WHERE, ORDER BY, LIMIT",
      "JOINs, GROUP BY, HAVING",
      "Window functions (intro), CTEs",
      "Connecting Python ↔ SQL",
    ],
    projects: ["Business questions answered with SQL + notebook"],
  },
  {
    id: "ds-04",
    title: "Visualization & Storytelling",
    duration: "2 weeks",
    lessons: [
      "Matplotlib/Seaborn plotting patterns",
      "Designing readable charts for decisions",
      "Dashboards & KPIs (foundations)",
      "Narrative structure & clarity",
    ],
    projects: ["Insight report with 5 charts + 3 takeaways"],
  },
  {
    id: "ds-05",
    title: "Machine Learning (Intro) with scikit-learn",
    duration: "2 weeks",
    lessons: [
      "Train/test split, metrics, baselines",
      "Linear/logistic regression, k-NN",
      "Model pipelines & preprocessing",
      "Overfitting, regularization, cross-validation",
    ],
    projects: ["Mini ML model: predict churn or default (demo data)"],
  },
  {
    id: "ds-06",
    title: "Capstone & Portfolio Shipping",
    duration: "1 week",
    lessons: [
      "Project planning & scope cuts",
      "Streamlit app: share your insight",
      "README, walkthrough video, presentation",
    ],
    projects: ["Capstone: end-to-end analysis + Streamlit app"],
  },
];

const PROJECT_GALLERY = [
  { title: "Abuja Transport Delays — Visual Story", desc: "Multi-chart narrative built from public transport feeds." },
  { title: "Retail Sales Insight Dashboard", desc: "Pandas + Seaborn + KPIs for weekly leadership standup." },
  { title: "Customer Churn Predictor", desc: "scikit-learn baseline with clear, actionable metrics." },
  { title: "Food Prices in West Africa", desc: "Exploratory analysis notebook with source links." },
];

const INSTRUCTORS = [
  { name: "Chidera N.", role: "Lead Data Scientist", bio: "Analytics, dashboards, and experiments.", initials: "CN" },
  { name: "Ibrahim A.", role: "ML Engineer", bio: "Feature engineering & production basics.", initials: "IA" },
  { name: "Ngozi E.", role: "Data Analyst", bio: "SQL storytelling & business context.", initials: "NE" },
];

const FAQS = [
  { q: "Do I need programming experience?", a: "Basic familiarity with computers helps. We start from Python fundamentals and ramp up with guided practice." },
  { q: "Will I build a portfolio?", a: "Yes. You’ll complete multiple mini-projects and a capstone with a Streamlit app you can showcase." },
  { q: "Is there a certificate?", a: "Yes. Graduates who meet project requirements receive a Tech Minds Academy certificate." },
  { q: "How are classes delivered?", a: "On-campus in Bwari and live online. All sessions are mentor-led with practical labs." },
];

export default function DataSciencePage({ compact = true, metaOverrides = {} }) {
  const [openId, setOpenId] = useState(MODULES[0].id);
  const meta = { ...DS_META, ...metaOverrides };

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
      jsonRef.current.download = "techminds-data-science.json";
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
              Data Science
            </span>{" "}
            Program
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, project-based training that takes you from{" "}
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
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <StatRow label="Duration" value={`${meta.durationWeeks} weeks`} />
                <StatRow label="Level" value={meta.level} />
                <StatRow label="Format" value={meta.format} />
                <StatRow label="Weekly Pace" value={meta.weeklyPace} />
                <StatRow label="Next Cohort" value={meta.nextCohort} />
                <StatRow label="Tuition" value={meta.price} highlight />
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#apply" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
                  Apply Now
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
                  Talk to Admissions
                </a>
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
            <div className="flex gap-4 min-w-max">
              {PROJECT_GALLERY.map((p, i) => (
                <article key={i} className="w-72 shrink-0 rounded-2xl border bg-white p-4 shadow-sm hover:shadow transition">
                  <div className="aspect-video rounded-xl bg-gray-100 grid place-items-center text-gray-400 text-sm">
                    <span>Preview</span>
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
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Small Components ----------------------------- */

function StatRow({ label, value, highlight = false }) {
  return (
    <div>
      <dt className="text-gray-500">{label}</dt>
      <dd className={`mt-0.5 font-semibold ${highlight ? "text-emerald-800" : "text-gray-900"}`}>{value}</dd>
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
    <article id={module.id} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
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
      {open && (
        <div id={`${id}-panel`} className="mt-2 text-sm text-gray-700">
          {a}
        </div>
      )}
    </div>
  );
}
