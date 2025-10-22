import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Down from "../compo/Applycarousel";
function Application({ onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    country: "",
    state: "",          // ⬅️ NEW: state/region
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
    "Digital Marketing",
  ];

  // Nigerian states + FCT
  const STATE_OPTIONS_NG = [
    "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
    "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa",
    "Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger",
    "Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara",
    "Federal Capital Territory (FCT)"
  ];

  const validators = {
    name:   (v) => (v.trim().length >= 2 ? "" : "Please enter your full name."),
    email:  (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v) ? "" : "Enter a valid email."),
    country:(v) => (v.trim() ? "" : "Country is required."),
    state:  (v) => (v.trim() ? "" : "State/Region is required."), // ⬅️ NEW
    phone:  (v) => (/^\+?\d[\d\s()-]{6,}$/.test(v) ? "" : "Enter a valid phone number."),
    course: (v) => (v ? "" : "Please select a course."),
    accept: (v) => (v ? "" : "You must accept the terms."),
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const next = { ...values, [name]: type === "checkbox" ? checked : value };

    // If country changes away from Nigeria, keep existing state text;
    // If country becomes Nigeria and current state isn't in list, reset it.
    if (name === "country") {
      const isNigeria = value.trim().toLowerCase() === "nigeria";
      if (isNigeria === true) {
        // if already a valid NG state keep it; else empty
        if (!STATE_OPTIONS_NG.includes(values.state)) next.state = "";
      }
    }

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
        await onSubmit(values); // ⬅️ includes values.state
      } else {
        await new Promise((r) => setTimeout(r, 900));
        console.log(values)
        try{
          emailjs
            .send('service_3bddktl', 'template_hvo9ver', values, {
              publicKey: 'wmFyPdhB_TEULscHH',
            })
            .then(
              (response) => {
                console.log('SUCCESS!', response.status, response.text);
              },
              (err) => {
                console.log('FAILED...', err);
              },
            );

        }catch(err){
            console.log(err)
        }
        console.log("Application submitted:", values); // ⬅️ logs state too
      }
      setSent(true);
      setValues({
        name: "",
        email: "",
        country: "",
        state: "",   // ⬅️ reset
        phone: "",
        course: "",
        accept: false,
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setSent(false), 3500);
    }
  };

  // --- UI tokens (switched to emerald/green)
  const inputBase =
    "block w-full h-11 pr-4 pl-12 py-2.5 text-base font-normal text-gray-900 dark:text-slate-100 bg-white/70 dark:bg-slate-900/70 border rounded-xl placeholder-gray-400 focus:outline-none transition";
  const ok =
    "border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30";
  const err =
    "border-red-400 hover:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/30";

  const labelCls =
    "mb-2 flex items-center text-sm font-medium text-slate-700 dark:text-slate-300";
  const iconWrap =
    "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400";

  const isNigeria = values.country.trim().toLowerCase() === "nigeria";

  return (
    <section className="py-8">
      <Down />  
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Quick Application
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Tell us a few details—{" "}
              <span className="font-medium">we’ll reach out with next steps.</span>
            </p>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            Safe & private
          </div>
        </div>

        {/* Success toast */}
        {sent && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 flex items-center gap-3 rounded-xl border border-blue-300 bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:border-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7L10 17l-6-6" />
            </svg>
            Application received! We’ll contact you soon.
          </div>
        )}

        <form className="mt-6 grid grid-cols-1 gap-5" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className={labelCls}>
              Full Name
              <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                Required
              </span>
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg className="ml-1 stroke-current" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-1c0-1.1 0-1.65-.1-2.09a4 4 0 0 0-3.01-3.01C16.45 14.01 15.92 14 14.86 14H10c-1.86 0-2.79 0-3.53.31a4 4 0 0 0-2.17 2.17C4 17.21 4 18.14 4 20.01V21" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="4" strokeWidth="1.6"/>
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
                className={`${inputBase} ${errors.name ? err : ok}`}
                placeholder="e.g., John T. Adewale"
              />
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className={labelCls}>Email Address</label>
            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg className="ml-1 stroke-current" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4z" strokeWidth="1.6" />
                  <path d="M4 7l8 6 8-6" strokeWidth="1.6" />
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
                className={`${inputBase} ${errors.email ? err : ok}`}
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-1 flex items-center justify-between">
              {errors.email ? (
                <p className="text-xs text-red-600">{errors.email}</p>
              ) : (
                <p className="text-xs text-slate-500 dark:text-slate-400">We’ll only email about your application.</p>
              )}
            </div>
          </div>

          {/* Country */}
          <div className="relative">
            <label htmlFor="country" className={labelCls}>Country</label>
            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg width="22" height="22" viewBox="0 0 24 24" className="ml-1" fill="none" stroke="currentColor">
                  <path d="M12 2a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 2Z" strokeWidth="1.6"/>
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20" strokeWidth="1.2" />
                </svg>
              </div>
              <input
                id="country"
                name="country"
                type="text"
                value={values.country}
                onChange={handleChange}
                aria-invalid={!!errors.country}
                className={`${inputBase} ${errors.country ? err : ok}`}
                placeholder="e.g., Nigeria"
              />
            </div>
            {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
          </div>

          {/* State / Region (dynamic) */}
          <div className="relative">
            <label htmlFor="state" className={labelCls}>
              {isNigeria ? "State (Nigeria)" : "State / Region"}
              <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                Required
              </span>
            </label>

            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg className="ml-1 stroke-current" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {isNigeria ? (
                <select
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  aria-invalid={!!errors.state}
                  className={`${inputBase} pr-10 ${errors.state ? err : ok}`}
                >
                  <option value="" disabled>Select a state</option>
                  {STATE_OPTIONS_NG.map((s) => (
                    <option key={s} value={s} className="text-slate-900">{s}</option>
                  ))}
                </select>
              ) : (
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={values.state}
                  onChange={handleChange}
                  aria-invalid={!!errors.state}
                  className={`${inputBase} ${errors.state ? err : ok}`}
                  placeholder="e.g., Lagos / Texas / Onatario"
                />
              )}
            </div>
            {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className={labelCls}>Phone Number</label>
            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg className="ml-1 stroke-current" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5l2 2c.5.5.5 1.3 0 1.8l-.7.7a2 2 0 0 0 0 2.8l5.4 5.4a2 2 0 0 0 2.8 0l.7-.7c.5-.5 1.3-.5 1.8 0l2 2" strokeWidth="1.6" strokeLinecap="round"/>
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
                className={`${inputBase} ${errors.phone ? err : ok}`}
                placeholder="+234 801 234 5678"
              />
            </div>
            {errors.phone ? (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            ) : (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Include country code if outside Nigeria.</p>
            )}
          </div>

          {/* Course */}
          <div className="relative">
            <label htmlFor="course" className={labelCls}>Course</label>
            <div className="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-white">
              <div className={iconWrap}>
                <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M20 5H7.5C5.6 5 4 6.6 4 8.5V19.5" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <select
                id="course"
                name="course"
                value={values.course}
                onChange={handleChange}
                aria-invalid={!!errors.course}
                className={`${inputBase} pr-10 ${errors.course ? err : ok}`}
              >
                <option value="" disabled>Select a course</option>
                {courseOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-slate-900">{opt}</option>
                ))}
              </select>
            </div>
            {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
          </div>

          {/* Terms — custom checkbox with GREEN checkmark */}
          <div className="relative">
            <label htmlFor="accept" className="group flex cursor-pointer items-start gap-3">
              <input
                id="accept"
                name="accept"
                type="checkbox"
                checked={values.accept}
                onChange={handleChange}
                aria-invalid={!!errors.accept}
                aria-describedby="accept-help"
                className="peer sr-only"
              />
              <span
                className={[
                  "relative mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md",
                  "border border-slate-300 bg-white shadow-sm dark:border-slate-700/70 dark:bg-slate-800",
                  "transition-all duration-300 group-hover:border-blue-400",
                  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-500 peer-focus-visible:outline-offset-2",
                  "peer-checked:border-blue-600 peer-checked:shadow-[0_0_0_4px_rgba(16,185,129,0.15)]",
                  errors.accept ? "ring-1 ring-red-400/70" : "",
                ].join(" ")}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={[
                    "h-4 w-4 text-blue-600 dark:text-blue-400",
                    "transition-transform duration-300",
                    "peer-checked:scale-100 peer-checked:opacity-100",
                    "scale-75 opacity-0",
                  ].join(" ")}
                  aria-hidden
                >
                  <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300",
                    "peer-checked:opacity-100",
                    "bg-[radial-gradient(120%_120%_at_0%_0%,_rgba(16,185,129,0.08)_0%,_transparent_60%)]",
                  ].join(" ")}
                />
              </span>

              <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                I agree to the{" "}
                <Link to="/terms" className="font-semibold text-blue-700 underline-offset-2 hover:underline dark:text-blue-400">
                  Terms &amp; Conditions
                </Link>{" "}
                and consent to be contacted about my application.
                <span className="ml-2 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                  Required
                </span>
              </span>
            </label>

            <p id="accept-help" className={["mt-2 text-xs", errors.accept ? "text-red-600" : "text-slate-500 dark:text-slate-400"].join(" ")}>
              {errors.accept ? errors.accept : "We never share your details without permission."}
            </p>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-center pt-1">
            <button
              type="submit"
              disabled={submitting}
              className={[
                "inline-flex h-12 w-56 items-center justify-center rounded-full",
                "bg-blue-600 text-white text-base font-semibold leading-7 shadow-sm transition-all duration-300",
                "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                "disabled:cursor-not-allowed disabled:opacity-60",
              ].join(" ")}
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3a9 9 0 1 1-9 9" />
                  </svg>
                  Submitting…
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>

          <p className="mx-auto max-w-lg text-center text-[12px] text-slate-500 dark:text-slate-400">
            By submitting, you agree to be contacted about admission. You can opt out anytime.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Application;
