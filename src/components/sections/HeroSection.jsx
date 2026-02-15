/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const words = ["Healthcare", "Innovation", "Diagnostics", "Excellence"];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const desktopBanners = [
    "/video.mp4",
    // Add more banners if needed
    // "/home1_edit.png",
    // "/home2.png",
    // "/home4_last.png",
  ];

  const mobileBanners = [
    "/video.mp4",
    // Add more banners if needed
    // "/home1.png",
    // "/home6.png",
  ];

  const [banners, setBanners] = useState(desktopBanners);
  const [bgIndex, setBgIndex] = useState(0);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // Detect mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setBanners(mobileBanners);
      } else {
        setBanners(desktopBanners);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Word loop
  useEffect(() => {
    const wordCycleTimer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(true);
      }, 50);
    }, 3500);
    return () => clearInterval(wordCycleTimer);
  }, []);

  // Handle video playback and looping
  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo) {
      // Set up event listeners for the video
      const handleVideoEnd = () => {
        // When video ends, restart it
        currentVideo.currentTime = 0;
        currentVideo
          .play()
          .catch((e) => console.log("Video replay prevented:", e));
      };

      const handleVideoError = () => {
        console.error("Video error occurred");
        // Fallback to next background if video fails
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setBgIndex((prev) => (prev + 1) % banners.length);
      };

      // Try to autoplay video
      const playVideo = () => {
        if (currentVideo) {
          currentVideo
            .play()
            .then(() => {
              console.log("Video playing successfully");
            })
            .catch((error) => {
              console.log(
                "Autoplay prevented, trying with user interaction:",
                error,
              );
              // If autoplay is prevented, we'll try again on user interaction
              const playOnInteraction = () => {
                currentVideo
                  .play()
                  .catch((e) => console.log("Still prevented:", e));
                document.removeEventListener("click", playOnInteraction);
                document.removeEventListener("scroll", playOnInteraction);
              };
              document.addEventListener("click", playOnInteraction);
              document.addEventListener("scroll", playOnInteraction);
            });
        }
      };

      // Add event listeners
      currentVideo.addEventListener("ended", handleVideoEnd);
      currentVideo.addEventListener("error", handleVideoError);

      // Try to play immediately
      playVideo();

      // Cleanup
      return () => {
        if (currentVideo) {
          currentVideo.removeEventListener("ended", handleVideoEnd);
          currentVideo.removeEventListener("error", handleVideoError);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [bgIndex, banners.length]);

  // Only cycle backgrounds if there are multiple banners
  useEffect(() => {
    if (banners.length > 1) {
      intervalRef.current = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % banners.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [banners.length]);

  return (
    <section
      id="home"
      className="pt-24 sm:pt-32 pb-12 sm:pb-16 min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-center relative z-10 overflow-hidden bg-black"
    >
      {/* Background images and video */}
      {banners.map((item, i) => {
        const isVideo = item.endsWith(".mp4");
        const isActive = i === bgIndex;

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out
              ${isActive ? "opacity-100 animate-bgSlideInRight" : "opacity-0"}
              ${isVideo ? "bg-black" : ""}`}
            style={{
              backgroundAttachment: "scroll",
            }}
          >
            {isVideo ? (
              <video
                ref={isActive ? videoRef : null}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop={true}
                playsInline
                preload="auto"
                style={{
                  filter: "brightness(1.25) contrast(1.1)",
                }}
              >
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${item}')`,
                  filter: "brightness(1.25) contrast(1.1)",
                }}
              />
            )}
          </div>
        );
      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div
          className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left
          animate-textSlideInLeft sm:animate-none"
        >
          <div className="flex-1 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white mb-4 sm:mb-6 drop-shadow-lg">
              Shaping <br className="hidden sm:block" />
              the Future <br />
              {/* Fixed word container */}
              <span className="inline-flex overflow-visible h-[55px] sm:h-[90px] lg:h-[120px] align-middle min-w-full">
                <span
                  className={`text-4xl sm:text-6xl lg:text-7xl text-[#E81729] block font-extrabold tracking-tighter leading-[1.1] drop-shadow-lg
                    transition-transform duration-500 ease-out will-change-transform
                    ${
                      isAnimating
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                    whitespace-nowrap`}
                  style={{
                    display: "inline-block",
                    transform: isAnimating
                      ? "translateY(0)"
                      : "translateY(100%)",
                  }}
                >
                  {words[index]}
                </span>
              </span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg max-w-xs sm:max-w-sm mx-auto lg:mx-0 mt-3 sm:mt-4 border-l-4 border-[#E81729] pl-3 sm:pl-4 py-1 animate-fade-in-up">
              Your Trusted Partner for Medical Diagnostics Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
