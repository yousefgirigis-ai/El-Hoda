import React, { useEffect, useState } from "react";

const ProductHeroBanner = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-[#d71920] via-red-600 to-red-700 pt-12 pb-6 text-center text-white shadow-2xl overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-float"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 8 + 5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        {/* Smaller geometric shapes */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-white/10 rounded-lg rotate-45 animate-bounce-slow" />
        <div className="absolute bottom-16 right-1/3 w-4 h-4 bg-white/10 rounded-lg rotate-12 animate-bounce-slow" />
      </div>

      {/* Main Content - More compact */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Product Category Badge */}
        <div
          className={`mb-4 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1.5 rounded-xl mb-3">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            <span className="text-white/90 font-semibold tracking-wider text-xs uppercase">
              {product?.category || "Medical Product"}
            </span>
          </div>
        </div>

        {/* Main Product Title - Smaller font */}
        <h1
          className={`text-3xl md:text-4xl font-black tracking-tight uppercase mb-3 drop-shadow-2xl transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            {product?.title?.replace(/_/g, " ") || "Product Details"}
          </span>
        </h1>

        {/* Product Description - Smaller font and less margin */}
        <p
          className={`text-base md:text-lg font-light tracking-wide mb-4 text-white/90 max-w-2xl mx-auto transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {product?.description || "Premium Medical Equipment & Supplies"}
        </p>

        {/* Product Code - Smaller */}
        {product?.code && (
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg mb-4 transform transition-all duration-700 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-white/80 font-medium text-xs">
              Product Code:
            </span>
            <span className="text-white font-bold text-base tracking-wide">
              {product.code}
            </span>
          </div>
        )}

        {/* Decorative Elements - Smaller */}
        <div
          className={`flex justify-center items-center gap-4 mt-4 transform transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="w-6 h-0.5 bg-white/40 rounded-full" />
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <div className="w-6 h-0.5 bg-white/40 rounded-full" />
        </div>

        {/* Scroll Indicator - Smaller */}
        <div
          className={`mt-4 animate-bounce transform transition-all duration-700 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="w-4 h-6 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2.5 bg-white/70 rounded-full mt-1.5 animate-scroll" />
          </div>
        </div>
      </div>

      {/* Bottom Wave - Smaller */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-8 text-white transform rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(90deg);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductHeroBanner;
