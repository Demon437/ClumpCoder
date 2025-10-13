import React from 'react';

export default function Eduacademy() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-blue-400 mb-10">
        Case Study: EDU Academy – The Future of School Management
      </h1>

      {/* The Challenge */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Challenge: A Digital Divide in Education
        </h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-lg sm:text-xl italic">
            Many institutions still rely on manual processes for admissions, fee collection, attendance,
            and record-keeping. Data is fragmented across spreadsheets and paper files, limiting
            visibility and slowing down decision-making. Communication between parents, teachers, and
            administrators remains inconsistent, creating operational inefficiencies and affecting the
            student experience.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Solution: A Unified, Intelligent Platform for a New Era
        </h2>
        <div className="space-y-6">
          <p className="leading-relaxed text-lg sm:text-xl italic">
            Eduacademy centralizes academic, administrative, and financial workflows into a single,
            secure platform. Built with scalability in mind, it streamlines daily operations, improves
            transparency, and enhances engagement across stakeholders with real-time insights and
            automated processes.
          </p>
        </div>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          Product Deep Dive: A Modular and User‑Centric Design
        </h2>
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-3 text-lg sm:text-xl">
            <li>
              <span className="font-semibold">Student Information System (SIS):</span> Unified student
              profiles with attendance, academics, and history in one place.
            </li>
            <li>
              <span className="font-semibold">Integrated Finance Module:</span> Fees, invoices, receipts,
              and reminders with secure online payments.
            </li>
            <li>
              <span className="font-semibold">Academic & Examination Management:</span> Curriculum,
              assignments, evaluations, and report cards—fully automated.
            </li>
            <li>
              <span className="font-semibold">Smart Communication:</span> Real-time announcements and
              messaging for parents, teachers, and administrators.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Impact: A Quantifiable Transformation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Operational Excellence:</span> Up to 40% reduction in
            administrative workload through automation.
          </li>
          <li>
            <span className="font-semibold">Stakeholder Engagement:</span> Real-time insights for parents and
            staff improve collaboration and outcomes.
          </li>
          <li>
            <span className="font-semibold">Data‑Driven Decisions:</span> Powerful reports inform strategy and
            resource planning.
          </li>
          <li>
            <span className="font-semibold">Scalable Growth:</span> Cloud-friendly architecture supports
            multi-campus expansion with ease.
          </li>
        </ul>
      </section>

      {/* Partnership */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Partnership: A Blueprint for Success
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          This transformation was delivered through a close collaboration between domain experts and our
          engineering team, leveraging modern cloud services and a microservices-first approach to ensure
          resilience, performance, and rapid feature delivery.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          Conclusion: A New Era of EdTech
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          Eduacademy empowers institutions with transparency and strategic insight while simplifying daily
          operations. Built to evolve with the changing landscape of education, it sets the stage for a
          connected, sustainable, and data-driven future.
        </p>
      </section>
    </div>
  );
}


