import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-[#0a0a0a] transition-all duration-700 dark:bg-gray-900">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-Yprimary border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-white/80 font-medium tracking-widest text-sm uppercase animate-pulse">
              Entering 3D Space
            </p>
          </div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-0 ">
        <div className="max-w-5xl p-8 md:p-16 rounded-[2.5rem] bg-black/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] animate-in fade-in zoom-in slide-in-from-bottom-10 duration-1000 ease-out">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-playfair">
            Elevate Every <br className="hidden md:block" />
            <span className="text-Yprimary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Moment
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Immerse yourself in our curated collection of premium accessories,
            where craftsmanship meets futuristic design.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="group relative px-10 py-4 bg-Yprimary text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-Yprimary/20"
          >
            <span className="relative z-10 transition-colors duration-300">
              Explore Collection
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-5 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
