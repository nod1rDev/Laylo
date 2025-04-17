"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CreditCard, Truck, CheckCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useTranslation } from "@/lib/language-context";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: "card" | "cash";
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { t } = useTranslation();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate shipping cost and total
  const shippingCost = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shippingCost;

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = t("checkout.errors.required");
    if (!formData.lastName.trim())
      newErrors.lastName = t("checkout.errors.required");

    if (!formData.email.trim()) {
      newErrors.email = t("checkout.errors.required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("checkout.errors.invalidEmail");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("checkout.errors.required");
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = t("checkout.errors.invalidPhone");
    }

    if (!formData.address.trim())
      newErrors.address = t("checkout.errors.required");
    if (!formData.city.trim()) newErrors.city = t("checkout.errors.required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      router.push("/products");
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // In a real app, you would send the order to your backend here
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setOrderComplete(true);
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If order is complete, show success message
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t("checkout.orderComplete.title")}
          </h1>
          <p className="text-gray-600 mb-6">
            {t("checkout.orderComplete.message")}
          </p>
          <Link
            href="/products"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg inline-block transition-colors"
          >
            {t("checkout.orderComplete.continueShopping")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-gray-600 hover:text-pink-600"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t("checkout.backToShopping")}
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        {t("checkout.title")}
      </h1>

      {items.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-600 mb-6">{t("cart.empty")}</p>
          <Link
            href="/products"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg inline-block transition-colors"
          >
            {t("cart.shopNow")}
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t("checkout.customerInfo")}
                </h2>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("checkout.firstName")} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("checkout.lastName")} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("checkout.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("checkout.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 __ ___ ____"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Shipping Information */}
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t("checkout.shippingInfo")}
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t("checkout.address")} *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                        errors.address ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {t("checkout.city")} *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                          errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {t("checkout.postalCode")}
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {t("checkout.paymentMethod")}
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    />
                    <label
                      htmlFor="card"
                      className="ml-2 flex items-center text-gray-700"
                    >
                      <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                      {t("checkout.paymentMethods.card")}
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    />
                    <label
                      htmlFor="cash"
                      className="ml-2 flex items-center text-gray-700"
                    >
                      <Truck className="h-5 w-5 mr-2 text-gray-600" />
                      {t("checkout.paymentMethods.cash")}
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-colors disabled:bg-pink-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t("checkout.processing")
                    : t("checkout.placeOrder")}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {t("checkout.orderSummary")}
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-start">
                    <div className="w-16 h-16 flex-shrink-0 relative rounded-md overflow-hidden">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-gray-500">
                          {item.quantity} ×{" "}
                          {(
                            item.product.salePrice || item.product.price
                          ).toLocaleString()}{" "}
                          {t("product.currency")}
                        </span>
                        <span className="text-sm font-medium text-gray-800">
                          {(
                            (item.product.salePrice || item.product.price) *
                            item.quantity
                          ).toLocaleString()}{" "}
                          {t("product.currency")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("checkout.subtotal")}
                  </span>
                  <span className="text-gray-800">
                    {subtotal.toLocaleString()} {t("product.currency")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("checkout.shipping")}
                  </span>
                  <span className="text-gray-800">
                    {shippingCost === 0
                      ? t("checkout.free")
                      : `${shippingCost.toLocaleString()} ${t(
                          "product.currency"
                        )}`}
                  </span>
                </div>

                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="font-bold text-gray-800">
                    {t("checkout.total")}
                  </span>
                  <span className="font-bold text-gray-800">
                    {total.toLocaleString()} {t("product.currency")}
                  </span>
                </div>
              </div>

              {subtotal > 500000 && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{t("checkout.freeShippingApplied")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
