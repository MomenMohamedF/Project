import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 md:py-16 dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
        {/*  Footer div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* div1 */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
              {t("common.auréne")}
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              {t("common.footer.tagline")}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-Yprimary transition"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-Yprimary transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-Yprimary transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* shop div */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 font-playfair">
              {t("common.footer.shop")}
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <Link
                  to="/shop/watches"
                  className="hover:text-Yprimary transition"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {t("common.watches")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/bags"
                  className="hover:text-Yprimary transition"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {t("common.bags")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/bracelets"
                  className="hover:text-Yprimary transition"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {t("common.bracelets")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/new-arrivals"
                  className="hover:text-Yprimary transition"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {t("common.newArrivals")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support div */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 font-playfair">
              {t("common.footer.support")}
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition">
                  {t("common.footer.contactUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/support/size-guide"
                  className="hover:text-[#D4AF37] transition"
                >
                  {t("common.footer.sizeGuide")}
                </Link>
              </li>
              <li>
                <Link
                  to="/support/returns"
                  className="hover:text-[#D4AF37] transition"
                >
                  {t("common.footer.returns")}
                </Link>
              </li>
              <li>
                <Link
                  to="/support/shipping"
                  className="hover:text-[#D4AF37] transition"
                >
                  {t("common.footer.shipping")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter div */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 font-playfair">
              {t("common.footer.newsletter")}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              {t("common.footer.newsletterSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("common.footer.emailPlaceholder")}
                className="flex-1 bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37]"
              />
              <button className="bg-[#D4AF37] text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition text-sm whitespace-nowrap">
                {t("common.subscribe")}
              </button>
            </div>
          </div>
        </div>
        {/* line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* copy right */}
        <div className="text-center text-gray-500 text-sm md:text-base">
          <p>{t("common.footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

