import React from 'react';

export default function ICICIBank() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white-400 mb-6">
        Case Study: The Making of "ICICI Bank App" – Simplifying Digital Finance
      </h1>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-4">ICICI Bank – Smart Finance Platform</h2>
        <p className="leading-relaxed text-lg sm:text-xl mb-4">
          A modern web application designed for ICICI Bank to simplify investments and loans. From SIP planning to home,
          car, and education loans—users can manage their financial goals seamlessly. Our team focused on building an
          intuitive front-end with secure API integration and real-time data handling.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">The Challenge: Building Trust Through Seamless Digital Banking</h3>
        <p className="leading-relaxed text-lg sm:text-xl">
          The goal was to create a platform for ICICI Bank that simplifies how customers invest and borrow—covering everything
          from SIP planning to home, car, and education loans.
        </p>
        <p className="leading-relaxed text-lg sm:text-xl mt-4">
          The main challenge: balancing complexity and clarity. Financial apps must handle sensitive data, multiple workflows,
          and strict security — all while keeping the experience fast, simple, and reliable for users.
        </p>
        <p className="leading-relaxed text-lg sm:text-xl mt-4">
          Our task was to design and build the frontend experience that could manage these diverse financial services with an
          intuitive interface and smooth backend connectivity.
        </p>
      </section>

      {/* The Solution */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">The Solution: A Secure, User-First Experience</h3>
        <p className="leading-relaxed text-lg sm:text-xl mb-6">
          We focused on delivering a modern, responsive, and secure frontend application that brings together all ICICI Bank’s
          major services in one place. Our approach was built on three pillars:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Smooth Experience:</span> Clean navigation from login and sign-up to SIP and loan management.
          </li>
          <li>
            <span className="font-semibold">Robust Security:</span> Token-based authentication for every API request to protect user data.
          </li>
          <li>
            <span className="font-semibold">Modern Design:</span> Consistent visuals aligned with ICICI Bank’s professional brand identity.
          </li>
        </ul>
        <p className="leading-relaxed text-lg sm:text-xl mt-6">
          The app offers users the ability to plan their finances easily — whether it’s investing in SIPs, checking loan eligibility,
          or tracking EMIs — all from a single, connected dashboard.
        </p>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">Product Deep Dive: Features That Empower Customers</h3>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">SIP & Loan Management</span> – allows users to calculate, compare, and apply for various financial products.
          </li>
          <li>
            <span className="font-semibold">Token-Based Authentication</span> – ensures secure data exchange between frontend and backend.
          </li>
          <li>
            <span className="font-semibold">Intuitive UI Flow</span> – streamlined interfaces for onboarding, dashboards, and transaction tracking.
          </li>
          <li>
            <span className="font-semibold">API Integration</span> – real-time financial updates and dynamic form validation.
          </li>
          <li>
            <span className="font-semibold">Responsive Frontend Design</span> – smooth performance across devices for both customers and admins.
          </li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">The Impact</h3>
        <p className="leading-relaxed text-lg sm:text-xl">
          The ICICI Bank app provides users with a transparent and effortless financial experience—bridging the gap between
          complex financial services and everyday accessibility. It showcases how design, security, and technology can come
          together to make digital banking smarter and simpler.
        </p>
      </section>
    </div>
  );
}


