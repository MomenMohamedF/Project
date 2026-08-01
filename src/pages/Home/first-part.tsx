import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroScene3D = lazy(() => import("@/components/3d/HeroScene3D"));

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isRtl = i18n.dir() === "rtl";

  return (
    <section className="relative w-full min-h-[560px] h-[78vh] sm:h-[74vh] md:h-[82vh] lg:h-[88vh] max-h-[960px] overflow-hidden bg-[#08080c] transition-all duration-700 dark:bg-gray-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene3D
            key={isRtl ? "hero-rtl" : "hero-ltr"}
            isRtl={isRtl}
            onReady={() => setIsLoading(false)}
          />
        </Suspense>
        <div
          className={`absolute inset-0 ${
            isRtl
              ? "bg-gradient-to-l from-black/75 via-black/35 md:via-black/15 to-transparent md:to-black/10"
              : "bg-gradient-to-r from-black/75 via-black/35 md:via-black/15 to-transparent md:to-black/10"
          }`}
          aria-hidden
        />
        <div
          className="absolute inset-0 md:hidden bg-gradient-to-t from-black/85 via-black/25 to-black/40"
          aria-hidden
        />
        <div
          className={`absolute inset-0 ${
            isRtl
              ? "bg-[radial-gradient(ellipse_70%_50%_at_25%_45%,rgba(212,175,55,0.2),transparent_60%)]"
              : "bg-[radial-gradient(ellipse_70%_50%_at_75%_45%,rgba(212,175,55,0.2),transparent_60%)]"
          }`}
          aria-hidden
        />
      </div>

      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#08080c] transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-Yprimary border-t-transparent rounded-full animate-spin mb-5 sm:mb-6" />
            <p className="text-white/80 font-medium tracking-normal text-xs sm:text-sm uppercase animate-pulse px-4 text-center">
              {t("home.hero.loading")}
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 flex h-full w-full items-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12">
        <div
          className={`w-full max-w-xl md:max-w-2xl lg:max-w-[42rem] text-start animate-in fade-in duration-1000 ease-out ${
            isRtl ? "slide-in-from-right-8" : "slide-in-from-left-8"
          }`}
        >
          <div className="relative ps-5 sm:ps-7 md:ps-8">
            <span
              className="absolute inset-y-0 start-0 w-[3px] rounded-full bg-gradient-to-b from-Yprimary via-Yprimary/60 to-transparent"
              aria-hidden
            />
            <span
              className="absolute -start-[3px] top-0 h-8 w-8 border-s-2 border-t-2 border-Yprimary/80"
              aria-hidden
            />
            <span
              className="absolute -start-[3px] bottom-12 sm:bottom-14 h-8 w-8 border-s-2 border-b-2 border-Yprimary/50"
              aria-hidden
            />

            <p
              className={`text-[10px] sm:text-xs font-semibold text-Yprimary/90 mb-3 sm:mb-4 ${
                isRtl ? "tracking-normal" : "tracking-[0.35em] uppercase"
              }`}
            >
              {t("common.auréne")}
            </p>

            <h1
              className={`text-[clamp(2rem,6vw,4.25rem)] font-bold text-white leading-[1.15] text-start font-playfair ${
                isRtl ? "tracking-normal" : "tracking-tight"
              }`}
            >
              {t("home.hero.title")}{" "}
              <span className="text-Yprimary drop-shadow-[0_0_24px_rgba(212,175,55,0.45)]">
                {t("home.hero.moment")}
              </span>
            </h1>

            <div className="flex items-center gap-3 my-5 sm:my-6">
              <span
                className={`h-px flex-1 max-w-[4rem] ${
                  isRtl
                    ? "bg-gradient-to-l from-Yprimary to-transparent"
                    : "bg-gradient-to-r from-Yprimary to-transparent"
                }`}
              />
              <span className="h-1.5 w-1.5 rotate-45 bg-Yprimary/90 shrink-0" aria-hidden />
            </div>

            <p className="text-[clamp(0.95rem,2vw,1.2rem)] text-gray-200/95 max-w-md md:max-w-lg font-light leading-relaxed mb-8 sm:mb-10 text-start">
              {t("home.hero.subtitle")}
            </p>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-Yprimary text-black rounded-none sm:rounded-sm font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.35)] min-h-[48px] border border-Yprimary"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {t("common.exploreCollection")}
              </span>
              <div
                className={`absolute inset-0 bg-white transition-transform duration-300 skew-x-[-12deg] group-hover:translate-x-0 ${
                  isRtl ? "translate-x-[101%] skew-x-[12deg]" : "translate-x-[-101%]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
