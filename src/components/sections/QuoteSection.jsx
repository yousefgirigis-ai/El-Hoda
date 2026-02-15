/* eslint-disable no-unused-vars */ 
import React, { useState, useRef } from "react"; 
import { useInView } from "../../hooks/useInView"; 

const QuoteSection = () => { 
  const sectionRef = useRef(null); 
  const [inViewRef] = useInView({ threshold: 0.1 }); 

  return ( 
    <section 
      id="quote" 
      ref={inViewRef} 
      className="relative py-36 overflow-hidden flex items-center justify-center text-center" 
    > 
      {/* Video Background */} 
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      > 
        <source src="/space.mp4" type="video/mp4" /> 
      </video> 

      {/* Dark Overlay */} 
      <div className="absolute inset-0 bg-black/60 z-0"></div> 

      {/* Quote Content */} 
      <div className="relative z-10 max-w-5xl px-6 text-white font-light italic"> 
        {/* MAIN QUOTE */} 
        <p className="text-2xl md:text-4xl leading-relaxed mb-8"> 
          At El Hoda, our ethos of profound respect and equality is the 
          foundation of our success. We believe that advancing healthcare relies 
          entirely on the strength of our relationships—with our partners, 
          clients, and dedicated staff. This unity ensures professionalism is 
          central to every service. 
        </p> 

        {/* SECOND PARAGRAPH */} 
        <p className="text-2xl md:text-4xl leading-relaxed mb-12"> 
          I sincerely thank our staff for their commitment and our partners for 
          their enduring trust. Together, we are prepared to embrace challenges 
          and continue our collective journey toward a brighter future in global 
          healthcare. 
        </p> 

        <div className="text-left"> 
          <p className="text-sm md:text-base tracking-widest uppercase text-white"> 
            Dr. Elsaid Hassan Alsaid 
          </p> 
          <p className="text-xs md:text-sm tracking-wider text-gray-300 mt-1"> 
            CEO, El Hoda Trade & Supplies 
          </p> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default QuoteSection;