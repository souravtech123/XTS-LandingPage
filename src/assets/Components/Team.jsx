import React from "react";

const teamMembers = [
  { name: "ATUL KUMAR", role: "Head Supervisor · Society Lead" },
  { name: "ASHUTOSH KUMAR SAHU", role: "Tech Head" },
  { name: "NAUSHEEN JILANI", role: "Executive Head " },
  { name: "AYUSH", role: " Media Head" },
  { name: "ARITIKA SINGH", role: "Reasearch Head" },
];

const Team = () => {
  return (
    <section
      className="
        relative py-44 px-6 overflow-hidden
        bg-gradient-to-b
        from-[#080B14]
        via-[#0C1122]
        to-[#070A13]
      "
    >
      {/* Cinematic ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_65%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-32">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400 mb-6">
            Leadership
          </p>

          <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight">
            The People Behind  
            <span className="block text-gray-400">Xavier TechByte Society</span>
          </h2>

          <p className="mt-10 text-lg text-gray-400 leading-relaxed">
            A focused leadership team guiding the society with clarity,
            responsibility, and a long-term vision for technology-driven growth.
          </p>
        </div>

        {/* Team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                group relative
                border-l border-white/10 pl-8
                transition-all duration-500
                hover:border-blue-400/50
              "
            >
              {/* Initial */}
              <div
                className="
                  w-14 h-14 rounded-full
                  flex items-center justify-center
                  text-lg font-medium text-white
                  bg-gradient-to-br from-blue-500/25 to-blue-500/5
                  mb-6
                "
              >
                {member.name.charAt(0)}
              </div>

              {/* Name */}
              <h3 className="text-xl font-medium text-white mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-gray-400 text-sm tracking-wide">
                {member.role}
              </p>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-40 border-t border-white/10 pt-12">
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Leadership • Responsibility • Vision
          </p>
        </div>

      </div>
    </section>
  );
};

export default Team;
