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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure tenetur commodi ipsam
          error voluptate magni. Adipisci repudiandae ullam commodi iusto reprehenderit suscipit
          facere voluptatem, eaque maiores minima. Neque, officiis.
        </p>

        {/* Buttons on one line with hover lift + shine */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          {/* Physical Classes */}
          <a
            href="#"
            className="btn-raise shine inline-flex items-center justify-center px-4 py-2.5 text-sm text-white bg-gray-900 rounded-lg shadow transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:bg-gray-800"
          >
            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M407,0H105C47.1,0,0,47.1,0,105v302c0,57.9,47.1,105,105,105h302c57.9,0,105-47.1,105-105V105C512,47.1,464.9,0,407,0z M482,407c0,41.4-33.6,75-75,75H105c-41.4,0-75-33.6-75-75V105c0-41.4,33.6-75,75-75h302c41.4,0,75,33.6,75,75V407z" />
              <path d="M305.6,123.5c-1.7-6.5-5.9-11.8-11.6-15.2c-11.9-6.9-27.3-2.8-34.2,9.2L256,124.2l-3.8-6.7c-6.9-11.9-22.2-16-34.2-9.2c-11.9,6.9-16,22.2-9.1,34.2l18.3,31.7L159.7,291H110.5c-13.8,0-25,11.2-25,25s11.2,25,25,25h189.9l-28.9-50h-54.1l85.7-148.5C306.5,136.7,307.4,129.9,305.6,123.5z" />
            </svg>
            <span>Physical Classes</span>
          </a>

          {/* Online Classes */}
          <a
            href="#"
            className="btn-raise shine inline-flex items-center justify-center px-4 py-2.5 text-sm text-white bg-blue-600 rounded-lg shadow transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2 fill-current"
              viewBox="-28 0 512 512.00075"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="m432.32 215.121-361.516-208.723c-14.777-8.531-32.422-8.531-47.203 0-14.176 8.637-22.621 23.594-22.621 40.27v417.445c0 17.066 8.824 32.348 23.602 40.879 7.39 4.266 15.496 6.398 23.602 6.398s16.215-2.133 23.602-6.398l361.52-208.723c14.777-8.531 23.602-23.812 23.602-40.879s-8.824-32.348-23.605-40.879z" />
            </svg>
            <span>Online Classes</span>
          </a>
        </div>
      </div>
    </section>
  );
}
