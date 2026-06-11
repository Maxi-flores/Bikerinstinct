import Image from "next/image";

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-badge">{product.tag}</div>
      <div className="product-media">
        <Image
          className="product-image"
          src={product.image}
          alt={product.name}
          width={720}
          height={720}
          sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
      </div>

      <div className="product-content">
        <div>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-meta">{product.description}</p>
        </div>

        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <a className="button button-secondary" href="#footer">
            Add to Cart
          </a>
        </div>
      </div>
    </article>
  );
}
