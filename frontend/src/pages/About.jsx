import { philosophy, processSteps } from "../data/content.js";

export default function About() {
  return (
    <div className="container">
      {/* Our Philosophy */}
      <div style={{ marginBottom: 64 }}>
        <div className="eyebrow">{philosophy.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>{philosophy.headline}</h2>
        <p className="lede" style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-body)" }}>
          {philosophy.body}
        </p>
      </div>

      {/* Process Timeline */}
      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 64, marginTop: 64 }}>
        <div style={{ marginBottom: 40 }}>
          <div className="eyebrow">{processSteps.eyebrow}</div>
          <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>{processSteps.headline}</h2>
        </div>

        <div className="grid grid--4" style={{ position: "relative" }}>
          {processSteps.steps.map((step, i) => (
            <div key={i} style={{ position: "relative" }} className="timeline-step">
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  background: "#ffffff",
                  border: "2px solid var(--navy)",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2
                }}>
                  {step.step}
                </div>
                {i < processSteps.steps.length - 1 && (
                  <div className="timeline-connector-line"></div>
                )}
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--navy)", margin: "0 0 8px" }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-body)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-step {
          position: relative;
        }
        .timeline-connector-line {
          content: "";
          position: absolute;
          top: 16px;
          left: 32px;
          width: calc(100% + 8px);
          height: 1.5px;
          background: var(--border-light);
          z-index: 1;
        }
        @media (max-width: 900px) {
          .timeline-connector-line {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
