import React from "react";
import { FaHandsHelping, FaStar } from "react-icons/fa";

const IntroAnimation = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-10 sm:py-16 overflow-hidden">
      <div className="flex items-center space-x-6 whitespace-nowrap intro-pause-animation">
        <h1 className="text-[24px] sm:text-[40px] md:text-[60px] font-extrabold text-[#E81729] uppercase flex items-center gap-4">
          <span className="flex items-center gap-3">
            Expertise <FaHandsHelping className="text-[#E81729] text-4xl" />
          </span>
          <span className="flex items-center gap-3">
            Unmatched <FaStar className="text-[#E81729] text-4xl" />
          </span>
          <span>Dedication</span>
        </h1>
      </div>

      <div className="flex items-center space-x-6 whitespace-nowrap mt-4 intro-pause-animation-reverse">
        <h1 className="text-[24px] sm:text-[40px] md:text-[60px] font-extrabold text-black uppercase flex items-center gap-4">
          <span className="flex items-center gap-3">
            Expertise <FaHandsHelping className="text-black text-4xl" />
          </span>
          <span className="flex items-center gap-3">
            Unmatched <FaStar className="text-black text-4xl" />
          </span>
          <span>Dedication</span>
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
