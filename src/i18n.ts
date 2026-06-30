import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },

    interpolation: {
      escapeValue: false,
    },
  });

// Handle RTL/LTR and HTML lang attribute
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

// Set initial values
document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
document.documentElement.lang = i18n.language;

export default i18n;

