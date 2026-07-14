import { industries } from "../data/content.js";

export default function Industries() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">Industry Focus</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>Advisory Coverage Across Regulated Environments</h2>
        <p className="lede">Neutral Advisory provides targeted negotiation and resolution guidance across highly specialized commercial sectors.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", borderTop: "1.5px solid var(--border-light)" }}>
        {industries.map((ind, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            padding: "32px 0",
            borderBottom: "1.5px solid var(--border-light)"
          }} className="grid-responsive-industries">
            <div>
              <h3 style={{ color: "var(--navy)", margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>{ind.title}</h3>
            </div>
            <div>
              <ul style={{ paddingLeft: 20, margin: 0, color: "var(--text-body)", lineHeight: 1.7, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
                {ind.items.map((it, idx) => (
                  <li key={idx} style={{ fontSize: "1rem" }}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-industries {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 24px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
