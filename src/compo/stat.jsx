import React from "react";

const Numbers = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our impact in numbers
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-700 md:mt-8">
            Tech Minds Academy—Abuja (Bwari)
            <br />
            Mentor-led, project-based training in{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800 opacity-75">
              DIGITAL
            </span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800 opacity-75">
              TECHNOLOGY
            </span>
            . <br /> Here’s a quick snapshot of our progress.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {/* Years */}
          <div className="group">
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                2+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Years of training</p>
            <p className="text-base mt-0.5 text-gray-500">Consistent, Mentor-led Cohorts</p>
          </div>

          {/* Projects */}
          <div className="group">
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                119+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Portfolio projects shipped</p>
            <p className="text-base mt-0.5 text-gray-500">Web apps, APIs & data pipelines</p>
          </div>

          {/* Learners */}
          <div className="group">
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                437+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Learners trained</p>
            <p className="text-base mt-0.5 text-gray-500">On campus in Abuja (Bwari) & Online</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
