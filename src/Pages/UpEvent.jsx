import React from "react";
import eventsData from "./Eventfile";

const UpEvent = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Upcoming Events</h1>
        <p className="text-gray-400">
          Stay updated with workshops, bootcamps, hackathons, and tech talks.
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300"
          >
            {/* Poster */}
            <img
              src={event.poster}
              alt={event.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {event.description}
              </p>

              {/* Event Info */}
              <div className="text-sm text-gray-300 space-y-1">
                <p>
                  📅 <span className="font-medium">{event.date}</span>
                </p>
                <p>
                  ⏰ <span className="font-medium">{event.time}</span>
                </p>
                <p>
                  📍 <span className="font-medium">{event.location}</span>
                </p>
                <p>
                  💻 <span className="font-medium">{event.mode}</span>
                </p>
              </div>

              {/* Button */}
              <button className="mt-5 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpEvent;
