"use client";

import { useTranslation } from "@/lib/language-context";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useTranslation();

  const banners = [
    {
      id: 3,
      image: "/laylo-banner.jpg",
      alt: "LAYLO Beauty Product 3",
    },
    {
      id: 1,
      image: "/product-banner-1.jpg",
      alt: "LAYLO Beauty Product 1",
    },
    {
      id: 2,
      image: "/product-banner-2.png",
      alt: "LAYLO Beauty Product 2",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              {t("hero.shopNow")}
            </Link>
            <Link
              href="/community"
              className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-3 px-6 rounded-lg border border-pink-600 text-center transition-colors"
            >
              {t("hero.joinCommunity")}
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="h-64 md:h-[500px]">
            <Carousel slideInterval={5000}>
              {banners.map((banner) => (
                <div key={banner.id} className="relative h-full">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
