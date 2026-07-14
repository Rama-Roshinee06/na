import { useState } from "react";
import { insights, insightsIntro } from "../data/content.js";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Negotiation Strategy",
    "Commercial Disputes",
    "Executive Leadership",
    "Risk Management"
  ];

  const getMappedCategory = (cat) => {
    if (cat === "Executive Insight") return "Executive Leadership";
    return cat;
  };

  const filteredInsights = insights.filter((a) => {
    if (selectedCategory === "All") return true;
    return getMappedCategory(a.category) === selectedCategory;
  });

  const featuredArticle = insights[0];

  const gridArticles = selectedCategory === "All"
    ? filteredInsights.slice(1)
    : filteredInsights;

  return (
    <div className="container">
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow">Strategic Perspectives</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Commercial Advisory Briefings</h2>
        <p className="lede">{insightsIntro}</p>
      </div>

      <div className="insights-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`insight-tag ${selectedCategory === cat ? "insight-tag--active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {selectedCategory === "All" && featuredArticle && (
        <div className="insights-featured grid-responsive-featured">
          <div>
            <div className="insight-featured__eyebrow">
              <span className="eyebrow" style={{ fontSize: 10, margin: 0 }}>Featured Briefing</span>
              <span>•</span>
              <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>July 2026</span>
            </div>
            <h3 style={{ fontSize: "2rem", color: "var(--navy)", fontWeight: 700, margin: "0 0 24px" }}>{featuredArticle.title}</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "var(--text-body)", marginBottom: 32 }}>{featuredArticle.excerpt}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-light)", paddingTop: 20 }}>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>{featuredArticle.readTime}</span>
              <a href="#contact" className="service-card__link">Read Briefing →</a>
            </div>
          </div>
          <div className="insight-featured__box">
            <h4 style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: 550, margin: "0 0 16px" }}>Executive Preparedness</h4>
            <p style={{ color: "var(--text-muted-on-navy)", lineHeight: 1.6, margin: 0 }}>
              "Structured preparation done weeks prior to entering the negotiation room determines 80% of the commercial outcomes."
            </p>
          </div>
        </div>
      )}

      {gridArticles.length > 0 ? (
        <div className="insight-card-grid">
          {gridArticles.map((a, i) => (
            <article key={i} className="insight-card">
              <div>
                <div className="insight-card__meta">
                  <span className="eyebrow" style={{ fontSize: 9, margin: 0, letterSpacing: "0.1em" }}>{getMappedCategory(a.category)}</span>
                  <span>•</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>Q3 2026</span>
                </div>
                <h3 className="insight-card__title">{a.title}</h3>
                <p className="insight-card__excerpt">{a.excerpt}</p>
              </div>
              <div className="insight-card__footer">
                <span>{a.readTime}</span>
                <a href="#contact" className="service-card__link">Read Briefing →</a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }}>
          No briefings found in this category.
        </div>
      )}
    </div>
  );
}
