import {
  founder,
  founderExpertiseAreas,
  founderPillars,
  founderCallout
} from "../data/content.js";

export default function Founder() {
  return (
    <div className="container">

      {/* ── Three-Pillar Positioning Strip ───────────────────────────────── */}
      <div
        className="pillar-strip"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1px",
          background: "var(--border-light)",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "64px"
        }}
      >
        {founderPillars.map((p, i) => (
          <div
            key={i}
            style={{
              background: "var(--paper-dim)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--navy-light)" }}>
              {p.label}
            </span>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              {p.desc}
            </span>
          </div>
        ))}
      </div>

      {/* ── Founder Bio Grid ─────────────────────────────────────────────── */}
      <div className="founder-grid grid-responsive-founder" style={{ marginBottom: "80px" }}>

        {/* Left — Meta & Portrait placeholder */}
        <aside className="founder-meta">
          <div>
            <div className="eyebrow">Founder &amp; Principal</div>
            <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: "2.4rem", fontWeight: 700 }}>
              {founder.name}
            </h2>
            <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 20px", lineHeight: 1.4 }}>
              {founder.title}
            </p>
            <div className="divider" style={{ width: 64, marginBottom: 28 }} />
          </div>

          {/* Portrait placeholder */}
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
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
                minHeight: 280
              }}
            >
              <div style={{ textAlign: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div style={{ marginTop: 12, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Founder Portrait
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "var(--text-muted)", marginBottom: 32 }}>
            {founder.tagline}
          </p>

          {/* Expertise chips */}
          <div>
            <h4 style={{ margin: "0 0 14px", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy)" }}>
              Areas of Expertise
            </h4>
            <ul className="founder-chip-list">
              {founderExpertiseAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right — Bio & Philosophy */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {founder.bio.map((para, i) => (
              <p key={i} style={{ fontSize: "1.12rem", lineHeight: 1.8, color: "var(--text-body)", margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Why a dedicated partner matters */}
          <div style={{ marginTop: 40, padding: "28px 32px", background: "var(--navy-tint)", borderRadius: "12px", borderLeft: "3px solid var(--navy)" }}>
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.75, color: "var(--text-body)" }}>
              {founderCallout}
            </p>
          </div>

          {/* Professional philosophy */}
          <section className="founder-quote" style={{ marginTop: 32 }}>
            <h4>Professional Philosophy</h4>
            <p>"{founder.philosophy}"</p>
            <p style={{ marginTop: 20, fontWeight: 600, color: "var(--text-muted)", fontSize: "0.95rem" }}>
              — {founder.name}
            </p>
          </section>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-founder { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pillar-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
