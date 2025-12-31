import React from "react";
import opportunityData from "./Opportunityfile";

const Opportunity = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Opportunity Hub</h1>
        <p className="text-gray-400">
          Explore hackathons, internships, open-source programs, and society roles.
        </p>
      </div>

      {/* Opportunity Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {opportunityData.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition"
          >
            {/* Badge */}
            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
              {opportunity.type}
            </span>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">
              {opportunity.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {opportunity.description}
            </p>

            {/* Details */}
            <div className="text-sm text-gray-300 space-y-1">
              <p>
                🎯 <span className="font-medium">Eligibility:</span>{" "}
                {opportunity.eligibility}
              </p>
              <p>
                🗓️ <span className="font-medium">Deadline:</span>{" "}
                {opportunity.deadline}
              </p>
              <p>
                💻 <span className="font-medium">Mode:</span>{" "}
                {opportunity.mode}
              </p>
              <p>
                🏆 <span className="font-medium">Reward:</span>{" "}
                {opportunity.reward}
              </p>
            </div>

            {/* Apply Button */}
            <a
              href={opportunity.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-5 text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold hover:opacity-90 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunity;
