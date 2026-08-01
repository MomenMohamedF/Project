import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import DarkMode from "../mode/dark-mode";
import { useCart } from "../provider/cart";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const { state } = useCart();
  const totalCount = state.items.reduce((s, i) => s + i.quantity, 0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 border border-gray-200/10 bg-white/95 text-shadow-lg/10 shadow-sm backdrop-blur transition-all duration-300 dark:bg-gray-900/95 ${
        isScrolled
          ? "left-1/2 top-2 w-[min(92vw,72rem)] -translate-x-1/2 rounded-full"
          : "inset-x-0 w-full rounded-none"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
        <NavLink
          to="/"
          className="shrink-0 font-bold text-xl sm:text-2xl text-gray-900 dark:text-white"
        >
          {t("common.auréne")}
        </NavLink>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 font-medium text-gray-700 dark:text-white/90 sm:flex md:gap-6 lg:gap-8"
          aria-label={isRtl ? "التنقل الرئيسي" : "Main navigation"}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-Yprimary" : "hover:text-Yprimary/80 transition-colors"
            }
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-Yprimary" : "hover:text-Yprimary/80 transition-colors"
            }
          >
            {t("nav.shop")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-Yprimary" : "hover:text-Yprimary/80 transition-colors"
            }
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-Yprimary" : "hover:text-Yprimary/80 transition-colors"
            }
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4 text-gray-800 dark:text-white">
          <button
            type="button"
            className="rounded-md bg-Yprimary px-3 py-1.5 text-sm font-bold text-black sm:px-4 sm:py-2"
            onClick={toggleLanguage}
            aria-label={t("common.changeLang")}
          >
            {i18n.language.startsWith("ar") ? "EN" : "AR"}
          </button>
          <DarkMode />
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-DYprimary" : "")}
            aria-label={t("nav.login")}
          >
            <IoPersonOutline className="text-xl sm:text-2xl" />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-DYprimary" : "")}
            aria-label={t("nav.cart")}
          >
            <div className="relative">
              <BiSolidShoppingBag className="text-xl sm:text-2xl" />
              {totalCount > 0 && (
                <span className="absolute -top-2 -end-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {totalCount}
                </span>
              )}
            </div>
          </NavLink>
          <FaRegHeart className="text-xl sm:text-2xl" aria-hidden />
        </div>
      </div>
    </header>
  );
};

export default Header;
