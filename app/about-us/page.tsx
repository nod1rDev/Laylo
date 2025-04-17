import Image from "next/image"
import Link from "next/link"
import { Heart, Star, Users, Award, MessageCircle, ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B93160]/90 to-[#B93160]/70 z-10" />
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image src="/images/about-hero.jpg" alt="LAYLO Team" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Empowering women through beauty, community, and opportunity
            </p>
            <div className="flex justify-center space-x-3">
              <Link
                href="#mission"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Our Mission
              </Link>
              <Link
                href="/community"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The LAYLO Journey</h2>
              <p className="text-gray-600 mb-4">
                LAYLO was founded in 2018 with a simple yet powerful vision: to create a community where women could
                access premium beauty products while building meaningful connections and opportunities for personal
                growth.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small group of friends sharing their love for Faberlic products has grown into a
                thriving community of thousands of women across Uzbekistan, united by their passion for beauty and
                self-improvement.
              </p>
              <p className="text-gray-600">
                Today, LAYLO is more than just a beauty brand – it's a movement that empowers women to look and feel
                their best, while providing them with the tools and support to achieve their personal and professional
                goals.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about-story.jpg" alt="LAYLO Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 md:py-24 bg-[#FDF2F8] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At the heart of everything we do is our commitment to empowering women and creating positive change in
              their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#B93160] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide women with access to high-quality beauty products that enhance their natural beauty, while
                creating a supportive community that fosters personal growth, financial independence, and meaningful
                connections.
              </p>
              <p className="text-gray-600">
                We believe that when women support each other, incredible things happen. That's why we're dedicated to
                building a community where every woman can thrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#B93160] rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become the leading beauty community in Central Asia, known for our premium products, exceptional
                customer experience, and the positive impact we make in women's lives.
              </p>
              <p className="text-gray-600">
                We envision a world where every woman has the opportunity to look and feel her best, pursue her
                passions, and achieve financial independence on her own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">These core principles guide everything we do at LAYLO</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of women supporting women, creating spaces where meaningful connections can
                flourish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to offering only the highest quality products that deliver real results and exceed
                expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600">
                We empower our community with knowledge about beauty, skincare, and business to help them make informed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind LAYLO who work tirelessly to bring our vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/images/team-1.jpg" alt="Laylo Karimova" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Laylo Karimova</h3>
                <p className="text-[#B93160] font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 10 years of experience in the beauty industry, Laylo founded LAYLO with a vision to empower
                  women through beauty and community.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/images/team-2.jpg" alt="Sabina Aliyeva" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Sabina Aliyeva</h3>
                <p className="text-[#B93160] font-medium mb-3">Community Director</p>
                <p className="text-gray-600">
                  Sabina leads our community initiatives, ensuring that every member feels supported and has the
                  resources they need to succeed.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/images/team-3.jpg" alt="Aziza Usmanova" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Aziza Usmanova</h3>
                <p className="text-[#B93160] font-medium mb-3">Beauty Expert</p>
                <p className="text-gray-600">
                  With her extensive knowledge of skincare and beauty, Aziza helps our community members find the
                  perfect products for their unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from the women whose lives have been transformed through LAYLO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Joining LAYLO has been one of the best decisions I've ever made. Not only have I discovered amazing
                products that have transformed my skin, but I've also found a supportive community of women who lift
                each other up."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/testimonial-1.jpg" alt="Dilnoza" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Dilnoza M.</h4>
                  <p className="text-sm text-gray-500">Member since 2020</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a busy mom, I never thought I'd have time for a skincare routine, let alone a side business. LAYLO
                has given me both – amazing products that make me feel beautiful and an opportunity to earn income on my
                own schedule."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/testimonial-2.jpg" alt="Gulnora" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Gulnora T.</h4>
                  <p className="text-sm text-gray-500">Member since 2019</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The quality of Faberlic products through LAYLO is exceptional, but what truly sets this community apart
                is the genuine care and support. I've learned so much about beauty and business, and I've made lifelong
                friends along the way."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/testimonial-3.jpg" alt="Madina" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Madina K.</h4>
                  <p className="text-sm text-gray-500">Member since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#B93160] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
              Become part of the LAYLO family and discover a world of beauty, opportunity, and connection.
            </p>
            <Link
              href="/guide"
              className="inline-flex items-center bg-white text-[#B93160] hover:bg-[#FDF2F8] px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
