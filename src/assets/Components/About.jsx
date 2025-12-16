import React from "react";

const About = () => {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Xavier TechByte Society
        </h2>

        <p className="text-lg md:text-xl text-blue-400 font-semibold mb-10">
          A community of builders, not just learners.
        </p>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed mb-20">
          Xavier TechByte Society is a student-led technology ecosystem focused on
          real-world learning, collaborative innovation, and hands-on building.
          We help students move beyond theory and transform ideas into working products
          through projects, workshops, and shared experiences.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empower students with practical skills, industry mindset,
              and confidence to build impactful technology solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Create a sustainable campus tech culture where innovation,
              creativity, and collaboration thrive.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              What We Build
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Real projects, tech workshops, hack-style events,
              peer mentoring, and product-focused learning.
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-20">
          <p className="text-xl font-semibold text-gray-200">
            Learn by building. Grow by sharing.
          </p>
          <p className="text-blue-400 font-bold mt-2">
            This is TechByte.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
