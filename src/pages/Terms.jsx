import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-6 sm:px-12 lg:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Please read these terms carefully before using Tech Minds Academy’s
            website and services.
          </p>
        </header>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Tech Minds Academy</span>.
            By accessing or using our website, registering for courses, or
            participating in our programs, you agree to abide by the following
            Terms and Conditions. These terms apply to all visitors, students,
            and partners of Tech Minds Academy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            2. Use of Our Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website and learning platforms are intended solely for
            educational purposes. You agree not to use Tech Minds Academy’s
            services for any unlawful or unauthorized purpose, including but not
            limited to hacking, distributing malicious content, or violating
            applicable laws in Nigeria or your local jurisdiction.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All materials, including course content, videos, images, logos, and
            documentation provided by Tech Minds Academy, are the exclusive
            property of the Academy. You may not reproduce, redistribute, or
            commercially exploit any content without prior written consent.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            4. Enrollment and Payments
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Enrolling in a course signifies your commitment to complete the
            program and respect our payment policies. Fees once paid are
            non-refundable, except in special cases approved by management.
            Tech Minds Academy reserves the right to modify tuition fees or
            course structures at any time.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            5. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Provide accurate and up-to-date information during registration.</li>
            <li>Respect instructors, staff, and fellow students.</li>
            <li>Avoid sharing your login credentials or course materials publicly.</li>
            <li>Comply with all Academy rules and code of conduct.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            6. Privacy and Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy. Personal data collected during registration
            or participation is used strictly for academic, administrative, or
            communication purposes. Tech Minds Academy will never sell or
            disclose your data to third parties without consent.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tech Minds Academy is not liable for any indirect, incidental, or
            consequential damages arising from your use of our services. We
            strive to maintain an uninterrupted and secure experience but cannot
            guarantee absolute uptime or freedom from technical errors.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            8. Updates to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms periodically to reflect new regulations or
            internal policies. Any changes will be posted on this page with the
            updated revision date.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions about these Terms, please contact us at:
          </p>
          <p className="mt-3 font-semibold text-blue-700">
            Tech Minds Academy Bwari, Abuja, Nigeria <br />
            Email: <a href="mailto:info@techmindsacademy.org" className="underline">info@techmindsacademy.org</a> <br />
            Website: <a href="https://techmindsacademy.org" className="underline">www.techmindsacademy.org</a>
            
          </p>
        </section>


      </div>
    </main>
  );
}
