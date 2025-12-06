import Card1 from "@/components/cards/card1";

const HotOffers = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl md:text-4xl m-8 font-playfair">
        🔥 Hot Offers
      </h2>

      {/* three cards */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-0 md:px-12 lg:px-20 pb-8">
        {/*  product card 1 */}
        <Card1 />
        {/* product card 2 */}
        <div className="w-72 sm:w-80 md:w-[360px] lg:w-[405px] rounded-2xl overflow-hidden shadow-lg mb-6 relative hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="../../../assets/images/Designer Rings.png"
            alt="Diamond Jewelry"
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-3 right-3 z-50 font-[Poppins] bg-DYprimary rounded-2xl text-white px-2 py-1 ">
            Popular
          </div>
          <div className="font-[Poppins] p-4 flex flex-col gap-2">
            <h1 className="font-semibold">Designer Rings</h1>
            <p className="text-[#4B5563] text-sm">
              Perfect symbols of love and style
            </p>
            <div className="font-[Inter] w-full flex items-center justify-between mt-4">
              <div className="flex flex-row gap-3 items-center">
                <p className="line-through text-[#6B7280] font-normal text-sm">
                  $400
                </p>
                <p className="text-[#16A34A] font-bold text-xl md:text-2xl">
                  $199
                </p>
              </div>
              <button className="bg-[#CA8A04] w-10 h-10 md:w-12 md:h-10 rounded-lg font-bold text-white text-lg md:text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
        {/* product card 3 */}
        <div className="w-72 sm:w-80 md:w-[360px] lg:w-[405px] rounded-2xl overflow-hidden shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="../../../assets/images/Charm Bracelets.png"
            alt="Diamond Jewelry"
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="font-[Poppins] p-4 flex flex-col gap-2">
            <h1 className="font-semibold">Charm Bracelets</h1>
            <p className="text-GrayPrimary text-sm">
              Express your unique personality
            </p>
            <div className="font-[Inter] w-full flex items-center justify-between mt-4">
              <div className="flex flex-row gap-3 items-center">
                <p className="line-through text-GrayPrimary font-normal text-sm">
                  $200
                </p>
                <p className="text-Gprimary font-bold text-xl md:text-2xl">
                  $99
                </p>
              </div>
              <button className="bg-Gprimary w-10 h-10 md:w-12 md:h-10 rounded-lg font-bold text-white text-lg md:text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotOffers;
