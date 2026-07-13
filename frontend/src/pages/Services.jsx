import { services } from "../data/content.js";

export default function Services() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">Advisory Engagements</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Strategic Counsel for Complex Commercial Disputes</h2>
        <p className="lede">We structure our advisory engagements around risk preemption, board alignment, and value protection.</p>
      </div>

      <div className="grid grid--2">
        {services.map((s, i) => (
          <div key={i} className="card" style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h3 style={{ color: "var(--navy)", margin: "0 0 16px", fontSize: "1.35rem", fontWeight: 700 }}>{s.title}</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)", marginBottom: 4 }}>Client Challenge</span>
                <span style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-body)", display: "block" }}>{s.challenge}</span>
              </div>
              
              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 12 }}>
                <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)", marginBottom: 4 }}>Advisory Role</span>
                <span style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-body)", display: "block" }}>{s.role}</span>
              </div>
              
              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 12 }}>
                <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)", marginBottom: 4 }}>Business Outcome</span>
                <span style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-body)", fontWeight: 550, display: "block" }}>{s.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
