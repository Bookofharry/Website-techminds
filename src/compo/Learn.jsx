// src/components/Learn.jsx
import '../chatgpt.css';

export default function Learn() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* animated background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-pink-400/25 to-rose-400/25 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-16 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/25 via-violet-400/25 to-sky-400/25 blur-3xl animate-blob animation-delay-2000"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-400/20 to-sky-400/20 blur-3xl animate-blob animation-delay-4000"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* glass card */}
        <div className="rounded-2xl bg-white/10 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl dark:bg-white/5">
          <div className="p-8 sm:p-12">
            {/* headline */}
            <p className="mb-3 text-xs tracking-[0.35em] text-gray-700/70 dark:text-gray-300/70">
              • FUTURE-READY •
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              <span className="block text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  LEARN
                </span>
              </span>
              <span className="mt-2 block">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
                  IN-DEMAND
                </span>
              </span>
              <span className="mt-2 block">
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  TECH SKILLS
                </span>
              </span>
            </h1>

            {/* accent divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
              <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-amber-500 to-rose-500" />
              <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
            </div>

            {/* subcopy */}
            <p className="mt-6 max-w-2xl text-base text-gray-700/90 dark:text-gray-300/90">
              Build job-ready confidence with practical projects, mentorship, and a
              portfolio that speaks for you. Start where you are—finish where you
              want to be.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400/60 active:scale-95 bg-gradient-to-r from-emerald-600 to-cyan-600"
              >
                Get Started
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-xl border border-gray-900/10 bg-white/50 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-colors hover:bg-white/80 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                View Curriculum
              </a>
            </div>

            {/* tiny badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Beginner-friendly', 'Hands-on Projects', 'Career Support'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-gray-800 dark:border-white/15 dark:bg-white/10 dark:text-gray-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
