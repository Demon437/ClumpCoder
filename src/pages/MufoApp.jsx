import React from 'react';

export default function MufoApp() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white-400 mb-10">
        Case Study: The Rise of "mufo" - A Next‑Generation Mobile Gaming Experience
      </h1>

      {/* Challenge */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Challenge: Elevating the Mobile Gaming Standard
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          With players demanding console‑quality graphics, deep gameplay, and persistent worlds, the goal
          for "mufo" was to build a visually stunning, technically robust, and endlessly engaging title
          capable of standing out in a fiercely competitive market.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Solution: Building a Living, Breathing World
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          We partnered closely with the studio to create a high‑fidelity, fantasy‑themed adventure built
          on a scalable live‑services model. The experience blends deep lore with intuitive gameplay and
          community‑driven features, designed for longevity.
        </p>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          Product Deep Dive: Features That Define the Experience
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li><span className="font-semibold">Dynamic Open World:</span> Vast, seamless regions with stunning environments and mythical creatures.</li>
          <li><span className="font-semibold">Rich Character Customization:</span> Classes, races, skill trees, crafting, and progression.</li>
          <li><span className="font-semibold">Integrated Social & Guild Systems:</span> Co‑op raids, PvP battles, and strong community tools.</li>
          <li><span className="font-semibold">Live Service Model:</span> Seasonal updates with new quests, characters, and events.</li>
          <li><span className="font-semibold">High‑Fidelity Graphics:</span> Console‑level visuals, cinematic cutscenes, and realistic lighting.</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Impact: A New Benchmark for Mobile Gaming
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li><span className="font-semibold">Massive User Adoption:</span> 20M+ downloads within the first months.</li>
          <li><span className="font-semibold">Exceptional Retention:</span> Day‑7 60% and Day‑30 40%.</li>
          <li><span className="font-semibold">Thriving Community:</span> Active Discord and Reddit groups with fan‑driven lore.</li>
          <li><span className="font-semibold">Financial Success:</span> Player‑friendly monetization (cosmetics + battle passes).</li>
        </ul>
      </section>

      {/* Partnership & Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">The Partnership: A Blueprint for Success</h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          Close collaboration plus dedicated servers, scalable infrastructure, and rigorous QA enabled a
          polished, lag‑free launch.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">Conclusion: A New Era of Immersive Mobile Experiences</h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          "mufo" proves console‑quality gaming is possible on mobile—setting a new benchmark and
          captivating millions.
        </p>
      </section>
    </div>
  );
}


