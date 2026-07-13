import { useState, useEffect } from "react";
import { brand } from "../data/content.js";
import "./Navbar.css";

const links = [
  { to: "#why-neutral", label: "Why Neutral" },
  { to: "#services", label: "Services" },
  { to: "#industries", label: "Industries" },
  { to: "#approach", label: "Our Approach" },
  { to: "#founder", label: "Founder" },
  { to: "#insights", label: "Insights" },
  { to: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Scroll calculation offset

      for (const link of links) {
        const targetId = link.to.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.to);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial active state calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll offset to clear sticky navbar height
    window.history.pushState(null, "", target);

    const targetId = target.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={(e) => handleLinkClick(e, "#home")}>
          <span className="navbar__brand-name">{brand.name.toUpperCase()}</span>
          <span className="navbar__brand-sub">{brand.subtitle}</span>
        </a>

        {/* Desktop Links (Exclude Contact from regular nav since it has a dedicated button) */}
        <nav className="navbar__links">
          {links.slice(0, 6).map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={(e) => handleLinkClick(e, l.to)}
              className={`navbar__link ${activeSection === l.to ? "navbar__link--active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
          className={`navbar__cta ${activeSection === "#contact" ? "navbar__cta--active" : ""}`}
        >
          Confidential Consultation
        </a>

        {/* Mobile Hamburger toggle */}
        <button className="navbar__hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`}></span>
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`}></span>
          <span className={`navbar__hamburger-bar ${mobileMenuOpen ? "navbar__hamburger-bar--open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-drawer">
          <nav className="navbar__mobile-links">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={(e) => handleLinkClick(e, l.to)}
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
