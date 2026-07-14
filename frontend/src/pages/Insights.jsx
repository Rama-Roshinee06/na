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

      {/* Category Filter Bar */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, borderBottom: "1.5px solid var(--border-light)", paddingBottom: 20 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 600,
              borderRadius: "20px",
              border: "1.5px solid transparent",
              backgroundColor: selectedCategory === cat ? "var(--navy)" : "var(--paper-dim)",
              color: selectedCategory === cat ? "#ffffff" : "var(--text-body)",
              transition: "all 0.15s ease",
            }}
            className="filter-button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article (only visible when 'All' is selected) */}
      {selectedCategory === "All" && featuredArticle && (
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            background: "var(--paper-dim)",
            border: "1.5px solid var(--border-light)",
            borderRadius: 8,
            padding: 48,
            alignItems: "center"
          }} className="grid-responsive-featured">
            <div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
                <span className="eyebrow" style={{ fontSize: 10, margin: 0 }}>Featured Briefing</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>•</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>July 2026</span>
              </div>
              <h3 style={{ fontSize: "2rem", color: "var(--navy)", fontWeight: 700, margin: "0 0 20px" }}>{featuredArticle.title}</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--text-body)", marginBottom: 32 }}>{featuredArticle.excerpt}</p>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1.5px solid var(--border-light)", paddingTop: 20 }}>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>{featuredArticle.readTime}</span>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, color: "var(--navy)", fontSize: "14px" }} className="read-briefing-link">
                  Read Briefing <span style={{ transition: "transform 0.15s" }}>→</span>
                </a>
              </div>
            </div>
            <div style={{
              background: "var(--navy)",
              color: "#ffffff",
              padding: 48,
              borderRadius: 8,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              minHeight: 280
            }} className="featured-accent-box">
              <h4 style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: 550, margin: "0 0 16px" }}>Executive Preparedness</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted-on-navy)", lineHeight: 1.6, margin: 0 }}>
                "Structured preparation done weeks prior to entering the negotiation room determines 80% of the commercial outcomes."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid Articles */}
      {gridArticles.length > 0 ? (
        <div className="grid grid--2">
          {gridArticles.map((a, i) => (
            <article key={i} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 40 }}>
              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <span className="eyebrow" style={{ fontSize: 9, margin: 0, letterSpacing: "0.1em" }}>{getMappedCategory(a.category)}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>Q3 2026</span>
                </div>
                <h3 style={{ color: "var(--navy)", margin: "0 0 16px", fontSize: "1.35rem", fontWeight: 700 }}>{a.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-body)" }}>{a.excerpt}</p>
              </div>
              <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1.5px solid var(--border-light)", paddingTop: 20 }}>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>{a.readTime}</span>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, color: "var(--navy)", fontSize: "13px" }} className="read-briefing-link">
                  Read Briefing <span style={{ transition: "transform 0.15s" }}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }}>
          No briefings found in this category.
        </div>
      )}

      <style>{`
        .filter-button:hover {
          background-color: var(--navy) !important;
          color: #ffffff !important;
        }
        .read-briefing-link:hover span {
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .grid-responsive-featured {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 32px !important;
          }
          .featured-accent-box {
            min-height: 200px !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
