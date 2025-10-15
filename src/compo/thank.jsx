import App from '../assets/app.png'
import Web from '../assets/web.png'
import Kids from '../assets/kidss.png'
import Cloud from '../assets/cloud.jpeg'
import { Link } from 'react-router-dom'
function Thank() {
  const courses = [
    {
      title: "Web Development",
      price: 300000,
      img: Web,
      badge: "In-Demand",
      duration: "12 weeks",
      mentorLed: true,
      link: '/programs/software-engineering/web-development' 
    },
    {
      title: "App Development",
      price: 400000,
      img: App,
      duration: "12–14 weeks",
      mentorLed: true,
      link: '/programs/software-engineering/app-development'
    },
    {
      title: "Cloud Computing",
      price: 600000,
      img: Cloud,
      badge: "New",
      duration: "12 weeks",
      mentorLed: true,
      link: '/programs/cloud-computing'
    },
    {
      title: "Coding for Kids",
      price: 150000,
      img: Kids,
      duration: "14 weeks",
      mentorLed: true,
      link: '/programs/coding-for-kids-engineering'
    },
  ];

  const formatNGN = (n) =>
    `₦${n.toLocaleString("en-NG", { minimumFractionDigits: 0 })}.00`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-14 sm:py-16 lg:py-20">
      {/* soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-400/15 via-blue-400/15 to-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-indigo-400/15 to-pink-400/15 blur-3xl"
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Our Courses
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
              Expertly designed for beginners and career upskillers in Abuja. <br />
Learn as a Team, Mentor-led cohorts, work on real-world projects.
<br />Your journey to becoming a Tech-ready professional starts here Now. 
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-slate-200/70 bg-white/90 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:ring-white/5"
            >
              {/* media */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {c.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 ring-1 ring-slate-200 backdrop-blur dark:bg-slate-800/80 dark:text-white dark:ring-slate-700">
                    {c.badge}
                  </span>
                )}
              </div>

              {/* content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <a
                    href="#"
                    className="relative block text-sm font-semibold leading-tight text-slate-900 hover:underline dark:text-white"
                    title={c.title}
                  >
                    {c.title}
                    <span className="absolute inset-0" aria-hidden />
                  </a>

                  <p className="shrink-0 text-sm font-bold text-slate-900 dark:text-white">
                    {formatNGN(c.price)}
                  </p>
                </div>

                {/* prominent meta row */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {/* duration pill */}
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                    {/* clock icon */}
                    <svg
                      className="mr-1.5 h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16Zm.5-12a.5.5 0 00-1 0v4.25c0 .133.053.26.147.353l2.5 2.5a.5.5 0 10.707-.707L10.5 9.793V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {c.duration}
                  </span>

                  {/* mentor-led pill — bold and obvious */}
                  {c.mentorLed && (
                    <span className="inline-flex items-center rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm ring-1 ring-emerald-600/80">
                      {/* user icon */}
                      <svg
                        className="mr-1.5 h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Mentor-led
                    </span>
                  )}
                </div>

                {/* CTA row */}
                <div className="mt-4 flex flex-col-reverse items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
                  {/* secondary link (optional) */}
  
                  <Link to={c.link} className="inline-flex items-center justify-center rounded-full border border-slate-300/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto">Course Details</Link>

                  {/* primary — View syllabus (mobile full width, desktop auto) */}
                  <Link
                    to="/syllabus"
                    aria-label={`View syllabus for ${c.title}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 sm:w-auto"
                  >
                    View syllabus
                    <svg
                      className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 10H4a1 1 0 01-.117-1.993L4 8h9.585l-3.292-3.293a1 1 0 010-1.414z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Thank;
