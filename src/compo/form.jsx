import { useState } from "react";
import Mail from "../pages/Mail";


import { Navigate } from "react-router-dom";
export default function ContactSection() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [next, nextSet] = useState(false);

  
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function Click(){
    nextSet(true)
    console.log('Clicked')
  }

  function handleSubmit(e) {
    e.preventDefault();

  }
  if (next) return <Navigate to="/" replace />;


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        {/* ...left column unchanged... */}
        {submitted ? <Mail click={Click} /> : <br/>}

        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">


          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  id="FirstName"
                  name="FirstName"               // <-- added
                  value={form.FirstName}
                  onChange={handleChange}        // <-- fixed
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  id="LastName"
                  name="LastName"                // <-- added
                  value={form.LastName}
                  onChange={handleChange}        // <-- fixed
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                id="Email"
                name="Email"                    // <-- added
                value={form.Email}
                onChange={handleChange}         // <-- fixed
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="Message"
                name="Message"                  // <-- added
                value={form.Message}
                onChange={handleChange}         // <-- fixed
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
