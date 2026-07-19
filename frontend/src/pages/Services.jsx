import { motion } from "framer-motion";
import {
  services,
  industryExperience,
  commercialScenarios
} from "../data/content.js";

// ── Numbered service card (matches template: number top-left, title, body, tag chips)
function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      className="svc-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
    >
      <div className="svc-card__num">{num}</div>
      <h3 className="svc-card__title">{service.title}</h3>
      <p className="svc-card__summary">{service.summary}</p>
      <div className="svc-card__tags">
        {service.focus.map((f) => (
          <span key={f} className="svc-tag">{f}</span>
        ))}
      </div>
    </motion.article>
  );
}

// ── Industry tile — matches template: short bar, name only, clean cell
function IndustryTile({ title, index }) {
  return (
    <motion.div
      className="ind-tile"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
    >
      <div className="ind-tile__bar" aria-hidden="true" />
      <span className="ind-tile__name">{title}</span>
    </motion.div>
  );
}

// Flatten sectors + add extra tiles to fill the 4×2 grid
const industryTiles = [
  "Banking & Financial Services",
  "Insurance & Risk Management",
  "Telecommunications",
  "Highly Regulated Industries",
  "Technology & Enterprise",
  "Media & Communications",
  "Real Estate & Infrastructure",
  "Government & Public Sector"
];

// ── Scenario card (unchanged layout, data-driven)
function ScenarioCard({ scenario, index }) {
  return (
    <motion.article
      className="scenario-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <div className="scenario-card__number">{scenario.number}</div>
      <div className="scenario-card__tag">{scenario.tag}</div>
      <h3 className="scenario-card__title">{scenario.title}</h3>
      <div className="scenario-card__content">
        <div className="scenario-card__situation">
          <span className="scenario-card__label">Situation</span>
          <p>{scenario.situation}</p>
        </div>
        <div className="scenario-card__resolution">
          <span className="scenario-card__label">Resolution</span>
          <p>{scenario.resolution}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <div className="container">

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <div className="eyebrow">{services.intro.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>
          {services.intro.headline}
        </h2>
        <p className="lede">{services.intro.body}</p>
      </div>

      {/* ── PART 1 — SERVICES GRID ──────────────────────────────────────── */}
      <div style={{ marginBottom: 96 }}>
        <div className="svc-grid">
          {services.coreServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      {/* ── PART 2 — INDUSTRIES SERVED ──────────────────────────────────── */}
      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 80, marginBottom: 96 }}>
        <div className="ind-section">

          {/* Left label */}
          <div className="ind-label-col">
            <motion.h2
              className="ind-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {industryExperience.headline}
            </motion.h2>
          </div>

          {/* Right 4×2 tile grid */}
          <div className="ind-grid">
            {industryTiles.map((title, i) => (
              <IndustryTile key={title} title={title} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 3 — COMMERCIAL SCENARIOS ───────────────────────────────── */}
      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow">{commercialScenarios.eyebrow}</div>
          <h2 style={{ maxWidth: 680, margin: "0 0 16px", color: "var(--navy)" }}>
            {commercialScenarios.headline}
          </h2>
          <p className="lede" style={{ maxWidth: 700 }}>
            {commercialScenarios.body}
          </p>
        </div>

        <div className="scenario-grid">
          {commercialScenarios.scenarios.map((s, i) => (
            <ScenarioCard key={s.title} scenario={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── SERVICE CARD (numbered + tag chips) ──────────────────── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--border-light);
          border-left: 1px solid var(--border-light);
        }

        .svc-card {
          padding: 40px 36px 36px;
          border-right: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.2s ease;
        }

        .svc-card:hover {
          background: var(--paper-dim);
        }

        .svc-card__num {
          font-size: 0.78rem;
          font-weight: 700;
          color: #C9A84C;
          letter-spacing: 0.12em;
          line-height: 1;
        }

        .svc-card__title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--navy);
          margin: 0;
          line-height: 1.2;
        }

        .svc-card__summary {
          font-size: 0.97rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin: 0;
          flex-grow: 1;
        }

        .svc-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .svc-tag {
          padding: 5px 12px;
          border: 1px solid var(--border-light);
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          letter-spacing: 0.02em;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .svc-card:hover .svc-tag {
          border-color: rgba(42,60,98,0.3);
          color: var(--navy);
        }

        /* ── INDUSTRIES SECTION ───────────────────────────────────── */
        .ind-section {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 64px;
          align-items: start;
        }

        .ind-label {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--border-light);
          border-left: 1px solid var(--border-light);
        }

        .ind-tile {
          padding: 28px 24px;
          border-right: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: background 0.2s ease;
        }

        .ind-tile:hover {
          background: var(--navy-tint);
        }

        .ind-tile__bar {
          width: 24px;
          height: 2px;
          background: #C9A84C;
        }

        .ind-tile__name {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.4;
        }

        /* ── SCENARIO CARDS ───────────────────────────────────────── */
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .scenario-card {
          background: var(--paper);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .scenario-card:hover {
          transform: translateY(-3px);
          border-color: var(--navy);
          box-shadow: 0 16px 48px rgba(17,31,64,0.08);
        }

        .scenario-card__number {
          font-size: 0.78rem;
          font-weight: 700;
          color: #C9A84C;
          letter-spacing: 0.12em;
          line-height: 1;
        }

        .scenario-card__tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border: 1px solid var(--border-light);
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          width: fit-content;
        }

        .scenario-card__title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.25;
        }

        .scenario-card__content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-grow: 1;
        }

        .scenario-card__label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 6px;
        }

        .scenario-card__situation p,
        .scenario-card__resolution p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-body);
        }

        .scenario-card__resolution {
          padding-top: 14px;
          border-top: 1px solid var(--border-light);
        }

        /* ── RESPONSIVE ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .svc-grid { grid-template-columns: 1fr; }
          .ind-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .scenario-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 860px) {
          .ind-section { grid-template-columns: 1fr; gap: 32px; }
          .ind-label-col { max-width: 320px; }
        }

        @media (max-width: 640px) {
          .ind-grid    { grid-template-columns: 1fr; }
          .scenario-grid { grid-template-columns: 1fr; }
          .svc-grid { border-left: none; }
          .svc-card { border-left: 1px solid var(--border-light); padding: 28px 24px; }
        }
      `}</style>
    </div>
  );
}
