import Image from "next/image";

export function FeaturedGear() {
  return (
    <section className="section featured-gear" id="featured-gear">
      <div className="section-inner">
        <div className="section-copy">
          <span className="eyebrow">Featured Gear</span>
          <h2>Race-bred style and rider gear with a stronger visual edge.</h2>
          <p>
            Banner-led promotional space for featured launches, collabs, projects, or limited drops
            without changing the product grid architecture.
          </p>
        </div>

        <article className="featured-gear-panel">
          <div className="featured-gear-copy">
            <p className="featured-gear-kicker">Limited Spotlight</p>
            <h3>S-R7 inspired campaign energy, reworked for a premium Bikerinstinct showcase.</h3>
            <p>
              Use this block for project highlights, rider stories, branded launches, or featured
              gear promotions while the storefront stays frontend-only.
            </p>
            <div className="featured-gear-actions">
              <a className="button button-primary" href="#catalog">
                Shop Collection
              </a>
              <a className="button button-secondary" href="#story">
                Workshop Story
              </a>
            </div>
          </div>

          <div className="featured-gear-media">
            <Image
              src="/assets/Banner_2.png"
              alt="Featured motorcycle gear promotional artwork"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className="featured-gear-image"
            />
            <div className="featured-gear-badge">Featured Gear</div>
          </div>
        </article>
      </div>
    </section>
  );
}
