import React from "react";

const UpcomingEvents = () => {
  return (
    <section
      className="
        relative py-36 px-6
        bg-gradient-to-b
        from-[#0B1020]
        via-[#0E1428]
        to-[#090D1A]
      "
    >
      {/* Subtle cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
          Upcoming Events
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl">
          We’re currently planning our next set of events.  
          Details will be updated here soon.
        </p>

        {/* Divider */}
        <div className="mt-16 flex justify-center">
          <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm text-gray-500 tracking-widest uppercase">
          Stay Connected • Stay Ready
        </p>

      </div>
    </section>
  );
};

export default UpcomingEvents;
