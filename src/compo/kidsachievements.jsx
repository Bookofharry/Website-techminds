import React from "react";

const KidsRes = () => {
  // Navy icon color (tweaked for dark mode readability)
  const iconCls = "h-8 w-8 text-[#0b2a6b] dark:text-[#6f8ac5]";
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  const items = [
    {
      title: "24/7 Power Supply",
      desc: "Stable electricity with inverters & generators—no class downtime, no lost progress.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>Constant Power</title>
          <rect x="2" y="7" width="18" height="10" rx="2" />
          <path d="M22 10v4" />
          <path d="M11 9l-2 3h3l-2 3" />
        </svg>
      ),
    },
    {
      title: "24/7 Internet",
      desc: "Fiber-grade bandwidth for smooth live sessions, quick installs, and deploys that just fly.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>High-Speed Internet</title>
          <rect x="3" y="14" width="18" height="5" rx="1.5" />
          <path d="M7 14V9m10 5V9" />
          <path d="M4.5 11.5a9 9 0 0 1 15 0" />
          <path d="M7 12a6 6 0 0 1 10 0" />
          <circle cx="8.5" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="11" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Friendly Instructors",
      desc: "Patient, mentor-led guidance with code reviews, pair programming, and real feedback.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>Mentor Support</title>
          <circle cx="8" cy="10" r="2.5" />
          <path d="M2.8 16.5A6 6 0 0 1 13.2 16.5" />
          <circle cx="16.5" cy="7.5" r="2" />
          <path d="M14.5 7.5h-0.8a2.2 2.2 0 0 0-2.2 2.2v.3" />
          <path d="M18.5 7.5h.8a2.2 2.2 0 0 1 2.2 2.2v1.8" />
          <path d="M16.5 9.5v1.2" />
        </svg>
      ),
    },
    {
      title: "Real-Time Updated Tools",
      desc: "Latest stacks & cloud labs (GitHub, Vercel, AWS, Node) ready the moment you need them.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>Cloud Dev Tools</title>
          <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-1.8A4 4 0 0 0 5 18z" />
          <path d="M9 13l2 2-2 2" />
          <path d="M13 17h3" />
        </svg>
      ),
    },
    {
      title: "Great Syllabus",
      desc: "Industry-aligned curriculum—project first, portfolio-driven, and constantly refreshed.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>Structured Curriculum</title>
          <path d="M7 4h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <rect x="9" y="2" width="6" height="4" rx="1.2" />
          <path d="M8 11l1.5 1.5L12 10" />
          <path d="M8 16l1.5 1.5L12 15" />
          <path d="M13.5 11H17M13.5 16H17" />
        </svg>
      ),
    },
    {
      title: "Conducive Work Space",
      desc: "Comfortable lab seating, whiteboards, and focus zones—built for deep work and collab.",
      icon: (
        <svg viewBox="0 0 24 24" className={iconCls} aria-hidden {...stroke}>
          <title>Ergonomic Workspace</title>
          <rect x="3" y="4" width="14" height="9" rx="1.5" />
          <path d="M10 13v3" />
          <path d="M6 18h8" />
          <path d="M18 10l2-1 1 2-2 1z" />
          <path d="M19 12v4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-14 sm:py-18 lg:py-24 dark:from-slate-950 dark:to-slate-900">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-36 -left-28 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-400/20 to-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-36 -right-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-400/20 to-blue-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header — unchanged */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-600/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-600/20 dark:text-indigo-300">
            Tech Minds Facilities
          </span>
          <h2 className="mt-3 text-[28px] leading-[1.15] font-black tracking-[-0.02em] text-slate-900 sm:text-4xl xl:text-5xl dark:text-white">
            Everything you need to learn—<span className="underline decoration-4 underline-offset-4 decoration-indigo-500">without friction</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15.5px] leading-7 text-slate-700 sm:text-base dark:text-slate-300">
            Constant power. Fast internet. Friendly mentors. Modern tools. Abuja (Bwari) campus & live-online—built to keep you shipping.
          </p>
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:ring-white/5 sm:p-6"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-[linear-gradient(120deg,rgba(99,102,241,.30),rgba(236,72,153,.30),rgba(20,184,166,.30))]" />
              </div>

              {/* top row — light chip so navy icons are visible */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-[#0b2a6b]/20 shadow-sm dark:bg-slate-800">
                  {it.icon}
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-slate-800 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                  Tech-grade
                </span>
              </div>

              <h3 className="relative mt-4 text-xl font-extrabold leading-tight text-slate-900 sm:text-[22px] dark:text-white">
                {it.title}
              </h3>
              <p className="relative mt-2 text-[15px] leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                {it.desc}
              </p>

              <div className="relative mt-5 h-[3px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <span className="absolute inset-y-0 left-0 block w-1/3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA — unchanged */}
        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <p className="text-[14.5px] text-slate-700 dark:text-slate-300 sm:text-sm">
            Book a tour of our Bwari campus or try a live-online class—same tools, same mentors, same outcomes.
          </p>
          <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="tel:+2348147328332"
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-[15px] font-extrabold text-white shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto"
            >
              Book a campus tour
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 10H4a1 1 0 01-.117-1.993L4 8h9.585l-3.292-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
            <a
              href="#join-online"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[15px] font-extrabold text-slate-800 transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:w-auto"
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
