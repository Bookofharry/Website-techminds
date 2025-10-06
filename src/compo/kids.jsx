import { Link } from "react-router-dom";

function Kids() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* decorative blobs & confetti */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-400/20 via-fuchsia-400/20 to-violet-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-400/20 via-cyan-300/20 to-emerald-300/20 blur-3xl"
      />

      {/* tiny stars */}
      <span aria-hidden className="absolute left-10 top-12 h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
      <span aria-hidden className="absolute right-12 top-24 h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
      <span aria-hidden className="absolute left-20 bottom-16 h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Coding for Kids @ Tech Minds
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Fun, Creative Coding For Curious Minds.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            On campus in <strong>Bwari, Abuja</strong> or{" "}
            <strong>live online</strong>. Kids learn by building games, stories,
            and mini-apps—guided by friendly Instructors, in safe, small groups.
          </p>

          {/* tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
              Ages 7–9 (Play & Explore)
            </span>
            <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-200">
              Ages 10–12 (Game & Web Basics)
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
              Ages 13–16 (App & Data Basics)
            </span>
          </div>
        </div>

        {/* How it works – playful stepper */}
        <div className="relative mt-12 lg:mt-16">
          <div className="grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-8">
            {[
              {
                n: 1,
                title: "Discover",
                body:
                  "Meet mentors, pick a path, and set simple goals. We keep it welcoming for absolute beginners.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M11 2a9 9 0 100 18 9 9 0 000-18Zm1 4v5h4v2h-6V6h2Z" />
                  </svg>
                ),
              },
              {
                n: 2,
                title: "Play",
                body:
                  "Start with visual coding & logic puzzles. Build mini games while learning the basics.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M8 5h8a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3Zm3 3v8l5-4-5-4Z" />
                  </svg>
                ),
              },
              {
                n: 3,
                title: "Build",
                body:
                  "Level up to Scratch, simple web pages, Python Turtle, and Roblox Studio projects.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M3 9l9-6 9 6v10a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9Z" />
                  </svg>
                ),
              },
              {
                n: 4,
                title: "Showtime",
                body:
                  "Kids demo to family & friends. Certificates, stickers, and proud smiles all round!",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M12 2l2.39 4.84L20 7.27l-3.5 3.41.83 4.86L12 13.77 6.67 15.54 7.5 10.68 4 7.27l5.61-.43L12 2z" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
                  <span className="text-xl font-semibold text-gray-700">{s.n}</span>
                </div>
                <div className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-blue-600">
                  <span className="rounded-full bg-blue-50 p-2 ring-1 ring-blue-200">
                    {s.icon}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight text-gray-900">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-base text-gray-600">{s.body}</p>

                {/* connector line (desktop) */}
                {i < 3 && (
                  <div
                    aria-hidden
                    className="hidden md:block absolute top-8 right-[-16px] h-0.5 w-8 bg-gradient-to-r from-blue-200 to-blue-500/60"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What they’ll make */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-center text-2xl font-bold text-gray-900">
            What kids build at Tech Minds
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Scratch Games",
                d: "Arcade-style games while learning loops, events & sprites.",
              },
              {
                t: "Roblox Worlds",
                d: "Create obstacle courses and simple scripts with Lua.",
              },
              {
                t: "Web Pages",
                d: "Colorful, kid-safe pages with HTML & CSS basics.",
              },
              {
                t: "Python Turtle",
                d: "Draw shapes & patterns—gentle intro to code & logic.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h4 className="text-lg font-semibold text-gray-900">{c.t}</h4>
                <p className="mt-2 text-sm text-gray-600">{c.d}</p>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">
                    Beginner-friendly
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">
                    Safe & guided
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety + requirements */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-lg font-semibold text-emerald-900">
                Safe, supportive learning
              </h4>
              <p className="mt-1 text-sm text-emerald-800">
                Small groups, background-checked mentors, kid-safe tools, and parent progress
                updates every week.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-2">
              <li className="rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-300">
                Bring a laptop (8GB+)
              </li>
              <li className="rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-300">
                On-campus power & internet
              </li>
              <li className="rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-300">
                Live online option
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to='/application'
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Enroll your child — Next Cohort
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.293 15.707a1 1 0 010-1.414L12.586 12H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 111.414-1.414l4.001 4a1 1 0 010 1.414l-4.001 4a1 1 0 01-1.414 0z" />
            </svg>
          </Link>
          <a
            href="https://mega.nz/file/Y2UCEJ5S#TCxuwPMsD23x61OQRsGmMxAbQnAQRo4N-7EI2un5YsQ"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Download parent guide (PDF)
          </a>
        </div>

        {/* Parent quote */}
        <figure className="mt-12 text-center">
          <blockquote className="mx-auto max-w-3xl text-lg text-gray-700">
            “My daughter built her first Scratch game in week one and now explains
            loops at dinner. Tech Minds made coding exciting and safe.”
          </blockquote>
          <figcaption className="mt-2 text-sm text-gray-500">— A happy parent in Abuja</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Kids;
