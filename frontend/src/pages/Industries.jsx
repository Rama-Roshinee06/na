import { industries, industriesIntro } from "../data/content.js";

function IndustryIcon({ title }) {
  switch (title) {
    case "Banking & Financial Services":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h16M4 12h16M12 6l8 4H4l8-4z" />
        </svg>
      );
    case "Insurance & Risk Management":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8l8-4 8 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      );
    case "Telecommunications & Technology":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M8 6l4 6-4 6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
  }
}

function IndustryCard({ industry }) {
  return (
    <article className="industry-card">
      <div className="industry-card__icon">
        <IndustryIcon title={industry.title} />
      </div>
      <h3 className="industry-card__title">{industry.title}</h3>
      <ul className="industry-card__chips">
        {industry.items.map((item) => (
          <li key={item} className="industry-chip">{item}</li>
        ))}
      </ul>
      <p className="industry-card__note">
        Commercial negotiation and resolution guidance for highly regulated environments where process, relationships, and timing are critical.
      </p>
      <a href="#contact" className="service-card__link">Learn More →</a>
    </article>
  );
}

export default function Industries() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">{industriesIntro.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>{industriesIntro.headline}</h2>
        <p className="lede">{industriesIntro.body}</p>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <IndustryCard key={industry.title} industry={industry} />
        ))}
      </div>
    </div>
  );
}