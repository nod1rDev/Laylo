"use client"

import { Send, Instagram, Phone } from "lucide-react"
import { useUI } from "@/lib/ui-context"

const socialLinks = [
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/laylo",
    color: "from-blue-400 to-blue-500",
    hoverColor: "hover:from-blue-500 hover:to-blue-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/laylo",
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:from-pink-600 hover:to-rose-600"
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+998901234567",
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:from-green-600 hover:to-emerald-600"
  }
]

export default function SocialBar() {
  const { isChatOpen } = useUI()

  return (
    <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300
      ${isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="flex flex-col gap-2 md:gap-3 p-2 md:p-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end transition-all duration-300"
          >
            <span 
              className={`hidden md:block absolute right-full mr-2 px-4 py-2 bg-gradient-to-r ${link.color} 
                text-white rounded-l-full opacity-0 invisible group-hover:opacity-100 
                group-hover:visible group-hover:mr-12 transition-all duration-300 text-sm font-medium 
                whitespace-nowrap shadow-lg`}
            >
              {link.name}
            </span>
            <span className={`p-2 md:p-3 bg-gradient-to-r ${link.color} text-white rounded-full 
              shadow-lg transform transition-all duration-300 group-hover:scale-110 
              group-hover:shadow-xl relative z-10`}
            >
              <link.icon size={16} className="md:w-5 md:h-5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}