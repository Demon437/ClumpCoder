import React from 'react';

export default function ERPSystem() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white-400 mb-10">
        Case Study: Unifying Manufacturing Operations with a Custom ERP
      </h1>

      {/* Challenge */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Challenge: A Disconnected Manufacturing Floor
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          A leading industrial manufacturer struggled with siloed systems—production schedules in
          spreadsheets, inventory in another tool, and finance elsewhere—causing poor visibility,
          bottlenecks, and costly inefficiencies.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg sm:text-xl mt-4">
          <li><span className="font-semibold">Inefficient Production Planning:</span> Outdated scheduling and excess waste.</li>
          <li><span className="font-semibold">Inventory Mismanagement:</span> No real‑time tracking; overstocks and shortages.</li>
          <li><span className="font-semibold">Poor Quality Control:</span> Manual checks delayed defect detection.</li>
          <li><span className="font-semibold">Communication Silos:</span> Isolated departments slowed decision‑making.</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Solution: A Unified, Intelligent ERP System
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          We designed a custom ERP as a single source of truth, integrating core business functions into
          one powerful, cloud‑ready platform.
        </p>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          Product Deep Dive: Integrated Modules for a Smart Factory
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-lg sm:text-xl">
          <li><span className="font-semibold">Production Planning & Control:</span> Automated scheduling and real‑time visibility.</li>
          <li><span className="font-semibold">Inventory & Warehouse:</span> Real‑time tracking with automated reordering.</li>
          <li><span className="font-semibold">Supply Chain:</span> Supplier communication, shipment tracking, and demand forecasting.</li>
          <li><span className="font-semibold">Quality Management (QMS):</span> Automated checks and instant defect visibility.</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Impact: A Quantifiable Leap in Efficiency
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-lg sm:text-xl">
          <li><span className="font-semibold">Increased Productivity:</span> 25% boost and shorter lead times.</li>
          <li><span className="font-semibold">Optimized Inventory:</span> 20% reduction in carrying costs.</li>
          <li><span className="font-semibold">Enhanced Quality:</span> 30% reduction in defects.</li>
          <li><span className="font-semibold">Data‑Driven Decisions:</span> Real‑time insights enabling faster actions.</li>
        </ul>
      </section>

      {/* Partnership */}
      <section className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Partnership: Vision Meets Technical Execution
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          We delivered a robust, microservices‑based platform with an intuitive UI, ensuring high
          adoption and scalable growth.
        </p>
      </section>
    </div>
  );
}


