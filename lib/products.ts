import type { Product } from "@/types/product"

// Sample product data (in a real app, this would come from an API or database)
const products: Product[] = [
  {
    id: "1",
    name: "Faberlic Skin Expert Serum",
    slug: "faberlic-skin-expert-serum",
    image: "/images/product1.jpg",
    price: 120000,
    salePrice: 99000,
    stock: 15,
    description: "Advanced serum with hyaluronic acid for deep hydration and skin rejuvenation.",
    category: "skincare",
  },
  {
    id: "2",
    name: "Faberlic Volumizing Mascara",
    slug: "faberlic-volumizing-mascara",
    image: "/images/product2.jpg",
    price: 85000,
    stock: 8,
    description: "Dramatic volume mascara for stunning lashes. Long-lasting and smudge-proof formula.",
    category: "makeup",
  },
  {
    id: "3",
    name: "Faberlic Oxygen Moisturizer",
    slug: "faberlic-oxygen-moisturizer",
    image: "/images/product3.jpg",
    price: 110000,
    salePrice: 89000,
    stock: 3,
    description: "Lightweight moisturizer with oxygen complex for all skin types. Provides 24-hour hydration.",
    category: "skincare",
  },
  {
    id: "4",
    name: "Faberlic Matte Lipstick",
    slug: "faberlic-matte-lipstick",
    image: "/images/product4.jpg",
    price: 75000,
    stock: 0,
    description: "Long-lasting matte lipstick with rich pigmentation and comfortable wear.",
    category: "makeup",
  },
  {
    id: "5",
    name: "Faberlic Anti-Aging Night Cream",
    slug: "faberlic-anti-aging-night-cream",
    image: "/images/product5.jpg",
    price: 150000,
    salePrice: 129000,
    stock: 12,
    description: "Intensive night cream that works while you sleep to reduce fine lines and wrinkles.",
    category: "skincare",
  },
  {
    id: "6",
    name: "Faberlic Perfume Eau de Parfum",
    slug: "faberlic-perfume-eau-de-parfum",
    image: "/images/product6.jpg",
    price: 180000,
    stock: 7,
    description: "Elegant fragrance with notes of jasmine, vanilla, and sandalwood for a lasting impression.",
    category: "fragrance",
  },
  {
    id: "7",
    name: "Faberlic Hair Repair Mask",
    slug: "faberlic-hair-repair-mask",
    image: "/images/product7.jpg",
    price: 95000,
    salePrice: 79000,
    stock: 20,
    description: "Intensive hair mask that repairs damaged hair and restores shine and softness.",
    category: "haircare",
  },
  {
    id: "8",
    name: "Faberlic Cleansing Gel",
    slug: "faberlic-cleansing-gel",
    image: "/images/product8.jpg",
    price: 65000,
    stock: 5,
    description: "Gentle cleansing gel that removes makeup and impurities without drying the skin.",
    category: "skincare",
  },
]

// Get all products
export function getAllProducts(): Product[] {
  return products
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

// Get top products (featured or bestsellers)
export function getTopProducts(limit = 4): Product[] {
  return products.slice(0, limit)
}

// Search products
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
  )
}
