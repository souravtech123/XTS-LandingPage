import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-white text-xl font-bold tracking-wide">
          Xavier Tech Byte
        </NavLink>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white">
          <li>
          <NavLink
              to="/"
              className="hover:text-blue-400 mr-10 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/events"
              className="hover:text-blue-400 transition"
            >
              Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/opportunities"
              className="hover:text-blue-400 transition"
            >
              Opportunity Hub
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition font-semibold"
            >
              Register
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
