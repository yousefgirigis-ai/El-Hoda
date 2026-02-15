import React from "react";
import { useInView } from "../../hooks/useInView";
import { partners } from "../../data/constants";

const PartnersSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const animationClasses = inView
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-10 scale-95";

  const Card = ({ partner }) => (
    <div
      className="
        group
        w-40 h-28 
        sm:w-48 sm:h-32 
        md:w-56 md:h-40
        flex items-center justify-center
        rounded-xl 
        md:rounded-2xl
        bg-white
        border border-gray-200
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:scale-[1.02] 
        md:hover:scale-105 
        md:hover:-translate-y-1
        active:scale-95
        flex-shrink-0
        mx-4
        sm:mx-6
      "
    >
      <img
        src={partner.img}
        alt={partner.name}
        className="
          w-24 h-24
          sm:w-28 sm:h-28
          md:w-32 md:h-32
          object-contain
          transition-transform
          duration-300
          group-hover:scale-105
          md:group-hover:scale-110
          p-2
        "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/200x150/F3F4F6/374151?text=${partner.name.replace(
            / /g,
            "+",
          )}`;
        }}
        loading="lazy"
      />
    </div>
  );

  return (
    <section
      id="partners"
      ref={ref}
      className="py-12 sm:py-16 md:py-24 relative z-10 overflow-hidden bg-[#E1E8F0]"
    >
      <div
        className={`
          max-w-7xl mx-auto
          px-4 sm:px-6 md:px-8 lg:px-12
          transition-all duration-700 ease-out
          ${animationClasses}
        `}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-8 sm:mb-12 md:mb-14 text-center uppercase tracking-wide md:tracking-widest text-black px-2">
          Our Trusted <span className="text-[#d71920]">Partners</span>
        </h2>

        {/* Single Continuous Slider */}
        <div className="relative overflow-hidden">
          <div
            className="
            flex 
            animate-partners-scroll 
            hover:[animation-play-state:paused]
            w-max
          "
          >
            {/* Original partners */}
            {partners.map((partner, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0 cursor-default"
              >
                <Card partner={partner} />
              </div>
            ))}
            {/* First duplicate set */}
            {partners.map((partner, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0 cursor-default"
              >
                <Card partner={partner} />
              </div>
            ))}
            {/* Second duplicate set (for smoother transition) */}
            {partners.map((partner, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0 cursor-default"
              >
                <Card partner={partner} />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#E1E8F0] via-[#E1E8F0] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#E1E8F0] via-[#E1E8F0] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
          animate-float-slow 
          w-8 h-8 
          sm:w-12 sm:h-12 
          md:w-16 md:h-16 
          bg-[#E81729]/5 
          md:bg-[#E81729]/10 
          rounded-full 
          blur-xl 
          md:blur-2xl 
          absolute 
          top-6 left-6
          sm:top-10 sm:left-20
        "
        ></div>
        <div
          className="
          animate-float-med 
          w-12 h-12 
          sm:w-16 sm:h-16 
          md:w-20 md:h-20 
          bg-[#E81729]/3 
          md:bg-[#E81729]/5 
          rounded-full 
          blur-2xl 
          md:blur-3xl 
          absolute 
          bottom-10 right-6
          sm:bottom-16 sm:right-12
          md:bottom-16 md:right-32
        "
        ></div>
      </div>
    </section>
  );
};

export default PartnersSection;
