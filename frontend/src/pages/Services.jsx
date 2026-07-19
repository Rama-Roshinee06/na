import { motion } from "framer-motion";
import {
  services,
  industryExperience,
  commercialScenarios
} from "../data/content.js";

function SectionDivider({ label, accentColor = "var(--navy)" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
      <div style={{ width: 3, height: 28, background: accentColor, borderRadius: 2, flexShrink: 0 }} />
      <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy)" }}>
        {label}
      </h3>
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article className="service-card"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}>
      <div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__summary">{service.summary}</p>
        <div className="service-card__section">
          <span className="service-card__label">Areas of Focus</span>
          <ul className="service-card__list">{service.focus.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="service-card__section">
          <span className="service-card__label">Business Impact</span>
          <p className="service-card__impact">{service.impact}</p>
        </div>
      </div>
      <a href="#contact" className="service-card__link">Discuss This Engagement →</a>
    </motion.article>
  );
}

function IndustryRow({ sector, index }) {
  return (
    <motion.div
      className="industry-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
    >
      <div>
        <h3 className="industry-row__title">{sector.title}</h3>
        {sector.note && <p style={{ color: "var(--text-muted)", marginTop: 8, fontSize: "0.95rem", lineHeight: 1.7 }}>{sector.note}</p>}
      </div>
      <ul className="industry-row__list">
        {sector.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </motion.div>
  );
}

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

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">{services.intro.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>
          {services.intro.headline}
        </h2>
        <p className="lede">{services.intro.body}</p>
      </div>

      {/* Part 1 — Core Advisory Services (6 services) */}
      <div style={{ marginBottom: 72 }}>
        <SectionDivider label="Core Advisory Services" accentColor="var(--navy)" />
        <div className="services-grid">
          {services.coreServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>

      {/* Part 2 — Industry Experience */}
      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 64, marginBottom: 72 }}>
        <SectionDivider label={industryExperience.eyebrow} accentColor="var(--navy-light)" />
        <h2 style={{ maxWidth: 720, margin: "0 0 16px", color: "var(--navy)" }}>
          {industryExperience.headline}
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 680, marginBottom: 40 }}>
          {industryExperience.body}
        </p>
        <div className="industries-list">
          {industryExperience.sectors.map((sector, i) => <IndustryRow key={sector.title} sector={sector} index={i} />)}
        </div>
      </div>

      {/* Part 3 — Commercial Scenarios */}
      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 64 }}>
        <div style={{ marginBottom: 40 }}>
          <SectionDivider label={commercialScenarios.eyebrow} accentColor="var(--accent-teal)" />
          <h2 style={{ maxWidth: 680, margin: "0 0 16px", color: "var(--navy)" }}>
            {commercialScenarios.headline}
          </h2>
          <p className="lede" style={{ maxWidth: 700, marginBottom: 16 }}>
            {commercialScenarios.body}
          </p>
        </div>

        <div className="scenario-grid">
          {commercialScenarios.scenarios.map((s, i) => <ScenarioCard key={s.title} scenario={s} index={i} />)}
        </div>
      </div>

      <style>{`
        /* ── Industries list (editorial row layout) ────────────── */
        .industries-list {
          display: flex;
          flex-direction: column;
          border-top: 1.5px solid var(--border-light);
        }

        .industry-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          padding: 32px 0;
          border-bottom: 1.5px solid var(--border-light);
        }

        .industry-row__title {
          color: var(--navy);
          margin: 0;
          font-size: 1.35rem;
          font-weight: 700;
        }

        .industry-row__list {
          padding-left: 20px;
          margin: 0;
          color: var(--text-body);
          line-height: 1.7;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }

        .industry-row__list li {
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .industry-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px 0;
          }
        }

        /* ── Scenario Cards ────────────────────────────────────── */
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .scenario-card {
          background: var(--paper);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .scenario-card:hover {
          transform: translateY(-4px);
          border-color: var(--navy);
          box-shadow: 0 20px 60px rgba(17, 31, 64, 0.09);
        }

        .scenario-card__number {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--border-light);
          line-height: 1;
          font-family: var(--font-display);
          letter-spacing: -0.03em;
        }

        .scenario-card__tag {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 999px;
          background: var(--navy-tint);
          color: var(--navy);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          width: fit-content;
        }

        .scenario-card__title {
          margin: 0;
          font-size: 1.2rem;
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
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .scenario-card__situation p,
        .scenario-card__resolution p {
          margin: 0;
          font-size: 0.97rem;
          line-height: 1.75;
          color: var(--text-body);
        }

        .scenario-card__resolution {
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
        }

        @media (max-width: 1024px) {
          .scenario-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px) {
          .scenario-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}