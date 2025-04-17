"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useTranslation } from "@/lib/language-context"

export default function CartDropdown() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart()
  const { t } = useTranslation()
  const cartRef = useRef<HTMLDivElement>(null)

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && isOpen) {
        closeCart()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    // Prevent scrolling when cart is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, closeCart])

  // Handle escape key to close cart
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeCart()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col"
      >
        {/* Cart Header */}
        <div className="p-4 border-b flex items-center justify-between bg-pink-50">
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 text-pink-600 mr-2" />
            <h2 className="text-lg font-bold text-gray-800">
              {t("cart.title")} ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">{t("cart.empty")}</p>
              <Link
                href="/products"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={closeCart}
              >
                {t("cart.shopNow")}
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex border-b pb-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-gray-800 font-medium hover:text-pink-600 line-clamp-2"
                        onClick={closeCart}
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-1 text-gray-600">
                      {(item.product.salePrice || item.product.price).toLocaleString()} {t("product.currency")}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300 text-sm">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Increase quantity"
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-gray-600">{t("cart.subtotal")}</span>
              <span className="font-bold text-gray-800">
                {subtotal.toLocaleString()} {t("product.currency")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={closeCart}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {t("cart.continueShopping")}
              </button>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-center"
              >
                {t("cart.checkout")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
