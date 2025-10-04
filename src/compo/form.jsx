import { useState } from "react";
import Mail from "../pages/Mail";
import emailjs from '@emailjs/browser';

import { Navigate } from "react-router-dom";
export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
    try{
      emailjs.send('service_89xjrbo', 'template_g7tg9y7', form, {
        publicKey: '-zu_AKLUGbGPnAvcb',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
      setSubmitted(true);
      // TODO: send form somewhere (fetch/axios)
      console.log("Submitting form:", form);
            // success → redirect


    }catch(err){




    }
  }
  if (next) return <Navigate to="/" replace />;


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        {/* ...left column unchanged... */}
        {submitted ? <Mail click={Click} /> : <br/>}

        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">

          <h1 style={{fontSize : '30px', textAlign: 'center', color: 'blue', textTransform: 'uppercase'}}>Send Us An Email and Hear from Us</h1><br /><br />
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"               // <-- added
                  value={form.firstName}
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
                  id="lastName"
                  name="lastName"                // <-- added
                  value={form.lastName}
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
                id="email"
                name="email"                    // <-- added
                value={form.email}
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
                id="message"
                name="message"                  // <-- added
                value={form.message}
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
