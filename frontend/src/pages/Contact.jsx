import { useState } from "react";
import { contact } from "../data/content.js";

const initialForm = {
  fullName: "",
  title: "",
  organization: "",
  email: "",
  natureOfMatter: "",
  description: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submission:", form);
    setSubmitted(true);
  }

  return (
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="grid-responsive-contact">
        {/* Left Column: Context and Details */}
        <div>
          <div className="eyebrow">Contact</div>
          <h2 style={{ color: "var(--navy)", margin: "0 0 20px", fontSize: "2.4rem", fontWeight: 700 }}>{contact.headline}</h2>
          <p className="lede" style={{ marginBottom: 32 }}>{contact.body}</p>

          <div style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: 32, borderRadius: 8, marginBottom: 24 }}>
            <h3 style={{ color: "var(--navy)", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 16px" }}>Engagement Details</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <p style={{ fontWeight: 600, color: "var(--navy)", margin: "0 0 4px", fontSize: "0.9rem" }}>Office Geography</p>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-body)" }}>
                  {contact.office.includes("[[") ? "United States (International Engagements)" : contact.office}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 600, color: "var(--navy)", margin: "0 0 4px", fontSize: "0.9rem" }}>Direct Inquiry Email</p>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-body)" }}>
                  {contact.email.includes("[[") ? "inquiry@neutraladvisory.com" : contact.email}
                </p>
              </div>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            {contact.confidentialityNote}
          </p>
        </div>

        {/* Right Column: Form */}
        <div>
          {submitted ? (
            <div className="card" style={{ background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: 48, textAlign: "center" }}>
              <h3 style={{ color: "var(--navy)", fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>Inquiry Logged</h3>
              <p style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.6, marginBottom: 32 }}>
                Your inquiry has been successfully logged.
                In Phase 2, this will submit directly to our secure client intake repository.
              </p>
              <button className="btn btn--outline" style={{ display: "inline-flex" }}
                onClick={() => { setSubmitted(false); setForm(initialForm); }}>
                Submit Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 24, background: "var(--paper)", border: "1.5px solid var(--border-light)", padding: 40, borderRadius: 8, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)" }}>
              <Field label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="field-row-responsive">
                <Field label="Title / Role" name="title" value={form.title} onChange={handleChange} />
                <Field label="Organization" name="organization" value={form.organization} onChange={handleChange} required />
              </div>
              
              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />

              <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)" }}>
                Nature of Matter
                <select
                  name="natureOfMatter"
                  value={form.natureOfMatter}
                  onChange={handleChange}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border-light)",
                    borderRadius: 8,
                    fontSize: 15,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-body)",
                    background: "var(--paper)",
                    outline: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--navy)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                >
                  <option value="">Select one</option>
                  <option>Banking & Financial Institution Matter</option>
                  <option>Insurance Claims & Settlement</option>
                  <option>Commercial Dispute</option>
                  <option>Regulatory & Institutional Challenge</option>
                  <option>Executive Negotiation Support</option>
                  <option>Other</option>
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)" }}>
                Brief Description
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide a high-level summary of your objectives. All preliminary disclosures are treated under strict confidentiality."
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border-light)",
                    borderRadius: 8,
                    fontSize: 15,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-body)",
                    background: "var(--paper)",
                    resize: "vertical",
                    outline: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--navy)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                />
              </label>

              <button type="submit" className="btn btn--primary" style={{ width: "100%", padding: "16px 0", justifyContent: "center" }}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .grid-responsive-contact {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .field-row-responsive {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--navy)" }}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          display: "block",
          width: "100%",
          padding: "12px 16px",
          border: "1.5px solid var(--border-light)",
          borderRadius: 8,
          fontSize: 15,
          fontFamily: "var(--font-body)",
          color: "var(--text-body)",
          background: "var(--paper)",
          outline: "none",
          transition: "border-color 0.2s"
        }}
        onFocus={(e) => e.target.style.borderColor = "var(--navy)"}
        onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
      />
    </label>
  );
}
