import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDropdown from "../components/CartDropdown";
import { CartProvider } from "@/lib/cart-context";
import { LanguageProvider } from "@/lib/language-context";
import FloatingChat from "@/components/FloatingChat";
import SocialBar from "@/components/SocialBar";
import { UIProvider } from "@/lib/ui-context"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "LAYLO - Beauty Products and Community",
  description:
    "Discover premium beauty products and join our exclusive community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <UIProvider>
          <LanguageProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
                <CartDropdown />
                <FloatingChat />
                <SocialBar />
              </div>
            </CartProvider>
          </LanguageProvider>
        </UIProvider>
      </body>
    </html>
  );
}
