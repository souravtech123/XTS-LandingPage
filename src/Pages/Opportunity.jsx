import React from "react";

const Opportunity = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-24 flex items-center">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          🚀 Opportunities Loading
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Opportunities Coming Soon
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Internships, hackathons, open-source projects, workshops, and
          collaboration opportunities are on the way.
        </p>

        {/* Glass Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-xl mx-auto">
          <div className="flex justify-center mb-6 text-5xl">💡</div>

          <h2 className="text-2xl font-semibold mb-3">
            Nothing Live Right Now
          </h2>

          <p className="text-gray-400 mb-6">
            Our team is curating meaningful opportunities for you.  
            Updates will be available very soon.
          </p>

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 font-semibold hover:opacity-90 transition">
            Get Notified
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
