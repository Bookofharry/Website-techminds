import React from "react";

const KidsRes = () => {
  const items = [
    {
      title: "24/7 Power Supply",
      desc: "Stable electricity with inverters & generators—no class downtime, no lost progress.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: "24/7 Internet",
      desc: "Fiber-grade bandwidth for smooth live sessions, quick installs, and deploys that just fly.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 8a10 10 0 0 1 20 0M5 11a7 7 0 0 1 14 0M8 14a4 4 0 0 1 8 0M12 18v3" />
        </svg>
      ),
    },
    {
      title: "Friendly Instructors",
      desc: "Patient, mentor-led guidance with code reviews, pair programming, and real feedback.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />
        </svg>
      ),
    },
    {
      title: "Real-Time Updated Tools",
      desc: "Latest stacks & cloud labs (GitHub, Vercel, AWS, Node) ready the moment you need them.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.3-2A4.5 4.5 0 0 0 5 18z" />
          <path d="M12 6v4l2 2" />
        </svg>
      ),
    },
    {
      title: "Great Syllabus",
      desc: "Industry-aligned curriculum—project first, portfolio-driven, and constantly refreshed.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      ),
    },
    {
      title: "Conducive Work Space",
      desc: "Comfortable lab seating, whiteboards, and focus zones—built for deep work and collab.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="10" width="20" height="7" rx="2" />
          <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 dark:from-slate-950 dark:to-slate-900 sm:py-20 lg:py-24">
      {/* animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/15 via-fuchsia-400/15 to-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-400/15 via-sky-400/15 to-blue-500/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-600/20 dark:text-indigo-300">
            Tech Minds Facilities
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl xl:text-5xl dark:text-white">
            Everything you need to learn—without friction
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-6">
            From constant power to modern tools and friendly mentors, our Abuja (Bwari) campus and live-online setup
            are engineered for shipping real work—consistently.
          </p>
        </div>

        {/* grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:ring-white/5"
            >
              {/* glowing gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-[linear-gradient(120deg,rgba(99,102,241,.35),rgba(236,72,153,.35),rgba(20,184,166,.35))]" />
              </div>

              {/* top row */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm ring-1 ring-slate-700/50 dark:bg-slate-800">
                  {it.icon}
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold tracking-wide text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                  Tech-grade
                </span>
              </div>

              <h3 className="relative mt-5 text-lg font-bold leading-tight text-slate-900 dark:text-white">
                {it.title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {it.desc}
              </p>

              <div className="relative mt-6 h-px w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <span className="absolute inset-y-0 left-0 block w-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rotate-12 rounded-full bg-white/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-14">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Book a tour of our Bwari campus or try a live-online class—same tools, same mentors, same outcomes.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#book-tour"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
            >
              Book a campus tour
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 10H4a1 1 0 01-.117-1.993L4 8h9.585l-3.292-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
            <a
              href="#join-online"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Join an online class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsRes;
