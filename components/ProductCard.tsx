"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import type { Product } from "../types/product"
import { useTranslation } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"


interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const {t} = useTranslation()
  const { id, name, slug, image, price, salePrice, stock } = product
  const { addItem } = useCart()

  const discountPercentage = salePrice ? Math.round(((price - salePrice) / price) * 100) : 0

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${slug}`}>
        <div className="relative h-64 w-full">
          <Image src={image || "/images/placeholder.jpg"} alt={name} fill className="object-contain" />
          {salePrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition-colors mb-2">{name}</h3>
        </Link>

        <div className="flex justify-between items-center">
          <div>
            {salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-pink-600">
                  {salePrice.toLocaleString()} {t("product.currency")}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {price.toLocaleString()} {t("product.currency")}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">
                {price.toLocaleString()} {t("product.currency")}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault()
              if (stock > 0) {
                addItem(product)
              }
            }}
            className={`${
              stock > 0 ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-300 cursor-not-allowed"
            } text-white p-2 rounded-full transition-colors`}
            aria-label={t("product.addToCart")}
            disabled={stock === 0}
          >
            <ShoppingBag size={20} />
          </button>
        </div>

        {stock <= 5 && stock > 0 && (
          <p className="text-sm text-orange-600 mt-2">{t("product.lowStock", { count: stock })}</p>
        )}

        {stock === 0 && <p className="text-sm text-red-600 mt-2">{t("product.outOfStock")}</p>}
      </div>
    </div>
  )
}
