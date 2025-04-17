import Image from "next/image"
import Link from "next/link"
import { Clock, MessageCircle, Award, CheckCircle, ChevronDown, Star, ArrowRight, Users, Sparkles } from "lucide-react"

export default function Consulting() {
  // Sample expert data - in a real app, this would come from a CMS or API
  const experts = [
    {
      id: "1",
      name: "Laylo Karimova",
      role: "Senior Beauty Consultant",
      image: "/images/experts/expert-1.jpg",
      specialties: ["Skincare", "Anti-aging", "Product Selection"],
      experience: "10+ years",
      bio: "Laylo is our founder and lead consultant with extensive experience in skincare and beauty. She specializes in creating personalized skincare routines for all skin types.",
      available: true,
    },
    {
      id: "2",
      name: "Sabina Aliyeva",
      role: "Makeup Artist & Consultant",
      image: "/images/experts/expert-2.jpg",
      specialties: ["Makeup", "Color Matching", "Special Occasions"],
      experience: "8 years",
      bio: "Sabina is a professional makeup artist who can help you find the perfect products for your skin tone and teach you application techniques for any occasion.",
      available: true,
    },
    {
      id: "3",
      name: "Aziza Usmanova",
      role: "Skincare Specialist",
      image: "/images/experts/expert-3.jpg",
      specialties: ["Problem Skin", "Natural Skincare", "Sensitive Skin"],
      experience: "7 years",
      bio: "Aziza specializes in treating problem skin conditions and creating gentle routines for sensitive skin using natural ingredients and Faberlic products.",
      available: false,
    },
  ]

  // Sample testimonials
  const testimonials = [
    {
      id: "1",
      name: "Dilnoza M.",
      image: "/images/testimonials/testimonial-1.jpg",
      text: "My consultation with Laylo completely transformed my skincare routine. She recommended products that actually work for my combination skin, and I've seen incredible results in just a few weeks!",
      rating: 5,
    },
    {
      id: "2",
      name: "Gulnora T.",
      image: "/images/testimonials/testimonial-2.jpg",
      text: "Sabina helped me find the perfect foundation shade after years of struggling with mismatched makeup. Her expertise and patience made the experience so enjoyable.",
      rating: 5,
    },
    {
      id: "3",
      name: "Madina K.",
      image: "/images/testimonials/testimonial-3.jpg",
      text: "As someone with sensitive skin, I was hesitant to try new products. Aziza created a gentle routine that has improved my skin without any irritation. I'm so grateful for her help!",
      rating: 5,
    },
  ]

  // Sample FAQ data
  const faqs = [
    {
      question: "How long does a consultation session last?",
      answer:
        "Our standard consultation sessions last 45-60 minutes. This gives us enough time to discuss your concerns, analyze your skin or makeup needs, and provide personalized recommendations.",
    },
    {
      question: "How much does a consultation cost?",
      answer:
        "A standard consultation costs 150,000 UZS. However, this fee is fully redeemable against product purchases made on the same day. Community members receive one free consultation every month.",
    },
    {
      question: "Can I book a consultation online?",
      answer:
        "Yes! You can book a consultation directly through our website using the booking form on this page. You can choose between in-person consultations at our studio or virtual consultations via video call.",
    },
    {
      question: "What should I prepare before my consultation?",
      answer:
        "For the most effective consultation, come with a bare face (no makeup) if possible. Make a list of products you currently use and any specific concerns you'd like to address. For virtual consultations, ensure you have good lighting.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time without any penalty. For cancellations with less than 24 hours' notice, a 50% fee may apply.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#B93160] to-[#D23D6D] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Expert Beauty Consultations</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get personalized advice from our beauty experts and discover the perfect Faberlic products for your unique
              needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#booking"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="#how-it-works"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Get a Consultation?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our personalized consultations help you navigate the world of beauty products to find exactly what works
              for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Get product recommendations tailored specifically to your skin type, concerns, and beauty goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                Benefit from the expertise of our trained beauty consultants who understand Faberlic products inside and
                out.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-[#B93160]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#B93160]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Connection</h3>
              <p className="text-gray-600">
                Learn about the benefits of joining our LAYLO community and how it can enhance your beauty journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-[#FDF2F8] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our consultation process is designed to be simple, informative, and tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#B93160] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Book Your Session</h3>
              <p className="text-gray-600 mb-4">
                Choose between an in-person or virtual consultation and select a time that works for you.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Takes about 2 minutes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#B93160] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Consultation Session</h3>
              <p className="text-gray-600 mb-4">
                Meet with your beauty expert who will analyze your needs and provide personalized advice.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>45-60 minute session</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#B93160] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Personalized Plan</h3>
              <p className="text-gray-600 mb-4">
                Receive a customized beauty plan with product recommendations and application techniques.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Includes follow-up support</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              After your consultation, you'll have the option to purchase recommended products with a special discount.
              Community members receive one free consultation per month!
            </p>
            <Link href="/community" className="inline-flex items-center text-[#B93160] font-medium hover:underline">
              Learn more about community benefits <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Beauty Experts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of certified beauty consultants is here to help you look and feel your best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-80">
                  <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
                  {expert.available ? (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Available
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                      Fully Booked
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{expert.name}</h3>
                  <p className="text-[#B93160] font-medium mb-3">{expert.role}</p>
                  <p className="text-gray-600 mb-4">{expert.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {expert.specialties.map((specialty, index) => (
                        <span key={index} className="bg-[#FDF2F8] text-[#B93160] text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Experience: {expert.experience}</span>
                  </div>
                  {expert.available && (
                    <a
                      href="#booking"
                      className="block w-full bg-[#B93160] hover:bg-[#B93160]/90 text-white text-center font-medium py-2 rounded-lg transition-colors"
                    >
                      Book with {expert.name.split(" ")[0]}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from women who have transformed their beauty routines with our expert consultations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Satisfied Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Book Your Consultation</h2>
              <p className="text-gray-600 mb-6">
                Schedule a personalized consultation with one of our beauty experts and take the first step towards your
                beauty transformation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    <strong>In-person or virtual</strong> consultations available
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    <strong>45-60 minute</strong> personalized sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    <strong>Consultation fee (150,000 UZS)</strong> redeemable against product purchases
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#B93160] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    <strong>Community members</strong> receive one free consultation per month
                  </span>
                </li>
              </ul>
              <div className="bg-[#FDF2F8] p-4 rounded-lg">
                <p className="text-[#B93160] font-medium">
                  Not a community member yet? Join today and get your first consultation for free!
                </p>
                <Link
                  href="/community"
                  className="inline-flex items-center text-[#B93160] font-medium hover:underline mt-1"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                    <label htmlFor="consultant" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Consultant
                    </label>
                    <select
                      id="consultant"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                      required
                    >
                      <option value="">Select a consultant</option>
                      {experts
                        .filter((expert) => expert.available)
                        .map((expert) => (
                          <option key={expert.id} value={expert.id}>
                            {expert.name} - {expert.role}
                          </option>
                        ))}
                      <option value="any">Any available consultant</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Consultation Type
                    </label>
                    <select
                      id="type"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                      required
                    >
                      <option value="">Select consultation type</option>
                      <option value="in-person">In-person (Tashkent Office)</option>
                      <option value="virtual">Virtual (Video Call)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                      required
                    >
                      <option value="">Select a time slot</option>
                      <option value="10:00">10:00 - 11:00</option>
                      <option value="11:00">11:00 - 12:00</option>
                      <option value="12:00">12:00 - 13:00</option>
                      <option value="14:00">14:00 - 15:00</option>
                      <option value="15:00">15:00 - 16:00</option>
                      <option value="16:00">16:00 - 17:00</option>
                      <option value="17:00">17:00 - 18:00</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Beauty Concerns/Questions
                    </label>
                    <textarea
                      id="concerns"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#B93160] focus:border-[#B93160]"
                      placeholder="Tell us about your skin type, concerns, or any specific questions you have..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B93160] hover:bg-[#B93160]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Book Consultation
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By booking, you agree to our consultation terms and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our consultation services
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#B93160] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Beauty Routine?</h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
              Book your consultation today and discover the perfect Faberlic products for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#booking"
                className="bg-white text-[#B93160] hover:bg-[#FDF2F8] px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                Book Now
              </a>
              <Link
                href="/community"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
