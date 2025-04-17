import Image from "next/image"
import Link from "next/link"
import {
  Users,
  Gift,
  TrendingUp,
  Award,
  Star,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Percent,
  Headphones,
  Calendar,
  ChevronDown,
} from "lucide-react"

export default function Community() {
  // Sample success stories data - in a real app, this would come from a CMS or API
  const successStories = [
    {
      id: "1",
      name: "Dilnoza Malikova",
      role: "Community Leader",
      image: "/images/community/success-1.jpg",
      story:
        "I joined LAYLO in 2019 as a customer looking for better skincare products. Today, I lead a team of 50 women and have built a business that allows me to support my family while helping others discover their beauty potential.",
      achievement: "Monthly income: 12,000,000 UZS",
      years: "4 years with LAYLO",
    },
    {
      id: "2",
      name: "Gulnora Tashpulatova",
      role: "Beauty Consultant",
      image: "/images/community/success-2.jpg",
      story:
        "As a stay-at-home mom, I was looking for a flexible opportunity to earn income. LAYLO gave me not just financial independence, but also a supportive community of women who have become like family.",
      achievement: "Monthly income: 8,500,000 UZS",
      years: "3 years with LAYLO",
    },
    {
      id: "3",
      name: "Madina Karimova",
      role: "New Member",
      image: "/images/community/success-3.jpg",
      story:
        "I joined LAYLO just 6 months ago after seeing the amazing results my friend had with Faberlic products. The training and support I've received has been incredible, and I'm already seeing growth in my customer base.",
      achievement: "Monthly income: 3,200,000 UZS",
      years: "6 months with LAYLO",
    },
  ]

  // Sample community stats
  const communityStats = [
    { number: "5,000+", label: "Active Members" },
    { number: "120+", label: "Community Leaders" },
    { number: "25+", label: "Cities in Uzbekistan" },
    { number: "8+", label: "Years of Growth" },
  ]

  // Sample FAQ data
  const faqs = [
    {
      question: "What is the LAYLO community?",
      answer:
        "The LAYLO community is a network of women who are passionate about beauty, personal growth, and entrepreneurship. We support each other in building businesses around Faberlic products while providing access to premium beauty solutions at special prices.",
    },
    {
      question: "How much does it cost to join?",
      answer:
        "Joining the LAYLO community is completely free! There are no membership fees or mandatory purchases. You only pay for the products you choose to buy for yourself or sell to customers.",
    },
    {
      question: "Do I need to have sales experience?",
      answer:
        "Not at all! Many of our most successful members had no prior sales experience. We provide comprehensive training, marketing materials, and ongoing support to help you succeed, regardless of your background.",
    },
    {
      question: "How much time do I need to commit?",
      answer:
        "The beauty of being part of LAYLO is that you can work on your own schedule. Some members dedicate just a few hours a week, while others treat it as a full-time business. You decide how much time you want to invest based on your goals and availability.",
    },
    {
      question: "How do I earn money as a LAYLO member?",
      answer:
        "As a LAYLO member, you earn through a combination of retail profits (the difference between wholesale and retail prices) and commissions based on your personal sales and the sales of team members you recruit and mentor.",
    },
  ]

  // Sample benefits data
  const benefits = [
    {
      icon: <Percent className="h-10 w-10 text-pink-600" />,
      title: "Exclusive Discounts",
      description: "Get 20-40% off on all Faberlic products for yourself and earn profit when selling to customers.",
    },
    {
      icon: <Users className="h-10 w-10 text-pink-600" />,
      title: "Supportive Community",
      description:
        "Join a network of like-minded women who support and inspire each other on their beauty and business journeys.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-pink-600" />,
      title: "Business Opportunity",
      description: "Build your own flexible business with low startup costs and unlimited income potential.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-pink-600" />,
      title: "Expert Training",
      description: "Access comprehensive training on products, sales techniques, and business building strategies.",
    },
    {
      icon: <Gift className="h-10 w-10 text-pink-600" />,
      title: "Rewards & Recognition",
      description: "Earn bonuses, gifts, and recognition as you achieve milestones in your LAYLO journey.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-pink-600" />,
      title: "Flexible Schedule",
      description: "Work on your own terms and create a schedule that fits your lifestyle and family commitments.",
    },
  ]

  // Sample joining steps
  const joiningSteps = [
    {
      number: 1,
      title: "Register Online",
      description:
        "Fill out our simple registration form to create your LAYLO account and get immediate access to member benefits.",
      icon: <Users className="h-8 w-8 text-white" />,
    },
    {
      number: 2,
      title: "Attend Orientation",
      description:
        "Join a virtual or in-person orientation session to learn about products, business opportunities, and meet your mentor.",
      icon: <MessageCircle className="h-8 w-8 text-white" />,
    },
    {
      number: 3,
      title: "Select Your Starter Kit",
      description:
        "Choose from our range of starter kits designed to help you begin your beauty business with essential products and tools.",
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
    },
    {
      number: 4,
      title: "Complete Training",
      description:
        "Access our comprehensive training materials to become an expert on Faberlic products and business strategies.",
      icon: <Award className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B93160]/90 to-[#B93160]/70 z-10" />
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image
            src="/images/community/community-hero.jpg"
            alt="LAYLO Community"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Join Our LAYLO Community</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Discover a supportive network of women who are building beauty businesses, creating financial
              independence, and lifting each other up
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="#join-now"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join Now
              </Link>
              <Link
                href="#how-it-works"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-[#FDF2F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {communityStats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-[#B93160] mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Join LAYLO?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our community offers more than just beautiful products – we provide opportunities for growth, connection,
              and financial independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How to Join LAYLO</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Becoming part of our community is simple and straightforward – here's how to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {joiningSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#B93160] rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="pt-8 p-6 text-center">
                  <div className="w-16 h-16 bg-[#B93160] rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#join-now"
              className="inline-flex items-center bg-[#B93160] hover:bg-[#B93160]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet women who have transformed their lives through the LAYLO community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{story.name}</h3>
                  <p className="text-[#B93160] font-medium mb-3">{story.role}</p>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <Award className="w-4 h-4 mr-2 text-[#B93160]" />
                    <span>{story.achievement}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-[#B93160]" />
                    <span>{story.years}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/about-us" className="inline-flex items-center text-[#B93160] font-medium hover:underline">
              Read more success stories <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-[#FDF2F8] px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear directly from women whose lives have been transformed through LAYLO
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg italic">
              "Joining LAYLO has been the best decision I've ever made. Not only have I found financial independence,
              but I've also discovered a community of supportive women who lift each other up. The training and
              mentorship I've received have been invaluable, and I'm proud to represent products that truly make a
              difference in people's lives."
            </p>
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/images/community/testimonial.jpg" alt="Testimonial" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Nargiza Umarova</h4>
                <p className="text-[#B93160]">Community Leader, 5 years with LAYLO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about joining and being part of the LAYLO community
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Link href="/contact" className="inline-flex items-center text-[#B93160] font-medium hover:underline">
              Contact our community team <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Now Section */}
      <section id="join-now" className="py-16 md:py-24 bg-[#B93160] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your LAYLO Journey?</h2>
              <p className="text-white/90 mb-6 text-lg">
                Join our community today and discover the joy of building a beauty business while connecting with
                like-minded women.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">
                    <strong className="text-white">Free registration</strong> with no startup costs or fees
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">
                    <strong className="text-white">Immediate access</strong> to product discounts and training
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">
                    <strong className="text-white">Personal mentor</strong> to guide you every step of the way
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">
                    <strong className="text-white">Flexible schedule</strong> that works around your life
                  </span>
                </li>
              </ul>
              <Link
                href="/guide"
                className="inline-flex items-center bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Detailed Guide <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Join LAYLO Community</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    placeholder="+998 __ ___ ____"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    placeholder="Your city"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                    What interests you most about LAYLO?
                  </label>
                  <select
                    id="interests"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    required
                  >
                    <option value="">Select your primary interest</option>
                    <option value="products">Using quality products at a discount</option>
                    <option value="part-time">Building a part-time business</option>
                    <option value="full-time">Creating a full-time career</option>
                    <option value="community">Being part of a supportive community</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us? (Optional)
                  </label>
                  <input
                    type="text"
                    id="referral"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                    placeholder="Friend, social media, etc."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B93160] hover:bg-[#B93160]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Join Now
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By joining, you agree to our community guidelines and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Community Events & Training</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              As a LAYLO member, you'll have access to exclusive events, training sessions, and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/community/event-1.jpg" alt="Product Training" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Product Training</h3>
                <p className="text-gray-600 mb-4">
                  Regular training sessions on new products, ingredients, and application techniques to keep you at the
                  forefront of beauty expertise.
                </p>
                <div className="flex items-center text-sm text-[#B93160]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Twice monthly</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/community/event-2.jpg" alt="Business Workshops" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Business Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Learn essential business skills from successful leaders, including sales techniques, customer service,
                  and team building.
                </p>
                <div className="flex items-center text-sm text-[#B93160]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Monthly</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/community/event-3.jpg" alt="Recognition Galas" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Recognition Galas</h3>
                <p className="text-gray-600 mb-4">
                  Celebrate achievements, recognize top performers, and connect with the wider LAYLO community at our
                  special events.
                </p>
                <div className="flex items-center text-sm text-[#B93160]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Quarterly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#B93160] to-[#D23D6D] px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-white/10 p-3 rounded-full mb-8">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Life with LAYLO</h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of women who have discovered beauty, community, and financial independence through LAYLO.
            Your journey starts today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#join-now"
              className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Join Now
            </a>
            <Link
              href="/guide"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              View Detailed Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
