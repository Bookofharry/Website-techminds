import "./skill.css";
import image from "../assets/join.jpg";

export default function HeroSplit() {
  return (
    <section className="hsplit relative overflow-hidden bg-white dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      {/* === Animated background (white-first design) === */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* 1) Breathing conic halo centered between columns */}
        <div className="hsplit-halo" />

        {/* 2) Thin diagonal sweep */}
        <div className="hsplit-sheen" />

        {/* 3) A couple of drifting pills */}
        <div className="hsplit-pill hsplit-pill-a" />
        <div className="hsplit-pill hsplit-pill-b" />
      </div>

      <div className="relative overflow-hidden bg-white/90 dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        {/* Image side */}
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        {/* Content side */}
        <div className="relative max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
            Build Your New <span className="text-blue-600">Idea</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Turn that spark into something real. At Tech Minds Academy, you’ll learn the modern tools,
            gain hands-on experience, and get mentorship that shortens your learning curve. From your
            first wireframe to your first deployed app, we’re with you—step by step.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
