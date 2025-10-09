import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


export default function ContactSection() {
  
  

  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [next, nextSet] = useState(false);

  // Toast state
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  // Timers
  const showTimer = useRef(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (showTimer.current) clearTimeout(showTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      // Do your submit work here (send to API/EmailJS, etc.)
      console.log("Submitting:", form);
      emailjs
        .send('service_6kw1xwv', 'template_bd38rm5', form, {
          publicKey: 'VgOJwTPtjEHwygoWU',
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
          console.log('FAILED...', err);
          },  
        );
      // Schedule: show after 3s
      setAlertText(`Thanks ${form.FirstName || ""}! Your message was submitted.`);
      if (showTimer.current) clearTimeout(showTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);

      showTimer.current = setTimeout(() => {
        setAlertVisible(true);

        // Hide after 3s, then navigate home
        hideTimer.current = setTimeout(() => {
          setAlertVisible(false);
          nextSet(true); // triggers <Navigate /> below
        }, 3000);
      }, 3000);
    } catch (err) {
      console.error(err);
      setAlertText("Something went wrong. Please try again.");

      setAlertVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        setAlertVisible(false);
        nextSet(true);
      }, 3000);
    }
  }

  if (next) return <Navigate to="/" replace />;

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      {/* Toast / Alert */}
      <div
        className={`pointer-events-auto fixed inset-x-0 bottom-6 mx-auto w-[92%] max-w-md transition-all duration-500
        ${alertVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} z-50`}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="rounded-xl border border-emerald-300 bg-white/90 backdrop-blur dark:bg-gray-900/90 px-4 py-3 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
            <div className="text-sm text-gray-800 dark:text-gray-100">
              <p style={{color: 'red'}}>{alertText || "Your message has been received."}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-12 mx-auto">
        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label htmlFor="FirstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  id="FirstName"
                  name="FirstName"
                  value={form.FirstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label htmlFor="LastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  id="LastName"
                  name="LastName"
                  value={form.LastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="Email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                id="Email"
                name="Email"
                value={form.Email}
                onChange={handleChange}
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="Message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="Message"
                name="Message"
                value={form.Message}
                onChange={handleChange}
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
