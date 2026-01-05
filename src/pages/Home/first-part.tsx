import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url(../../../assets/images/main-image.png)] h-[50vh] md:h-[60vh] bg-cover bg-center w-full mx-0">
      <div className="flex flex-col items-center justify-center h-full text-white bg-black/20 bg-opacity-50 text-center px-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold m-3">
          Elevate Every Moment
        </h1>
        <h3 className="mt-2 text-sm sm:text-base md:text-xl lg:text-2xl">
          Discover our curated collection of premium accessories
        </h3>
        <button
          onClick={() => navigate("/shop")}
          className="bg-Yprimary text-black px-6 sm:px-8 py-2 rounded-full mt-4 hover:bg-yellow-500 transition font-semibold"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
