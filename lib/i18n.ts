"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
// Use relative paths instead of alias
import en from "../constants/locales/en.json";
import ru from "../constants/locales/ru.json";
import uz from "../constants/locales/uz.json";

type Translations = {
  [key: string]: any;
};

const translations: { [key: string]: Translations } = {
  en,
  ru,
  uz,
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
});

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [language, setLanguage] = useState("uz");

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("language");
//     if (savedLanguage && ["uz", "ru", "en"].includes(savedLanguage)) {
//       setLanguage(savedLanguage);
//     } else {
//       // Try to detect browser language
//       const browserLang = navigator.language.split("-")[0];
//       if (["uz", "ru", "en"].includes(browserLang)) {
//         setLanguage(browserLang);
//       }
//     }
//   }, []);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

export function useLanguage() {
  return useContext(LanguageContext);
}

// export function useTranslations() {
//   const { language } = useLanguage();

//   const t = (key: string, params?: { [key: string]: string | number }) => {
//     const keys = key.split(".");
//     let value = translations[language];

//     for (const k of keys) {
//       if (value && value[k]) {
//         value = value[k];
//       } else {
//         // Fallback to English if translation is missing
//         value = getNestedValue(en, keys);
//         if (!value) return key; // Return the key if not found in fallback
//         break;
//       }
//     }

//     if (typeof value === "string" && params) {
//       return replaceParams(value, params);
//     }

//     return value || key;
//   };

//   return t;
// }

function getNestedValue(obj: any, keys: string[]): string | undefined {
  let value = obj;

  for (const key of keys) {
    if (value && value[key]) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return typeof value === "string" ? value : undefined;
}

function replaceParams(
  text: string,
  params: { [key: string]: string | number }
): string {
  let result = text;

  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`{${key}}`, "g"), String(value));
  }

  return result;
}
