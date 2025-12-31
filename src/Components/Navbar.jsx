import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-xl font-bold tracking-wide"
        >
          Xavier Tech Byte
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <NavLink
            to="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            className="hover:text-blue-400 transition"
          >
            Events
          </NavLink>

          <NavLink
            to="/opportunities"
            className="hover:text-blue-400 transition"
          >
            Opportunity Hub
          </NavLink>

          <NavLink
            to="/register"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition font-semibold"
          >
            Register
          </NavLink>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Events
          </NavLink>

          <NavLink
            to="/opportunities"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Opportunity Hub
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold"
          >
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
