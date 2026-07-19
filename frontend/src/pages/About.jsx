import { motion } from "framer-motion";
import { about } from "../data/content.js";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" }
};

const fadeUpDelay = (d) => ({
  ...fadeUp,
  transition: { duration: 0.55, ease: "easeOut", delay: d }
});

export default function About() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — STRATEGY BEFORE ESCALATION
          White background — spacious, analytical, editorial
      ══════════════════════════════════════════════════════════════════ */}
      <section className="about-s1">
        <div className="container">

          <motion.div {...fadeUp}>
            <div className="eyebrow">{about.strategyBeforeEscalation.eyebrow}</div>
          </motion.div>

          {/* Two-column editorial split: large headline left, body right */}
          <div className="s1-split">
            <motion.div {...fadeUpDelay(0.08)}>
              <h2 className="s1-headline">{about.strategyBeforeEscalation.headline}</h2>
            </motion.div>

            <motion.div {...fadeUpDelay(0.16)}>
              {about.strategyBeforeEscalation.body.map((para, i) => (
                <p key={i} className="s1-body">{para}</p>
              ))}
            </motion.div>
          </div>

          {/* Three principles — numbered editorial row */}
          <motion.div className="s1-principles" {...fadeUpDelay(0.24)}>
            {about.strategyBeforeEscalation.principles.map((principle, i) => (
              <div key={principle} className="s1-principle">
                <span className="s1-principle__num">0{i + 1}</span>
                <span className="s1-principle__bar" aria-hidden="true" />
                <span className="s1-principle__label">{principle.toUpperCase()}</span>
              </div>
            ))}
          </motion.div>

          <motion.p className="s1-close" {...fadeUpDelay(0.3)}>
            {about.strategyBeforeEscalation.body2}
          </motion.p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — WHY "NEUTRAL" + OUR PHILOSOPHY FRAME
          Grey background — open editorial left, framed statement right
          Separated from S1 by a 1px border-light line (matches site system)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="about-s2">
        <div className="container">
          <div className="s2-layout">

            {/* ── LEFT — Why "Neutral" — open, spacious ─────────── */}
            <div className="s2-open">
              <motion.div className="eyebrow" {...fadeUp}>
                {about.whyNeutral.eyebrow}
              </motion.div>

              <motion.h2 className="s2-headline" {...fadeUpDelay(0.08)}>
                {about.whyNeutral.headline}
              </motion.h2>

              <div className="s2-rule" aria-hidden="true" />

              <motion.p className="s2-body" {...fadeUpDelay(0.16)}>
                {about.whyNeutral.body}
              </motion.p>

              <motion.p className="s2-body" {...fadeUpDelay(0.22)}>
                {about.whyNeutral.body2}
              </motion.p>
            </div>

            {/* ── RIGHT — Our Philosophy — framed editorial box ─── */}
            <motion.aside className="s2-frame" {...fadeUpDelay(0.18)}>
              <div className="s2-frame__inner">
                <span className="s2-frame__eyebrow">Our Philosophy</span>
                <h3 className="s2-frame__headline">
                  Objective Thinking Creates Better Commercial Outcomes.
                </h3>
                <p className="s2-frame__body">
                  Commercial negotiations often become difficult not because solutions are
                  unavailable, but because stakeholders become entrenched in positions rather
                  than interests.
                </p>
                <p className="s2-frame__body">
                  Neutral Advisory helps organizations negotiate with clarity, structure, and
                  commercial discipline — enabling informed decisions that preserve business
                  value and support sustainable outcomes.
                </p>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — THE NEUTRAL METHOD
          White background — structured, methodological
          Separated from S2 by a 1px border-light line
      ══════════════════════════════════════════════════════════════════ */}
      <section className="about-s3">
        <div className="container">

          <motion.div className="s3-header" {...fadeUp}>
            <div className="eyebrow">{about.neutralMethod.eyebrow}</div>
            <h2 className="s3-headline">{about.neutralMethod.headline}</h2>
            <p className="s3-lede">{about.neutralMethod.body}</p>
          </motion.div>

          {/* Four-step process — desktop: horizontal track, mobile: vertical timeline */}
          <div className="nm-track">
            <div className="nm-connector" aria-hidden="true" />
            {about.neutralMethod.steps.map((step, i) => (
              <motion.div
                key={step.numeral}
                className="nm-step"
                {...fadeUpDelay(i * 0.1)}
              >
                <div className="nm-step__node">
                  <span className="nm-step__numeral">{step.numeral}</span>
                </div>
                <div className="nm-step__body">
                  <h3 className="nm-step__title">{step.title}</h3>
                  <p className="nm-step__desc">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SCOPED STYLES
          These classes are About-page-only to avoid polluting global.css.
          Background values match the site-wide system documented in global.css:
          --paper (#fff) → --paper-dim (#F4F5F8) → --paper (#fff)
      ══════════════════════════════════════════════════════════════════ */}
      <style>{`

        /* ── SECTION SHELLS ─────────────────────────────────────────────── */

        .about-s1 {
          background: var(--paper);
          padding: 100px 0;
          scroll-margin-top: 80px;
        }

        /* Separator: 1px border-light — matches Services/Founder/Contact */
        .about-s2 {
          background: var(--paper-dim);
          border-top: 1px solid var(--border-light);
          padding: 100px 0;
        }

        /* Return to white — creates white → grey → white rhythm */
        .about-s3 {
          background: var(--paper);
          border-top: 1px solid var(--border-light);
          padding: 100px 0;
        }

        /* ── SECTION 1 ──────────────────────────────────────────────────── */

        .s1-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 72px;
          margin: 4px 0 56px;
          align-items: start;
        }

        .s1-headline {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .s1-body {
          font-size: 1.07rem;
          line-height: 1.85;
          color: var(--text-body);
          margin: 0 0 16px;
        }
        .s1-body:last-child { margin-bottom: 0; }

        /* Numbered principles — editorial row under a navy top rule */
        .s1-principles {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 2px solid var(--navy);
          margin-bottom: 52px;
        }

        .s1-principle {
          padding: 24px 32px 22px 0;
          border-right: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .s1-principle:first-child { padding-left: 0; }
        .s1-principle:not(:first-child) { padding-left: 32px; }
        .s1-principle:last-child { border-right: none; padding-right: 0; }

        .s1-principle__num {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--navy);
          line-height: 1;
        }

        .s1-principle__bar {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--navy);
          opacity: 0.35;
        }

        .s1-principle__label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--navy);
          text-transform: uppercase;
          line-height: 1.4;
        }

        .s1-close {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--text-muted);
          max-width: 740px;
          margin: 0;
        }

        /* ── SECTION 2 ──────────────────────────────────────────────────── */

        .s2-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 72px;
          align-items: start;
        }

        /* Left: open editorial */
        .s2-headline {
          font-size: clamp(1.75rem, 3.2vw, 2.25rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          max-width: 480px;
        }

        .s2-rule {
          width: 36px;
          height: 1.5px;
          background: var(--navy);
          opacity: 0.18;
          margin-bottom: 24px;
        }

        .s2-body {
          font-size: 1.07rem;
          line-height: 1.85;
          color: var(--text-muted);
          margin: 0 0 16px;
          max-width: 460px;
        }
        .s2-body:last-child { margin-bottom: 0; }

        /* Right: framed philosophy statement
           — white bg against the grey section, so it lifts off the page
           — 1px navy border (not border-light) for editorial authority
           — sharp 2px corner tick marks top-left and bottom-right
           — border-radius: 0 intentionally — not a UI card */
        .s2-frame {
          margin-top: 48px;             /* Asymmetric offset from left column */
          background: var(--paper);
          border: 1px solid var(--navy);
          border-radius: 0;
          position: relative;
        }

        /* Top-left corner tick */
        .s2-frame::before {
          content: "";
          position: absolute;
          top: -1px; left: -1px;
          width: 18px; height: 18px;
          border-top: 2.5px solid var(--navy);
          border-left: 2.5px solid var(--navy);
        }

        /* Bottom-right corner tick */
        .s2-frame::after {
          content: "";
          position: absolute;
          bottom: -1px; right: -1px;
          width: 18px; height: 18px;
          border-bottom: 2.5px solid var(--navy);
          border-right: 2.5px solid var(--navy);
        }

        .s2-frame__inner {
          padding: 36px 32px 40px;
        }

        .s2-frame__eyebrow {
          display: block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--navy);
          opacity: 0.45;
          margin-bottom: 16px;
        }

        .s2-frame__headline {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
        }

        .s2-frame__body {
          font-size: 0.94rem;
          line-height: 1.85;
          color: var(--text-muted);
          margin: 0 0 12px;
        }
        .s2-frame__body:last-child { margin-bottom: 0; }

        /* ── SECTION 3 ──────────────────────────────────────────────────── */

        .s3-header {
          max-width: 680px;
          margin-bottom: 64px;
        }

        .s3-headline {
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.3;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
          max-width: 580px;
        }

        .s3-lede {
          font-size: 1.04rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin: 0;
          max-width: 600px;
        }

        /* Desktop: four-column horizontal track */
        .nm-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
        }

        /* Hairline connecting all four nodes */
        .nm-connector {
          position: absolute;
          top: 23px;
          left: calc(12.5% + 1px);
          right: calc(12.5% + 1px);
          height: 1px;
          background: var(--border-light);
          z-index: 0;
        }

        .nm-step {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 28px;
          position: relative;
          z-index: 1;
        }
        .nm-step:last-child { padding-right: 0; }

        /* Roman numeral node — circle above the content */
        .nm-step__node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid var(--navy);
          background: var(--paper);
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          transition: background 0.2s ease;
        }

        .nm-step:hover .nm-step__node {
          background: var(--navy);
        }
        .nm-step:hover .nm-step__numeral {
          color: #ffffff;
        }

        .nm-step__numeral {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: 0.1em;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .nm-step__body {
          padding-right: 8px;
        }

        /* Stage label — small caps, tracking */
        .nm-step__title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--navy);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .nm-step__desc {
          font-size: 0.94rem;
          line-height: 1.8;
          color: var(--text-body);
          margin: 0;
        }

        /* ── RESPONSIVE ──────────────────────────────────────────────────── */

        @media (max-width: 1024px) {
          .s1-split { grid-template-columns: 1fr; gap: 20px; margin-bottom: 44px; }
          .s2-layout { grid-template-columns: 1fr 340px; gap: 52px; }
        }

        @media (max-width: 900px) {
          .about-s1,
          .about-s2,
          .about-s3 { padding: 80px 0; }

          /* Principles collapse to single column */
          .s1-principles { grid-template-columns: 1fr; border-top: 2px solid var(--navy); }
          .s1-principle {
            flex-direction: row;
            align-items: center;
            gap: 18px;
            padding: 18px 0;
            border-right: none;
            border-bottom: 1px solid var(--border-light);
          }
          .s1-principle:not(:first-child) { padding-left: 0; }
          .s1-principle:last-child { border-bottom: none; }
          .s1-principle__bar { display: none; }

          /* Philosophy frame stacks below */
          .s2-layout { grid-template-columns: 1fr; gap: 40px; }
          .s2-frame  { margin-top: 0; max-width: 480px; }

          /* Process: vertical timeline */
          .nm-track { grid-template-columns: 1fr; }
          .nm-connector { display: none; }
          .nm-step {
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
            padding: 0 0 36px;
            position: relative;
          }
          .nm-step:last-child { padding-bottom: 0; }
          /* Vertical connecting line */
          .nm-step::after {
            content: "";
            position: absolute;
            top: 48px;
            left: 23px;
            width: 1px;
            height: calc(100% - 24px);
            background: var(--border-light);
            z-index: 0;
          }
          .nm-step:last-child::after { display: none; }
          .nm-step__node { margin-bottom: 0; flex-shrink: 0; z-index: 1; }
          .nm-step__body { padding-top: 10px; padding-right: 0; }
        }

        @media (max-width: 700px) {
          .s2-frame { max-width: 100%; }
          .s2-frame__inner { padding: 26px 22px 30px; }
        }

        @media (max-width: 640px) {
          .about-s1,
          .about-s2,
          .about-s3 { padding: 64px 0; }
          .s3-header { margin-bottom: 44px; }
        }

      `}</style>
    </>
  );
}
