export default function KidsCodeOverview() {
  const navy = "#0b2a6b";
  const icon = "h-7 w-7 text-[#0b2a6b] dark:text-[#6f8ac5]";
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  const outcomes = [
    {
      title: "Clear Thinking",
      text: "We teach children to plan, test, and improve—skills that support homework, projects, and everyday decisions.",
      svg: (
        <svg viewBox="0 0 24 24" className={icon} aria-hidden {...stroke}>
          <path d="M12 3v4M12 17v4M4 12h4M16 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />
        </svg>
      ),
    },
    {
      title: "Creativity That Sticks",
      text: "Kids design mini-games, stories, and animations so learning feels like play—and the confidence lasts.",
      svg: (
        <svg viewBox="0 0 24 24" className={icon} aria-hidden {...stroke}>
          <path d="M12 3v4M12 17v4M5 12h4M15 12h4" />
          <path d="M8 8l8 8M16 8l-8 8" />
        </svg>
      ),
    },
    {
      title: "Healthy Digital Habits",
      text: "Gentle guidance on time online, kindness in chats, and privacy basics—age-appropriate and simple.",
      svg: (
        <svg viewBox="0 0 24 24" className={icon} aria-hidden {...stroke}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Working With Others",
      text: "Pair challenges and short showcases help children explain ideas and listen to teammates.",
      svg: (
        <svg viewBox="0 0 24 24" className={icon} aria-hidden {...stroke}>
          <circle cx="8" cy="8" r="2.5" />
          <path d="M2.5 14a6 6 0 0 1 11 0" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M11 15a6 6 0 0 1 8.5 0" />
        </svg>
      ),
    },
  ];

  const makeList = [
    "A tap-to-play maze game (Scratch)",
    "An animated birthday card (Scratch/Canva + code blocks)",
    "A tiny website about a hobby (HTML/CSS basics)",
    "A click-counter or quiz (Intro to JS concepts)",
  ];

  const faqs = [
    {
      q: "Is this right for complete beginners?",
      a: "Yes. We start with simple blocks, celebrate every small win, and move at a comfortable pace.",
    },
    {
      q: "What ages do you teach?",
      a: "We group by stage: 6–8 (discover), 9–12 (create), 13–15 (build). Each level meets kids where they are.",
    },
    {
      q: "Onsite or online?",
      a: "Both. Onsite devices are provided. For online, a laptop and basic internet are enough—we’ll help you set up.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* soft background accents */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#0b2a6b]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Top header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0b2a6b]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0b2a6b] ring-1 ring-[#0b2a6b]/20">
            Tech Minds Academy • Coding for Kids
          </span>
          <h2 className="mt-3 text-[28px] font-black leading-tight tracking-[-0.015em] text-slate-900 dark:text-white sm:text-4xl">
            Calm, joyful tech learning—designed for families
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-7 text-slate-700 dark:text-slate-300">
            Your child won’t just “use a computer”—they’ll understand it. We turn curiosity into practical skills with gentle mentoring and projects they’re proud to show you.
          </p>

          {/* Delivery badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {["Onsite • Bwari Campus", "Live-Online • Nigeria-wide", "Small Groups • 5–8 learners"].map((t, i) => (
              <span key={i} className="rounded-full border border-[#0b2a6b]/20 bg-white px-3 py-1 text-[12px] font-semibold text-[#0b2a6b] shadow-sm dark:bg-slate-900">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes & parent panel */}
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
          {/* Outcomes grid */}
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item, i) => (
              <article
                key={i}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-[#0b2a6b]/20 shadow-sm dark:bg-slate-800">
                  {item.svg}
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-6 text-slate-700 dark:text-slate-300">{item.text}</p>
                </div>
              </article>
            ))}

            {/* What we make */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0b2a6b] dark:text-[#6f8ac5]" aria-hidden {...stroke}>
                  <path d="M3 5h18v12H3z" />
                  <path d="M7 21h10" />
                  <path d="M7 9h5M7 13h3" />
                </svg>
                <h3 className="text-[17px] font-extrabold text-slate-900 dark:text-white">What children build</h3>
              </div>
              <ul className="mt-3 grid list-disc gap-2 pl-5 text-[15px] text-slate-700 marker:text-[#0b2a6b] dark:text-slate-300">
                {makeList.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Parent info card */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0b2a6b] dark:text-[#6f8ac5]" aria-hidden {...stroke}>
                <path d="M3 12l7-7 7 7" />
                <path d="M5 10v9h14v-9" />
                <path d="M8 21h8" />
              </svg>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Simple path for parents</h3>
            </div>

            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b2a6b]/10 text-[12px] font-bold text-[#0b2a6b] ring-1 ring-[#0b2a6b]/20">1</span>
                <p className="text-[15px] text-slate-800 dark:text-slate-200"><strong>Meet & Try:</strong> A friendly 30–45 min trial class—no pressure.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b2a6b]/10 text-[12px] font-bold text-[#0b2a6b] ring-1 ring-[#0b2a6b]/20">2</span>
                <p className="text-[15px] text-slate-800 dark:text-slate-200"><strong>Right Group:</strong> We place by age and comfort level, not just age alone.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b2a6b]/10 text-[12px] font-bold text-[#0b2a6b] ring-1 ring-[#0b2a6b]/20">3</span>
                <p className="text-[15px] text-slate-800 dark:text-slate-200"><strong>Weekly Rhythm:</strong> 60–90 mins, once or twice weekly + brief progress notes.</p>
              </li>
            </ol>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[14px]">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-900 dark:text-white">Safe & Supervised</p>
                <p className="text-slate-600 dark:text-slate-300">Child-friendly tools and careful oversight.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-900 dark:text-white">Gentle Mentors</p>
                <p className="text-slate-600 dark:text-slate-300">Encouraging feedback and patient coaching.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-900 dark:text-white">Flexible Times</p>
                <p className="text-slate-600 dark:text-slate-300">After-school and Saturday options.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-900 dark:text-white">Device Support</p>
                <p className="text-slate-600 dark:text-slate-300">Onsite PCs or simple home setup.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
            
              <a
                href="tel:+2348147328332"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0b2a6b] px-6 py-3 text-[15px] font-extrabold text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0b2a6b]"
              >
                Speak With a Mentor
              </a>
            </div>

            {/* FAQs */}
            <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
              {faqs.map((f, i) => (
                <details key={i} className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold text-slate-900 dark:text-slate-100">
                    {f.q}
                    <span className="ml-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#0b2a6b]/10 text-[#0b2a6b] ring-1 ring-[#0b2a6b]/20 transition group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden {...stroke}>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-2 text-[14px] leading-6 text-slate-700 dark:text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </aside>
        </div>

        {/* Closing reassurance */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 text-[14.5px] text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0b2a6b] dark:text-[#6f8ac5]" aria-hidden {...stroke}>
              <path d="M12 2l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <p>
              We keep sessions calm and encouraging. Children are guided to try, reflect, and try again—so progress feels natural and steady.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
