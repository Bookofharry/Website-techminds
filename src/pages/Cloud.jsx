import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Tech Minds Academy — Cloud Computing Page (auto-cohort)
 * - `nextCohort` auto-sets to the FIRST MONDAY of the next available month (Africa/Lagos).
 * - You can still override with: <CloudComputingPage metaOverrides={{ nextCohort: "Jan 5, 2026" }} />
 */

/* ------------------------------ Brand Styles ------------------------------ */

const BRAND_GRADIENT =
  "bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800";

/* ------------------------------- Date Utils ------------------------------- */

const TIMEZONE_TZID = "Africa/Lagos";

/** First Monday for a given year & 0-based month. */
function firstMondayOfMonth(year, monthIndex) {
  const firstOfMonthUTC = new Date(Date.UTC(year, monthIndex, 1));
  const weekday = new Date(
    firstOfMonthUTC.toLocaleString("en-US", { timeZone: TIMEZONE_TZID })
  ).getDay(); // 0=Sun..6=Sat
  const offset = (1 - weekday + 7) % 7; // Monday=1
  const firstMondayUTC = new Date(Date.UTC(year, monthIndex, 1 + offset));
  // Return as Lagos-local Date object
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

const CC_META_BASE = {
  track: "Cloud Computing",
  level: "Beginner → Intermediate",
  format: "• Hybrid",
  durationWeeks: 12,
  weeklyPace: "3 days/week • 2–3 hrs/session",
  price: "₦600,000",
};

/* ------------------------------ Page Content ------------------------------ */

const OUTCOMES = [
  "Understand core cloud concepts: compute, storage, networking, IAM",
  "Deploy workloads on AWS/Azure/GCP with best practices",
  "Use Terraform for Infrastructure as Code (IaC)",
  "Containerize apps with Docker and orchestrate with Kubernetes",
  "Automate CI/CD and set up monitoring, logging, and alerting",
];

const TOOLS = [
  { name: "AWS", abbr: "AWS" },
  { name: "Azure", abbr: "Az" },
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Linux & Bash", abbr: "Ln" },
  { name: "Docker", abbr: "Dk" },
  { name: "Kubernetes", abbr: "K8s" },
  { name: "Terraform", abbr: "Tf" },
  { name: "Git/GitHub", abbr: "Git" },
  { name: "CI/CD (GHA)", abbr: "CI" },
  { name: "Monitoring (CW/Stack)", abbr: "Mon" },
  { name: "PostgreSQL (Managed)", abbr: "PG" },
  { name: "VPC/Networking", abbr: "VPC" },
];

const MODULES = [
  {
    id: "cc-01",
    title: "Foundations: Cloud, Linux & Networking",
    duration: "2 weeks",
    lessons: [
      "Cloud models (IaaS/PaaS/SaaS) and shared responsibility",
      "Linux essentials, SSH, processes & permissions",
      "Networking: IP, CIDR, subnets, DNS, load balancers",
      "Identity & Access Management (principals, policies, roles)",
    ],
    projects: ["Spin up a Linux VM, harden SSH, and host a static site"],
  },
  {
    id: "cc-02",
    title: "Compute & Storage on AWS/Azure/GCP",
    duration: "2 weeks",
    lessons: [
      "VMs & autoscaling groups, images, pricing models",
      "Object storage (S3/Blob/GCS), lifecycle & cost controls",
      "Block vs object vs file storage; backups & snapshots",
      "Intro to managed DBs (RDS, Cloud SQL, Azure DB)",
    ],
    projects: ["Highly available static site with CDN + object storage"],
  },
  {
    id: "cc-03",
    title: "Infrastructure as Code with Terraform",
    duration: "2 weeks",
    lessons: [
      "Providers, resources, state, variables & modules",
      "Workspaces, remote state & state locking",
      "Policy as code (sentinel-style) & tagging standards",
      "Idempotency & review workflows",
    ],
    projects: ["Terraform module: VPC + subnets + security groups"],
  },
  {
    id: "cc-04",
    title: "Containers & Kubernetes",
    duration: "3 weeks",
    lessons: [
      "Dockerfiles, multi-stage builds & registries",
      "K8s core: Pods, Deployments, Services, Ingress",
      "ConfigMaps/Secrets, HPA, rolling updates",
      "Ingress controllers & managed K8s (EKS/AKS/GKE)",
    ],
    projects: ["Deploy a containerized microservice to managed K8s"],
  },
  {
    id: "cc-05",
    title: "Serverless & Event-Driven",
    duration: "1 week",
    lessons: [
      "Functions-as-a-Service (Lambda/Functions)",
      "API Gateways, events & queues (SQS/PubSub/Service Bus)",
      "Patterns: fan-out, retry, idempotency",
    ],
    projects: ["Serverless API + object storage trigger workflow"],
  },
  {
    id: "cc-06",
    title: "CI/CD, Observability & Cost",
    duration: "1 week",
    lessons: [
      "GitHub Actions pipelines: build, test, deploy",
      "Monitoring, logs & traces; SLOs & alerts",
      "Budgets, tags & cost optimization basics",
    ],
    projects: ["CI/CD pipeline + dashboards & alerts for an app"],
  },
  {
    id: "cc-07",
    title: "Capstone & Readiness",
    duration: "1 week",
    lessons: [
      "Design review, threat modeling & reliability checklist",
      "Docs, runbooks & handover",
      "Interview prep & portfolio polish",
    ],
    projects: ["Capstone: end-to-end cloud app with IaC + CI/CD"],
  },
];

const PROJECT_GALLERY = [
  { title: "HA Static Site + CDN", desc: "Global delivery with object storage, CDN & IaC." },
  { title: "Microservice on Managed K8s", desc: "Blue/green deploys, HPA and ingress routing." },
  { title: "Serverless Media Pipeline", desc: "Auto-thumbnailer using events, queues & functions." },
  { title: "Observability Starter", desc: "Dashboards, alerts & error budgets for a demo app." },
];

const INSTRUCTORS = [
  { name: "Harry J", role: "Cloud/DevOps Engineer", bio: "Terraform, Kubernetes & production pipelines.", initials: "HJ" },

];

const FAQS = [
  {
    q: "Do I need prior cloud experience?",
    a: "No. Basic comfort with a computer helps. We start from Linux and core cloud ideas before moving to Terraform, containers, and K8s.",
  },
  {
    q: "Which cloud do we use?",
    a: "You’ll see AWS, Azure, and GCP. Projects can be completed on any one; we highlight portable patterns across providers.",
  },
  {
    q: "Do I get hands-on labs?",
    a: "Yes. Each module includes guided labs and a project. We simulate real-world scenarios with IaC and CI/CD.",
  },
  {
    q: "Certification prep?",
    a: "We offer guidance for entry-level certs (AWS/Azure/GCP fundamentals) and share practice tips and question styles.",
  },
];

/* -------------------------------- Component ------------------------------- */

export default function CloudComputingPage({ compact = true, metaOverrides = {} }) {
  const [openId, setOpenId] = useState(MODULES[0].id);

  // Compute next cohort date once per mount (Lagos TZ)
  const computedNextCohort = useMemo(() => formatDateInLagos(getNextFirstMonday()), []);

  // Merge meta with auto nextCohort; allow user overrides
  const meta = useMemo(
    () => ({
      ...CC_META_BASE,
      nextCohort: computedNextCohort,
      ...metaOverrides, // override if provided
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
      jsonRef.current.download = "techminds-cloud-computing.json";
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
              Cloud Computing
            </span>{" "}
            Program
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Mentor-led, project-based training from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">
              foundations
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800">
              production patterns
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
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
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

          {/* Optional actions */}
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
