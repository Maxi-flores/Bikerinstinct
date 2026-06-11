export function BrandStory() {
  return (
    <section className="section brand-story" id="story">
      <div className="section-inner">
        <div className="story-panel">
          <div className="story-grid">
            <div className="story-copy">
              <span className="eyebrow">Workshop Story</span>
              <h2>Authentic garage energy, rebuilt into a sharper storefront.</h2>
              <p>
                Bikerinstinct V2 keeps the handmade, workshop-first attitude from the old brand
                reference, but updates it with cleaner spacing, stronger hierarchy, and a more
                premium shopping experience.
              </p>
              <p>
                The result is deliberately frontend-only for now: stable, responsive, and easy to
                expand later with real cart, checkout, inventory, and CMS integrations.
              </p>

              <div className="story-stats">
                <div className="story-stat">
                  <strong>Handmade</strong>
                  <span>Workshop tone and craft-led presentation.</span>
                </div>
                <div className="story-stat">
                  <strong>Responsive</strong>
                  <span>Premium layout across mobile and desktop.</span>
                </div>
                <div className="story-stat">
                  <strong>Simple</strong>
                  <span>No backend or payment surface yet.</span>
                </div>
              </div>

              <div className="story-actions">
                <a className="button button-primary" href="#catalog">
                  Browse Collection
                </a>
              </div>
            </div>

            <div className="story-side">
              <div className="feature-card">
                <strong>Made for rim kits</strong>
                <p>Product cards, featured drop placement, and visual accents tuned for wheel-focused merchandise.</p>
              </div>
              <div className="feature-card">
                <strong>Dark premium palette</strong>
                <p>Black base layers with hot orange and electric blue highlights instead of a generic SaaS look.</p>
              </div>
              <div className="feature-card">
                <strong>V2-ready foundation</strong>
                <p>Reusable sections and local data keep the app stable while future commerce logic is added.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
