import { scenarios } from "../data/content.js";

export default function Scenarios() {
  return (
    <div className="container">
      <div style={{ marginBottom: 64 }}>
        <div className="eyebrow">Engagement Scenarios</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Precedents of Strategic Commercial Resolution</h2>
        <p className="lede">Every commercial challenge is unique. The following scenarios illustrate engagements where structured preparation and independent counsel mitigated risk and resolved complex disputes.</p>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {scenarios.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 32, padding: "40px 0", borderBottom: "1.5px solid var(--border-light)" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--navy)", minWidth: 40 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ maxWidth: 800 }}>
              <h3 style={{ color: "var(--navy)", margin: "0 0 12px", fontSize: "1.25rem", fontWeight: 700 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, color: "var(--text-body)" }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
