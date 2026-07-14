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
      <div className="contact-grid grid-responsive-contact">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 style={{ color: "var(--navy)", margin: "0 0 20px", fontSize: "2.4rem", fontWeight: 700 }}>{contact.headline}</h2>
          <p className="lede" style={{ marginBottom: 32 }}>{contact.body}</p>

          <div className="contact-panel" style={{ marginBottom: 24 }}>
            <h3>Engagement Details</h3>
            <div className="contact-panel__item">
              <span className="contact-panel__label">Office Geography</span>
              <p className="contact-panel__value">
                {contact.office.includes("[[") ? "United States (International Engagements)" : contact.office}
              </p>
            </div>
            <div className="contact-panel__item">
              <span className="contact-panel__label">Direct Inquiry Email</span>
              <p className="contact-panel__value">
                {contact.email.includes("[[") ? "inquiry@neutraladvisory.com" : contact.email}
              </p>
            </div>
          </div>

          <p className="contact-panel__note">{contact.confidentialityNote}</p>
        </div>

        <div>
          {submitted ? (
            <div className="contact-panel" style={{ textAlign: "center" }}>
              <h3>Inquiry Logged</h3>
              <p style={{ marginBottom: 32, color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.6 }}>
                Your inquiry has been successfully logged.
                In Phase 2, this will submit directly to our secure client intake repository.
              </p>
              <button className="btn btn--outline" style={{ width: "100%" }}
                onClick={() => { setSubmitted(false); setForm(initialForm); }}>
                Submit Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__field">
                <label className="contact-panel__label">Full Name</label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="contact-panel__label">Title / Role</label>
                  <input type="text" name="title" value={form.title} onChange={handleChange} />
                </div>
                <div className="contact-form__field">
                  <label className="contact-panel__label">Organization</label>
                  <input type="text" name="organization" value={form.organization} onChange={handleChange} required />
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-panel__label">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>

              <div className="contact-form__field">
                <label className="contact-panel__label">Nature of Matter</label>
                <select name="natureOfMatter" value={form.natureOfMatter} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option>Banking & Financial Institution Matter</option>
                  <option>Insurance Claims & Settlement</option>
                  <option>Commercial Dispute</option>
                  <option>Regulatory & Institutional Challenge</option>
                  <option>Executive Negotiation Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact-form__field">
                <label className="contact-panel__label">Brief Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide a high-level summary of your objectives. All preliminary disclosures are treated under strict confidentiality."
                />
              </div>

              <button type="submit" className="btn btn--primary contact-form__cta">
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
          .contact-form__row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
