import { useState } from "react";

const EventsInitiatives = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Subscribing email:", email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const upcomingEvents = [
    {
      title: "Startup Bootcamp 2025",
      date: "March 15-17, 2025",
      type: "Workshop Series",
      description: "Three-day intensive program covering ideation, MVP development, and pitch preparation.",
      tags: ["Entrepreneurship", "Mentorship", "Networking"],
    },
    {
      title: "Innovation Summit",
      date: "April 8, 2025",
      type: "Conference",
      description: "Annual gathering of innovators, investors, and industry leaders sharing insights on emerging technologies.",
      tags: ["AI/ML", "Blockchain", "IoT"],
    },
    {
      title: "Pitch Competition Finals",
      date: "May 20, 2025",
      type: "Competition",
      description: "Top 10 startups compete for ₹10L in seed funding and incubation opportunities.",
      tags: ["Funding", "Startups", "Competition"],
    },
  ];

  const ongoingInitiatives = [
    {
      title: "Founders' Circle",
      description: "Monthly meetups connecting entrepreneurs, mentors, and alumni for knowledge sharing and collaboration.",
      frequency: "Monthly",
      icon: "👥",
    },
    {
      title: "Idea Validation Program",
      description: "8-week structured program helping students validate business ideas through customer discovery.",
      frequency: "Quarterly",
      icon: "💡",
    },
    {
      title: "Tech Talk Series",
      description: "Weekly sessions featuring industry experts discussing latest trends in technology and innovation.",
      frequency: "Weekly",
      icon: "🎤",
    },
    {
      title: "Startup Office Hours",
      description: "One-on-one mentorship sessions with experienced entrepreneurs and subject matter experts.",
      frequency: "Bi-weekly",
      icon: "⏰",
    },
  ];

  return (
    <section id="events" className="relative bg-[#f5f4f3] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              Events & Initiatives
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              Join our vibrant community through workshops, competitions, and ongoing programs
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h3 className="mb-8 text-3xl font-bold text-black">Upcoming Events</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Event Type Badge */}
                  <div className="mb-4 inline-block rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
                    {event.type}
                  </div>

                  {/* Event Date */}
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    📅 {event.date}
                  </p>

                  {/* Event Title */}
                  <h4 className="mb-3 text-xl font-bold text-black">
                    {event.title}
                  </h4>

                  {/* Event Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {event.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect - Corner Accent */}
                  <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-10 translate-y-10 rounded-full bg-black opacity-0 transition-all group-hover:translate-x-5 group-hover:translate-y-5 group-hover:opacity-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Initiatives */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-black">Ongoing Initiatives</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {ongoingInitiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-black text-2xl">
                    {initiative.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-lg font-bold text-black">
                        {initiative.title}
                      </h4>
                      <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {initiative.frequency}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 rounded-2xl border-2 border-black bg-white p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-black">
              Want to Get Involved?
            </h3>
            <p className="mb-6 text-gray-600">
              Stay updated with our latest events and initiatives. Join our community today!
            </p>
            
            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 text-black placeholder-gray-400 transition-all focus:border-black focus:outline-none"
                  aria-label="Email address for updates"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsInitiatives;
