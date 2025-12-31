import React from "react";

const UpEvent = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-24 flex items-center">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20">
          🚀 Updates Coming Soon
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Events Are On The Way
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          We’re preparing exciting workshops, hackathons, bootcamps, and tech
          talks for you. Stay tuned — big things are coming!
        </p>

        {/* Glass Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-xl mx-auto">
          <div className="flex justify-center mb-6 text-5xl">📅</div>

          <h2 className="text-2xl font-semibold mb-3">
            No Events Live Right Now
          </h2>

          <p className="text-gray-400 mb-6">
            Our team is working behind the scenes.  
            New events will be announced very soon.
          </p>

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold hover:opacity-90 transition">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpEvent;
