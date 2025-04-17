import HeroSection from "../components/HeroSection"
import ProductsSection from "../components/ProductsSection"
import CommunitySection from "../components/CommunitySection"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <ProductsSection />
      <CommunitySection />
    </div>
  )
}
