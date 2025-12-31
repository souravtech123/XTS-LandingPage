import React from "react";
import eventsData from "./Eventfile";

const UpEvent = () => {
  const hasEvents = eventsData && eventsData.length > 0;

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Upcoming Events</h1>
        <p className="text-gray-400">
          Workshops, bootcamps, hackathons, and tech talks.
        </p>
      </div>

      {hasEvents ? (
        /* EVENTS GRID */
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition"
            >
              <img
                src={event.poster}
                alt={event.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                  {event.description}
                </p>

                <div className="text-sm text-gray-300 space-y-1">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.location}</p>
                  <p>💻 {event.mode}</p>
                </div>

                <button className="mt-5 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold hover:opacity-90">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* COMING SOON */
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-lg">
          <span className="text-5xl mb-6 block">🚧</span>
          <h2 className="text-3xl font-semibold mb-4">
            Events Coming Soon
          </h2>
          <p className="text-gray-400 mb-6">
            We’re planning something exciting.  
            Stay connected for announcements.
          </p>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold">
            Stay Updated
          </button>
        </div>
      )}
    </section>
  );
};

export default UpEvent;
