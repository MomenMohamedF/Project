import { FaCartShopping } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";

const ShopAccessories = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-8 max-w-7xl mx-auto">
      <div className="bg-linear-to-r from-[#8F1C33] to-black font-[Poppins] rounded-2xl md:rounded-3xl">
        <div className="flex flex-col justify-center items-center text-center text-white py-8 md:py-12 gap-4 px-4">
          <h1 className="font-bold text-2xl md:text-3xl">Don't Miss Out!</h1>
          <h3 className="text-sm md:text-xl">
            Limited time offer ends soon. Use code ELEGANCE20 for 20% off your
            entire order!
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-4 w-full">
            <button className="w-full md:w-auto bg-[#D4AF37] justify-center items-center text-black flex gap-2 py-3 px-6 rounded-lg md:rounded-xl hover:bg-yellow-500 transition font-semibold whitespace-nowrap">
              <FaCartShopping /> Shop All Accessories
            </button>
            <h2 className="flex gap-2 items-center text-sm md:text-base">
              <TbClockHour4 /> Ends in 2 Days
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAccessories;
