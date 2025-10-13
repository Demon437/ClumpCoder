import React from 'react';

export default function WQInvoiceApp() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-blue-400 mb-10">
        Case Study: WQ: Easy Invoice App
      </h1>

      {/* Overview */}
      <section className="mb-12">
        <p className="leading-relaxed text-lg sm:text-xl italic">
          Stop wasting time on manual invoicing and tedious order paperwork. WQ: Easy Invoice App is an
          all‑in‑one solution engineered to automate and streamline your financial documentation on
          Shopify. Every invoice, draft order, and receipt is professional, timely, and perfectly aligned
          with your brand.
        </p>
      </section>

      {/* Comprehensive Functionality */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">Comprehensive Functionality</h2>
        <ul className="list-disc pl-6 space-y-6 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Professional PDF Invoices & Draft Orders:</span>
            <p className="mt-2">
              Generate and send polished, high‑quality PDF documents that reflect your brand’s
              professionalism. Supports invoices for standard orders and draft orders for quotes,
              wholesale transactions, or custom requests.
            </p>
          </li>
          <li>
            <span className="font-semibold">Automated & Instant Delivery:</span>
            <p className="mt-2">
              Set rules to automatically create and email invoices the moment an order is created, paid,
              or fulfilled. Customers receive documents instantly, improving their post‑purchase
              experience and reducing support inquiries.
            </p>
          </li>
          <li>
            <span className="font-semibold">Advanced Customization for Brand Consistency:</span>
            <p className="mt-2">
              Add your logo, store details, custom messages, and policies right on the invoice. Our
              template editor gives you full control to keep every customer touchpoint on‑brand.
            </p>
          </li>
          <li>
            <span className="font-semibold">Efficient Bulk Operations for Scale:</span>
            <p className="mt-2">
              Select multiple orders by date range or status, then bulk print or export for bookkeeping
              and shipping. Built for high‑volume workflows.
            </p>
          </li>
        </ul>
      </section>

      {/* Why Choose */}
      <section className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">Why Choose WQ: Easy Invoice App?</h2>
        <ul className="list-disc pl-6 space-y-6 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Simple Setup, No Coding Required:</span>
            <p className="mt-2">Start generating professional invoices within minutes using a friendly UI.</p>
          </li>
          <li>
            <span className="font-semibold">Robust & Reliable:</span>
            <p className="mt-2">Designed for stores of all sizes, from startups to enterprises with thousands of orders.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}


