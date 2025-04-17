"use client";

import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import ProductCard from "../../components/ProductCard";

import type { Product } from "../../types/product";
import { getAllProducts, getProductsByCategory } from "@/lib/products";
import { useTranslation } from "@/lib/language-context";

export default function ProductsPage() {
  const { t } = useTranslation();
  const allProducts = getAllProducts();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories from products
  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  // Filter products based on search query and selected category
  useEffect(() => {
    let filteredProducts = allProducts;

    // Filter by category if selected
    if (selectedCategory) {
      filteredProducts = getProductsByCategory(selectedCategory);
    }

    // Filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setProducts(filteredProducts);
  }, [searchQuery, selectedCategory, allProducts]);

  // Handle category selection
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {t("nav.products")}
        </h1>
        <p className="text-gray-600">
          {products.length} {products.length === 1 ? "product" : "products"}{" "}
          {selectedCategory && `in ${selectedCategory}`}
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={`${t("search")}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:ring-pink-600 focus:border-pink-600"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
        >
          <Filter size={18} />
          {t("filters")}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Drawer */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-white p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{t("filters")}</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="mb-6">
                <h3 className="font-medium mb-2">{t("product.category")}</h3>
                <div className="space-y-2">
                  <div
                    className={`cursor-pointer p-2 rounded ${
                      selectedCategory === null
                        ? "bg-pink-100 text-pink-600"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategorySelect(null)}
                  >
                    {t("all")}
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory === category
                          ? "bg-pink-100 text-pink-600"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-pink-600 font-medium"
                >
                  <X size={16} className="mr-1" />
                  {t("clearFilters")}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Filters - Desktop Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">{t("filters")}</h2>
            <div className="mb-6">
              <h3 className="font-medium mb-2">{t("product.category")}</h3>
              <div className="space-y-2">
                <div
                  className={`cursor-pointer p-2 rounded ${
                    selectedCategory === null
                      ? "bg-pink-100 text-pink-600"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleCategorySelect(null)}
                >
                  {t("all")}
                </div>
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`cursor-pointer p-2 rounded ${
                      selectedCategory === category
                        ? "bg-pink-100 text-pink-600"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            {(selectedCategory || searchQuery) && (
              <button
                onClick={clearFilters}
                className="flex items-center text-pink-600 font-medium"
              >
                <X size={16} className="mr-1" />
                {t("clearFilters")}
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-grow">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                {t("noProductsFound")}
              </p>
              <button
                onClick={clearFilters}
                className="text-pink-600 font-medium hover:underline"
              >
                {t("clearFilters")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
