import React, { useState, useEffect } from "react";
import { useInView } from "../../../hooks/useInView";
import { Link, useNavigate } from "react-router-dom";
import { annualEvents } from "../../../data/constants";

const AnnualEvents = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mobileAnimationClasses = "opacity-100 translate-y-0";
  const desktopAnimationClasses = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  const animationClasses = isMobile
    ? mobileAnimationClasses
    : desktopAnimationClasses;

  const splitIndex = Math.ceil(annualEvents.length / 2);
  const leftEvents = annualEvents.slice(0, splitIndex);
  const rightEvents = annualEvents.slice(splitIndex);
  const goToEvents = () => navigate("/", { state: { scrollTo: "blog" } });

  return (
    <section
      ref={ref}
      className="pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative z-10 bg-[#E1E8F0]"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-1000 ${animationClasses}`}
      >
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div className="text-sm text-gray-600">
              <button
                onClick={() => navigate("/")}
                className="hover:text-[#d71920] transition-colors"
              >
                Home
              </button>
              <span className="mx-2">&gt;</span>
              <button
                onClick={goToEvents}
                className="hover:text-[#d71920] transition-colors"
              >
                Events
              </button>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-900 font-semibold">Annual Events</span>
            </div>

            <button
              onClick={goToEvents}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition self-start sm:self-auto"
            >
              ← Back to Events
            </button>
          </div>

          <p className="text-[#E81729] font-bold uppercase mb-2 text-sm md:text-base">
            EVENTS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 leading-tight">
            Annual Events
            <span className="text-lg md:text-xl font-normal block mt-2">
              Recurring events that shape our yearly milestones.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8">
            {leftEvents.map((event, idx) => (
              <Link
                key={idx}
                to={`/events/${event.slug}`}
                className={`group flex flex-col md:flex-row md:items-start border-b border-gray-700 pb-4 rounded-lg cursor-pointer transition-all duration-700 ease-out hover:bg-gray-50
                ${
                  isMobile
                    ? "opacity-100 translate-x-0"
                    : inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: isMobile ? "0ms" : `${idx * 150}ms`,
                }}
                onMouseEnter={() => !isMobile && setHoveredEvent(`left-${idx}`)}
                onMouseLeave={() => !isMobile && setHoveredEvent(null)}
              >
                {/* IMAGE */}
                <div
                  className={`flex-shrink-0 mb-3 md:mb-0 md:mr-4 overflow-hidden transition-all duration-500
                  ${
                    isMobile
                      ? "w-full h-40"
                      : hoveredEvent === `left-${idx}`
                        ? "w-52 h-36"
                        : "w-40 h-28"
                  }`}
                >
                  <img
                    src={event.image || event.images?.[0]}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-[#E81729] uppercase font-bold mb-1">
                    {event.category} | {event.date}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-black mb-2">{event.subtitle}</p>
                  <p className="text-black text-sm md:text-base">
                    {event.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-6 md:space-y-8">
            {rightEvents.map((event, index) => (
              <Link
                key={index}
                to={`/events/${event.slug}`}
                className={`group flex flex-col md:flex-row md:items-start border-b border-gray-700 pb-4 rounded-lg cursor-pointer transition-all duration-700 ease-out hover:bg-gray-50
                ${
                  isMobile
                    ? "opacity-100 translate-x-0"
                    : inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: isMobile ? "0ms" : `${index * 200}ms`,
                }}
                onMouseEnter={() =>
                  !isMobile && setHoveredEvent(`right-${index}`)
                }
                onMouseLeave={() => !isMobile && setHoveredEvent(null)}
              >
                {/* IMAGE */}
                <div
                  className={`flex-shrink-0 mb-3 md:mb-0 md:mr-4 overflow-hidden transition-all duration-500
                  ${
                    isMobile
                      ? "w-full h-40"
                      : hoveredEvent === `right-${index}`
                        ? "w-52 h-36"
                        : "w-40 h-28"
                  }`}
                >
                  <img
                    src={event.image || event.images?.[0]}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-[#E81729] uppercase font-bold mb-1">
                    {event.category} | {event.date}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-black mb-2">{event.subtitle}</p>
                  <p className="text-black text-sm md:text-base">
                    {event.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualEvents;
