import { philosophy, processSteps } from "../data/content.js";

export default function About() {
  return (
    <div className="container">
      <div style={{ marginBottom: 64 }}>
        <div className="eyebrow">{philosophy.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>{philosophy.headline}</h2>
        <p className="lede" style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-body)" }}>
          {philosophy.body}
        </p>
      </div>

      <div style={{ borderTop: "1.5px solid var(--border-light)", paddingTop: 64, marginTop: 64 }}>
        <div className="section-header">
          <div className="eyebrow">{processSteps.eyebrow}</div>
          <h2>{processSteps.headline}</h2>
        </div>

        <div className="strategy-journey">
          {processSteps.steps.map((step) => (
            <div key={step.step} className="strategy-step" data-step={step.step}>
              <h3 className="strategy-step__title">{step.title}</h3>
              <p className="strategy-step__desc">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
