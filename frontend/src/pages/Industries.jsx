import { industries } from "../data/content.js";

export default function Industries() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">Industry Focus</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Advisory Coverage Across Regulated Environments</h2>
        <p className="lede">Neutral Advisory provides targeted negotiation and resolution guidance across highly specialized commercial sectors.</p>
      </div>

      <div className="grid grid--2">
        {industries.map((ind, i) => (
          <div key={i} className="card" style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)" }}>
            <h3 style={{ color: "var(--navy)", margin: "0 0 20px", fontSize: "1.25rem", fontWeight: 700 }}>{ind.title}</h3>
            <ul style={{ paddingLeft: 20, margin: 0, color: "var(--text-body)", lineHeight: 1.7 }}>
              {ind.items.map((it, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
