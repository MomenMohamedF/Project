import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SummerCollection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[url(../../../assets/images/SummerCollection.png)] h-48 mt-6 sm:h-60 md:h-80 lg:h-[60vh] bg-cover bg-center flex items-center justify-center mx-0">
      <div className="text-center  px-6 sm:px-12 py-8 sm:py-12 rounded-lg">
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg mb-2">
          {t("home.summerCollection.title")}
        </h2>
        <p className="text-white/90 text-base sm:text-lg md:text-xl drop-shadow-md mb-6">
          {t("home.summerCollection.off")}
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-Yprimary text-black px-4 sm:px-10 py-1.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition text-sm sm:text-lg"
        >
          {t("home.summerCollection.shop")}
        </button>
      </div>
    </div>
  );
};

export default SummerCollection;

