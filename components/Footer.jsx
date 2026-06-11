const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.5c0-.8.2-1.4 1.4-1.4H16V5.6c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2v2.4H9v2.8h2.4v7h2.1Z" />
    )
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <path d="M15.8 4H8.2A4.2 4.2 0 0 0 4 8.2v7.6A4.2 4.2 0 0 0 8.2 20h7.6a4.2 4.2 0 0 0 4.2-4.2V8.2A4.2 4.2 0 0 0 15.8 4Zm-3.8 12.3A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6Zm4.6-8.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    )
  },
  {
    name: "X",
    href: "#",
    icon: (
      <path d="M17.4 5H20l-5.7 6.5L21 19h-5.2l-4.1-5.1L7.1 19H4.5l6.1-7L4 5h5.3l3.8 4.8L17.4 5Zm-.9 12.4H18L8.6 6.5H7.1l9.4 10.9Z" />
    )
  }
];

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-panel">
        <div className="footer-grid">
          <div className="footer-copy">
            <p className="eyebrow">Bikerinstinct V2</p>
            <h2 className="footer-mark">Ride hard. Build clean. Stay authentic.</h2>
            <p>
              Handmade attitude, modern storefront structure, and a solid base for the next phase of
              the brand.
            </p>
            <div className="footer-meta">
              <span>Workshop-built spirit</span>
              <span>Local placeholder catalog</span>
              <span>Ready for Vercel deployment</span>
            </div>
          </div>

          <div>
            <div className="footer-actions">
              <a className="button button-primary" href="#catalog">
                View Products
              </a>
            </div>
            <div className="social-list" aria-label="Social links">
              {socials.map((social) => (
                <a key={social.name} className="social-link" href={social.href} aria-label={social.name}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>BIKERINSTINCT V2 storefront concept</span>
          <span>Backend, checkout, and real product data intentionally deferred.</span>
        </div>
      </div>
    </footer>
  );
}
