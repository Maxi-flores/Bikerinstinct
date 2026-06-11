import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ id, eyebrow, title, description, products }) {
  return (
    <section className="section product-section" id={id}>
      <div className="section-inner">
        <div className="section-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
