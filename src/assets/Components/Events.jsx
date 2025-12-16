import React from "react";

const events = [
  {
    title: "TechKriti – Official Launch Event",
    date: "October 2024",
    description:
      "TechKriti marked the official launch of Xavier TechByte Society. The event introduced the vision, mission, and long-term roadmap of the society, bringing together students passionate about technology, innovation, and real-world building. It set the foundation for a collaborative tech culture on campus.",
  },
  {
    title: "GameDev Workshop",
    date: "November 2024",
    description:
      "A hands-on Game Development workshop where students explored the fundamentals of game design, logic, and development workflows. The session focused on creativity, problem-solving, and understanding how games are built from concept to execution.",
  },
  
  {
    title: "XTS Unplugged",
    date: "March 2025",
    description:
      "It was an insightful tech talk that brought together professors and students to discuss the role of technology in modern education. The session focused on learning paths, emerging technologies, career awareness, and how students can align academic learning with real-world tech skills.",
  },
  
  {
    title: "Build with AI Workshop",
    date: "May 2025",
    description:
      "Build with AI was a hands-on workshop conducted in collaboration with GDG Ranchi. The session focused on practical applications of AI, modern tools, and collaborative problem-solving, helping students understand how AI can be used to build real-world solutions.",
  },

  {
    title: "Xavier TechByte Tech Fest",
    date: "September 2025",
    description:
      "Xavier TechByte Tech Fest is a flagship technology festival bringing together students, professors, and industry enthusiasts for workshops, talks, competitions, and collaborative experiences. The fest aims to celebrate innovation, creativity, and the growing tech culture on campus.",
  },
  
  
];


const EventsTimeline = () => {
  return (
    <section
      className="
        relative py-36 px-6 overflow-hidden
        bg-gradient-to-b
        from-[#0B1020]
        via-[#0E1428]
        to-[#090D1A]
      "
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]"></div>

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-28">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Flagship Archive
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
            Events & Milestones
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            A chronological record of the defining moments that shaped
            Xavier TechByte Society.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/15 pl-12 space-y-24">

          {events.map((event, index) => (
            <div key={index} className="relative">

              {/* Timeline Dot */}
              <span className="absolute -left-[14px] top-2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"></span>

              {/* Content */}
              <div>
                <p className="text-sm text-blue-300 tracking-wide mb-2">
                  {event.date}
                </p>

                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-white/10 pt-10">
          <p className="text-sm text-gray-400">
            Xavier TechByte Society · Established 2024
          </p>
        </div>

      </div>
    </section>
  );
};

export default EventsTimeline;