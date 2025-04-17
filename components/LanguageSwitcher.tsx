"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const languages = {
  uz: {
    name: "O'zbekcha",
    flag: "/flags/uz.svg"
  },
  ru: {
    name: "Русский",
    flag: "/flags/ru.svg"
  },
  en: {
    name: "English",
    flag: "/flags/en.jpg"
  },
} as const

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: "uz" | "ru" | "en") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="relative w-5 h-5 rounded-sm overflow-hidden">
          <Image
            src={languages[language].flag}
            alt={languages[language].name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium hidden sm:block">
          {languages[language].name}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          {Object.entries(languages).map(([code, { name, flag }]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as "uz" | "ru" | "en")}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                language === code ? "text-pink-600 font-medium bg-pink-50" : "text-gray-700"
              }`}
            >
              <div className="relative w-5 h-5 rounded-sm overflow-hidden">
                <Image
                  src={flag}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
