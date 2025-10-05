

const KidsRes = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Coding for Kids — the Tech Minds way
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Fun, safe, and hands-on. Kids build games, stories, and mini-apps with friendly mentors — on campus in <strong>Abuja (Bwari)</strong> or live online.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* 1 */}
          <div className="md:p-8 lg:p-14">
            <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
              <path d="M23 1C10.85 1 1 10.85 1 23v6" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M45 29V23C45 10.85 35.15 1 23 1" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 29H2v12a4 4 0 0 0 4 4h8V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M44 29H32v16h8a4 4 0 0 0 4-4V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Play to Learn</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We start with playful logic and visual coding so beginners feel confident from day one.
            </p>
          </div>

          {/* 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
              <path d="M27 27H19v18h8V27Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 37H1v8h8v-8Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M45 17h-8v28h8V17Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 17l10-10 8 8L37 1" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 1h9v9" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Mentor Magic</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Patient, background-checked mentors guide every session and celebrate every milestone.
            </p>
          </div>

          {/* 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M41 1H1v40h40V1Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 24c-3.9 0-7 3.1-7 7h14c0-3.9-3.1-7-7-7Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2"/>
              <circle cx="21" cy="16" r="5" stroke="#161616" strokeWidth="2"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Small, Safe Groups</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Tiny cohorts and kid-safe tools so every child feels seen, heard, and supported.
            </p>
          </div>

          {/* 4 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M37 1H5a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10"/>
              <path d="M4 10l17 10L38 10" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="9" y="28" width="24" height="6" rx="2" fill="#D4D4D8"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Parent Updates</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Clear weekly progress notes and demo invites — stay close to your child’s journey.
            </p>
          </div>

          {/* 5 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg className="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" aria-hidden="true">
              <path d="M23 33l-8.56-8.684A6.98 6.98 0 0 1 14 21.01c0-1.318.516-2.584 1.438-3.526.511-.522 1.133-.922 1.82-1.17a6.01 6.01 0 0 1 6.192 1.17 6.01 6.01 0 0 1 6.192-1.17c.687.248 1.309.647 1.82 1.17A4.99 4.99 0 0 1 33 21.01c0 1.318-.516 2.584-1.438 3.526L23 33Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M41 41H5a4 4 0 0 1-4-4V1h16l5 8h23v28a4 4 0 0 1-4 4Z" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Creative Tools</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Scratch, Roblox Studio, HTML/CSS, and Python Turtle — age-fit tools that spark imagination.
            </p>
          </div>

          {/* 6 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg className="mx-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <path d="M25 7c9.941 0 18 8.059 18 18S34.941 43 25 43 7 34.941 7 25" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 1C9.059 1 1 9.059 1 19h18V1Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Real Results</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Kids present work to family & friends, earn certificates, and build confidence with every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsRes;
