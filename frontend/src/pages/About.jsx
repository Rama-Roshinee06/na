import { about } from "../data/content.js";

export default function About() {
  return (
    <div className="container">
      <div style={{ marginBottom: 60 }}>
        <div className="eyebrow">{about.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 24px", color: "var(--navy)" }}>Strategic Preemption of Commercial Conflict</h2>
        {about.body.map((p, i) => (
          <p key={i} className="lede" style={{ marginBottom: 20 }}>{p}</p>
        ))}
      </div>

      {/* Core Principles */}
      <div style={{ marginTop: 60, marginBottom: 60 }}>
        <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy)", marginBottom: 32 }}>Core Operational Principles</h3>
        <div className="grid grid--3">
          {about.principles.map((p, i) => (
            <div key={i} className="card" style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", textAlign: "center", padding: "40px 24px" }}>
              <h4 style={{ color: "var(--navy)", margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>{p}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Why Neutral Name */}
      <div style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: "56px 48px", borderRadius: 8 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>The Objective Perspective</div>
        <h3 style={{ fontSize: "1.6rem", color: "var(--navy)", marginBottom: 20 }}>Why "Neutral"?</h3>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--text-body)", margin: 0, maxWidth: 900 }}>
          {about.whyNeutralName}
        </p>
      </div>
    </div>
  );
}
