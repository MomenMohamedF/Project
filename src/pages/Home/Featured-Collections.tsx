const FeaturedCollections = () => {
  return (
    <div className="w-full mt-4 px-4 md:px-8 lg:px-20 py-8">
      <div className="text-center font-bold text-2xl md:text-4xl mb-8">
        <h1>Featured</h1>
        <h1>Collections</h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 mt-8 ">
        <img
          src="./../../../public/assets/images/Feature1.png"
          alt="Feature1"
          className="w-full sm:w-1/2 lg:w-1/3 h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover hover:shadow-xl hover:scale-105 transition-all duration-300"
        />
        <img
          src="./../../../public/assets/images/Feature2.png"
          alt="Feature2"
          className="w-full sm:w-1/2 lg:w-1/3 h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover hover:shadow-xl hover:scale-105 transition-all duration-300"
        />
        <img
          src="./../../../public/assets/images/Feature3.png"
          alt="Feature3"
          className="w-full sm:w-1/2 lg:w-1/3 h-64 md:h-80 lg:h-[400px] rounded-2xl object-cover hover:shadow-xl hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default FeaturedCollections;
