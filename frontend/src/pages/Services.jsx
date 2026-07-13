import { services } from "../data/content.js";

export default function Services() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">Advisory Engagements</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Strategic Counsel for Complex Commercial Disputes</h2>
        <p className="lede">We structure our advisory engagements around risk mitigation, board alignment, and commercial value protection.</p>
      </div>

      <div className="grid grid--2">
        {services.map((s, i) => (
          <div key={i} className="card" style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "var(--navy)", margin: "0 0 16px", fontSize: "1.25rem", fontWeight: 700 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.65, color: "var(--text-body)" }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
