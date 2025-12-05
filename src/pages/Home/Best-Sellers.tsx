const BestSellers = () => {
  return (
    <div className="w-full mt-4 px-4 md:px-8 lg:px-20 py-8">
      <div className="text-center font-bold text-2xl md:text-4xl mb-8">
        <h1>Best</h1>
        <h1>Sellers</h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 mt-8">
        <div className="w-full sm:w-1/2 lg:w-1/4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="./../../../public/assets/images/Sellers1.png"
            alt="Sellers1"
            className="w-full h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="./../../../public/assets/images/Sellers2.png"
            alt="Sellers2"
            className="w-full h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="./../../../public/assets/images/Sellers3.png"
            alt="Sellers3"
            className="w-full h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="./../../../public/assets/images/Sellers4.png"
            alt="Sellers4"
            className="w-full h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
