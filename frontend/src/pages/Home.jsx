import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hero } from "../data/content.js";
import heroGraphic from "../assets/hero-graphic.jpg";

import Services from "./Services.jsx";
import About from "./About.jsx";
import Industries from "./Industries.jsx";
import Scenarios from "./Scenarios.jsx";
import Founder from "./Founder.jsx";
import Insights from "./Insights.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [hash]);

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
    <>
      {/* HERO SECTION */}
      <section id="home" className="section--hero">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }} className="grid-responsive-hero">
            <div>
              <div className="eyebrow">Strategic Negotiation Advisory</div>
              <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px", color: "var(--navy)" }}>
                We Help Executives Resolve Commercial Disputes Before They Become Litigation
              </h1>
              <p className="lede" style={{ marginBottom: 36, fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-body)" }}>
                {hero.body}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="btn btn--primary">{hero.primaryCta}</a>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="btn btn--outline">{hero.secondaryCta}</a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={heroGraphic}
                alt="Neutral Advisory Strategy Visual"
                style={{
                  width: "100%",
                  maxWidth: 440,
                  height: "auto",
                  borderRadius: 8,
                  border: "1.5px solid var(--border-light)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section--dim" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Services />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section--dim" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Industries />
      </section>

      {/* SCENARIOS */}
      <section id="scenarios">
        <Scenarios />
      </section>

      {/* FOUNDER */}
      <section id="founder" className="section--dim" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Founder />
      </section>

      {/* INSIGHTS */}
      <section id="insights">
        <Insights />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section--dim" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Contact />
      </section>

      {/* FINAL CALL-TO-ACTION */}
      <section className="section section--navy" style={{ textAlign: "center", borderTop: "1.5px solid var(--border-on-navy)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ color: "#ffffff", marginBottom: 16, fontSize: "2rem" }}>Partner-Led Strategic Alignment</h2>
          <p style={{ color: "var(--text-muted-on-navy)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 32, fontWeight: 300 }}>
            Every commercial conflict is unique. Engage our independent advisory to establish structured preparation, objective risk modeling, and a clear path to commercial resolution.
          </p>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="btn btn--primary" style={{ background: "#ffffff", color: "var(--navy)" }}>
            Schedule a Confidential Consultation
          </a>
        </div>
      </section>

      {/* Responsive layout styles block */}
      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-hero {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .grid-responsive-hero img {
            max-width: 320px !important;
          }
          .grid-responsive-hero div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .grid-responsive-hero .eyebrow {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </>
  );
}
