import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src={Logo}
              alt="Tech Minds Academy logo"
            />

            {/* Personalized ad copy */}
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Build your future in <strong>Web Development</strong> and <strong>Data Science</strong> at Tech Minds Academy—Abuja (Bwari) or online.
              Practical labs, real-world projects, mentor feedback, and payment plans designed to get you job-ready faster.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* X (formerly Twitter) */}
              <li>
                <a
                  href="#"
                  aria-label="Tech Minds on X"
                  title="Follow us on X"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M18.244 2H21l-6.51 7.44L22.5 22h-5.56l-4.35-5.82L7.5 22H3l6.93-7.92L1.5 2h5.64l4.01 5.41L18.244 2Zm-1.947 18h1.5L7.76 4h-1.5L16.297 20Z" />
                  </svg>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              {/* Instagram (modern outline) */}
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Programs</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Portfolio</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="mt-6 space-y-4">
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Admissions & Payment</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © {year} Tech Minds Academy. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
