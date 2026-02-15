// import React, { useRef, useState, useEffect } from "react";
// import { useInView } from "../../hooks/useInView";
// import { machinery } from "../../data/constants";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const MachinerySection = () => {
//   const [ref, inView] = useInView({ threshold: 0.1 });
//   const containerRef = useRef(null);
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile on component mount and resize
//   useEffect(() => {
//     const checkMobile = () => window.innerWidth < 768;
//     setIsMobile(checkMobile());
//     const handleResize = () => setIsMobile(checkMobile());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Animation classes
//   const mobileAnimation = "opacity-100 translate-y-0";
//   const desktopAnimation = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
//   const animationClasses = isMobile ? mobileAnimation : desktopAnimation;

//   // 3D tilt effect on desktop
//   let rotateX = 0;
//   if (!isMobile && containerRef.current && inView) {
//     const rect = containerRef.current.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;
//     const offset = rect.top + rect.height / 2 - viewportHeight / 2;
//     rotateX = Math.max(-8, Math.min(8, offset / 40));
//   }

//   // Scroll handler
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const amount = direction === "left"
//         ? -scrollRef.current.clientWidth / 3
//         : scrollRef.current.clientWidth / 3;

//       scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="machinery"
//       ref={ref}
//       className="py-12 sm:py-16 md:py-20 relative z-10 bg-transparent overflow-hidden"
//     >
//       <div
//         ref={containerRef}
//         className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-1000 ${animationClasses}`}
//       >

//         {/* HEADER */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10">
//           <div className="text-center sm:text-left mb-4 sm:mb-0">
//             <p className="text-[#E81729] font-bold uppercase mb-2 text-sm sm:text-base">
//               ADVANCED TECHNOLOGY
//             </p>
//             <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-black">
//               CUTTING-EDGE <span className="text-[#E81729]">MACHINERY</span>
//             </h2>
//             <p className="text-gray mt-3 sm:mt-4 max-w-2xl mx-auto sm:mx-0 text-sm sm:text-base">
//               Discover the advanced technologies powering our manufacturing excellence and precision.
//             </p>
//           </div>

//           {!isMobile && (
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => scroll("left")}
//                 className="p-2 sm:p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
//               >
//                 <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 className="p-2 sm:p-3 border-2 border-[#E81729] rounded-full text-[#E81729] hover:bg-[#E81729] hover:text-white transition-colors shadow-md transform hover:scale-110 duration-300 bg-white"
//               >
//                 <ArrowRight size={20} className="sm:w-6 sm:h-6" />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* SCROLL GALLERY */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 sm:pb-6 snap-x snap-mandatory custom-scrollbar"
//         >
//           {machinery.map((item, idx) => (
//             <div
//               key={idx}
//               className={`relative snap-start flex-shrink-0 w-72 xs:w-80 sm:w-96 md:w-[500px] bg-white/80 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 ${isMobile ? "" : "transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
//                 }`}
//               style={!isMobile ? { transform: `rotateX(${rotateX}deg)` } : {}}
//             >

//               {/* 🔴 LOGO BADGE */}

//               <div className="absolute top-4 left-4 z-20">
//                 <div className="
//     w-36 h-16
//     bg-white
//     backdrop-blur-md 
//     rounded-2xl 
//     border border-white/40 
//     shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
//     flex items-center justify-center 
//     px-3
//     overflow-hidden
//     ">
//                   <img
//                     src={item.logo}
//                     alt={item.name + ' logo'}
//                     className="w-24 h-28 object-contain"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://placehold.co/150x50/EEE/777?text=Logo';
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* IMAGE */}
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-48 xs:h-56 sm:h-64 object-cover rounded-t-xl sm:rounded-t-2xl"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://placehold.co/600x400/222/FFF?text=Machine";
//                 }}
//               />

//               {/* DESCRIPTION */}
//               <div className="p-4 sm:p-6 text-center bg-white">
//                 <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MachinerySection;