import "./cta.css"



export default function BusinessCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 altcta">
      {/* === Background layers === */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* 1) Dotted micro-pattern */}
        <div className="absolute inset-0 altcta-dots" />

        {/* 2) Slow diagonal sheen */}
        <div className="absolute inset-0 altcta-sheen" />

        {/* 3) Breathing conic halo behind headline */}
        <div className="absolute inset-x-0 -top-24 flex justify-center">
          <div className="altcta-halo" />
        </div>
      </div>

      {/* === Content === */}
      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Bring your Value to the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Next Level.
          </span>
        </h2>

        <p className="mx-auto max-w-4xl mt-6 text-gray-600 dark:text-gray-300">
          Join Techminds Academy and transform your passion for technology into a successful career.
          Learn from industry experts and build the future with cutting-edge skills.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-white shadow-sm ring-1 ring-black/5 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <span className="relative">
              Join Us Now
              {/* subtle button shine on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-xl altcta-btn-shine group-hover:opacity-100" />
            </span>
          </button>

          <a
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 dark:text-gray-200 dark:ring-white/15 dark:hover:bg-white/5"
          >
            Learn more
          </a>
        </div>

        {/* Tiny foot caption to show uniqueness */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          LEARN WITH THE GEEKS
        </p>
      </div>
    </section>
  );
}
