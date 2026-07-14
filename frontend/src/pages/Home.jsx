import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { hero, whyNeutral, bottomCta, whyNeutralIntro } from "../data/content.js";
import heroGraphic from "../assets/hero-graphic.jpg";

import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Industries from "./Industries.jsx";
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
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="eyebrow">Strategic Negotiation Advisory</div>
              <h1>{hero.headline}</h1>
              <p className="lede">{hero.body}</p>
              <div className="hero-actions">
                <Button
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  variant="primary"
                >
                  {hero.primaryCta}
                </Button>
                <Button
                  href="#approach"
                  onClick={(e) => handleLinkClick(e, "#approach")}
                  variant="outline"
                >
                  {hero.secondaryCta}
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="hero-image-card">
                <img
                  src={heroGraphic}
                  alt="Neutral Advisory Strategy Visual"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY NEUTRAL ADVISORY */}
      <section id="why-neutral" className="section--dim section--spaced">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Trust Signals</div>
            <h2>A Partner in High-Stakes Situations</h2>
            <p className="lede">{whyNeutralIntro}</p>
          </div>

          <div className="why-grid">
            {whyNeutral.map((w, i) => (
              <Card key={i} className="highlight-card" {...(i === 0 ? { style: { borderColor: "var(--accent-gold)" } } : {})}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section--tint" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Industries />
      </section>

      {/* APPROACH */}
      <section id="approach">
        <About />
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
      <section id="contact" className="section--alt-dim" style={{ borderTop: "1.5px solid var(--border-light)", borderBottom: "1.5px solid var(--border-light)" }}>
        <Contact />
      </section>

      {/* FINAL CALL-TO-ACTION */}
      <section id="final-cta" className="section section--navy" style={{ textAlign: "center", borderTop: "1.5px solid var(--border-on-navy)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ color: "#ffffff", marginBottom: 16, fontSize: "2rem" }}>{bottomCta.headline}</h2>
          <p style={{ color: "var(--text-muted-on-navy)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 32, fontWeight: 300 }}>
            {bottomCta.body}
          </p>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="btn btn--primary" style={{ background: "#ffffff", color: "var(--navy)" }}>
            Schedule a Confidential Consultation
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .hero-copy, .hero-image-card {
            width: 100%;
          }

          .hero-visual img {
            max-width: 420px;
            margin: 0 auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
