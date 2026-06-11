import { BrandStory } from "@/components/BrandStory";
import { FeaturedGear } from "@/components/FeaturedGear";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 3);

export default function HomePage() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <FeaturedGear />
      <ProductGrid
        id="featured"
        eyebrow="Featured Collection"
        title="Rim kits built for blacked-out bikes, clean details, and late-night impact."
        description="A focused selection of signature kits that carry the new Bikerinstinct look into the storefront."
        products={featuredProducts}
      />
      <BrandStory />
      <ProductGrid
        id="catalog"
        eyebrow="Full Collection"
        title="Handpicked kits for stunt builds, race looks, and everyday street weapons."
        description="Local placeholder catalog for now, ready to grow into full commerce with real collections and checkout."
        products={products}
      />
      <Footer />
    </main>
  );
}
