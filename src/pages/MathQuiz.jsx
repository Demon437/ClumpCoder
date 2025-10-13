import React from 'react';

export default function MathQuiz() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 max-w-7xl mx-auto text-gray-300 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#102a4a]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-blue-400 mb-10">
        Case Study: The Making of "Math Game" - A High‑Stakes Puzzle Sensation
      </h1>

      {/* Challenge */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Challenge: Standing Out in the Puzzle Genre
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          The app market is crowded. Our brief was to build a fast‑paced, number‑based puzzle that is
          engaging, polished, and truly entertaining—not an educational tool—appealing to puzzle and logic
          enthusiasts while competing with major titles.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Solution: A Blend of Logic, Speed, and Design
        </h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          We focused on three pillars: challenging gameplay, a rewarding progression system, and a clean
          minimalist design. Every feature enhances the core puzzle‑solving experience.
        </p>
      </section>

      {/* Product Deep Dive */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          Product Deep Dive: Features That Drive Player Engagement
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li><span className="font-semibold">Fast‑Paced Gameplay:</span> Time‑bound levels with number and logic puzzles foster a “one‑more‑round” loop.</li>
          <li><span className="font-semibold">Progressive Difficulty:</span> Hundreds of handcrafted levels with new mechanics introduced step‑by‑step.</li>
          <li><span className="font-semibold">Competitive Leaderboards:</span> Global rankings to challenge friends and the world.</li>
          <li><span className="font-semibold">Sleek, Minimalist Design:</span> Distraction‑free UI with smooth animations that highlight puzzles.</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">
          The Impact: A Niche Hit with a Devoted Following
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl">
          <li><span className="font-semibold">Exceptional Ratings:</span> 4.9‑star average across stores, praised for challenge and elegance.</li>
          <li><span className="font-semibold">Strong Retention:</span> D7 55% and D30 35%, above industry norms.</li>
          <li><span className="font-semibold">Word‑of‑Mouth Growth:</span> Traction in puzzle communities without intrusive ads.</li>
          <li><span className="font-semibold">Sustainable Monetization:</span> Cosmetic themes and hint packs, no disruptive ads.</li>
        </ul>
      </section>

      {/* Partnership & Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">The Partnership: A Blueprint for Success</h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          Built through close collaboration with the client’s creative team, we delivered a robust,
          scalable platform with a lightweight engine and cloud back end for leaderboards.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-5">Conclusion: Proving that Logic Sells</h2>
        <p className="leading-relaxed text-lg sm:text-xl italic">
          "Math Game" demonstrates how a unique concept, executed with precision and audience insight,
          can achieve outstanding results and set a new benchmark in the puzzle genre.
        </p>
      </section>
    </div>
  );
}


