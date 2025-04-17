"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Smile } from "lucide-react"
import { useTranslation } from "@/lib/language-context"
import Image from "next/image"
import { useUI } from "@/lib/ui-context"

export default function FloatingChat() {
  const { isChatOpen, setIsChatOpen } = useUI()
  const { t } = useTranslation()

  return (
    <div className="fixed bottom-20 right-4 z-30 md:bottom-6">
      {isChatOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[320px] md:w-[380px] h-[480px] flex flex-col overflow-hidden 
          transition-all duration-500 ease-in-out transform translate-y-0 opacity-100"
          style={{ 
            animation: 'slideIn 0.5s ease-out',
          }}
        >
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src="/images/support-avatar.jpg" 
                    alt="Support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">LAYLO Support</h3>
                  <p className="text-xs text-pink-100">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            <div className="bg-white p-3 rounded-xl rounded-tl-none max-w-[80%] shadow-sm">
              {t("chat.greeting", { name: "LAYLO Assistant" })}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <button className="p-2 text-gray-400 hover:text-pink-500 transition-colors">
                <Smile size={20} />
              </button>
              <input
                type="text"
                placeholder={t("chat.placeholder")}
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="group bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-500 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="text-white transition-transform duration-500" />
        </button>
      )}
    </div>
  )
}

// Add this at the end of the file or in your global CSS
const styles = `
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document?.head?.appendChild(styleSheet);