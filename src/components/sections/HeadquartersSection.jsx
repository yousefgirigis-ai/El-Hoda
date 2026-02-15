import React, { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

const HeadquartersSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [, setWordIndex] = useState(0);
  const [, setIsAnimating] = useState(true);

  // Using the SAME words from HeroSection
  const words = ["Healthcare", "Innovation", "Diagnostics", "Excellence"];

  const animationClasses = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  // Word loop effect - identical to HeroSection
  useEffect(() => {
    const wordCycleTimer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(true);
      }, 50);
    }, 3500);
    return () => clearInterval(wordCycleTimer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="bg-black text-white relative z-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      {/* Content Section */}
      <div
        className={`relative py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-1000 delay-200 ${animationClasses}`}
      >
        {/* Desktop 3D Logo - Left aligned */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 transform z-20">
          <span className="relative inline-block w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] overflow-hidden">
            <video
              src="/3d_2.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-contain rotate-infinite"
            />
          </span>
        </div>

        {/* Tablet-sized logo (centered) */}
        <div className="hidden md:flex lg:hidden justify-center mb-10">
          <span className="relative inline-block w-[220px] h-[220px] overflow-hidden">
            <video
              src="/3d_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rotate-infinite"
            />
          </span>
        </div>

        {/* Mobile 3D Logo */}
        <div className="md:hidden flex justify-center mb-8">
          <span className="relative inline-block w-[150px] h-[150px] overflow-hidden">
            <video
              src="/3d_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rotate-infinite"
            />
          </span>
        </div>

        {/* Title + Text */}
        <div className="md:ml-auto max-w-2xl text-center md:text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            OUR HEADQUARTERS
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#E81729] mb-4">
            THE HEART OF INNOVATION
          </h3>

          <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 lg:max-w-none">
            Where modern infrastructure meets cutting-edge solutions to power
            your business forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeadquartersSection;
