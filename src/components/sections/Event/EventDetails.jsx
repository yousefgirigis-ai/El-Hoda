/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* COMMON */
import { annualEvents, oneTimeEvents } from "../../../data/constants";
import Footer from "../../common/Footer";

const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Combine both arrays and find the event
  const allEvents = [...annualEvents, ...oneTimeEvents];
  const event = useMemo(() => allEvents.find((e) => e.slug === slug), [slug]);

  const listPath =
    event?.type === "one-time" ? "/events/one-time" : "/events/annual";
  const listLabel =
    event?.type === "one-time" ? "One-Time Events" : "Annual Events";

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImage(0);
  }, [slug]);

  useEffect(() => {
    if (!event?.images || event.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === event.images.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Event not found
          </h1>
          <button
            onClick={() => navigate("/events/annual")}
            className="bg-[#E81729] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Go to Annual Events
          </button>
        </div>
      </div>
    );
  }

  // fallback image
  const heroImage = event.images?.[currentImage] || "/placeholder.jpg";

  return (
    <div className="font-sans bg-white">
      {/* ================= PATH NAVIGATION ================= */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">
            <button
              onClick={() => navigate("/")}
              className="hover:text-black transition-colors"
            >
              Home
            </button>
            <span className="mx-2">&gt;</span>
            <button
              onClick={() => navigate(listPath)}
              className="hover:text-black transition-colors"
            >
              {listLabel}
            </button>
            <span className="mx-2">&gt;</span>
            <span className="text-black font-semibold">{event.title}</span>
          </div>
        </div>
      </div>

      {/* ================= HERO HEADER ================= */}
      <section className="relative h-[520px] overflow-hidden rounded-b-[40px]">
        <img
          src={heroImage}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <div className="pt-6 sm:pt-8" /> {/* Spacer */}
          <div className="max-w-3xl mt-auto pb-16">
            <p className="text-[#E81729] font-bold uppercase tracking-wide mb-3">
              {event.category} {event.date && `| ${event.date}`}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              {event.title}
            </h1>

            <p className="text-lg text-gray-200 mb-6">{event.subtitle}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button
                onClick={() => navigate(listPath)}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition self-start sm:self-auto"
              >
                ← Back to {listLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Dots for image carousel */}
        {event.images?.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {event.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentImage
                    ? "bg-[#E81729]"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ================= EVENT OVERVIEW ================= */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT - Overview */}
          <div>
            {event.overview?.eyebrow && (
              <p className="text-[#E81729] uppercase font-bold tracking-wide mb-3">
                {event.overview.eyebrow}
              </p>
            )}

            {event.overview?.heading && (
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">
                {event.overview.heading}
              </h2>
            )}

            <div className="w-20 h-1 bg-[#E81729] mb-6" />

            {event.overview?.intro && (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.overview.intro}
                </p>
              </div>
            )}

            {/* Show excerpt if overview intro is not available */}
            {!event.overview?.intro && event.excerpt && (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.excerpt}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT - Highlights */}
          {Array.isArray(event.highlights) && event.highlights.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {event.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 w-2 h-2 bg-[#E81729] rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.title && (
                          <strong className="font-semibold text-gray-900">
                            {item.title}:{" "}
                          </strong>
                        )}
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      {event.images && event.images.length > 1 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Event Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.images.map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={img}
                    alt={`${event.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= NAVIGATION FOOTER ================= */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="bg-[#E81729] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
