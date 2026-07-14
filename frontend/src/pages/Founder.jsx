import { founder } from "../data/content.js";

export default function Founder() {
  const expertiseAreas = [
    "High-Value Commercial Negotiations",
    "Pre-Litigation Dispute Strategy",
    "Restructuring & Debt Obligations",
    "Regulatory & State-Owned Entity Navigation",
    "Executive Decision Support & Risk Analysis",
    "Joint Venture & Board-Level Alignment"
  ];

  return (
    <div className="container">
      <div className="founder-grid grid-responsive-founder">
        <aside className="founder-meta">
          <div>
            <div className="eyebrow">Founder & Principal</div>
            <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: "2.4rem", fontWeight: 700 }}>{founder.name}</h2>
            <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1.1rem", margin: "0 0 20px" }}>{founder.title}</p>
            <div className="divider" style={{ width: 64, marginBottom: 24 }} />
          </div>

          <div style={{ marginBottom: 28 }}>
            <div style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: 16,
              border: "1.5px dashed var(--navy)",
              background: "var(--navy-tint)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--navy)",
              padding: 24,
              minHeight: 320
            }}>
              <div style={{ textAlign: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div style={{ marginTop: 12, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Founder Portrait Placeholder
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 32 }}>
            {founder.tagline}
          </p>

          <div>
            <h4 style={{ margin: "0 0 12px", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)" }}>Core Practice Areas</h4>
            <ul className="founder-chip-list">
              {expertiseAreas.map((area, i) => (
                <li key={i}>{area}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {founder.bio.map((p, i) => (
              <p key={i} style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>
                {p}
              </p>
            ))}
          </div>

          <section className="founder-quote" style={{ marginTop: 48 }}>
            <h4>Professional Philosophy</h4>
            <p>"{founder.philosophy}"</p>
            <p style={{ marginTop: 20, fontWeight: 600, color: "var(--text-muted)", fontSize: "0.95rem" }}>— {founder.name}</p>
          </section>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-founder {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
