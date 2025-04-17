import Image from "next/image"
import Link from "next/link"
import {
  UserPlus,
  FileText,
  ShoppingBag,
  Award,
  Users,
  Gift,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Headphones,
  ChevronDown,
  Star,
  Calendar,
  Sparkles,
} from "lucide-react"

export default function GuidePage() {
  // Sample FAQ data
  const faqs = [
    {
      question: "Do I need to pay anything to join LAYLO?",
      answer:
        "No, joining LAYLO as a member is completely free. There are no registration fees or mandatory purchases. You only pay for the products you choose to buy for yourself or sell to customers.",
    },
    {
      question: "How much can I earn as a LAYLO consultant?",
      answer:
        "Your earnings depend on your level of engagement and sales efforts. New consultants typically earn 20-30% on personal sales. As you build a team, you can earn additional commissions on team sales. Many of our active consultants earn 300,000-500,000 UZS monthly, while team leaders can earn several million UZS monthly.",
    },
    {
      question: "Do I need to maintain a minimum sales volume?",
      answer:
        "To remain an active consultant, we recommend placing at least one order every 3 months. However, there are no strict minimum sales requirements. Your status and benefits are based on your activity level.",
    },
    {
      question: "Can I do this part-time?",
      answer:
        "Most of our consultants start part-time, dedicating just a few hours per week. The flexible nature of the business allows you to work around your existing commitments and gradually increase your involvement as your business grows.",
    },
    {
      question: "What support will I receive after joining?",
      answer:
        "You'll be assigned a personal mentor who will guide you through your first steps. You'll also gain access to our training platform with video tutorials, product information, and business-building strategies. Regular online and offline meetings provide ongoing education and support.",
    },
  ]

  // Sample benefits data
  const benefits = [
    {
      icon: <Gift className="h-10 w-10 text-pink-600" />,
      title: "Product Discounts",
      description: "Enjoy 20-40% off all Faberlic products for personal use and profit from sales to customers.",
    },
    {
      icon: <Users className="h-10 w-10 text-pink-600" />,
      title: "Supportive Community",
      description: "Join a network of like-minded women who support and inspire each other.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-pink-600" />,
      title: "Business Growth",
      description: "Build your own flexible business with low startup costs and unlimited income potential.",
    },
  ]

  // Sample steps data
  const steps = [
    {
      number: 1,
      title: "Register Online",
      description:
        "Complete our simple registration form to create your LAYLO account. This takes just 5 minutes and requires your basic contact information and ID details.",
      icon: <UserPlus className="h-8 w-8 text-white" />,
      image: "/images/guide/step1.jpg",
      details: [
        "Fill out the online registration form",
        "Provide your contact information",
        "Create your account credentials",
        "Verify your email address",
      ],
    },
    {
      number: 2,
      title: "Complete Orientation",
      description:
        "Attend a virtual or in-person orientation session where you'll learn about Faberlic products, business opportunities, and meet your personal mentor.",
      icon: <FileText className="h-8 w-8 text-white" />,
      image: "/images/guide/step2.jpg",
      details: [
        "Schedule your orientation session",
        "Learn about Faberlic's product range",
        "Understand the business opportunity",
        "Meet your personal mentor",
      ],
    },
    {
      number: 3,
      title: "Place Your First Order",
      description:
        "Select your starter kit or place your first product order. Choose from our range of specially designed starter packages or select individual products you'd like to try.",
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      image: "/images/guide/step3.jpg",
      details: [
        "Browse available starter kits",
        "Select products that interest you",
        "Place your first order with consultant discount",
        "Receive your products within 3-5 business days",
      ],
    },
    {
      number: 4,
      title: "Start Your Journey",
      description:
        "Begin using the products, sharing your experience, and building your business. Access our comprehensive training materials to become an expert on Faberlic products.",
      icon: <Award className="h-8 w-8 text-white" />,
      image: "/images/guide/step4.jpg",
      details: [
        "Complete the initial training modules",
        "Try your products and share experiences",
        "Start introducing Faberlic to friends and family",
        "Set your business goals with your mentor",
      ],
    },
  ]

  // Sample success stories
  const successStories = [
    {
      name: "Dilnoza M.",
      role: "Team Leader",
      image: "/images/guide/success1.jpg",
      quote:
        "I joined LAYLO 3 years ago as a stay-at-home mom looking for extra income. Today, I lead a team of 45 consultants and earn more than I did in my corporate job, all while having the flexibility to be there for my family.",
      rating: 5,
    },
    {
      name: "Gulnora T.",
      role: "Senior Consultant",
      image: "/images/guide/success2.jpg",
      quote:
        "Starting with LAYLO was the best decision I've made. The training and support helped me build confidence, and now I have regular customers who trust my recommendations. I love helping others feel beautiful.",
      rating: 5,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B93160]/90 to-[#B93160]/70 z-10" />
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image src="/images/guide/guide-hero.jpg" alt="LAYLO Guide" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Your Guide to Joining LAYLO</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Follow our simple step-by-step process to become a LAYLO member and start your beauty business journey
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#steps"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Steps
              </a>
              <a
                href="#join-now"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Join LAYLO?</h2>
              <p className="text-gray-600 mb-6">
                LAYLO offers more than just beautiful products – we provide opportunities for personal growth, financial
                independence, and meaningful connections with like-minded women.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're looking to enjoy premium beauty products at a discount, earn extra income, or build a
                full-time business, LAYLO provides the platform, support, and community you need to succeed.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/guide/why-join.jpg" alt="Why Join LAYLO" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How to Become a LAYLO Member</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these four simple steps to start your journey with LAYLO and unlock a world of beauty, opportunity,
              and community
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#B93160] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#B93160] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {step.number === steps.length && (
                    <a
                      href="#join-now"
                      className="inline-flex items-center bg-[#B93160] hover:bg-[#B93160]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                    >
                      Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  )}
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from women who have transformed their lives through the LAYLO opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{story.name}</h4>
                    <p className="text-[#B93160]">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/community" className="inline-flex items-center text-[#B93160] font-medium hover:underline">
              Read more success stories <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 md:py-24 bg-[#FDF2F8] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What You'll Get as a LAYLO Member</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Joining LAYLO gives you access to a wide range of benefits and resources to support your beauty journey
              and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Starter Kit Options</h3>
              <p className="text-gray-600 mb-4">
                Choose from various starter kits designed to help you begin your beauty business with essential products
                and tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Basic Kit: 150,000 UZS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Business Kit: 300,000 UZS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Premium Kit: 500,000 UZS</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Training & Support</h3>
              <p className="text-gray-600 mb-4">
                Access comprehensive training materials and ongoing support to help you succeed in your beauty business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Product knowledge training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Business building strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Personal mentor guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Events & Recognition</h3>
              <p className="text-gray-600 mb-4">
                Participate in regular events and earn recognition as you achieve milestones in your LAYLO journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Monthly business meetings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Quarterly recognition events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Annual leadership conference</span>
                </li>
              </ul>
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
              Contact our support team <ArrowRight className="w-4 h-4 ml-1" />
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
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-white mr-2" />
                <span className="text-white">Have questions? Call us at +998 90 123 45 67</span>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Join LAYLO Today</h3>
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
                    Start My LAYLO Journey
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
              href="/community"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
