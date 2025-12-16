import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-6">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/src/assets/video - Made with Clipchamp_1765772098618.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Xavier TechByte Society
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
          Build • Learn • Innovate Together
        </p>

        <p className="text-gray-300 text-lg mb-8">
          A student-driven tech community focused on practical learning, real-world projects,
          and growing together in the world of technology.
          From beginners to builders — everyone belongs here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
            🚀 Join the Community
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition font-semibold">
            📅 Explore Events
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
