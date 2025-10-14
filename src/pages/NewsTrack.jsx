import React from 'react';

export default function NewsTrack() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white-400 mb-6">
        Case Study: The Making of "NewsTrack" – A Modern News Experience
      </h1>

      {/* App Overview */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-4">NewsTrack</h2>
        <p className="leading-relaxed text-lg sm:text-xl mb-4">
          Stay informed with real-time news coverage and in-depth stories from trusted sources.
          NewsTrack delivers top headlines, breaking news, and exclusive interviews in a clean, responsive,
          and easy-to-navigate interface—designed for modern news enthusiasts who value speed and credibility.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">The Challenge: Delivering Real-Time News with Credibility</h3>
        <p className="leading-relaxed text-lg sm:text-xl">
          In today’s digital landscape, news apps compete for attention in a world driven by speed and short attention spans.
          The challenge was to create a platform that not only provides breaking updates instantly but also maintains credibility,
          readability, and trustworthiness—without overwhelming users.
        </p>
      </section>

      {/* The Solution */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">The Solution: Fast, Clean, and User-Focused</h3>
        <p className="leading-relaxed text-lg sm:text-xl mb-6">
          We built NewsTrack with a focus on three pillars:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Speed</span> — optimized loading and live update features ensure users never miss breaking stories.
          </li>
          <li>
            <span className="font-semibold">Clarity</span> — a minimal and elegant layout that keeps focus on content, not clutter.
          </li>
          <li>
            <span className="font-semibold">Trust</span> — integration with reliable sources and editorial highlights to maintain authenticity.
          </li>
        </ul>
        <p className="leading-relaxed text-lg sm:text-xl mt-6">
          The design blends visual hierarchy with smooth navigation to make browsing news effortless and enjoyable.
        </p>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-3">Product Deep Dive: Features That Keep Users Engaged</h3>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li>
            <span className="font-semibold">Real-Time Updates</span> — instant story refresh powered by dynamic data fetching.
          </li>
          <li>
            <span className="font-semibold">Category Filtering</span> — users can explore politics, entertainment, tech, and sports effortlessly.
          </li>
          <li>
            <span className="font-semibold">Clean UI/UX</span> — dark and light modes enhance reading comfort.
          </li>
          <li>
            <span className="font-semibold">Responsive Design</span> — seamless experience across mobile, tablet, and desktop.
          </li>
        </ul>
      </section>
    </div>
  );
}


