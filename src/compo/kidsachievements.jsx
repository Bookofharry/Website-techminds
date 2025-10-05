import React from "react";

const KidsRes = () => {
  const items = [
    {
      title: "24/7 Power Supply",
      desc: "Stable electricity with inverters & generators—no class downtime, no lost progress.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: "24/7 Internet",
      desc: "Fiber-grade bandwidth for smooth live sessions, quick installs, and deploys that just fly.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 8a10 10 0 0 1 20 0M5 11a7 7 0 0 1 14 0M8 14a4 4 0 0 1 8 0M12 18v3" />
        </svg>
      ),
    },
    {
      title: "Friendly Instructors",
      desc: "Patient, mentor-led guidance with code reviews, pair programming, and real feedback.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.3-2A4.5 4.5 0 0 0 5 18z" />
          <path d="M12 6v4l2 2" />
        </svg>
      ),
    },
    {
      title: "Great Syllabus",
      desc: "Industry-aligned curriculum—project first, portfolio-driven, and constantly refreshed.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      ),
    },
    {
      title: "Conducive Work Space",
      desc: "Comfortable lab seating, whiteboards, and focus zones—built for deep work and collab.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="10" width="20" height="7" rx="2" />
          <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
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
        {/* header — extra bold & larger on mobile */}
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

        {/* grid — chunkier padding & stronger card contrast on mobile */}
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

              {/* top row — bigger icon chip & larger badge */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm ring-1 ring-slate-700/50 dark:bg-slate-800">
                  {it.icon}
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-slate-800 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                  Tech-grade
                </span>
              </div>

              {/* bolder titles & readable body on phones */}
              <h3 className="relative mt-4 text-xl font-extrabold leading-tight text-slate-900 sm:text-[22px] dark:text-white">
                {it.title}
              </h3>
              <p className="relative mt-2 text-[15px] leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                {it.desc}
              </p>

              {/* accent line */}
              <div className="relative mt-5 h-[3px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <span className="absolute inset-y-0 left-0 block w-1/3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA — larger tap targets on mobile */}
        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <p className="text-[14.5px] text-slate-700 dark:text-slate-300 sm:text-sm">
            Book a tour of our Bwari campus or try a live-online class—same tools, same mentors, same outcomes.
          </p>
          <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="#book-tour"
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-[15px] font-extrabold text-white shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto"
            >
              Book a campus tour
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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
