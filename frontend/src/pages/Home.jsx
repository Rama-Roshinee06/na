import { useState } from "react";
import { motion } from "framer-motion";
import {
  hero,
  heroTags,
  founder,
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

        <div className="hero-inner hero-inner--split">

          {/* ── LEFT — copy ──────────────────────────────────────────── */}
          <motion.div
            className="hero-copy-col"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="hero-eyebrow-label">Executive Advisory</div>

            {/* Headline */}
            <h1 className="hero-headline">{hero.headline}</h1>

            {/* Horizontal rule */}
            <div className="hero-rule" aria-hidden="true" />

            {/* Body */}
            <p className="hero-body">{hero.body}</p>

            {/* CTAs */}
            <div className="hero-ctas">
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

          {/* ── RIGHT — founder portrait ──────────────────────────────── */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Corner accent — top-right */}
            <div className="hero-corner-accent" aria-hidden="true" />

            {/* Portrait frame */}
            <div className="hero-portrait-frame">
              {/* Placeholder — replace with actual <img> when photo is available */}
              <div className="hero-portrait-placeholder" aria-label="Founder portrait placeholder">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Founder name caption — overlaid at bottom */}
              <div className="hero-portrait-caption">
                <div className="hero-portrait-caption__bar" aria-hidden="true" />
                <span className="hero-portrait-caption__name">{founder.name}</span>
              </div>
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
        /* ── HERO SPLIT LAYOUT ───────────────────────────────────────────── */
        .hero-inner--split {
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero-eyebrow-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 28px;
        }

        .hero-rule {
          width: 48px;
          height: 1.5px;
          background: rgba(255,255,255,0.2);
          margin: 0 0 28px;
        }

        /* Portrait column */
        .hero-photo-col {
          position: relative;
        }

        .hero-portrait-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 4px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .hero-portrait-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Caption strip at bottom of portrait */
        .hero-portrait-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-portrait-caption__bar {
          width: 28px;
          height: 2px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .hero-portrait-caption__name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        /* Corner accent — top-right of photo col */
        .hero-corner-accent {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 56px;
          height: 56px;
          border-top: 1.5px solid rgba(201,168,76,0.55);
          border-right: 1.5px solid rgba(201,168,76,0.55);
          z-index: 2;
          pointer-events: none;
        }

        /* ── HERO SPLIT RESPONSIVE ───────────────────────────────────────── */
        @media (max-width: 960px) {
          .hero-inner--split {
            grid-template-columns: 1fr !important;
            gap: 48px;
          }
          .hero-photo-col { max-width: 420px; }
          .hero-corner-accent { display: none; }
        }

        @media (max-width: 640px) {
          .hero-photo-col { max-width: 100%; }
          .hero-portrait-frame { aspect-ratio: 4 / 3; }
        }

        /* ── RESPONSIVE ──────────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .objective-thinking__headline { font-size: clamp(1.6rem, 5vw, 2rem); }
          .objective-thinking__body { font-size: 1.02rem; }
        }
      `}</style>
    </>
  );
}
