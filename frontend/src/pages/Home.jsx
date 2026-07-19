import { useState } from "react";
import { motion } from "framer-motion";
import {
  hero,
  heroTags,
  bottomCta,
  finalCtaTags
} from "../data/content.js";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Founder from "./Founder.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth"
    });
  };

  const handleAnchorClick = (e, target) => {
    e.preventDefault();
    window.history.pushState(null, "", target);
    scrollTo(target.replace("#", ""));
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" className="hero-section">
        <div className="hero-accent-rule" aria-hidden="true" />

        <div className="hero-inner hero-inner--centered">
          <motion.div
            className="hero-copy-col hero-copy-col--centered"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero-tags hero-tags--centered">
              {heroTags.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>

            <h1 className="hero-headline hero-headline--centered">{hero.headline}</h1>
            <p className="hero-body hero-body--centered">{hero.body}</p>

            <div className="hero-ctas hero-ctas--centered">
              <button
                className="hero-cta hero-cta--primary"
                onClick={() => scrollTo("contact")}
                onMouseEnter={() => setHoveredButton("primary")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {hero.primaryCta} →
              </button>
              <button
                className={`hero-cta hero-cta--outline${hoveredButton === "secondary" ? " hero-cta--outline-hover" : ""}`}
                onClick={() => scrollTo("founder")}
                onMouseEnter={() => setHoveredButton("secondary")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {hero.secondaryCta}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" className="home-section">
        <About />
      </section>

      {/* ── SERVICES (includes Industries + Scenarios) ────────────────────── */}
      <section id="services" className="home-section home-section--tint">
        <Services />
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────── */}
      <section id="founder" className="home-section home-section--dim">
        <Founder />
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="home-section home-section--alt">
        <Contact />
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="home-section home-section--navy" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="final-cta-tags">
            {finalCtaTags.map((tag) => (
              <span key={tag} className="final-cta-tag">{tag}</span>
            ))}
          </div>
          <h2 style={{ color: "#fff", marginBottom: 16, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            {bottomCta.headline}
          </h2>
          <p style={{ color: "var(--text-muted-on-navy)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32 }}>
            {bottomCta.body}
          </p>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="btn btn--primary"
            style={{ background: "#fff", color: "var(--navy)" }}
          >
            Schedule a Confidential Consultation
          </a>
        </div>
      </section>

      <style>{`
        /* ── RESPONSIVE ──────────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .objective-thinking__headline { font-size: clamp(1.6rem, 5vw, 2rem); }
          .objective-thinking__body { font-size: 1.02rem; }
        }
      `}</style>
    </>
  );
}
