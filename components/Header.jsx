"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#featured-gear", label: "Featured Gear" },
  { href: "#featured", label: "Featured" },
  { href: "#story", label: "Workshop" },
  { href: "#catalog", label: "Products" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#top" aria-label="Bikerinstinct home" onClick={handleNavClick}>
          <Image
            className="brand-logo"
            src="/assets/Logo_V1.svg"
            alt="Bikerinstinct"
            width={269}
            height={49}
            priority
            unoptimized
          />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`header-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
          <a className="header-cta" href="#catalog" onClick={handleNavClick}>
            Shop Collection
          </a>
        </nav>
      </div>
    </header>
  );
}
