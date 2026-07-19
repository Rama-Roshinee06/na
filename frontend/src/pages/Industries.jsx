import { motion } from "framer-motion";
import { industries, industriesIntro } from "../data/content.js";

function IndustryIcon({ icon }) {
  switch (icon) {
    case "banking":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h16M4 12h16M12 6l8 4H4l8-4z" />
        </svg>
      );
    case "insurance":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8l8-4 8 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "technology":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "telecom":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M8 6l4 6-4 6" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      );
    case "regulatory":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v5c0 5 4 9.3 9 10 5-.7 9-5 9-10V7l-9-5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

function IndustryCard({ industry, index }) {
  return (
    <motion.article
      className="industry-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
    >
      <div className="industry-card__icon">
        <IndustryIcon icon={industry.icon} />
      </div>
      <h3 className="industry-card__title">{industry.title}</h3>
      <p className="industry-card__note" style={{ marginBottom: 20 }}>{industry.note}</p>
      <ul className="industry-card__chips">
        {industry.items.map((item) => (
          <li key={item} className="industry-chip">{item}</li>
        ))}
      </ul>
      <a href="#contact" className="service-card__link" style={{ marginTop: 8 }}>
        Learn More →
      </a>
    </motion.article>
  );
}

export default function Industries() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">{industriesIntro.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>
          {industriesIntro.headline}
        </h2>
        <p className="lede">{industriesIntro.body}</p>
      </div>

      {/* Expertise reinforcement strip */}
      <div
        style={{
          background: "var(--navy)",
          borderRadius: "12px",
          padding: "28px 36px",
          marginBottom: "48px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px 32px",
          alignItems: "center"
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--navy-light)",
            flexShrink: 0
          }}
        >
          Subject Matter Expertise
        </span>
        {["Banking", "Insurance", "Technology", "Media & Telecom", "Regulatory Environments", "Policy Engagement"].map(
          (tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.88rem",
                fontWeight: 500
              }}
            >
              {tag}
            </span>
          )
        )}
      </div>

      <div className="industry-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {industries.map((industry, i) => (
          <IndustryCard key={industry.title} industry={industry} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .industry-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .industry-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
