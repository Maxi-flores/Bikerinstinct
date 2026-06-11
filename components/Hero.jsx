import Image from "next/image";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-inner">
        <div className="hero-background">
          <Image
            src="/assets/Banner_1.avif"
            alt="Bikerinstinct hero banner featuring motorcycle lifestyle imagery"
            fill
            priority
            sizes="100vw"
            className="hero-background-image"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <Image
            className="hero-logo"
            src="/assets/Logo_V2.svg"
            alt="Bikerinstinct"
            width={329}
            height={123}
            priority
            unoptimized
          />
          <h1 className="hero-title">
            <span>Built By Riders.</span>
            <span>Designed For Performance.</span>
          </h1>
          <p>
            Premium motorcycle styling, custom rim kits, and garage-bred attitude rebuilt into a
            cleaner, sharper storefront.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#catalog">
              Shop Collection
            </a>
            <a className="button button-secondary" href="#featured-gear">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
