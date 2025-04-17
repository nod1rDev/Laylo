"use client"

import Link from "next/link"
import { Facebook, Instagram, TextIcon as Telegram } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LAYLO</h3>
            <p className="mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-pink-400">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400">
                <Instagram />
              </a>
              <a href="https://t.me" className="hover:text-pink-400">
                <Telegram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-pink-400">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-pink-400">
                  {t("nav.community")}
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-pink-400">
                  {t("nav.guide")}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-pink-400">
                  {t("nav.aboutUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <p className="mb-2">{t("footer.phone")}: +998 90 123 45 67</p>
            <p className="mb-2">Email: info@laylo.uz</p>
            <p>{t("footer.address")}</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} LAYLO. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
