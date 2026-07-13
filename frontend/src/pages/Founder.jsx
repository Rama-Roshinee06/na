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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="grid-responsive-founder">
        {/* Left Column: Metadata */}
        <div>
          <div className="eyebrow">Founder & Principal</div>
          <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: "2.4rem", fontWeight: 700 }}>{founder.name}</h2>
          <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1.1rem", margin: "0 0 20px" }}>{founder.title}</p>
          <div className="divider" style={{ width: 64 }}></div>
          
          <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 32 }}>
            {founder.tagline}
          </p>

          <div style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: 24, borderRadius: 8 }}>
            <h4 style={{ color: "var(--navy)", margin: "0 0 12px", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>Core Practice Areas</h4>
            <ul style={{ paddingLeft: 18, margin: 0, fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.6 }}>
              {expertiseAreas.map((area, i) => (
                <li key={i} style={{ marginBottom: 8 }}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Bio & Philosophy */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {founder.bio.map((p, i) => (
              <p key={i} style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>
                {p}
              </p>
            ))}
          </div>

          {/* Philosophy Card */}
          <div className="card" style={{ marginTop: 48, background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: "40px" }}>
            <div style={{ fontSize: "2.5rem", color: "rgba(42, 60, 98, 0.1)", fontFamily: "Georgia, serif", lineHeight: 1, height: 16, marginTop: -16, marginBottom: 8 }}>“</div>
            <h4 style={{ color: "var(--navy)", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>Professional Philosophy</h4>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--navy)", fontStyle: "italic", lineHeight: 1.6, margin: "0 0 16px" }}>
              "{founder.philosophy}"
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: "var(--text-muted)", fontSize: "0.95rem" }}>— {founder.name}</p>
          </div>
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
