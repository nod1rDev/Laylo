"use client";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/lib/cart-context";
import { useTranslation } from "@/lib/language-context";
import {
  getProductBySlug,
  getProductsByCategory,
  getTopProducts,
} from "@/lib/products";
import {
  CheckCircle,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingBag,
  Tag,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default  function ProductDetail({ product }: any) {
  
  const { t } = useTranslation();
  const { addItem } = useCart();

  // Get product data


  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // JSON-LD moved inside component
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "UZS",
      availability: "https://schema.org/InStock",
    },
  };

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Get related products (same category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // If no related products, show top products
  const productsToShow =
    relatedProducts.length > 0
      ? relatedProducts
      : getTopProducts(4).filter((p) => p.id !== product.id);

  // Calculate discount percentage if there's a sale price
  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-pink-600">
            {t("nav.home")}
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link href="/products" className="hover:text-pink-600">
            {t("nav.products")}
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Product Detail Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
              {product.salePrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  -{discountPercentage}%
                </div>
              )}
            </div>

            {/* Image thumbnails would go here in a real implementation */}
            <div className="grid grid-cols-4 gap-2">
              <div className="relative h-20 rounded-md overflow-hidden border-2 border-pink-600">
                <Image
                  src={product.image || "/placeholder.svg?height=80&width=80"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Placeholder thumbnails */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="relative h-20 rounded-md overflow-hidden border border-gray-200"
                >
                  <Image
                    src={product.image || "/placeholder.svg?height=80&width=80"}
                    alt={`${product.name} view ${i + 2}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-4">
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-pink-600">
                    {product.salePrice.toLocaleString()} {t("product.currency")}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.price.toLocaleString()} {t("product.currency")}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-800">
                  {product.price.toLocaleString()} {t("product.currency")}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">
                    {product.stock > 5
                      ? "In Stock"
                      : t("product.lowStock", { count: product.stock })}
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <XCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t("product.outOfStock")}</span>
                </div>
              )}
            </div>

            {/* Category */}
            <div className="flex items-center mb-6">
              <Tag className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-600 mr-2">
                {t("product.category")}:
              </span>
              <Link
                href={`/products?category=${product.category}`}
                className="text-pink-600 hover:underline"
              >
                {product.category}
              </Link>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {t("product.description")}
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="w-14 h-10 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => product.stock > 0 && addItem(product, quantity)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium ${
                  product.stock > 0
                    ? "bg-pink-600 hover:bg-pink-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={product.stock <= 0}
              >
                <ShoppingBag className="w-5 h-5" />
                {t("product.addToCart")}
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-100">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline">Wishlist</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-100">
                <Share2 className="w-5 h-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start mb-2">
                <CheckCircle className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  Free shipping on orders over 500,000 UZS
                </p>
              </div>
              <div className="flex items-start mb-2">
                <CheckCircle className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">Secure payment</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t("product.relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsToShow.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
