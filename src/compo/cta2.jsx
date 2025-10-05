export default function DownloadCta() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* animated background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500/30 via-sky-400/30 to-cyan-300/30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-400/25 to-pink-300/25 blur-3xl animate-blob animation-delay-2000"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-400/20 to-sky-400/20 blur-3xl animate-blob animation-delay-4000"
      />

      <div className="container relative z-10 flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Try something really different right now.
        </h2>

<p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
  Learn in our Abuja campus or online. Practical, mentor-led classes that turn beginners into job-ready talent. <br /> Learn Web & App Development, UI/UX, Data Science & more. Start building real projects today.
</p>
        {/* Buttons on one line with hover lift + shine */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          {/* Physical Classes */}
          <a
            href="#"
            className="btn-raise shine inline-flex items-center justify-center px-4 py-2.5 text-sm text-white bg-gray-900 rounded-lg shadow transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:bg-gray-800"
          >
            {/* Unique: Pin + Campus, with pulsing locator */}
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              {/* soft inner glow */}
              <radialGradient id="physGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 28) rotate(90) scale(18 18)">
                <stop stopColor="currentColor" stopOpacity="0.25" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
              <circle cx="32" cy="28" r="18" fill="url(#physGlow)" />

              {/* map pin */}
              <path
                d="M32 8c9.94 0 18 8 18 17.86 0 6.71-3.52 11.67-8.09 16.93-2.66 3.09-5.7 6.16-7.77 10.03a3 3 0 0 1-5.28 0c-2.07-3.87-5.1-6.94-7.77-10.03C17.52 37.53 14 32.57 14 25.86 14 16 22.06 8 32 8Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* tiny campus inside pin */}
              <path
                d="M22 29h20v10a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V29Z"
                fill="currentColor"
                fillOpacity="0.22"
              />
              <path
                d="M20 29h24M24 41h16M26 29l6-4 6 4M31 41v-6h2v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* subtle pulsing locator dot */}
              <g>
                <circle cx="32" cy="23" r="2.4" fill="currentColor" />
                <circle cx="32" cy="23" r="2.4" className="animate-ping" fill="currentColor" fillOpacity="0.25" />
              </g>
            </svg>
            <span>Physical Classes</span>
          </a>

          {/* Online Classes */}
          <a
            href="#"
            className="btn-raise shine inline-flex items-center justify-center px-4 py-2.5 text-sm text-white bg-blue-600 rounded-lg shadow transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            {/* Unique: Laptop + Play badge + Wi-Fi breath */}
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              {/* soft screen glow */}
              <linearGradient id="screenGlow" x1="16" y1="14" x2="48" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.18" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
              </linearGradient>

              {/* laptop body */}
              <rect x="12" y="14" width="40" height="26" rx="3.5" stroke="currentColor" strokeWidth="2.2" />
              <rect x="16" y="18" width="32" height="18" rx="2" fill="url(#screenGlow)" />

              {/* camera notch */}
              <circle cx="32" cy="18.5" r="0.9" fill="currentColor" />

              {/* play badge */}
              <circle cx="38.5" cy="27" r="6.2" fill="currentColor" fillOpacity="0.18" />
              <path d="M36.5 23.8v6.4l5.4-3.2-5.4-3.2Z" fill="currentColor" />

              {/* base */}
              <path d="M8 44h48" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <rect x="18" y="46" width="28" height="3" rx="1.2" fill="currentColor" />

              {/* Wi-Fi waves (gentle 'breathing' via animate-pulse on one arc) */}
              <path d="M22 33a10 10 0 0 1 20 0" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
              <path d="M25 33a7 7 0 0 1 14 0" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
              <path d="M28 33a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Online Classes</span>
          </a>
        </div>
      </div>
    </section>
  );
}
