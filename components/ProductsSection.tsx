"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";

import { getTopProducts } from "../lib/products";
import { useTranslation } from "@/lib/language-context";

export default function ProductsSection() {
  const { t } = useTranslation();
  const products = getTopProducts();

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {t("home.trendingProducts")}
        </h2>
        <Link
          href="/products"
          className="text-pink-600 hover:text-pink-700 font-medium"
        >
          {t("home.viewAll")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
