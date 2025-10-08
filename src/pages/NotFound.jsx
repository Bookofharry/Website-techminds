import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* floating blobs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl animate-pulse"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-pulse [animation-delay:300ms]"
      />

      <section className="relative z-10 grid min-h-screen place-items-center px-6">
        <div className="mx-auto w-full max-w-xl rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-white/5">
          {/* Badge */}
          <div className="mx-auto w-fit rounded-full border border-blue-100/60 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            Error 404
          </div>

          {/* Big number */}
          <h1 className="mt-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-gray-200 dark:to-gray-400">
            Page not found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-center text-sm text-gray-600 dark:text-gray-300">
            The link might be outdated or the page moved. Don’t worry—let’s get
            you back on track.
          </p>

          {/* Helpful hints */}
          <ul className="mx-auto mt-6 flex list-none flex-col gap-2 text-center text-xs text-gray-500 dark:text-gray-400">
            <li>• Check the URL for typos</li>
            <li>• Use the buttons below to continue</li>
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              <span className="mr-1.5 transition-transform group-hover:-translate-x-0.5">
                ⬅
              </span>
              Go Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact Support
            </Link>

            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-gray-900/90 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:bg-white/15 dark:hover:bg-white/25"
            >
              Explore Courses
            </Link>
          </div>

          {/* Brand footer */}
          <div className="mt-8 flex items-center justify-center gap-2 text-center text-[11px] text-gray-500 dark:text-gray-400">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500/80" />
            <span>Tech Minds Academy • Abuja</span>
          </div>
        </div>
      </section>
    </main>
  );
}
