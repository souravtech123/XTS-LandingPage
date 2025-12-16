import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070A13] text-gray-300 px-6 pt-28">

      {/* Animated background */}
      <div className="
        absolute inset-0 
        bg-[linear-gradient(120deg,#0B1020,#0E1638,#090D1A)]
        bg-[length:200%_200%]
        animate-gradient
        opacity-60
      "></div>

      {/* Cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_65%)]"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Brand */}
        <div className="animate-fadeUp">
          <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
            Xavier TechByte Society
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Building a student-driven tech culture through learning,
            collaboration, and long-term innovation.
          </p>
        </div>

        {/* Links */}
        <div className="animate-fadeUp">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Navigate
          </h4>
          <ul className="space-y-3">
            {["Home", "About", "Events", "Team", "Join Us"].map((item, i) => (
              <li
                key={i}
                className="group w-fit cursor-pointer text-gray-400 hover:text-white transition"
              >
                <span className="relative">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="animate-fadeUp">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Connect
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition">
              techbytesociety@college.edu
            </li>
            {["Instagram", "LinkedIn", "GitHub"].map((social, i) => (
              <li
                key={i}
                className="group w-fit cursor-pointer hover:text-white transition"
              >
                <span className="relative">
                  {social}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative mt-24 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Xavier TechByte Society · All rights reserved
        <br />
        <span className="text-gray-400">
          Built with ❤️ by TechByte Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
