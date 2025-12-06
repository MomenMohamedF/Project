const Card1 = () => {
  return (
    <div className="w-72 dark:bg-gray-800   sm:w-80 md:w-[360px] lg:w-[405px] rounded-2xl overflow-hidden shadow-lg mb-6 relative hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img
        src="../../../assets/images/Diamond Jewelry.png"
        alt="Diamond Jewelry"
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute top-3 right-3 z-50 font-[Poppins] bg-PinkPrimary rounded-2xl text-white px-2 py-1  ">
        New
      </div>
      <div className="font-[Poppins] p-4 flex flex-col gap-2">
        <h1 className="font-semibold">Diamond Jewelry</h1>
        <p className="text-GrayPrimary text-sm">
          Sparkling beauty that captivates
        </p>
        <div className="font-[Inter] w-full flex items-center justify-between mt-4">
          <div className="flex flex-row gap-3 items-center">
            <p className="line-through text-GrayPrimary font-normal text-sm">
              $1,2000
            </p>
            <p className="text-Gprimary font-bold text-xl md:text-2xl">$5999</p>
          </div>
          <button className="bg-PinkPrimary w-10 h-10 md:w-12 md:h-10 rounded-lg font-bold text-white text-lg md:text-2xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
