import React, { useState } from "react";

function Application({ onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    course: "",
    accept: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Course options shown in the select
  const courseOptions = [
    "Web Development",
    "App Development",
    "Cloud Computing",
    "Coding for Kids",
    "Data Science",
  ];

  const validators = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name."),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v) ? "" : "Enter a valid email.",
    country: (v) => (v.trim() ? "" : "Country is required."),
    phone: (v) =>
      /^\+?\d[\d\s()-]{6,}$/.test(v) ? "" : "Enter a valid phone number.",
    course: (v) => (v ? "" : "Please select a course."),
    accept: (v) => (v ? "" : "You must accept the terms."),
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const next = { ...values, [name]: type === "checkbox" ? checked : value };
    setValues(next);
    if (validators[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](next[name]) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = Object.fromEntries(
      Object.entries(validators).map(([k, fn]) => [k, fn(values[k])])
    );
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    try {
      setSubmitting(true);
      if (typeof onSubmit === "function") {
        await onSubmit(values);
      } else {
        // demo fallback
        await new Promise((r) => setTimeout(r, 900));
        console.log("Application submitted:", values);
      }
      setSent(true);
      setValues({
        name: "",
        email: "",
        country: "",
        phone: "",
        course: "",
        accept: false,
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setSent(false), 3500);
    }
  };

  const inputBase =
    "block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 dark:text-slate-100 bg-transparent border rounded-full placeholder-gray-400 focus:outline-none transition";
  const borderOk = "border-gray-300 focus:border-indigo-500";
  const borderErr = "border-red-400 focus:border-red-500";

  return (
    <section className="py-8">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Apply in Minutes
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
           We’ll follow up with next steps.
        </p>

        {sent && (
          <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            ✅ Application received! We’ll reach out shortly.
          </div>
        )}

        <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="mb-2 flex items-center text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Name
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
              </svg>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="ml-1 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V20.1429C20 19.0805 20 18.5493 19.8997 18.1099C19.5578 16.6119 18.3881 15.4422 16.8901 15.1003C16.4507 15 15.9195 15 14.8571 15H10C8.13623 15 7.20435 15 6.46927 15.3045C5.48915 15.7105 4.71046 16.4892 4.30448 17.4693C4 18.2044 4 19.1362 4 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className={`${inputBase} ${errors.name ? borderErr : borderOk}`}
                placeholder="Enter Name"
              />
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="mb-2 flex items-center text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Email
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
              </svg>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="ml-1 stroke-current" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3.54887 6.73325L7.76737 9.36216C9.82591 10.645 10.8552 11.2864 11.9999 11.2863C13.1446 11.2861 14.1737 10.6443 16.2318 9.36081L20.4611 6.72333M11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className={`${inputBase} ${errors.email ? borderErr : borderOk}`}
                placeholder="Enter Email"
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Country */}
          <div className="relative">
            <label
              htmlFor="country"
              className="mb-2 flex items-center text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Country
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
              </svg>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" fill="none" height="20" viewBox="0 0 448 512">
                  <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24z" fill="currentColor"/>
                </svg>
              </div>
              <input
                id="country"
                name="country"
                type="text"
                value={values.country}
                onChange={handleChange}
                aria-invalid={!!errors.country}
                className={`${inputBase} ${errors.country ? borderErr : borderOk}`}
                placeholder="Enter Country"
              />
            </div>
            {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="mb-2 flex items-center text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Phone Number
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
              </svg>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="ml-1 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5.02623 10.2611L12.7387 17.9736C14.4091 19.6439 17.1173 19.6439 18.7877 17.9736C19.4559 17.3054 19.4559 16.2221 18.7877 15.554L16.6454 13.4116C16.1582 12.9244 15.3683 12.9244 14.8811 13.4116C14.3939 13.8988 13.604 13.8988 13.1168 13.4116L9.23534 9.53015C8.74814 9.04295 8.74814 8.25305 9.23534 7.76585C9.72253 7.27865 9.72253 6.48875 9.23534 6.00155L7.44584 4.21205C6.77768 3.5439 5.69439 3.5439 5.02623 4.21205C3.35584 5.88244 3.35584 8.59067 5.02623 10.2611Z" strokeWidth="1.6"/>
                </svg>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                className={`${inputBase} ${errors.phone ? borderErr : borderOk}`}
                placeholder="Enter Phone No"
              />
            </div>
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>

          {/* Course */}
          <div className="relative">
            <label
              htmlFor="course"
              className="mb-2 flex items-center text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Course
              <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"/>
              </svg>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M20 5H7.5C5.567 5 4 6.567 4 8.5V19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <select
                id="course"
                name="course"
                value={values.course}
                onChange={handleChange}
                aria-invalid={!!errors.course}
                className={`${inputBase} pr-10 ${errors.course ? borderErr : borderOk}`}
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courseOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              id="accept"
              name="accept"
              type="checkbox"
              checked={values.accept}
              onChange={handleChange}
              className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 hover:border-indigo-500 hover:bg-indigo-100 checked:border-indigo-500 checked:bg-indigo-100"
            />
            <label htmlFor="accept" className="text-sm text-gray-600 dark:text-slate-300">
              I accept{" "}
              <a href="#" className="font-medium text-indigo-600 hover:underline">
                terms &amp; conditions
              </a>
              .
            </label>
          </div>
          {errors.accept && <p className="text-xs text-red-600">{errors.accept}</p>}

          {/* Submit */}
          <div className="flex items-center justify-center pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="flex h-12 w-52 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold leading-7 shadow-sm transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Application;
