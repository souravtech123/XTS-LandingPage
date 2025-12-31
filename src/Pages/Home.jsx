import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building Tech. <br />
          <span className="text-indigo-400">Creating Opportunities.</span>
        </h1>

        <p className="text-gray-400 max-w-xl mt-6">
          Xavier Tech Byte Society is a student-driven tech community focused on
          real-world projects, events, and growth opportunities.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <NavLink
            to="/opportunities"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition"
          >
            Explore Opportunities
          </NavLink>

          <NavLink
            to="/events"
            className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-800 transition"
          >
            Upcoming Events
          </NavLink>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Opportunities Preview */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              Opportunities
            </h2>
            <p className="text-gray-400 mb-6">
              Hackathons, internships, open-source, workshops, and project-based
              learning opportunities curated for students.
            </p>
            <NavLink
              to="/opportunities"
              className="text-indigo-400 hover:underline"
            >
              View all opportunities →
            </NavLink>
          </div>

          {/* Events Preview */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              Upcoming Events
            </h2>
            <p className="text-gray-400 mb-6">
              Tech talks, bootcamps, hackathons, and meetups conducted by the
              Xavier Tech Byte Society.
            </p>
            <NavLink
              to="/events"
              className="text-indigo-400 hover:underline"
            >
              View all events →
            </NavLink>
          </div>

        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Join Xavier Tech Byte?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Build Real Projects",
            "Industry Exposure",
            "Community Learning",
            "Leadership Growth",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400">
        Made with ❤️ by Xavier Tech Byte Society
      </footer>
    </div>
  );
};

export default Home;
