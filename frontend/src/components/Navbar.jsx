import { useState, useEffect } from "react";
import { brand } from "../data/content.js";
import "./Navbar.css";

const links = [
  { to: "#about",    label: "About"    },
  { to: "#services", label: "Services" },
  { to: "#founder",  label: "Founder"  },
  { to: "#contact",  label: "Contact"  }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120;
      for (const link of links) {
        const el = document.getElementById(link.to.substring(1));
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(link.to);
          return;
        }
      }
      if (window.scrollY < 100) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.history.pushState(null, "", target);
    const el = document.getElementById(target.substring(1));
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        <a href="#home" className="navbar__brand" onClick={(e) => scrollTo(e, "#home")}>
          <span className="navbar__brand-name">{brand.name.toUpperCase()}</span>
          <span className="navbar__brand-sub">{brand.subtitle}</span>
        </a>

        {/* Desktop — About · Services · Founder, Contact as CTA */}
        <nav className="navbar__links">
          {links.slice(0, 3).map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={(e) => scrollTo(e, l.to)}
              className={`navbar__link ${activeSection === l.to ? "navbar__link--active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="navbar__cta"
        >
          Schedule a Confidential Consultation
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`} />
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`} />
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar__mobile-drawer">
          <nav className="navbar__mobile-links">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={(e) => scrollTo(e, l.to)}
                className={`navbar__mobile-link ${activeSection === l.to ? "navbar__mobile-link--active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
