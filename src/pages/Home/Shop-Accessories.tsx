import { FaCartShopping } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShopAccessories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-8 max-w-7xl mx-auto">
      <div className="bg-linear-to-r from-Rprimary to-black font-[Poppins] rounded-2xl md:rounded-3xl">
        <div className="flex flex-col justify-center items-center text-center text-white py-8 md:py-12 gap-4 px-4">
          <h1 className="font-bold text-2xl md:text-3xl">{t("home.shopAccessories.title")}</h1>
          <h3 className="text-sm md:text-xl">
            {t("home.shopAccessories.subtitle")}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-4 w-full">
            <button
              onClick={() => navigate("/shop")}
              className="w-full md:w-auto bg-Yprimary justify-center items-center text-black flex gap-2 py-3 px-6 rounded-lg md:rounded-xl hover:bg-yellow-500 transition font-semibold whitespace-nowrap"
            >
              <FaCartShopping /> {t("home.shopAccessories.shopAll")}
            </button>
            <h2 className="flex gap-2 items-center text-sm md:text-base">
              <TbClockHour4 /> {t("home.shopAccessories.endsIn")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAccessories;

