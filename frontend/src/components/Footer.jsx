import { brand, contact } from "../data/content.js";

const links = [
  { to: "#why-neutral", label: "Why Neutral" },
  { to: "#services", label: "Services" },
  { to: "#industries", label: "Industries" },
  { to: "#approach", label: "Our Approach" },
  { to: "#founder", label: "Founder" },
  { to: "#insights", label: "Insights" },
  { to: "#contact", label: "Contact" }
];

export default function Footer() {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
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
    <footer className="footer" style={{ background: "var(--navy)", color: "var(--text-on-navy)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="container py-5" style={{ fontSize: 14 }}>
        <div className="row gx-5 gy-4 footer__top mb-4">
          <div className="col-lg-4">
            <div style={{ maxWidth: 440 }}>
              <h3 style={{ color: "#ffffff", fontWeight: 700, margin: "0 0 12px", fontFamily: "var(--font-display)" }}>{brand.name.toUpperCase()}</h3>
              <p style={{ color: "var(--text-muted-on-navy)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                {brand.positioningStatement}
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h4 style={{ color: "#ffffff", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px" }}>Navigation</h4>
            <div className="row row-cols-2 g-2 footer__nav-links">
              {links.map((l) => (
                <div className="col" key={l.to}>
                  <a href={l.to} onClick={(e) => handleLinkClick(e, l.to)} style={{ color: "var(--text-muted-on-navy)", fontSize: 13, transition: "color 0.15s ease" }}
                    onMouseOver={(e) => e.target.style.color = "#ffffff"}
                    onMouseOut={(e) => e.target.style.color = "var(--text-muted-on-navy)"}>
                    {l.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h4 style={{ color: "#ffffff", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px" }}>Contact Details</h4>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: "var(--text-muted-on-navy)" }}>
              Office: {contact.office.includes("[[") ? "United States (International Engagements)" : contact.office}
            </p>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: "var(--text-muted-on-navy)" }}>
              Email: {contact.email.includes("[[") ? "inquiry@neutraladvisory.com" : contact.email}
            </p>
            <div style={{ marginTop: 12 }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted-on-navy)", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.15s" }}
                onMouseOver={(e) => e.target.style.color = "#ffffff"}
                onMouseOut={(e) => e.target.style.color = "var(--text-muted-on-navy)"}>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <p className="footer__disclaimer" style={{ margin: "0 0 24px", color: "var(--text-muted-on-navy)", fontSize: 13, lineHeight: 1.7, maxWidth: 920 }}>
          Disclaimer: Neutral Advisory provides strategic business advisory services. We do not provide legal advice, legal representation, or services reserved for licensed legal professionals. Where appropriate, we work alongside our clients' legal counsel and other professional advisors to support commercial strategy and negotiation planning.
        </p>
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 footer__bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, color: "var(--text-muted-on-navy)", fontSize: 12 }}>
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Confidentiality & Professional Integrity Guaranteed</span>
        </div>
      </div>
    </footer>
  );
}
