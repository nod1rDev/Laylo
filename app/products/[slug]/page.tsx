import { getProductBySlug } from "@/lib/products";
import { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "./ProductDetails";

// Define types
type Props = {
  params: {
    slug: string;
  };
};

// Metadata generation (unchanged)
export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product =  getProductBySlug(params.slug);

  if (!product)
    return {
      title: "Product Not Found",
    };

  return {
    title: {
      default: product.name,
      template: `%s | Laylo`,
      absolute: `${product.name} | Buy Online | Laylo`,
    },
    description: product.description,
    keywords: [
      `${product.name}, ${product.category}, sotib olish, faberlic, onlayn magazin`,
    ],
    openGraph: {
      type: "website",
      siteName: "Laylo",
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image || "/placeholder.svg?height=500&width=500",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "uz_UZ",
      url: `https://laylo-smoky.vercel.app/products/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image || "/placeholder.svg?height=500&width=500"],
    },
    alternates: {
      canonical: `https://laylo-smoky.vercel.app/products/${params.slug}`,
      languages: {
        "uz-UZ": `/uz/products/${params.slug}`,
        "ru-RU": `/ru/products/${params.slug}`,
        "en-US": `/en/products/${params.slug}`,
      },
    },
  };
}

// ✅ Client hook kerakmas — params bevosita props orqali keladi
export default  function Page({ params }: any) {
  const product =  getProductBySlug(params.slug);

  if (!product) {
    return null;
  }

  return <ProductDetail product={product} />;
}
