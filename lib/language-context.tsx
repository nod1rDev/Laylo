"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import uz from "@/constants/locales/uz.json"
import ru from "@/constants/locales/ru.json"
import en from "@/constants/locales/en.json"

type Language = "uz" | "ru" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: { [key: string]: string | number }) => string
}

const translations = { uz, ru, en }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getNestedValue(obj: any, keys: string[]): string | undefined {
  let value = obj
  for (const key of keys) {
    value = value?.[key]
    if (!value) return undefined
  }
  return typeof value === "string" ? value : undefined
}

function replaceParams(
  text: string,
  params: { [key: string]: string | number }
): string {
  let result = text
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`{${key}}`, "g"), String(value))
  }
  return result
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["uz", "ru", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.split("-")[0] as Language
      if (["uz", "ru", "en"].includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const t = (key: string, params?: { [key: string]: string | number }): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }

    if (!value && language !== "en") {
      value = getNestedValue(translations.en, keys)
    }

    if (typeof value === "string" && params) {
      return replaceParams(value, params)
    }

    return value || key
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider")
  }
  return { t: context.t, language: context.language }
}
