import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import error_en from "./translations/en/error.json";
import greeting_en from "./translations/en/greeting.json";
import error_ja from "./translations/ja/error.json";
import greeting_ja from "./translations/ja/greeting.json";

const resources = {
  en: {
    greeting: greeting_en,
    error: error_en,
  },
  ja: {
    greeting: greeting_ja,
    error: error_ja,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
