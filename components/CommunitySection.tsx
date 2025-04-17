"use client";
import Link from "next/link";
import { Users, Gift, TrendingUp } from "lucide-react";
import { useTranslation } from "@/lib/language-context";

export default function CommunitySection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Gift className="h-10 w-10 text-pink-600" />,
      title: t("community.benefits.discounts.title"),
      description: t("community.benefits.discounts.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-pink-600" />,
      title: t("community.benefits.support.title"),
      description: t("community.benefits.support.description"),
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-pink-600" />,
      title: t("community.benefits.growth.title"),
      description: t("community.benefits.growth.description"),
    },
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-xl my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("community.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("community.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/guide"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            {t("community.joinNow")}
          </Link>
        </div>
      </div>
    </section>
  );
}
