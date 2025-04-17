import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, Clock, ChevronRight, Mail } from "lucide-react"

export default function Blog() {
  // Sample blog post data - in a real app, this would come from a CMS or API
  const featuredPost = {
    id: "1",
    title: "10 Essential Skincare Tips for Radiant Skin",
    excerpt:
      "Discover the secrets to achieving that perfect glow with these expert-approved skincare routines and product recommendations.",
    category: "Skincare",
    image: "/images/blog/featured-post.jpg",
    date: "May 15, 2023",
    author: "Laylo Karimova",
    readTime: "8 min read",
  }

  const blogPosts = [
    {
      id: "2",
      title: "How to Choose the Perfect Foundation for Your Skin Tone",
      excerpt:
        "Finding the right foundation can be challenging. Learn how to match your skin tone and type for a flawless finish.",
      category: "Makeup",
      image: "/images/blog/post-1.jpg",
      date: "April 28, 2023",
      author: "Sabina Aliyeva",
      readTime: "6 min read",
    },
    {
      id: "3",
      title: "The Ultimate Guide to Anti-Aging Skincare",
      excerpt:
        "Start your anti-aging routine early with these preventative measures and product recommendations for all ages.",
      category: "Skincare",
      image: "/images/blog/post-2.jpg",
      date: "April 15, 2023",
      author: "Aziza Usmanova",
      readTime: "10 min read",
    },
    {
      id: "4",
      title: "Summer Makeup Trends You Need to Try",
      excerpt: "From glowing skin to bold colors, discover the hottest makeup trends for the summer season.",
      category: "Makeup",
      image: "/images/blog/post-3.jpg",
      date: "April 5, 2023",
      author: "Laylo Karimova",
      readTime: "5 min read",
    },
    {
      id: "5",
      title: "Natural Ingredients That Transform Your Skin",
      excerpt:
        "Discover the power of natural ingredients like aloe vera, honey, and tea tree oil for beautiful, healthy skin.",
      category: "Natural Beauty",
      image: "/images/blog/post-4.jpg",
      date: "March 22, 2023",
      author: "Sabina Aliyeva",
      readTime: "7 min read",
    },
    {
      id: "6",
      title: "How to Build a Skincare Routine for Sensitive Skin",
      excerpt: "Sensitive skin requires special care. Learn how to create a gentle yet effective skincare routine.",
      category: "Skincare",
      image: "/images/blog/post-5.jpg",
      date: "March 10, 2023",
      author: "Aziza Usmanova",
      readTime: "8 min read",
    },
    {
      id: "7",
      title: "The Benefits of Using Faberlic Oxygen Products",
      excerpt:
        "Explore how Faberlic's unique oxygen-enriched formulas can revitalize your skin and improve its appearance.",
      category: "Product Guides",
      image: "/images/blog/post-6.jpg",
      date: "February 28, 2023",
      author: "Laylo Karimova",
      readTime: "9 min read",
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Skincare", count: 10 },
    { name: "Makeup", count: 8 },
    { name: "Natural Beauty", count: 5 },
    { name: "Product Guides", count: 7 },
    { name: "Lifestyle", count: 4 },
  ]

  const popularPosts = [
    {
      id: "8",
      title: "5 Minute Makeup Routine for Busy Mornings",
      image: "/images/blog/popular-1.jpg",
      date: "March 5, 2023",
    },
    {
      id: "9",
      title: "How to Properly Layer Your Skincare Products",
      image: "/images/blog/popular-2.jpg",
      date: "February 18, 2023",
    },
    {
      id: "10",
      title: "The Best Faberlic Products for Dry Skin",
      image: "/images/blog/popular-3.jpg",
      date: "January 30, 2023",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#B93160] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LAYLO Beauty Blog</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover beauty tips, skincare guides, and lifestyle inspiration from our experts
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-5 pr-12 rounded-full border-none focus:ring-2 focus:ring-[#B93160]/50 shadow-md"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#B93160]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-[#B93160] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} {category.count > 0 && <span>({category.count})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Featured Article</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 md:h-96 w-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#B93160] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-[#B93160] transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-[#B93160] font-medium hover:underline"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Latest Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#B93160] text-white text-xs font-bold px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-[#B93160] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3 gap-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#B93160] text-sm font-medium hover:underline"
                      >
                        Read More <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 border rounded-md text-gray-500 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 border rounded-md text-white bg-[#B93160]">1</button>
                  <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
                </nav>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-8">
              {/* Newsletter Signup */}
              <div className="bg-[#FDF2F8] rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest beauty tips and exclusive offers delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full py-3 px-4 pr-10 rounded-lg border-gray-200 focus:ring-[#B93160] focus:border-[#B93160]"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  <button className="w-full bg-[#B93160] hover:bg-[#B93160]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex items-center gap-3">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-[#B93160] transition-colors line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-[#B93160] transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#B93160] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Learn More About Faberlic Products?
            </h2>
            <p className="text-white/90 mb-8 md:text-lg">
              Join our community to get personalized beauty advice and exclusive access to premium products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/community"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join Our Community
              </Link>
              <Link
                href="/consulting"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
